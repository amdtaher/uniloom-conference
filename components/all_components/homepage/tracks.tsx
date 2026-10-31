import React from "react";
import { cn } from "@/lib/utils";

interface TracksProps {
  className?: string;
}

export default function Tracks({ className }: TracksProps) {
  return (
    <section className={cn("our-services-section", className)} id="tracks">
      <div className="padding-global our-services-section-spacing">
        <div className="container">
          <div className="services-top">
            <div className="section-inner-wrpp services-header">
              <div className="about-us-subtitle bg-color" {...{ data: "sectionsubtitle" }}>
                Conference Tracks
              </div>
              {" "}
              <h2 className="section-heading-title color-white" {...{ data: "sectionheading" }}>
                Explore the ideas shaping tomorrow’s startups.
              </h2>
            </div>
            {" "}
            <div appear-single-animate="single-item" className="services-items-wrapper">
              <div className="service-item-wrapper">
                <div className="service-item-left">
                  <img alt="Student team testing a product prototype" className="service-item-img" id="w-node-_850304c6-4c12-4497-0117-2c67934609c3-df86232f" loading="lazy" sizes="100vw" src="https://images.pexels.com/photos/7414274/pexels-photo-7414274.jpeg" srcSet="" />
                  {" "}
                  <div className="service-item-contents">
                    <svg className="service-item-icon" fill="none" viewBox="0 0 32 32" width="100%" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.0453 16.9079C15.9972 16.7873 15.9856 16.6553 16.0117 16.5281C16.0379 16.401 16.1008 16.2843 16.1926 16.1925C16.2844 16.1007 16.4011 16.0379 16.5282 16.0117C16.6554 15.9855 16.7874 15.9972 16.908 16.0452L28.908 20.7119C29.0366 20.7622 29.1465 20.8512 29.2224 20.9666C29.2983 21.082 29.3364 21.2181 29.3316 21.3562C29.3268 21.4942 29.2792 21.6273 29.1954 21.7372C29.1116 21.847 28.9958 21.9281 28.864 21.9692L24.272 23.3932C24.0648 23.4573 23.8763 23.5709 23.723 23.7243C23.5697 23.8776 23.456 24.0661 23.392 24.2732L21.9693 28.8639C21.9281 28.9958 21.8471 29.1116 21.7372 29.1953C21.6274 29.2791 21.4943 29.3267 21.3562 29.3315C21.2182 29.3364 21.0821 29.2982 20.9666 29.2223C20.8512 29.1464 20.7622 29.0366 20.712 28.9079L16.0453 16.9079Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M6.66602 22.6665C6.66602 18.423 8.35173 14.3534 11.3523 11.3528C14.3529 8.35221 18.4226 6.6665 22.666 6.6665" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M25.3327 9.33333C26.8054 9.33333 27.9993 8.13943 27.9993 6.66667C27.9993 5.19391 26.8054 4 25.3327 4C23.8599 4 22.666 5.19391 22.666 6.66667C22.666 8.13943 23.8599 9.33333 25.3327 9.33333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M6.66667 27.9998C8.13943 27.9998 9.33333 26.8059 9.33333 25.3332C9.33333 23.8604 8.13943 22.6665 6.66667 22.6665C5.19391 22.6665 4 23.8604 4 25.3332C4 26.8059 5.19391 27.9998 6.66667 27.9998Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    {" "}
                    <div className="service-item-flex">
                      <h3 className="service-item-text">
                        Founder Foundations
                      </h3>
                      {" "}
                      <p className="service-item-desp">
                        From problem discovery and validation to business models, co-founders and the first steps of building a company.
                      </p>
                    </div>
                  </div>
                </div>
                {" "}
                <div className="service-item-right">
                  <div className="service-item-num">
                    [01]
                  </div>
                  {" "}
                  <ul className="services-list" role="list">
                    <li className="services-list-item">
                      <span className="text-primary">
                        +
                      </span>
                      Practical workshops
                    </li>
                    {" "}
                    <li className="services-list-item">
                      <span className="text-primary">
                        +
                      </span>
                      Founder conversations
                    </li>
                    {" "}
                    <li className="services-list-item">
                      <span className="text-primary">
                        +
                      </span>
                      Conference sessions
                    </li>
                  </ul>
                </div>
              </div>
              {" "}
              <div className="service-item-wrapper">
                <div className="service-item-left">
                  <img alt="Student team testing a product prototype" className="service-item-img" id="w-node-_850304c6-4c12-4497-0117-2c67934609c3-df86232f" loading="lazy" sizes="100vw" src="https://images.pexels.com/photos/15977087/pexels-photo-15977087.jpeg" srcSet="" />
                  {" "}
                  <div className="service-item-contents">
                    <svg className="service-item-icon" fill="none" viewBox="0 0 32 32" width="100%" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.0453 16.9079C15.9972 16.7873 15.9856 16.6553 16.0117 16.5281C16.0379 16.401 16.1008 16.2843 16.1926 16.1925C16.2844 16.1007 16.4011 16.0379 16.5282 16.0117C16.6554 15.9855 16.7874 15.9972 16.908 16.0452L28.908 20.7119C29.0366 20.7622 29.1465 20.8512 29.2224 20.9666C29.2983 21.082 29.3364 21.2181 29.3316 21.3562C29.3268 21.4942 29.2792 21.6273 29.1954 21.7372C29.1116 21.847 28.9958 21.9281 28.864 21.9692L24.272 23.3932C24.0648 23.4573 23.8763 23.5709 23.723 23.7243C23.5697 23.8776 23.456 24.0661 23.392 24.2732L21.9693 28.8639C21.9281 28.9958 21.8471 29.1116 21.7372 29.1953C21.6274 29.2791 21.4943 29.3267 21.3562 29.3315C21.2182 29.3364 21.0821 29.2982 20.9666 29.2223C20.8512 29.1464 20.7622 29.0366 20.712 28.9079L16.0453 16.9079Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M6.66602 22.6665C6.66602 18.423 8.35173 14.3534 11.3523 11.3528C14.3529 8.35221 18.4226 6.6665 22.666 6.6665" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M25.3327 9.33333C26.8054 9.33333 27.9993 8.13943 27.9993 6.66667C27.9993 5.19391 26.8054 4 25.3327 4C23.8599 4 22.666 5.19391 22.666 6.66667C22.666 8.13943 23.8599 9.33333 25.3327 9.33333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M6.66667 27.9998C8.13943 27.9998 9.33333 26.8059 9.33333 25.3332C9.33333 23.8604 8.13943 22.6665 6.66667 22.6665C5.19391 22.6665 4 23.8604 4 25.3332C4 26.8059 5.19391 27.9998 6.66667 27.9998Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    {" "}
                    <div className="service-item-flex">
                      <h3 className="service-item-text">
                        Product &amp; Technology
                      </h3>
                      {" "}
                      <p className="service-item-desp">
                        Explore product thinking, emerging technology, prototyping and the decisions that turn an idea into something people can use.
                      </p>
                    </div>
                  </div>
                </div>
                {" "}
                <div className="service-item-right">
                  <div className="service-item-num">
                    [02]
                  </div>
                  {" "}
                  <ul className="services-list" role="list">
                    <li className="services-list-item">
                      <span className="text-primary">
                        +
                      </span>
                      {" "}Conference sessions
                    </li>
                    {" "}
                    <li className="services-list-item">
                      <span className="text-primary">
                        +
                      </span>
                      {" "}Founder conversations
                    </li>
                    {" "}
                    <li className="services-list-item">
                      <span className="text-primary">
                        +
                      </span>
                      {" "}Practical workshops
                    </li>
                  </ul>
                </div>
              </div>
              {" "}
              <div className="service-item-wrapper">
                <div className="service-item-left">
                  <img alt="University research and innovation team" className="service-item-img" id="w-node-_1e70f0ad-3341-e4aa-490f-9b7c2c540229-df86232f" loading="lazy" sizes="100vw" src="https://images.pexels.com/photos/5833322/pexels-photo-5833322.jpeg" srcSet="" />
                  {" "}
                  <div className="service-item-contents">
                    <svg className="service-item-icon" fill="none" viewBox="0 0 32 32" width="100%" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 21.3337L29.3333 16.0003L24 10.667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M7.99935 10.667L2.66602 16.0003L7.99935 21.3337" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M19.3327 5.33301L12.666 26.6663" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    {" "}
                    <div className="service-item-flex">
                      <h3 className="service-item-text">
                        Research to Venture
                      </h3>
                      {" "}
                      <p className="service-item-desp">
                        Discover how academic research, intellectual property and university innovation can move toward real-world application.
                      </p>
                    </div>
                  </div>
                </div>
                {" "}
                <div className="service-item-right">
                  <div className="service-item-num">
                    [03]
                  </div>
                  {" "}
                  <ul className="services-list" role="list">
                    <li className="services-list-item">
                      <span className="text-primary">
                        +
                      </span>
                      {" "}Development
                    </li>
                    {" "}
                    <li className="services-list-item">
                      <span className="text-primary">
                        +
                      </span>
                      {" "}Web Applications
                    </li>
                    {" "}
                    <li className="services-list-item">
                      <span className="text-primary">
                        +
                      </span>
                      {" "}Responsive
                    </li>
                    {" "}
                    <li className="services-list-item">
                      <span className="text-primary">
                        +
                      </span>
                      {" "}CMS Development
                    </li>
                    {" "}
                    <li className="services-list-item">
                      <span className="text-primary">
                        +
                      </span>
                      {" "}Optimization
                    </li>
                  </ul>
                </div>
              </div>
              {" "}
              <div className="service-item-wrapper">
                <div className="service-item-left">
                  <img alt="Startup founder pitching an idea to an audience" className="service-item-img" id="w-node-ea8d7e86-341e-fd5a-ee77-73cdb2271ee1-df86232f" loading="lazy" sizes="100vw" src="https://images.pexels.com/photos/7651553/pexels-photo-7651553.jpeg" srcSet="" />
                  {" "}
                  <div className="service-item-contents">
                    <svg className="service-item-icon" fill="none" viewBox="0 0 32 32" width="100%" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25.3333 4H6.66667C5.19391 4 4 5.19391 4 6.66667V25.3333C4 26.8061 5.19391 28 6.66667 28H25.3333C26.8061 28 28 26.8061 28 25.3333V6.66667C28 5.19391 26.8061 4 25.3333 4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M22.6673 16.0007H20.0007L17.334 22.6673L14.6673 9.33398L12.0007 16.0007H9.33398" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    {" "}
                    <div className="service-item-flex">
                      <h3 className="service-item-text">
                        Funding &amp; Growth
                      </h3>
                      {" "}
                      <p className="service-item-desp">
                        Understand early-stage funding, pitching, investor conversations and the practical realities of growing a young venture.
                      </p>
                    </div>
                  </div>
                </div>
                {" "}
                <div className="service-item-right">
                  <div className="service-item-num">
                    [04]
                  </div>
                  {" "}
                  <ul className="services-list" role="list">
                    <li className="services-list-item">
                      <span className="text-primary">
                        +
                      </span>
                      {" "}3D Modeling
                    </li>
                    {" "}
                    <li className="services-list-item">
                      <span className="text-primary">
                        +
                      </span>
                      {" "}Motion Graphics
                    </li>
                    {" "}
                    <li className="services-list-item">
                      <span className="text-primary">
                        +
                      </span>
                      {" "}3D Animation
                    </li>
                    {" "}
                    <li className="services-list-item">
                      <span className="text-primary">
                        +
                      </span>
                      {" "}Visual Effects
                    </li>
                    {" "}
                    <li className="services-list-item">
                      <span className="text-primary">
                        +
                      </span>
                      {" "}Interactive Motion
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
