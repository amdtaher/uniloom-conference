import React from "react";
import { cn } from "@/lib/utils";

interface BrandProps {
  className?: string;
}

export default function Brand({ className }: BrandProps) {
  return (
    <section className={cn("become-a-brand-section", className)}>
      <div className="padding-global brand-section-spacing">
        <div className="container">
          <div className="become-height">
            <div className="brand-wrapper become-sticky">
              <div className="brand-details-wrapper">
                <div className="brand-grid">
                  <div className="brand-left-wrapp">
                    <div className="brand-review-wrapp" {...{ data: "sectionheading" }}>
                      <div className="brands-stars">
                        <svg className="brand-star" fill="none" viewBox="0 0 23 23" width="100%" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.5004 10.0495L16.5629 13.4471L17.7625 18.5283C17.8287 18.8041 17.8116 19.0933 17.7135 19.3595C17.6154 19.6256 17.4406 19.8567 17.2112 20.0236C16.9818 20.1904 16.7081 20.2856 16.4247 20.2969C16.1412 20.3083 15.8608 20.2354 15.6187 20.0875L11.2 17.368L6.77862 20.0875C6.53662 20.2346 6.25651 20.3068 5.97357 20.295C5.69062 20.2832 5.41749 20.1879 5.18857 20.0212C4.95965 19.8545 4.78517 19.6238 4.68711 19.3581C4.58905 19.0925 4.57178 18.8037 4.63749 18.5283L5.84149 13.4471L1.90399 10.0495C1.68988 9.86445 1.53503 9.62042 1.45878 9.34788C1.38253 9.07534 1.38826 8.78638 1.47526 8.51709C1.56225 8.24779 1.72666 8.01009 1.94794 7.83367C2.16923 7.65725 2.43758 7.54994 2.71949 7.52513L7.88199 7.10863L9.87349 2.28913C9.98129 2.02647 10.1648 1.80179 10.4006 1.64367C10.6364 1.48555 10.9139 1.40112 11.1978 1.40112C11.4817 1.40112 11.7592 1.48555 11.995 1.64367C12.2309 1.80179 12.4143 2.02647 12.5221 2.28913L14.5127 7.10863L19.6752 7.52513C19.9577 7.54902 20.2269 7.65573 20.4489 7.83191C20.671 8.00808 20.8362 8.24588 20.9237 8.5155C21.0113 8.78512 21.0173 9.07459 20.941 9.34762C20.8648 9.62065 20.7097 9.86511 20.4951 10.0504L20.5004 10.0495Z" fill="currentColor" />
                        </svg>
                        <svg className="brand-star" fill="none" viewBox="0 0 23 23" width="100%" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.5004 10.0495L16.5629 13.4471L17.7625 18.5283C17.8287 18.8041 17.8116 19.0933 17.7135 19.3595C17.6154 19.6256 17.4406 19.8567 17.2112 20.0236C16.9818 20.1904 16.7081 20.2856 16.4247 20.2969C16.1412 20.3083 15.8608 20.2354 15.6187 20.0875L11.2 17.368L6.77862 20.0875C6.53662 20.2346 6.25651 20.3068 5.97357 20.295C5.69062 20.2832 5.41749 20.1879 5.18857 20.0212C4.95965 19.8545 4.78517 19.6238 4.68711 19.3581C4.58905 19.0925 4.57178 18.8037 4.63749 18.5283L5.84149 13.4471L1.90399 10.0495C1.68988 9.86445 1.53503 9.62042 1.45878 9.34788C1.38253 9.07534 1.38826 8.78638 1.47526 8.51709C1.56225 8.24779 1.72666 8.01009 1.94794 7.83367C2.16923 7.65725 2.43758 7.54994 2.71949 7.52513L7.88199 7.10863L9.87349 2.28913C9.98129 2.02647 10.1648 1.80179 10.4006 1.64367C10.6364 1.48555 10.9139 1.40112 11.1978 1.40112C11.4817 1.40112 11.7592 1.48555 11.995 1.64367C12.2309 1.80179 12.4143 2.02647 12.5221 2.28913L14.5127 7.10863L19.6752 7.52513C19.9577 7.54902 20.2269 7.65573 20.4489 7.83191C20.671 8.00808 20.8362 8.24588 20.9237 8.5155C21.0113 8.78512 21.0173 9.07459 20.941 9.34762C20.8648 9.62065 20.7097 9.86511 20.4951 10.0504L20.5004 10.0495Z" fill="currentColor" />
                        </svg>
                        <svg className="brand-star" fill="none" viewBox="0 0 23 23" width="100%" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.5004 10.0495L16.5629 13.4471L17.7625 18.5283C17.8287 18.8041 17.8116 19.0933 17.7135 19.3595C17.6154 19.6256 17.4406 19.8567 17.2112 20.0236C16.9818 20.1904 16.7081 20.2856 16.4247 20.2969C16.1412 20.3083 15.8608 20.2354 15.6187 20.0875L11.2 17.368L6.77862 20.0875C6.53662 20.2346 6.25651 20.3068 5.97357 20.295C5.69062 20.2832 5.41749 20.1879 5.18857 20.0212C4.95965 19.8545 4.78517 19.6238 4.68711 19.3581C4.58905 19.0925 4.57178 18.8037 4.63749 18.5283L5.84149 13.4471L1.90399 10.0495C1.68988 9.86445 1.53503 9.62042 1.45878 9.34788C1.38253 9.07534 1.38826 8.78638 1.47526 8.51709C1.56225 8.24779 1.72666 8.01009 1.94794 7.83367C2.16923 7.65725 2.43758 7.54994 2.71949 7.52513L7.88199 7.10863L9.87349 2.28913C9.98129 2.02647 10.1648 1.80179 10.4006 1.64367C10.6364 1.48555 10.9139 1.40112 11.1978 1.40112C11.4817 1.40112 11.7592 1.48555 11.995 1.64367C12.2309 1.80179 12.4143 2.02647 12.5221 2.28913L14.5127 7.10863L19.6752 7.52513C19.9577 7.54902 20.2269 7.65573 20.4489 7.83191C20.671 8.00808 20.8362 8.24588 20.9237 8.5155C21.0113 8.78512 21.0173 9.07459 20.941 9.34762C20.8648 9.62065 20.7097 9.86511 20.4951 10.0504L20.5004 10.0495Z" fill="currentColor" />
                        </svg>
                        <svg className="brand-star" fill="none" viewBox="0 0 23 23" width="100%" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.5004 10.0495L16.5629 13.4471L17.7625 18.5283C17.8287 18.8041 17.8116 19.0933 17.7135 19.3595C17.6154 19.6256 17.4406 19.8567 17.2112 20.0236C16.9818 20.1904 16.7081 20.2856 16.4247 20.2969C16.1412 20.3083 15.8608 20.2354 15.6187 20.0875L11.2 17.368L6.77862 20.0875C6.53662 20.2346 6.25651 20.3068 5.97357 20.295C5.69062 20.2832 5.41749 20.1879 5.18857 20.0212C4.95965 19.8545 4.78517 19.6238 4.68711 19.3581C4.58905 19.0925 4.57178 18.8037 4.63749 18.5283L5.84149 13.4471L1.90399 10.0495C1.68988 9.86445 1.53503 9.62042 1.45878 9.34788C1.38253 9.07534 1.38826 8.78638 1.47526 8.51709C1.56225 8.24779 1.72666 8.01009 1.94794 7.83367C2.16923 7.65725 2.43758 7.54994 2.71949 7.52513L7.88199 7.10863L9.87349 2.28913C9.98129 2.02647 10.1648 1.80179 10.4006 1.64367C10.6364 1.48555 10.9139 1.40112 11.1978 1.40112C11.4817 1.40112 11.7592 1.48555 11.995 1.64367C12.2309 1.80179 12.4143 2.02647 12.5221 2.28913L14.5127 7.10863L19.6752 7.52513C19.9577 7.54902 20.2269 7.65573 20.4489 7.83191C20.671 8.00808 20.8362 8.24588 20.9237 8.5155C21.0113 8.78512 21.0173 9.07459 20.941 9.34762C20.8648 9.62065 20.7097 9.86511 20.4951 10.0504L20.5004 10.0495Z" fill="currentColor" />
                        </svg>
                        <svg className="brand-star" fill="none" viewBox="0 0 23 23" width="100%" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.5004 10.0495L16.5629 13.4471L17.7625 18.5283C17.8287 18.8041 17.8116 19.0933 17.7135 19.3595C17.6154 19.6256 17.4406 19.8567 17.2112 20.0236C16.9818 20.1904 16.7081 20.2856 16.4247 20.2969C16.1412 20.3083 15.8608 20.2354 15.6187 20.0875L11.2 17.368L6.77862 20.0875C6.53662 20.2346 6.25651 20.3068 5.97357 20.295C5.69062 20.2832 5.41749 20.1879 5.18857 20.0212C4.95965 19.8545 4.78517 19.6238 4.68711 19.3581C4.58905 19.0925 4.57178 18.8037 4.63749 18.5283L5.84149 13.4471L1.90399 10.0495C1.68988 9.86445 1.53503 9.62042 1.45878 9.34788C1.38253 9.07534 1.38826 8.78638 1.47526 8.51709C1.56225 8.24779 1.72666 8.01009 1.94794 7.83367C2.16923 7.65725 2.43758 7.54994 2.71949 7.52513L7.88199 7.10863L9.87349 2.28913C9.98129 2.02647 10.1648 1.80179 10.4006 1.64367C10.6364 1.48555 10.9139 1.40112 11.1978 1.40112C11.4817 1.40112 11.7592 1.48555 11.995 1.64367C12.2309 1.80179 12.4143 2.02647 12.5221 2.28913L14.5127 7.10863L19.6752 7.52513C19.9577 7.54902 20.2269 7.65573 20.4489 7.83191C20.671 8.00808 20.8362 8.24588 20.9237 8.5155C21.0113 8.78512 21.0173 9.07459 20.941 9.34762C20.8648 9.62065 20.7097 9.86511 20.4951 10.0504L20.5004 10.0495Z" fill="currentColor" />
                        </svg>
                      </div>
                      {" "}
                      <div className="rating-goal">
                        Built around the university startup community
                      </div>
                      {" "}
                      <div className="brand-user-image-wrapp">
                        <img alt="Student team testing a product prototype" className="brand-user-image" loading="lazy" src={"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85"} srcSet="" />
                        <img alt="University founders collaborating on an early-stage venture" className="brand-user-image image-two" loading="lazy" src={"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"} srcSet="" />
                        <img alt="University researchers developing and testing a prototype" className="brand-user-image image-two" loading="lazy" src={"https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85"} srcSet="" />
                      </div>
                    </div>
                  </div>
                  {" "}
                  <div className="brand-middle-wrapp" id="w-node-ae4f9664-8fa3-ce97-ebed-a693d81da6ba-df86232f">
                    <img alt="Student startup team working together" className="brand-image _1" loading="lazy" sizes="100vw" src={"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"} srcSet="" />
                    <img alt="Founders and mentors connecting at a conference" className="brand-image _2" loading="lazy" sizes="(max-width: 759px) 100vw, 759px" src={"https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85"} srcSet="" />
                    <img alt="University campus and student community" className="brand-image _3" loading="lazy" sizes="(max-width: 1012px) 100vw, 1012px" src={"https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85"} srcSet="" />
                    <img alt="Startup team collaborating around a table" className="brand-image _4" loading="lazy" src={"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85"} srcSet="" />
                    <img alt="Startup founder pitching an idea to an audience" className="brand-image _5" loading="lazy" sizes="(max-width: 506px) 100vw, 506px" src={"https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=85"} srcSet="" />
                  </div>
                  {" "}
                  <div className="brand-right-wrapp" id="w-node-f18c4332-1b9e-fb35-5787-48c877e04f90-df86232f">
                    <div className="brand-bottom-details-wrapp" {...{ data: "sectionheading" }}>
                      <p className="brand-short-details-text">
                        Your next step could start with one conversation. Meet people who understand the challenges of building from campus, share what you are working on and find the insight, support or collaborator that helps you move forward.
                      </p>
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
