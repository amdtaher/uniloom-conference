import React from "react";
import { cn } from "@/lib/utils";

interface SpeakersProps {
  className?: string;
}

export default function Speakers({ className }: SpeakersProps) {
  return (
    <section aria-label="UNILOOM featured speakers" className={cn("uniloom-europa-speakers", className)} id="speakers">
      <div className="uniloom-eu-speakers-topline">
        <span className="uniloom-eu-speakers-kicker">
          <i />
          {" "}FEATURED SPEAKERS
        </span>
        {" "}
        <div className="uniloom-eu-speakers-controls">
          <button aria-label="Previous speakers" className="uniloom-eu-speaker-arrow uniloom-eu-speaker-prev" type="button">
            ←
          </button>
          {" "}
          <button aria-label="Next speakers" className="uniloom-eu-speaker-arrow uniloom-eu-speaker-next" type="button">
            →
          </button>
        </div>
      </div>
      {" "}
      <div className="uniloom-eu-speakers-heading">
        <h2>
          Meet the{" "}
          <span>
            people
          </span>
          {" "}behind the ideas.
        </h2>
        {" "}
        <p>
          Founders, researchers and mentors bringing practical perspectives to the university startup community.
        </p>
      </div>
      {" "}
      <div className="uniloom-eu-speakers-viewport">
        <div className="uniloom-eu-speakers-track">
          <article className="uniloom-eu-speaker-slide">
            <div className="uniloom-eu-speaker-photo">
              <img alt="Editorial portrait representing a student founder speaker profile" loading="lazy" src="https://images.pexels.com/photos/6829573/pexels-photo-6829573.jpeg" />
              <span className="uniloom-eu-speaker-number">
                01
              </span>
            </div>
            {" "}
            <div className="uniloom-eu-speaker-meta">
              <h3>
                Student Founder
              </h3>
              {" "}
              <p>
                Early-stage venture building
              </p>
              <span className="uniloom-eu-speaker-specialty">
                From campus idea to first product
              </span>
            </div>
          </article>
          {" "}
          <article className="uniloom-eu-speaker-slide">
            <div className="uniloom-eu-speaker-photo">
              <img alt="Editorial portrait representing a university researcher speaker profile" loading="lazy" src="https://images.pexels.com/photos/12083776/pexels-photo-12083776.jpeg" />
              <span className="uniloom-eu-speaker-number">
                02
              </span>
            </div>
            {" "}
            <div className="uniloom-eu-speaker-meta">
              <h3>
                Research Lead
              </h3>
              {" "}
              <p>
                University innovation
              </p>
              <span className="uniloom-eu-speaker-specialty">
                Turning research into real-world value
              </span>
            </div>
          </article>
          {" "}
          <article className="uniloom-eu-speaker-slide">
            <div className="uniloom-eu-speaker-photo">
              <img alt="Editorial portrait representing a startup mentor speaker profile" loading="lazy" src="https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg" />
              <span className="uniloom-eu-speaker-number">
                03
              </span>
            </div>
            {" "}
            <div className="uniloom-eu-speaker-meta">
              <h3>
                Startup Mentor
              </h3>
              {" "}
              <p>
                Founder guidance
              </p>
              <span className="uniloom-eu-speaker-specialty">
                Helping teams test what matters
              </span>
            </div>
          </article>
          {" "}
          <article className="uniloom-eu-speaker-slide">
            <div className="uniloom-eu-speaker-photo">
              <img alt="Editorial portrait representing a product builder speaker profile" loading="lazy" src="https://images.pexels.com/photos/4736680/pexels-photo-4736680.jpeg" />
              <span className="uniloom-eu-speaker-number">
                04
              </span>
            </div>
            {" "}
            <div className="uniloom-eu-speaker-meta">
              <h3>
                Product Builder
              </h3>
              {" "}
              <p>
                Product &amp; technology
              </p>
              <span className="uniloom-eu-speaker-specialty">
                Building useful products from early ideas
              </span>
            </div>
          </article>
          {" "}
          <article className="uniloom-eu-speaker-slide">
            <div className="uniloom-eu-speaker-photo">
              <img alt="Editorial portrait representing an early-stage investor speaker profile" loading="lazy" src="https://images.pexels.com/photos/5119522/pexels-photo-5119522.jpeg" />
              <span className="uniloom-eu-speaker-number">
                05
              </span>
            </div>
            {" "}
            <div className="uniloom-eu-speaker-meta">
              <h3>
                Venture Perspective
              </h3>
              {" "}
              <p>
                Early-stage investment
              </p>
              <span className="uniloom-eu-speaker-specialty">
                Understanding capital and founder readiness
              </span>
            </div>
          </article>
          {" "}
          <article className="uniloom-eu-speaker-slide">
            <div className="uniloom-eu-speaker-photo">
              <img alt="Editorial portrait representing a campus innovation community speaker profile" loading="lazy" src={"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=640&q=85"} />
              <span className="uniloom-eu-speaker-number">
                06
              </span>
            </div>
            {" "}
            <div className="uniloom-eu-speaker-meta">
              <h3>
                Community Builder
              </h3>
              {" "}
              <p>
                Campus ecosystem
              </p>
              <span className="uniloom-eu-speaker-specialty">
                Connecting talent, mentors and opportunity
              </span>
            </div>
          </article>
        </div>
      </div>
      {" "}
      <div className="uniloom-eu-speakers-footer">
        <div className="uniloom-eu-speakers-progress">
          <span />
        </div>
        {" "}
        <span className="uniloom-eu-speakers-all">
          SPEAKER ANNOUNCEMENTS COMING SOON
        </span>
      </div>
      {" "}
      <p className="uniloom-eu-speakers-disclaimer">
        Role profiles and portraits are illustrative placeholders, not confirmed UNILOOM speakers. Approved names and biographies will be added when supplied by the organizers.
      </p>
    </section>
  );
}
