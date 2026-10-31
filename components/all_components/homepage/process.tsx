import React from "react";
import { cn } from "@/lib/utils";

interface ProcessProps {
  className?: string;
}

export default function Process({ className }: ProcessProps) {
  return (
    <section className={cn("working-process-section", className)}>
      <div className="padding-global process-section-spacing">
        <div className="container">
          <div appear-animate="items" className="process-wrapper">
            <div className="section-inner-wrpp process">
              <div className="about-us-subtitle" {...{ data: "sectionsubtitle" }}>
                <span className="text-primary">
                  +
                </span>
                {" "}Working Process
              </div>
              {" "}
              <h2 className="section-heading-title" {...{ data: "sectionheading" }}>
                Three ways to turn a promising idea into a next step.
              </h2>
            </div>
            {" "}
            <div className="process-details-wrapp">
              <div className="single-process-wrapp">
                <div className="single-process-card">
                  <div className="process-info">
                    <div className="about-us-subtitle">
                      <span className="text-primary">
                        +
                      </span>
                      {" "}Step 001
                    </div>
                    {" "}
                    <h3 className="process-card-title">
                      Discover
                    </h3>
                  </div>
                  <svg aria-label="Discover ideas icon" className="working-process-image uniloom-process-icon" fill="none" height="48" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 48 48" width="48">
                    <path d="M24 5 5 14l19 9 19-9-19-9Z" />
                    <path d="m12 18 12 12 12-12" />
                    <path d="M8 27v9c9 7 23 7 32 0v-9" />
                  </svg>
                  {" "}
                  <p className="process-card-details">
                    Explore emerging ideas, research and startup stories. Find the challenges worth solving and the people already working on them.
                  </p>
                </div>
              </div>
              {" "}
              <div className="single-process-wrapp _02">
                <div className="single-process-card">
                  <div className="process-info">
                    <div className="about-us-subtitle">
                      <span className="text-primary">
                        +
                      </span>
                      {" "}Step 002
                    </div>
                    {" "}
                    <h3 className="process-card-title">
                      Connect
                    </h3>
                  </div>
                  <svg aria-label="Connect people icon" className="working-process-image uniloom-process-icon" fill="none" height="48" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 48 48" width="48">
                    <circle cx="17" cy="17" r="7" />
                    <circle cx="31" cy="17" r="7" />
                    <path d="M5 41c1-8 5-12 12-12s11 4 12 12M19 41c1-8 5-12 12-12s11 4 12 12" />
                  </svg>
                  {" "}
                  <p className="process-card-details">
                    Meet founders, mentors, researchers and ecosystem partners. Compare perspectives, test assumptions and find people who can help.
                  </p>
                </div>
              </div>
              {" "}
              <div className="single-process-wrapp _03">
                <div className="single-process-card">
                  <div className="process-info">
                    <div className="about-us-subtitle">
                      <span className="text-primary">
                        +
                      </span>
                      {" "}Step 003
                    </div>
                    {" "}
                    <h3 className="process-card-title">
                      Build forward
                    </h3>
                  </div>
                  <svg aria-label="Build prototype icon" className="working-process-image uniloom-process-icon" fill="none" height="48" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 48 48" width="48">
                    <rect height="32" rx="4" width="34" x="7" y="8" />
                    <path d="M14 31 21 23l6 5 8-11" />
                    <path d="M14 15h8" />
                  </svg>
                  {" "}
                  <p className="process-card-details">
                    Leave with sharper questions, useful connections and practical next steps for developing your idea beyond campus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
