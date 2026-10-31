import React from "react";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <section className={cn("hero-home-section", className)} id="top">
      <div aria-hidden="true" className="uniloom-hero-background" />
      {" "}
      <div className="padding-global hero-home-global">
        <div className="container">
          <div className="hero-home-wrapper">
            <div appear-animate="items" className="hero-home-top">
              <div className="hero-home-tags">
                <div className="hero-home-tag">
                  Student Founders
                </div>
                {" "}
                <div className="hero-home-tag">
                  /
                </div>
                {" "}
                <div className="hero-home-tag">
                  Research to Venture
                </div>
                {" "}
                <div className="hero-home-tag">
                  /
                </div>
                {" "}
                <div className="hero-home-tag">
                  Startup Funding
                </div>
              </div>
              {" "}
              <div className="hero-home-tags">
                <div className="hero-home-tag">
                  Product &amp; Technology
                </div>
                {" "}
                <div className="hero-home-tag">
                  /
                </div>
                {" "}
                <div className="hero-home-tag">
                  Founder Stories
                </div>
              </div>
            </div>
            {" "}
            <div className="hero-home-bottom">
              <div appear-animate="items" className="hero-home-contents">
                <div className="subtites-wrap">
                  A university startup conference
                </div>
                {" "}
                <h1 className="hero-home-title">
                  Where campus ideas become real ventures.
                </h1>
                {" "}
                <div className="hero-home-infos">
                  <a className="button-primary-white w-inline-block" data-wf--button-primary-white--variant="icon-show" href="#about" white-btn="">
                    {" "}
                    <div className="button-primary-white-image-wrapp">
                      <img alt="Btn Arrow" className="white-primary-btn-icon button-two" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/69f0de481454ff234fb2a8d7_Black%20Icon.svg" />
                      <img alt="Btn Arrow" className="white-primary-btn-icon button-one" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/69f0d76870dffea69af02298_Orange%20Icon.svg" />
                    </div>
                    {" "}
                    <div className="button-primary-white-text-wrapp">
                      <div className="white-primary-btn-title">
                        Explore the Conference
                      </div>
                    </div>
                    {" "}
                  </a>
                  {" "}
                  <div className="companies-details">
                    <div className="companies-images">
                      <img alt="Illustrative university startup community portrait" className="companies-img" loading="lazy" src={"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=85"} srcSet="" />
                      <img alt="Illustrative university startup community portrait" className="companies-img _02" loading="lazy" src={"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=85"} srcSet="" />
                      <img alt="Illustrative university startup community portrait" className="companies-img _02" loading="lazy" src={"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=160&h=160&q=85"} srcSet="" />
                    </div>
                    {" "}
                    <div className="companies-reviews">
                      <div className="companies-review-stars">
                        <svg className="companies-review-star" fill="none" viewBox="0 0 11 9" width="100%" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_1630_7868)">
                            <path d="M5.50012 7.233L8.69613 9L7.84812 5.67L10.6711 3.429L6.95312 3.141L5.50012 0L4.04612 3.141L0.328125 3.429L3.15212 5.67L2.30412 9L5.50012 7.233Z" fill="currentColor" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1630_7868">
                              <rect fill="currentColor" height="9" width="11" />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg className="companies-review-star" fill="none" viewBox="0 0 11 9" width="100%" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_1630_7868)">
                            <path d="M5.50012 7.233L8.69613 9L7.84812 5.67L10.6711 3.429L6.95312 3.141L5.50012 0L4.04612 3.141L0.328125 3.429L3.15212 5.67L2.30412 9L5.50012 7.233Z" fill="currentColor" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1630_7868">
                              <rect fill="currentColor" height="9" width="11" />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg className="companies-review-star" fill="none" viewBox="0 0 11 9" width="100%" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_1630_7868)">
                            <path d="M5.50012 7.233L8.69613 9L7.84812 5.67L10.6711 3.429L6.95312 3.141L5.50012 0L4.04612 3.141L0.328125 3.429L3.15212 5.67L2.30412 9L5.50012 7.233Z" fill="currentColor" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1630_7868">
                              <rect fill="currentColor" height="9" width="11" />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg className="companies-review-star" fill="none" viewBox="0 0 11 9" width="100%" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_1630_7868)">
                            <path d="M5.50012 7.233L8.69613 9L7.84812 5.67L10.6711 3.429L6.95312 3.141L5.50012 0L4.04612 3.141L0.328125 3.429L3.15212 5.67L2.30412 9L5.50012 7.233Z" fill="currentColor" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1630_7868">
                              <rect fill="currentColor" height="9" width="11" />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg className="companies-review-star" fill="none" viewBox="0 0 11 9" width="100%" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_1630_7868)">
                            <path d="M5.50012 7.233L8.69613 9L7.84812 5.67L10.6711 3.429L6.95312 3.141L5.50012 0L4.04612 3.141L0.328125 3.429L3.15212 5.67L2.30412 9L5.50012 7.233Z" fill="currentColor" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1630_7868">
                              <rect fill="currentColor" height="9" width="11" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      {" "}
                      <p className="companies-review-text">
                        Ideas, founders and opportunities across the campus startup ecosystem
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {" "}
              <div appear-single-animate="single-item" className="hero-video-wrap">
                <div className="hero-video-details">
                  {" "}
                  <div aria-hidden="true" className="video-lightbox" role="presentation">
                    <img alt="University startup conference audience" className="video-lightbox-banner" loading="lazy" sizes="(max-width: 623px) 100vw, 623px" src="https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg" srcSet="" />
                  </div>
                  <img alt="University startup conference audience" className="hero-home-video uniloom-hero-still" fetchPriority="high" loading="eager" src="https://images.pexels.com/photos/20733081/pexels-photo-20733081.jpeg" />
                  {" "}
                  <div className="watch-block" />
                  .worldwide-marquee-item.worldwide-marquee-item
                  <button aria-label="Play conference video" className="uniloom-hero-play" data-uniloom-play-video="true" type="button">
                    <span aria-hidden="true" className="uniloom-play-icon" />
                  </button>
                  {" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {" "}
      <div className="video-popup">
        <div className="popup-video-wrap">
          <div className="popup-video w-background-video w-background-video-atom" data-autoplay="true" data-loop="true" data-poster-url="https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg" data-video-urls="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336%2F6ab421edaa6e6a82db687b47_Hero%20Video%20Details_mp4.mp4,https://cdn.prod.website-files.com/69ee458eaf96195bdf862336%2F6ab421edaa6e6a82db687b47_Hero%20Video%20Details_webm.webm" data-wf-ignore="true">
            <video autoPlay controls data-object-fit="cover" data-wf-ignore="true" id="513c987d-e384-88cb-9d08-709242a566fe-video" loop muted playsInline poster="https://images.pexels.com/photos/7065/space-desk-office-hero-7065.jpg" preload="none" style={{ backgroundImage: "url(\"https://images.pexels.com/photos/7065/space-desk-office-hero-7065.jpg\")" }} />
            <noscript dangerouslySetInnerHTML={{ __html: `
                <style>
                  [data-wf-bgvideo-fallback-img] {
                    display: none;
                  }

                  @media (prefers-reduced-motion: reduce) {
                    [data-wf-bgvideo-fallback-img] {
                      position: absolute;
                      z-index: -100;
                      display: inline-block;
                      height: 100%;
                      width: 100%;
                      object-fit: cover;
                    }
                  }
                </style><img alt="University founders collaborating on an early-stage venture"
                  data-wf-bgvideo-fallback-img="true"
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&amp;fit=crop&amp;w=900&amp;q=85"
                  srcset="" />
              ` }} />
            {" "}
            <div aria-live="polite" />
          </div>
          <img alt="White multiplication symbol formed by two thick diagonal lines crossing each other on a black background." className="cross-video-icon" loading="lazy" sizes="100vw" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6abed0c88aeb711399738e4a_multiply.webp" srcSet="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6abed0c88aeb711399738e4a_multiply-p-500.png 500w, https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6abed0c88aeb711399738e4a_multiply.webp 1005w" />
        </div>
      </div>
      {" "}
      <div className="absolute-image-wrap">
        <img alt="University student founder presenting a startup idea" className="absolute-image" data-header-image="" loading="lazy" src={"https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=85"} srcSet="" />
      </div>
    </section>
  );
}
