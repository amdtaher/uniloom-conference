import React from "react";
import { cn } from "@/lib/utils";

interface CompareProps {
  className?: string;
}

export default function Compare({ className }: CompareProps) {
  return (
    <section className={cn("compare-section", className)}>
      <div className="padding-global compare-section-spacing">
        <div className="container">
          <div className="compare-wrapper">
            <div className="section-inner-wrpp different-header">
              <div className="about-us-subtitle" {...{ data: "sectionsubtitle" }}>
                <span className="text-primary">
                  +
                </span>
                {" "}Why We’re Different
              </div>
              {" "}
              <h2 className="different-title" {...{ data: "sectionheading" }}>
                Why UNILOOM matters
              </h2>
            </div>
            {" "}
            <div appear-animate="items" className="compare-details-wrapp">
              <div className="compare-single-details-wrapp">
                <div className="compare-title-wrapp">
                  <h3 className="compare-title">
                    A typical event
                  </h3>
                </div>
                {" "}
                <div className="single-compare-list-wrapp">
                  <div className="compare-list-text">
                    Listen to talks and leave with notes
                  </div>
                  <img alt="Circle" className="compare-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6cb989f45ab03f5a7f0ec_Frame.webp" />
                </div>
                {" "}
                <div className="single-compare-list-wrapp">
                  <div className="compare-list-text">
                    Meet people without a clear next step
                  </div>
                  <img alt="Circle" className="compare-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6cb989f45ab03f5a7f0ec_Frame.webp" />
                </div>
                {" "}
                <div className="single-compare-list-wrapp">
                  <div className="compare-list-text">
                    Hear broad advice with little context
                  </div>
                  <img alt="Circle" className="compare-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6cb989f45ab03f5a7f0ec_Frame.webp" />
                </div>
                {" "}
                <div className="single-compare-list-wrapp">
                  <div className="compare-list-text">
                    Explore ideas in separate communities
                  </div>
                  <img alt="Circle" className="compare-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6cb989f45ab03f5a7f0ec_Frame.webp" />
                </div>
                {" "}
                <div className="single-compare-list-wrapp">
                  <div className="compare-list-text">
                    Return to campus without a plan
                  </div>
                  <img alt="Circle" className="compare-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6cb989f45ab03f5a7f0ec_Frame.webp" />
                </div>
              </div>
              {" "}
              <div className="compare-single-details-wrapp _02">
                <div className="compare-title-wrapp">
                  <h3 className="compare-title red">
                    The UNILOOM approach
                  </h3>
                </div>
                {" "}
                <div className="single-compare-list-wrapp _02">
                  <img alt="Red badge shaped like a star with rounded points." className="compare-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6cc316821ea2bd3f6446f_checkmark-badge-01.webp" />
                  {" "}
                  <div className="compare-list-text left">
                    Learn from people building and testing ideas
                  </div>
                </div>
                {" "}
                <div className="single-compare-list-wrapp _02">
                  <img alt="Red badge shaped like a star with rounded points." className="compare-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6cc316821ea2bd3f6446f_checkmark-badge-01.webp" />
                  {" "}
                  <div className="compare-list-text left">
                    Make relevant connections across the ecosystem
                  </div>
                </div>
                {" "}
                <div className="single-compare-list-wrapp _02">
                  <img alt="Red badge shaped like a star with rounded points." className="compare-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6cc316821ea2bd3f6446f_checkmark-badge-01.webp" />
                  {" "}
                  <div className="compare-list-text left">
                    Explore practical founder and research journeys
                  </div>
                </div>
                {" "}
                <div className="single-compare-list-wrapp _02">
                  <img alt="Red badge shaped like a star with rounded points." className="compare-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6cc316821ea2bd3f6446f_checkmark-badge-01.webp" />
                  {" "}
                  <div className="compare-list-text left">
                    Bring students, researchers and industry together
                  </div>
                </div>
                {" "}
                <div className="single-compare-list-wrapp _02">
                  <img alt="Red badge shaped like a star with rounded points." className="compare-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6cc316821ea2bd3f6446f_checkmark-badge-01.webp" />
                  {" "}
                  <div className="compare-list-text left">
                    Leave with clearer next steps and new conversations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
