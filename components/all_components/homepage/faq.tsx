import React from "react";
import { cn } from "@/lib/utils";

interface FaqProps {
  className?: string;
}

export default function Faq({ className }: FaqProps) {
  return (
    <section className={cn("faq-section", className)} data-wf--faq-section--variant="spacing-global" id="faq">
      <div className="padding-global faq-section-spacing w-variant-f32bb47a-74c9-2ffb-5159-910b1ae88cde">
        <div className="container">
          <div className="faq-wrapper">
            <div className="section-inner-wrpp faq-header">
              <div className="about-us-subtitle" {...{ data: "sectionsubtitle" }}>
                <span className="text-primary">
                  +
                </span>
                {" "}Common QUestions
              </div>
              {" "}
              <h2 className="faq-header-title" {...{ data: "sectionheading" }}>
                Good questions before you join.
              </h2>
            </div>
            {" "}
            <div appear-animate="items" className="faq-details-wrapp">
              <div className="faq-dropdown w-dropdown" {...{ data: "faq-dropdown" }} data-delay="0" data-hover="false">
                <div className="faq w-dropdown-toggle">
                  <div className="faq-ques">
                    Who is UNILOOM for?
                  </div>
                  {" "}
                  <div className="faq-arrow-box">
                    <div className="faq-horizontal-line" />
                    {" "}
                    <div className="faq-verticle-line" />
                  </div>
                </div>
                {" "}
                <nav className="faq-body w-dropdown-list">
                  <div className="faq-body-cont">
                    <div className="faq-answer-wrapp">
                      <p className="faq-answer">
                        UNILOOM is designed for university students, recent graduates, researchers, early-stage founders and people who support startup creation. The final eligibility and audience details should be confirmed by the event organizer.
                      </p>
                    </div>
                  </div>
                </nav>
              </div>
              {" "}
              <div className="faq-dropdown w-dropdown" {...{ data: "faq-dropdown" }} data-delay="0" data-hover="false">
                <div className="faq w-dropdown-toggle">
                  <div className="faq-ques">
                    Do I need to have a startup idea already?
                  </div>
                  {" "}
                  <div className="faq-arrow-box">
                    <div className="faq-horizontal-line" />
                    {" "}
                    <div className="faq-verticle-line" />
                  </div>
                </div>
                {" "}
                <nav className="faq-body w-dropdown-list">
                  <div className="faq-body-cont">
                    <div className="faq-answer-wrapp">
                      <p className="faq-answer">
                        No. You can attend to explore entrepreneurship, learn how ideas are developed and meet people working across different fields. You do not need to arrive with a finished business or product.
                      </p>
                    </div>
                  </div>
                </nav>
              </div>
              {" "}
              <div className="faq-dropdown w-dropdown" {...{ data: "faq-dropdown" }} data-delay="0" data-hover="false">
                <div className="faq w-dropdown-toggle">
                  <div className="faq-ques">
                    Where and when will the conference take place?
                  </div>
                  {" "}
                  <div className="faq-arrow-box">
                    <div className="faq-horizontal-line" />
                    {" "}
                    <div className="faq-verticle-line" />
                  </div>
                </div>
                {" "}
                <nav className="faq-body w-dropdown-list">
                  <div className="faq-body-cont">
                    <div className="faq-answer-wrapp">
                      <p className="faq-answer">
                        UNILOOM will take place at [VENUE, CITY] on [CONFIRMED DATE]. Registration and travel details will be shared through the official event channels.
                      </p>
                    </div>
                  </div>
                </nav>
              </div>
              {" "}
              <div className="faq-dropdown w-dropdown" {...{ data: "faq-dropdown" }} data-delay="0" data-hover="false">
                <div className="faq w-dropdown-toggle">
                  <div className="faq-ques">
                    How do I register?
                  </div>
                  {" "}
                  <div className="faq-arrow-box">
                    <div className="faq-horizontal-line" />
                    {" "}
                    <div className="faq-verticle-line" />
                  </div>
                </div>
                {" "}
                <nav className="faq-body w-dropdown-list">
                  <div className="faq-body-cont">
                    <div className="faq-answer-wrapp">
                      <p className="faq-answer">
                        Choose the pass that matches your attendance needs and complete registration through [OFFICIAL REGISTRATION URL]. Your confirmation and event instructions will be sent using the contact details you provide.
                      </p>
                    </div>
                  </div>
                </nav>
              </div>
              {" "}
              <div className="faq-dropdown w-dropdown" {...{ data: "faq-dropdown" }} data-delay="0" data-hover="false">
                <div className="faq w-dropdown-toggle">
                  <div className="faq-ques">
                    Can I attend with my team or present a project?
                  </div>
                  {" "}
                  <div className="faq-arrow-box">
                    <div className="faq-horizontal-line" />
                    {" "}
                    <div className="faq-verticle-line" />
                  </div>
                </div>
                {" "}
                <nav className="faq-body w-dropdown-list">
                  <div className="faq-body-cont">
                    <div className="faq-answer-wrapp">
                      <p className="faq-answer">
                        Team registration and project presentation opportunities depend on the final event format. Check [OFFICIAL EVENT INFORMATION] for confirmed options, eligibility and submission deadlines.
                      </p>
                    </div>
                  </div>
                </nav>
              </div>
              {" "}
              <div className="faq-dropdown w-dropdown" {...{ data: "faq-dropdown" }} data-delay="0" data-hover="false">
                <div className="faq w-dropdown-toggle">
                  <div className="faq-ques">
                    Who can I contact about partnerships or other questions?
                  </div>
                  {" "}
                  <div className="faq-arrow-box">
                    <div className="faq-horizontal-line" />
                    {" "}
                    <div className="faq-verticle-line" />
                  </div>
                </div>
                {" "}
                <nav className="faq-body w-dropdown-list">
                  <div className="faq-body-cont">
                    <div className="faq-answer-wrapp">
                      <p className="faq-answer">
                        For partnership, speaker, accessibility or general event questions, contact [OFFICIAL CONTACT EMAIL]. Replace this placeholder with the organizer’s monitored email address before launch.
                      </p>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
