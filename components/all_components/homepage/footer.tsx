import React from "react";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <section className={cn("footer", className)}>
      <div className="padding-global footer-section-spacing">
        <div className="container">
          <div className="footer-wrapper">
            <div className="footer-top">
              <div className="footer-top-left">
                <a aria-current="page" className="brand-link w-inline-block w--current" href="/">
                  <img alt="UNILOOM university startup conference" className="brand-img normal w-variant-0862e409-7876-6c33-59a5-9e11e5d974cd" loading="lazy" src="https://i.postimg.cc/qRV1rfXR/Uniloom-Red-Geometric-Logo-(2).png" />
                </a>
                {" "}
                <div className="footer-top-left-wrapp">
                  <h2 className="footer-left-title">
                    UNILOOM connects campus founders and researchers to move ideas forward.{" "}
                  </h2>
                  <a btn-secondary="" className="button-secondary w-inline-block" href="#contact">
                    {" "}
                    <div className="btn-secondary-image-wrapp">
                      <img alt="Btn Arrow" className="btn-secondary-icon button-two" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/69f0de481454ff234fb2a8d7_Black%20Icon.svg" />
                      <img alt="Btn Arrow" className="btn-secondary-icon button-one" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/69f0d76870dffea69af02298_Orange%20Icon.svg" />
                    </div>
                    {" "}
                    <div className="btn-secondary-text-wrapp">
                      <div className="btn-secondary-title">
                        Contact the Organizers
                      </div>
                    </div>
                    {" "}
                  </a>
                </div>
              </div>
              {" "}
              <div className="footer-top-right-wrapp">
                <div className="footer-menu-wrapp">
                  <div className="menu-title-text menu-gaps">
                    Social
                  </div>
                  {" "}
                  <div className="footer-menu-block">
                    <a aria-current="page" className="nav-links footer-menu-link w--current" href="#top">
                      Home
                    </a>
                    <a className="nav-links footer-menu-link" href="#top">
                      Conference
                    </a>
                    <a className="nav-links footer-menu-link" href="#about">
                      About
                    </a>
                    <a className="nav-links footer-menu-link" href="#stories">
                      Startup Stories
                    </a>
                    <a className="nav-links footer-menu-link" href="#passes">
                      Passes
                    </a>
                    <a className="nav-links footer-menu-link" href="#contact">
                      Contact
                    </a>
                  </div>
                </div>
                {" "}
                <div className="footer-menu-wrapp">
                  <div className="menu-title-text menu-gaps">
                    Utility Pages
                  </div>
                  {" "}
                  <div className="footer-menu-block">
                    <a className="nav-links footer-menu-link" href="#about">
                      About UNILOOM
                    </a>
                    <a className="nav-links footer-menu-link" href="#about">
                      About UNILOOM
                    </a>
                    <a className="nav-links footer-menu-link" href="#about">
                      About UNILOOM
                    </a>
                    <a className="nav-links footer-menu-link" href="#top">
                      Home
                    </a>
                    {" "}
                    <div className="footer-menu-wrapp margin-top">
                      <div className="menu-title-text menu-gaps">
                        Legal Info
                      </div>
                      {" "}
                      <div className="footer-menu-block">
                        <a className="nav-links footer-menu-link" href="#privacy">
                          Privacy Policy
                        </a>
                        <a className="nav-links footer-menu-link" href="#terms">
                          Terms &amp; Conditions
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {" "}
                <div className="footer-menu-wrapp social" id="w-node-e944cb3f-f727-9fb7-e1f6-b2e30014960c-001495d7">
                  <div className="menu-title-text menu-gaps">
                    Social
                  </div>
                  {" "}
                  <div className="footer-menu-block socials">
                    <a className="nav-links footer-menu-link" href="#contact" target="_blank">
                      Contact for social links
                    </a>
                    <a className="nav-links footer-menu-link" href="#contact" target="_blank">
                      Contact for social links
                    </a>
                    <a className="nav-links footer-menu-link" href="#contact" target="_blank">
                      Contact for social links
                    </a>
                    <a className="nav-links footer-menu-link" href="#contact" target="_blank">
                      Contact for social links
                    </a>
                    <a className="nav-links footer-menu-link" href="#contact" target="_blank">
                      Contact for social links
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {" "}
            <div className="footer-bottom">
              <p className="copyright-text">
                Contact: [OFFICIAL CONTACT EMAIL]
              </p>
              {" "}
              <p className="copyright-text">
                Location: [CONFIRMED VENUE OR CITY]
              </p>
              {" "}
              <p className="copyright-text _03">
                © 2026 UNILOOM. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
