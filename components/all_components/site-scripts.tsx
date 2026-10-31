"use client";

import { useEffect } from "react";

/**
 * Original <script> tags from the end of <body>, loaded one by one, in the
 * original order, AFTER React has hydrated (so Webflow / GSAP / Lenis never
 * touch the DOM before hydration). Inline scripts live in /public/js.
 */
const SCRIPTS: { src: string; integrity?: string; crossOrigin?: string }[] = [
  {
    "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69ee458eaf96195bdf862336",
    "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
    "crossOrigin": "anonymous"
  },
  {
    "src": "https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/js/webflow.schunk.be57ba419daef3c1.js",
    "integrity": "sha384-Hne0FQw6fXBqWYNAw8ZMOe/y6TdE/hMnl9Y7h9umUzWp2cqJOLyC7jAUA4Xzhj+j",
    "crossOrigin": "anonymous"
  },
  {
    "src": "https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/js/webflow.3d7e94c9.a45339f87beed047.js",
    "integrity": "sha384-iJZSG34VNZpvqD9D648OUKq/c4c+vDcVkS9fXdWnyZs73M8rX2s5wsPMtpF72Vt9",
    "crossOrigin": "anonymous"
  },
  {
    "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
  },
  {
    "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
  },
  {
    "src": "https://cdn.prod.website-files.com/gsap/3.15.0/SplitText.min.js"
  },
  {
    "src": "/js/07-gsap-register.js"
  },
  {
    "src": "/js/08-combined-animations.js"
  },
  {
    "src": "/js/09-heading-cap.js"
  },
  {
    "src": "/js/10-interactions.js"
  },
  {
    "src": "/js/11-pass-toggle.js"
  },
  {
    "src": "/js/12-remove-webflow-runtime-badge.js"
  },
  {
    "src": "/js/13-europa-sections.js"
  },
  {
    "src": "/js/14-speaker-drag.js"
  },
  {
    "src": "/js/15-round9-video-popup.js"
  }
];

declare global {
  interface Window {
    __uniloomScriptsStarted?: boolean;
  }
}

function loadOne(s: (typeof SCRIPTS)[number]) {
  return new Promise<void>((resolve) => {
    const el = document.createElement("script");
    el.src = s.src;
    el.async = false;
    el.type = "text/javascript";
    if (s.integrity) el.integrity = s.integrity;
    if (s.crossOrigin) el.crossOrigin = s.crossOrigin;
    el.onload = () => resolve();
    el.onerror = () => {
      console.error("[uniloom] failed to load", s.src);
      resolve(); // keep going, exactly like the browser does with a failed <script>
    };
    document.body.appendChild(el);
  });
}

/**
 * The original scripts ran while the document was still "loading", so Webflow,
 * jQuery and the inline scripts registered real DOMContentLoaded / load
 * listeners. Here they run after hydration, when both events are long gone
 * (cached images = fast load event). Pretend "loading" while the scripts run,
 * then fire both events for real, in the original order.
 */
function fakeLoading() {
  Object.defineProperty(document, "readyState", { configurable: true, get: () => "loading" });
  return () => {
    delete (document as unknown as { readyState?: string }).readyState; // back to the native getter
  };
}

/**
 * In the original page Webflow was not ready while the inline scripts ran, so
 * Webflow.push() only queued the callback and an error inside it never killed
 * the rest of the script. Now Webflow is often ready already (cached scripts),
 * push() runs the callback at once and a throw (e.g. "Lenis is not defined")
 * aborts the whole script. Defer + guard each callback = original behaviour.
 */
function wrapWebflowPush() {
  const w = window as unknown as { Webflow?: { push?: ((fn: () => void) => unknown) & { __uniloom?: boolean } } };
  const orig = w.Webflow?.push;
  if (!w.Webflow || typeof orig !== "function" || orig.__uniloom) return;
  const wrapped = function (this: unknown, fn: () => void) {
    if (typeof fn !== "function") return orig.call(this, fn);
    return orig.call(this, function (this: unknown) {
      setTimeout(() => {
        try {
          fn.call(this);
        } catch (e) {
          console.error("[uniloom] Webflow.push callback failed", e);
        }
      }, 0);
    });
  } as typeof orig;
  wrapped.__uniloom = true;
  w.Webflow.push = wrapped;
}

export default function SiteScripts() {
  useEffect(() => {
    if (window.__uniloomScriptsStarted) return; // StrictMode / re-mount guard
    window.__uniloomScriptsStarted = true;
    const wasComplete = document.readyState === "complete";
    const wasLoading = document.readyState === "loading";
    const restore = wasLoading ? () => {} : fakeLoading();
    (async () => {
      for (const s of SCRIPTS) {
        await loadOne(s);
        wrapWebflowPush();
      }
      restore();
      if (!wasLoading) document.dispatchEvent(new Event("DOMContentLoaded", { bubbles: true }));
      if (wasComplete) window.dispatchEvent(new Event("load"));
    })();
  }, []);
  return null;
}
