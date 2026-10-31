import type { Metadata } from "next";
import "./globals.css";
import "../styles/index.css";
import InlineStyle from "@/components/all_components/inline-style";

export const metadata: Metadata = {
  title: "UNILOOM — University Startup Conference",
  description:
    "UNILOOM connects student founders, researchers, builders and the startup community to help campus ideas become real-world ventures.",
  generator: "Webflow",
  openGraph: {
    title: "UNILOOM — University Startup Conference",
    description: "Where campus ideas become real ventures.",
    type: "website",
    images: [
      "https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ac61d27e1792c6aa17b4810_Social-share%20(1).png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UNILOOM — University Startup Conference",
    description:
      "Where campus ideas become real ventures. A university startup conference for founders, researchers and builders.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-wf-domain="uniloom.webflow.io"
      data-wf-page="69ee458eaf96195bdf86232f"
      data-wf-site="69ee458eaf96195bdf862336"
      suppressHydrationWarning
    >
      <head>
        {/* Head tags below are the original <head> items, same order (each <style> block is a file in styles/uniloom/, injected in place). */}
        <link crossOrigin="anonymous" href="https://cdn.prod.website-files.com" rel="preconnect" />
        <link crossOrigin="anonymous" href="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/css/rowalo.webflow.shared.da5b3e277.css" integrity="sha384-2ls+J37p5kOQUAXhObKRteKRKEeMUcFJBbFwBTspNSYVrcUM7H+khBi8LMFqoIYd" rel="stylesheet" type="text/css" />
        <InlineStyle file="01-webflow-base.css" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript" />
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `WebFont.load({ google: { families: ["Rubik:300,400,500,600,700"] } });` }} />
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `!function (o, c) { var n = c.documentElement, t = " w-mod-"; n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch") }(window, document);` }} />
        <link href="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab3be01d65e64ea17a1aadf_logo.png" media="(prefers-color-scheme: light)" rel="icon" sizes="32x32" type="image/png" />
        <link href="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab3be01d65e64ea17a1aadf_logo.png" media="(prefers-color-scheme: dark)" rel="icon" sizes="32x32" type="image/png" />
        <link href="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab3be01278999892c939363_logo.png" rel="icon" sizes="48x48" type="image/png" />
        <link href="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab3be02e8d82a14088dc398_logo.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab3be02da61906ea2f18137_logo.png" rel="icon" sizes="192x192" type="image/png" />
        <link href="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab3be02ea8ff135dded7c4f_logo.png" rel="icon" sizes="512x512" type="image/png" />
        <script dangerouslySetInnerHTML={{ __html: `    window.__WF_REVIEW_BRIDGE = {
      siteId: "69ee458eaf96195bdf862336",
      version: "0.3.0",
      marker: "__wf_review_snippet_v1",
      bridgeToken: "wfbt_553ef237ba1741e6b99f847acd5978fb",
      reviewSurface: "published-review",
      reviewScriptUrl: "https://validation-worker.createsomething.workers.dev/app-validator/snippet/review.js"
    };` }} />
        <script src="https://validation-worker.createsomething.workers.dev/app-validator/snippet/review.js" />
        <InlineStyle file="02-uniloom-content-safety.css" />
        <InlineStyle file="03-uniloom-video-fallback.css" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        <link href={"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"} rel="stylesheet" />
        <InlineStyle file="04-uniloom-heading-size-limit.css" />
        <InlineStyle file="05-uniloom-hero-image-treatment.css" />
        <InlineStyle file="06-uniloom-pricing-fit-fix.css" />
        <InlineStyle file="07-uniloom-round3-overrides.css" />
        <InlineStyle file="08-uniloom-cta-anchor-fix.css" />
        <InlineStyle file="09-uniloom-round4-fixes.css" />
        <InlineStyle file="10-uniloom-round5-fixes.css" />
        <InlineStyle file="11-uniloom-remove-webflow-badge.css" />
        <InlineStyle file="12-uniloom-pass-price-format.css" />
        <InlineStyle file="13-uniloom-europa-sections-css.css" />
        <InlineStyle file="14-uniloom-round8-css.css" />
        <InlineStyle file="15-uniloom-round9-hero-testimonials-pricing.css" />
        <InlineStyle file="16-uniloom-round10-brand-pricing-modal.css" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
