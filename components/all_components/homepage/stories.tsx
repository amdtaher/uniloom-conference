import React from "react";
import { cn } from "@/lib/utils";

interface StoriesProps {
  className?: string;
}

export default function Stories({ className }: StoriesProps) {
  return (
    <section className={cn("projects-section", className)} id="stories">
      <div className="padding-global global-spacing">
        <div className="container">
          <div className="projects-wrapper">
            <div className="projects-top">
              <div className="projects-top-contents">
                <div className="about-us-subtitle" {...{ data: "sectionsubtitle" }}>
                  <span className="text-primary">
                    +
                  </span>
                  {" "}Our Projects
                </div>
                {" "}
                <h2 className="selected-projects" {...{ data: "sectionheading" }}>
                  Startup stories from campus
                </h2>
              </div>
            </div>
            {" "}
            <div appear-single-animate="single-item" className="projects-bottom">
              <div className="projects-col-wrapper w-dyn-list">
                <div className="w-dyn-items" role="list">
                  <div className="w-dyn-item" role="listitem">
                    <div className="project-item-link">
                      <div className="project-item-left _01">
                        <div className="project-item-top">
                          <div className="project-item-headings">
                            <h3 className="project-item-name">
                              From Lab to Launch
                            </h3>
                            {" "}
                            <h3 className="project-item-name _02">
                              Research Venture
                            </h3>
                          </div>
                          <a btn-secondary="" className="button-secondary w-inline-block" href="#tracks">
                            {" "}
                            <div className="btn-secondary-image-wrapp">
                              <img alt="Btn Arrow" className="btn-secondary-icon button-two" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/69f0d76870dffea69af02298_Orange%20Icon.svg" />
                              <img alt="Btn Arrow" className="btn-secondary-icon button-one" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/69f0de481454ff234fb2a8d7_Black%20Icon.svg" />
                            </div>
                            {" "}
                            <div className="btn-secondary-text-wrapp">
                              <div className="btn-secondary-title">
                                Explore Story
                              </div>
                            </div>
                            {" "}
                          </a>
                        </div>
                        {" "}
                        <div className="project-item-bottom">
                          <p className="project-short-desp">
                            A university research team explores how a promising discovery could become a product with real-world value.
                          </p>
                          {" "}
                          <div className="project-tags-wrap">
                            <div className="project-all-tags">
                              <div className="project-tag">
                                Research Venture
                              </div>
                              {" "}
                              <div className="project-tag">
                                Prototype
                              </div>
                              {" "}
                              <div className="project-tag">
                                Innovation
                              </div>
                            </div>
                            {" "}
                            <div className="project-year">
                              UNIVERSITY RESEARCH
                            </div>
                          </div>
                        </div>
                      </div>
                      {" "}
                      <div className="project-item-right _01">
                        <img alt="Startup founders collaborating on a project" className="project-item-img" loading="lazy" sizes="100vw" src="https://images.pexels.com/photos/28683737/pexels-photo-28683737.jpeg" srcSet="" />
                        <img alt="" className="project-item-logo" loading="lazy" sizes="100vw" src="https://cdn.prod.website-files.com/69f7aa8d9f175eb9fd1ccc08/6ab52425cc24f642092769db_logo.png" srcSet="https://cdn.prod.website-files.com/69f7aa8d9f175eb9fd1ccc08/6ab52425cc24f642092769db_logo-p-500.png 500w, https://cdn.prod.website-files.com/69f7aa8d9f175eb9fd1ccc08/6ab52425cc24f642092769db_logo-p-800.png 800w, https://cdn.prod.website-files.com/69f7aa8d9f175eb9fd1ccc08/6ab52425cc24f642092769db_logo.png 1392w" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {" "}
              <div className="projects-col-wrapper w-dyn-list">
                <div className="w-dyn-items" role="list">
                  <div className="w-dyn-item" role="listitem">
                    <div className="project-item-link">
                      <div className="project-item-left _02">
                        <div className="project-item-top">
                          <div className="project-item-headings">
                            <h3 className="project-item-name">
                              The First Product
                            </h3>
                            {" "}
                            <h3 className="project-item-name _02">
                              Student Startup
                            </h3>
                          </div>
                          <a btn-secondary="" className="button-secondary w-inline-block" href="#tracks">
                            {" "}
                            <div className="btn-secondary-image-wrapp">
                              <img alt="Btn Arrow" className="btn-secondary-icon button-two" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/69f0d76870dffea69af02298_Orange%20Icon.svg" />
                              <img alt="Btn Arrow" className="btn-secondary-icon button-one" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/69f0de481454ff234fb2a8d7_Black%20Icon.svg" />
                            </div>
                            {" "}
                            <div className="btn-secondary-text-wrapp">
                              <div className="btn-secondary-title">
                                Explore Story
                              </div>
                            </div>
                            {" "}
                          </a>
                        </div>
                        {" "}
                        <div className="project-item-bottom">
                          <p className="project-short-desp">
                            A student team turns an everyday problem into an early product, learning through testing, feedback and iteration.
                          </p>
                          {" "}
                          <div className="project-tags-wrap">
                            <div className="project-all-tags project-all-tags2">
                              <div className="project-tag">
                                Student Startup
                              </div>
                              {" "}
                              <div className="project-tag">
                                Product Testing
                              </div>
                              {" "}
                              <div className="project-tag">
                                Early Stage
                              </div>
                            </div>
                            {" "}
                            <div className="project-year">
                              STUDENT STARTUP
                            </div>
                          </div>
                        </div>
                      </div>
                      {" "}
                      <div className="project-item-right _02">
                        <img alt="University startup team working together" className="project-item-img" loading="lazy" sizes="100vw" src="https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg" srcSet="" />
                        <img alt="" className="project-item-logo _02" loading="lazy" sizes="100vw" src="https://cdn.prod.website-files.com/69f7aa8d9f175eb9fd1ccc08/6ab5259d4bd77568e75ffd2a_Logo.png" srcSet="https://cdn.prod.website-files.com/69f7aa8d9f175eb9fd1ccc08/6ab5259d4bd77568e75ffd2a_Logo-p-500.png 500w, https://cdn.prod.website-files.com/69f7aa8d9f175eb9fd1ccc08/6ab5259d4bd77568e75ffd2a_Logo.png 892w" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {" "}
              <div className="projects-col-wrapper w-dyn-list">
                <div className="w-dyn-items" role="list">
                  <div className="w-dyn-item" role="listitem">
                    <div className="project-item-link">
                      <div className="project-item-left _03">
                        <div className="project-item-top">
                          <div className="project-item-headings">
                            <h3 className="project-item-name">
                              Built by Collaboration
                            </h3>
                            {" "}
                            <h3 className="project-item-name _02">
                              Campus Innovation
                            </h3>
                          </div>
                          <a btn-secondary="" className="button-secondary w-inline-block" href="#tracks">
                            {" "}
                            <div className="btn-secondary-image-wrapp">
                              <img alt="Btn Arrow" className="btn-secondary-icon button-two" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/69f0d76870dffea69af02298_Orange%20Icon.svg" />
                              <img alt="Btn Arrow" className="btn-secondary-icon button-one" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/69f0de481454ff234fb2a8d7_Black%20Icon.svg" />
                            </div>
                            {" "}
                            <div className="btn-secondary-text-wrapp">
                              <div className="btn-secondary-title">
                                Explore Story
                              </div>
                            </div>
                            {" "}
                          </a>
                        </div>
                        {" "}
                        <div className="project-item-bottom">
                          <p className="project-short-desp">
                            A cross-disciplinary team combines different skills to shape an idea into a focused startup concept.
                          </p>
                          {" "}
                          <div className="project-tags-wrap">
                            <div className="project-all-tags">
                              <div className="project-tag">
                                Campus Innovation
                              </div>
                              {" "}
                              <div className="project-tag">
                                Collaboration
                              </div>
                              {" "}
                              <div className="project-tag">
                                Venture
                              </div>
                            </div>
                            {" "}
                            <div className="project-year">
                              CAMPUS INNOVATION
                            </div>
                          </div>
                        </div>
                      </div>
                      {" "}
                      <div className="project-item-right _03">
                        <img alt="Startup team collaborating around a worktable" className="project-item-img" loading="lazy" sizes="100vw" src={"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=88"} srcSet="" />
                        <img alt="" className="project-item-logo _03" loading="lazy" sizes="100vw" src="https://cdn.prod.website-files.com/69f7aa8d9f175eb9fd1ccc08/6ab530374ca352f4540a341d_Logo.png" srcSet="https://cdn.prod.website-files.com/69f7aa8d9f175eb9fd1ccc08/6ab530374ca352f4540a341d_Logo-p-500.png 500w, https://cdn.prod.website-files.com/69f7aa8d9f175eb9fd1ccc08/6ab530374ca352f4540a341d_Logo-p-800.png 800w, https://cdn.prod.website-files.com/69f7aa8d9f175eb9fd1ccc08/6ab530374ca352f4540a341d_Logo.png 1192w" />
                      </div>
                    </div>
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
