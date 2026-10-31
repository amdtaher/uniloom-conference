import React from "react";
import { cn } from "@/lib/utils";

interface AboutProps {
  className?: string;
}

export default function About({ className }: AboutProps) {
  return (
    <section className={cn("about-us-section", className)} id="about">
      <div className="padding-global about-us-section-spacing">
        <div className="container">
          <div appear-animate="items" className="about-us-wrapper">
            <div className="about-us-subtitle">
              <span className="text-primary">
                +
              </span>
              {" "}About Studio
            </div>
            {" "}
            <h2 className="committed-title">
              A platform for ideas that deserve a chance to become something bigger.
            </h2>
            {" "}
            <div>
              <a black-btn="" className="button-primary-black w-inline-block" data-wf--black-button--variant="base" href="#about">
                {" "}
                <div className="button-primary-image-wrapp">
                  <img alt="Btn Arrow" className="primary-btn-icon button-two" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6a130fe55f224ee69d699352_Style%3DStroke%2C%20Type%3DRounded.webp" />
                  <img alt="Btn Arrow" className="primary-btn-icon button-one" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/69f0d768c67db4582244dc16_White%20Icon.svg" />
                </div>
                {" "}
                <div className="button-primary-text-wrapp">
                  <div className="primary-btn-title">
                    Discover UNILOOM
                  </div>
                </div>
                {" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
