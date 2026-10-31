import React from "react";
import { cn } from "@/lib/utils";

interface PricingProps {
  className?: string;
}

export default function Pricing({ className }: PricingProps) {
  return (
    <section className={cn("pricing-section", className)} id="passes">
      <div className="padding-global pricing-section-spacing">
        <div className="container">
          <div className="pricing-wrapper">
            <div className="pricing-plan-wrapper">
              <div className="section-inner-wrpp satisfied-header">
                <div className="about-us-subtitle" {...{ data: "sectionsubtitle" }}>
                  Conference Passes
                </div>
                {" "}
                <h2 className="satisfied-title" {...{ data: "sectionheading" }}>
                  Choose how you want to be part of UNILOOM.
                </h2>
              </div>
              {" "}
              <div appear-single-animate="single-item" className="pricing-bottom">
                <div className="pricing-toggle">
                  <div className="pricing-toggle-dot" />
                </div>
                {" "}
                <div className="pricing-tabs w-tabs" data-current="Tab 1" data-duration-in="0" data-duration-out="0" data-easing="ease">
                  <div className="pricing-tabs-menu w-tab-menu">
                    <a className="pricing-tabs-link _01 w-inline-block w-tab-link w--current" data-w-tab="Tab 1">
                      Student Pass
                    </a>
                    <a className="pricing-tabs-link _02 w-inline-block w-tab-link" data-w-tab="Tab 2">
                      Builder Pass
                    </a>
                  </div>
                  {" "}
                  <div className="pricing-tabs-content w-tab-content">
                    <div className="pricing-tabs-pane w-tab-pane w--tab-active" data-w-tab="Tab 1">
                      <div className="pricing-tabs-cards">
                        <div className="pricing-tabs-card">
                          <div className="pricing-top-card">
                            <img alt="Icon of a framed picture with mountains and sun, resembling a photo or image placeholder." className="pricing-card-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6ab35cdbe343dc56f4b20_Frame.webp" />
                            {" "}
                            <div className="pricing-top-details">
                              <div className="pricing-plan-details">
                                <div className="pricing-price" data-monthly="">
                                  $29
                                </div>
                                {" "}
                                <div className="pricing-duration" second-price-number="">
                                  one-time • suggested draft price
                                </div>
                              </div>
                              {" "}
                              <div className="pricing-details-wrap">
                                <h3 className="plan-name">
                                  Student Pass
                                </h3>
                                {" "}
                                <p className="plan-desp">
                                  For students and recent graduates ready to explore entrepreneurship, meet the community and develop their next idea.
                                </p>
                                {" "}
                                <a className="stprice button-nav w-variant-94e9998f-1214-4f39-fc75-5c383699ff0c w-inline-block uniloom-open-pass-modal" data-uniloom-pass="Student Pass" data-wf--button-nav--variant="pricing" href="#uniloom-pass-modal" nav-button="">
                                  {" "}
                                  <div className="nav-button-mask">
                                    <div className="nav-button-text" nav-button-text="">
                                      Buy Pass
                                    </div>
                                  </div>
                                  {" "}
                                </a>
                              </div>
                                                        <div className="pricing-bottom-card">
                            <div className="what-includes">
                              Pass includes:
                            </div>
                            {" "}
                            <div className="pricing-list">
                              <div className="pricing-list-details">
                                <img alt="checkmark-badge-01" className="pricing-list-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6ada9640f51513b89cd19_checkmark-badge-01.webp" />
                                {" "}
                                <p className="pricing-list-item">
                                  Access to conference sessions
                                </p>
                              </div>
                              {" "}
                              <div className="pricing-list-details">
                                <img alt="checkmark-badge-01" className="pricing-list-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6ada9640f51513b89cd19_checkmark-badge-01.webp" />
                                {" "}
                                <p className="pricing-list-item">
                                  Founder and mentor conversations
                                </p>
                              </div>
                              {" "}
                              <div className="pricing-list-details">
                                <img alt="checkmark-badge-01" className="pricing-list-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6ada9640f51513b89cd19_checkmark-badge-01.webp" />
                                {" "}
                                <p className="pricing-list-item">
                                  Access to networking areas
                                </p>
                              </div>
                              {" "}
                              <div className="pricing-list-details">
                                <img alt="checkmark-badge-01" className="pricing-list-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6ada9640f51513b89cd19_checkmark-badge-01.webp" />
                                {" "}
                                <p className="pricing-list-item">
                                  Digital event resources
                                </p>
                              </div>
                            </div>
                          </div>
                            </div>
                          </div>
                          {" "}
                          {" "}
                          <div className="pricing-abs-text">
                            For students and recent graduates
                          </div>
                        </div>
                        {" "}
                        <div className="pricing-tabs-card active">
                          <div className="pricing-top-card _02">
                            <img alt="Pixelated icon of a briefcase with a handle on top and a clasp in the center." className="pricing-card-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6c5fce1d1384aa929c5d3_Frame%20(1).webp" />
                            {" "}
                            <div className="pricing-top-details">
                              <div className="pricing-plan-details">
                                <div className="pricing-price _02" data-monthly="">
                                  $79
                                </div>
                                {" "}
                                <div className="pricing-duration _02" second-price-number="">
                                  one-time • suggested draft price
                                </div>
                              </div>
                              {" "}
                              <div className="pricing-details-wrap">
                                <h3 className="plan-name _02">
                                  Builder Pass
                                </h3>
                                {" "}
                                <p className="plan-desp _02">
                                  For early-stage founders, researchers and startup teams looking to connect with people who can help move their work forward.
                                </p>
                              </div>
                              <a className="button-nav-white w-inline-block uniloom-open-pass-modal" data-uniloom-pass="Builder Pass" href="#uniloom-pass-modal" white-nav-btn="">
                                {" "}
                                <div className="white-button-mask">
                                  <div className="white-button-text" white-nav-btn-text="">
                                    Buy Pass
                                  </div>
                                </div>
                                {" "}
                              </a>
                            </div>
                          </div>
                          {" "}
                          <div className="pricing-bottom-card">
                            <div className="what-includes _02">
                              Pass includes:
                            </div>
                            {" "}
                            <div className="pricing-list">
                              <div className="pricing-list-details">
                                <img alt="White checkmark inside a white shield-shaped badge on a transparent background." className="pricing-list-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6c613c781c9813e55225f_checkmark-badge-01%20(1).webp" />
                                {" "}
                                <p className="pricing-list-item _02">
                                  Access to conference sessions
                                </p>
                              </div>
                              {" "}
                              <div className="pricing-list-details">
                                <img alt="White checkmark inside a white shield-shaped badge on a transparent background." className="pricing-list-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6c613c781c9813e55225f_checkmark-badge-01%20(1).webp" />
                                {" "}
                                <p className="pricing-list-item _02">
                                  Founder and ecosystem networking
                                </p>
                              </div>
                              {" "}
                              <div className="pricing-list-details">
                                <img alt="White checkmark inside a white shield-shaped badge on a transparent background." className="pricing-list-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6c613c781c9813e55225f_checkmark-badge-01%20(1).webp" />
                                {" "}
                                <p className="pricing-list-item _02">
                                  Access to startup-focused sessions
                                </p>
                              </div>
                              {" "}
                              <div className="pricing-list-details">
                                <img alt="White checkmark inside a white shield-shaped badge on a transparent background." className="pricing-list-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6c613c781c9813e55225f_checkmark-badge-01%20(1).webp" />
                                {" "}
                                <p className="pricing-list-item _02">
                                  Digital event resources
                                </p>
                              </div>
                              {" "}
                              <div className="pricing-list-details">
                                <img alt="White checkmark inside a white shield-shaped badge on a transparent background." className="pricing-list-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6c613c781c9813e55225f_checkmark-badge-01%20(1).webp" />
                                {" "}
                                <p className="pricing-list-item _02">
                                  Access to conference sessions
                                </p>
                              </div>
                              {" "}
                              <div className="pricing-list-details">
                                <img alt="White checkmark inside a white shield-shaped badge on a transparent background." className="pricing-list-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6c613c781c9813e55225f_checkmark-badge-01%20(1).webp" />
                                {" "}
                                <p className="pricing-list-item _02">
                                  Founder and mentor conversations
                                </p>
                              </div>
                              {" "}
                              <div className="pricing-list-details">
                                <img alt="White checkmark inside a white shield-shaped badge on a transparent background." className="pricing-list-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6c613c781c9813e55225f_checkmark-badge-01%20(1).webp" />
                                {" "}
                                <p className="pricing-list-item _02">
                                  Access to networking areas
                                </p>
                              </div>
                            </div>
                          </div>
                          {" "}
                          <div className="pricing-abs-text _02">
                            For founders and research teams
                          </div>
                        </div>
                      </div>
                    </div>
                    {" "}
                    <div className="pricing-tabs-pane w-tab-pane" data-w-tab="Tab 2">
                      <div className="pricing-tabs-cards">
                        <div className="pricing-tabs-card">
                          <div className="pricing-top-card">
                            <img alt="Icon of a framed picture with mountains and sun, resembling a photo or image placeholder." className="pricing-card-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6ab35cdbe343dc56f4b20_Frame.webp" />
                            {" "}
                            <div className="pricing-top-details">
                              <div className="pricing-plan-details">
                                <div className="pricing-price" data-monthly="">
                                  $29
                                </div>
                                {" "}
                                <div className="pricing-duration" second-price-number="">
                                  one-time • suggested draft price
                                </div>
                              </div>
                              {" "}
                              <div className="pricing-details-wrap">
                                <h3 className="plan-name">
                                  Student Pass
                                </h3>
                                {" "}
                                <p className="plan-desp">
                                  For students and recent graduates ready to explore entrepreneurship, meet the community and develop their next idea.
                                </p>
                              </div>
                              <a className="button-nav w-variant-94e9998f-1214-4f39-fc75-5c383699ff0c w-inline-block uniloom-open-pass-modal" data-uniloom-pass="Student Pass" data-wf--button-nav--variant="pricing" href="#uniloom-pass-modal" nav-button="">
                                {" "}
                                <div className="nav-button-mask">
                                  <div className="nav-button-text" nav-button-text="">
                                    Buy Pass
                                  </div>
                                </div>
                                {" "}
                              </a>
                            </div>
                          </div>
                          {" "}
                          <div className="pricing-bottom-card">
                            <div className="what-includes">
                              Pass includes:
                            </div>
                            {" "}
                            <div className="pricing-list">
                              <div className="pricing-list-details">
                                <img alt="checkmark-badge-01" className="pricing-list-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6ada9640f51513b89cd19_checkmark-badge-01.webp" />
                                {" "}
                                <p className="pricing-list-item">
                                  Digital event resources
                                </p>
                              </div>
                              {" "}
                              <div className="pricing-list-details">
                                <img alt="checkmark-badge-01" className="pricing-list-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6ada9640f51513b89cd19_checkmark-badge-01.webp" />
                                {" "}
                                <p className="pricing-list-item">
                                  Access to conference sessions
                                </p>
                              </div>
                              {" "}
                              <div className="pricing-list-details">
                                <img alt="checkmark-badge-01" className="pricing-list-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6ada9640f51513b89cd19_checkmark-badge-01.webp" />
                                {" "}
                                <p className="pricing-list-item">
                                  Founder and ecosystem networking
                                </p>
                              </div>
                              {" "}
                              <div className="pricing-list-details">
                                <img alt="checkmark-badge-01" className="pricing-list-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6ada9640f51513b89cd19_checkmark-badge-01.webp" />
                                {" "}
                                <p className="pricing-list-item">
                                  Access to startup-focused sessions
                                </p>
                              </div>
                            </div>
                          </div>
                          {" "}
                          <div className="pricing-abs-text">
                            For students and recent graduates
                          </div>
                        </div>
                        {" "}
                        <div className="pricing-tabs-card active">
                          <div className="pricing-top-card _02">
                            <img alt="Pixelated icon of a briefcase with a handle on top and a clasp in the center." className="pricing-card-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6c5fce1d1384aa929c5d3_Frame%20(1).webp" />
                            {" "}
                            <div className="pricing-top-details">
                              <div className="pricing-plan-details">
                                <div className="pricing-price _02" data-monthly="">
                                  $79
                                </div>
                                {" "}
                                <div className="pricing-duration _02" second-price-number="">
                                  one-time • suggested draft price
                                </div>
                              </div>
                              {" "}
                              <div className="pricing-details-wrap">
                                <h3 className="plan-name _02">
                                  Builder Pass
                                </h3>
                                {" "}
                                <p className="plan-desp _02">
                                  For early-stage founders, researchers and startup teams looking to connect with people who can help move their work forward.
                                </p>
                              </div>
                              <a className="button-nav-white w-inline-block uniloom-open-pass-modal" data-uniloom-pass="Builder Pass" href="#uniloom-pass-modal" white-nav-btn="">
                                {" "}
                                <div className="white-button-mask">
                                  <div className="white-button-text" white-nav-btn-text="">
                                    Buy Pass
                                  </div>
                                </div>
                                {" "}
                              </a>
                            </div>
                          </div>
                          {" "}
                          <div className="pricing-bottom-card">
                            <div className="what-includes _02">
                              Pass includes:
                            </div>
                            {" "}
                            <div className="pricing-list">
                              <div className="pricing-list-details">
                                <img alt="White checkmark inside a white shield-shaped badge on a transparent background." className="pricing-list-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6c613c781c9813e55225f_checkmark-badge-01%20(1).webp" />
                                {" "}
                                <p className="pricing-list-item _02">
                                  Digital event resources
                                </p>
                              </div>
                              {" "}
                              <div className="pricing-list-details">
                                <img alt="White checkmark inside a white shield-shaped badge on a transparent background." className="pricing-list-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6c613c781c9813e55225f_checkmark-badge-01%20(1).webp" />
                                {" "}
                                <p className="pricing-list-item _02">
                                  Access to conference sessions
                                </p>
                              </div>
                              {" "}
                              <div className="pricing-list-details">
                                <img alt="White checkmark inside a white shield-shaped badge on a transparent background." className="pricing-list-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6c613c781c9813e55225f_checkmark-badge-01%20(1).webp" />
                                {" "}
                                <p className="pricing-list-item _02">
                                  Founder and ecosystem networking
                                </p>
                              </div>
                              {" "}
                              <div className="pricing-list-details">
                                <img alt="White checkmark inside a white shield-shaped badge on a transparent background." className="pricing-list-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6c613c781c9813e55225f_checkmark-badge-01%20(1).webp" />
                                {" "}
                                <p className="pricing-list-item _02">
                                  Access to startup-focused sessions
                                </p>
                              </div>
                              {" "}
                              <div className="pricing-list-details">
                                <img alt="White checkmark inside a white shield-shaped badge on a transparent background." className="pricing-list-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6c613c781c9813e55225f_checkmark-badge-01%20(1).webp" />
                                {" "}
                                <p className="pricing-list-item _02">
                                  Digital event resources
                                </p>
                              </div>
                              {" "}
                              <div className="pricing-list-details">
                                <img alt="White checkmark inside a white shield-shaped badge on a transparent background." className="pricing-list-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6c613c781c9813e55225f_checkmark-badge-01%20(1).webp" />
                                {" "}
                                <p className="pricing-list-item _02">
                                  Access to conference sessions
                                </p>
                              </div>
                              {" "}
                              <div className="pricing-list-details">
                                <img alt="White checkmark inside a white shield-shaped badge on a transparent background." className="pricing-list-icon" loading="lazy" src="https://cdn.prod.website-files.com/69ee458eaf96195bdf862336/6ab6c613c781c9813e55225f_checkmark-badge-01%20(1).webp" />
                                {" "}
                                <p className="pricing-list-item _02">
                                  Founder and mentor conversations
                                </p>
                              </div>
                            </div>
                          </div>
                          {" "}
                          <div className="pricing-abs-text _02">
                            For founders and research teams
                          </div>
                        </div>
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
