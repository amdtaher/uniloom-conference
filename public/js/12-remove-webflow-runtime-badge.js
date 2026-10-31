    (function () {
      function removeBranding() {
        document.querySelectorAll('.w-webflow-badge, a[href*="webflow.com?utm_campaign=brandjs"], a[href*="webflow.com"][class*="badge"], div[class*="w-webflow-badge"]').forEach(function (el) { el.remove(); });
      }
      removeBranding();
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', removeBranding);
      }
      var observer = new MutationObserver(removeBranding);
      observer.observe(document.documentElement, { childList: true, subtree: true });
    })();
