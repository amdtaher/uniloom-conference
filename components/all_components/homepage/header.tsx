import React from "react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <div className={cn("update-navbar w-variant-0862e409-7876-6c33-59a5-9e11e5d974cd w-nav", className)} data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" data-wf--update-navbar--variant="white" data-wf-component-id="ed82e3f7-fe6f-495c-0986-ae3292907f38" data-wf-variant-state="0862e409-7876-6c33-59a5-9e11e5d974cd" role="banner">
      <div className="container nav">
        <a aria-current="page" className="brand-link w-inline-block w--current" href="/">
          <img alt="UNILOOM university startup conference" className="brand-img normal w-variant-0862e409-7876-6c33-59a5-9e11e5d974cd" loading="lazy" src="https://i.postimg.cc/WprP0jf7/Uniloom-Red-Emblem-Logo.png" />
        </a>
        {" "}
        <nav className="nav-menu w-nav-menu" role="navigation">
          <div className="dropdown-home w-dropdown" data-delay="250" data-hover="true" data-wf-target={"[[[\"ed82e3f7-fe6f-495c-0986-ae3292907f38\",\"ed82e3f7-fe6f-495c-0986-ae3292907f3e\"],[\"ed82e3f7-fe6f-495c-0986-ae3292907f37\"]]]"}>
            <div className="home-dropdown-toggle w-variant-0862e409-7876-6c33-59a5-9e11e5d974cd w-dropdown-toggle">
              <div>
                Home
              </div>
              <svg className="dropwown-plus-icon" fill="none" viewBox="0 0 12 12" width="100%" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 2V10M10 6H2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
              </svg>
            </div>
            {" "}
            <nav className="homes-dropdown-list w-dropdown-list" data-wf-target={"[[[\"ed82e3f7-fe6f-495c-0986-ae3292907f38\",\"ed82e3f7-fe6f-495c-0986-ae3292907f44\"],[\"ed82e3f7-fe6f-495c-0986-ae3292907f37\"]]]"}>
              <div className="nav-dropdown-details-wrapp homes">
                <div className="single-menu-wrapp">
                  <a aria-current="page" className="dropdown-nav-link w-dropdown-link w--current" href="/">
                    Home 01
                  </a>
                  <a className="dropdown-nav-link w-dropdown-link" href="/home-02">
                    Home 02
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <a className="nav-links w-variant-0862e409-7876-6c33-59a5-9e11e5d974cd w-nav-link" href="/about-us">
            About us
          </a>
          <a className="nav-links w-variant-0862e409-7876-6c33-59a5-9e11e5d974cd w-nav-link" href="/work">
            Projects
          </a>
          <a className="nav-links w-variant-0862e409-7876-6c33-59a5-9e11e5d974cd w-nav-link" href="/pricing">
            Pricing
          </a>
          {" "}
          <div className="tab-menus">
            <div className="pages-items">
              <div className="dropdown-header">
                Main Pages
              </div>
              {" "}
              <div className="nav-items">
                <div className="nav-pages">
                  <a aria-current="page" className="dropdown_link w--current" href="/">
                    Home 01
                  </a>
                  <a className="dropdown_link" href="/home-02">
                    Home 02
                  </a>
                  <a className="dropdown_link" href="/about-us">
                    About us
                  </a>
                  <a className="dropdown_link" href="/work">
                    Work
                  </a>
                  <a className="dropdown_link" href="/pricing">
                    Pricing
                  </a>
                </div>
              </div>
            </div>
            {" "}
            <div className="pages-items">
              <div className="dropdown-header">
                Resources
              </div>
              {" "}
              <div className="nav-items">
                <div className="nav-pages">
                  <a className="dropdown_link" href="/licenses">
                    License
                  </a>
                  <a className="dropdown_link" href="/style-guide">
                    Styleguide
                  </a>
                  <a className="dropdown_link" href="/changelog">
                    Changelog
                  </a>
                  <a className="dropdown_link" href="/privacy-policy">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
            {" "}
            <div className="pages-items">
              <div className="dropdown-header">
                utility Pages
              </div>
              {" "}
              <div className="nav-items">
                <div className="nav-pages">
                  <a className="dropdown_link" href="/404">
                    404
                  </a>
                  <a className="dropdown_link" href="/instructions">
                    Instructions
                  </a>
                  <a className="dropdown_link" href="/terms-of-conditions">
                    Terms of Conditions
                  </a>
                  <a className="dropdown_link" href="/401">
                    Password Protected
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {" "}
        <div className="nav-right">
          <div className="right-contents">
            <div className="dropdown-pages w-dropdown" data-delay="250" data-hover="true" data-wf-target={"[[[\"ed82e3f7-fe6f-495c-0986-ae3292907f38\",\"ed82e3f7-fe6f-495c-0986-ae3292907f92\"],[\"ed82e3f7-fe6f-495c-0986-ae3292907f37\"]]]"}>
              <div className="pages-dropdown-toggle w-variant-0862e409-7876-6c33-59a5-9e11e5d974cd w-dropdown-toggle">
                <div>
                  Pages
                </div>
                <svg className="dropwown-plus-icon" fill="none" viewBox="0 0 12 12" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 2V10M10 6H2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                </svg>
              </div>
              {" "}
              <nav className="pages-dropdown-list w-dropdown-list" data-wf-target={"[[[\"ed82e3f7-fe6f-495c-0986-ae3292907f38\",\"ed82e3f7-fe6f-495c-0986-ae3292907f98\"],[\"ed82e3f7-fe6f-495c-0986-ae3292907f37\"]]]"}>
                <div className="nav-dropdown-details-wrapp">
                  <div className="single-menu-wrapp">
                    <div className="menu-title-text margin-bottom">
                      Main
                    </div>
                    <a aria-current="page" className="dropdown-nav-link w-dropdown-link w--current" href="/">
                      Home 01
                    </a>
                    <a className="dropdown-nav-link w-dropdown-link" href="/home-02">
                      Home 02
                    </a>
                    <a className="dropdown-nav-link w-dropdown-link" href="/about-us">
                      About Us
                    </a>
                    <a className="dropdown-nav-link w-dropdown-link" href="/work">
                      Work
                    </a>
                    <a className="dropdown-nav-link w-dropdown-link" href="/pricing">
                      Pricing
                    </a>
                  </div>
                  {" "}
                  <div className="single-menu-wrapp">
                    <div className="menu-title-text margin-bottom">
                      Explore
                    </div>
                    <a className="dropdown-nav-link w-dropdown-link" href="/style-guide">
                      Style guide
                    </a>
                    <a className="dropdown-nav-link w-dropdown-link" href="/licenses">
                      License
                    </a>
                    <a className="dropdown-nav-link w-dropdown-link" href="/changelog">
                      Changelog
                    </a>
                    <a className="dropdown-nav-link w-dropdown-link" href="/401">
                      Password Protected
                    </a>
                    <a className="dropdown-nav-link w-dropdown-link" href="/404">
                      404
                    </a>
                  </div>
                  {" "}
                  <div className="single-menu-wrapp">
                    <div className="menu-title-text margin-bottom">
                      Information
                    </div>
                    <a className="dropdown-nav-link w-dropdown-link" href="/instructions">
                      Instructions
                    </a>
                    <a className="dropdown-nav-link w-dropdown-link" href="/privacy-policy">
                      Privacy Policy
                    </a>
                    <a className="dropdown-nav-link w-dropdown-link" href="/terms-of-conditions">
                      Terms of Conditions
                    </a>
                  </div>
                </div>
              </nav>
            </div>
            {" "}
            <div className="nav-buttons">
              <div className="black-nav-button w-variant-0862e409-7876-6c33-59a5-9e11e5d974cd">
                <a className="button-nav w-inline-block" data-wf--button-nav--variant="base" href="/contact-us" nav-button="">
                  {" "}
                  <div className="nav-button-mask">
                    <div className="nav-button-text" nav-button-text="">
                      Contact us
                    </div>
                  </div>
                  {" "}
                </a>
              </div>
              {" "}
              <div className="white-nav-button w-variant-0862e409-7876-6c33-59a5-9e11e5d974cd">
                <a className="button-nav-white w-inline-block" href="/contact-us" white-nav-btn="">
                  {" "}
                  <div className="white-button-mask">
                    <div className="white-button-text" white-nav-btn-text="">
                      Contact us
                    </div>
                  </div>
                  {" "}
                </a>
              </div>
            </div>
          </div>
          {" "}
          <div className="menu-button w-nav-button">
            <div className="menu-hamburger-lines">
              <div className="menu-hamburger-line top" />
              {" "}
              <div className="menu-hamburger-line middle" />
              {" "}
              <div className="menu-hamburger-line bottom" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
