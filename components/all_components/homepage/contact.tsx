import React from "react";
import { cn } from "@/lib/utils";

interface ContactProps {
  className?: string;
}

export default function Contact({ className }: ContactProps) {
  return (
    <section className={cn("brand-section cta", className)} id="contact">
      <div className="cta-height">
        <div className="brand-wrapper cta">
          <div className="brand-top-wrapp cta-one">
            <img alt="University startup conference audience and speaker" className="brands-image one" loading="lazy" sizes="(max-width: 2130px) 100vw, 2130px" src={"https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85"} srcSet="" />
            <img alt="Founders and mentors connecting at a conference" className="brands-image two" loading="lazy" sizes="(max-width: 2130px) 100vw, 2130px" src={"https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85"} srcSet="" />
          </div>
          {" "}
          <div className="brands-middle-wrapp cta">
            <img alt="Startup founder pitching an idea to an audience" className="brands-image three" loading="lazy" src={"https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=85"} srcSet="" />
            {" "}
            <div className="brand-video-wrapp uniloom-cta-still-wrap">
              <img alt="Startup founder presenting an idea to an audience at a conference" className="uniloom-cta-still" loading="lazy" src={"https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=2000&q=90"} />
              {" "}
              <div aria-hidden="true" className="uniloom-cta-overlay" />
            </div>
            <img alt="University startup conference audience and speaker" className="brands-image four" loading="lazy" src={"https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85"} srcSet="" />
            {" "}
            <div className="uniloom-cta-copy">
              <p className="uniloom-cta-eyebrow">
                UNILOOM COMMUNITY
              </p>
              {" "}
              <h2>
                Bring your idea. Find your next step at UNILOOM.
              </h2>
              <a className="uniloom-cta-button" href="#passes">
                Let’s Talk
              </a>
            </div>
          </div>
          {" "}
          <div className="brand-bottom-wrapp cta-two">
            <img alt="Founders and mentors connecting at a conference" className="brands-image five" loading="lazy" sizes="(max-width: 2130px) 100vw, 2130px" src={"https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85"} srcSet="" />
            <img alt="Startup founder pitching an idea to an audience" className="brands-image six" loading="lazy" sizes="(max-width: 2130px) 100vw, 2130px" src={"https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=85"} srcSet="" />
          </div>
        </div>
      </div>
    </section>
  );
}
