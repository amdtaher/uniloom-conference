import Header from "@/components/all_components/homepage/header";
import Hero from "@/components/all_components/homepage/hero";
import Worldwide from "@/components/all_components/homepage/worldwide";
import About from "@/components/all_components/homepage/about";
import Brand from "@/components/all_components/homepage/brand";
import Process from "@/components/all_components/homepage/process";
import Stories from "@/components/all_components/homepage/stories";
import Tracks from "@/components/all_components/homepage/tracks";
import Speakers from "@/components/all_components/homepage/speakers";
import Programme from "@/components/all_components/homepage/programme";
import Satisfied from "@/components/all_components/homepage/satisfied";
import Pricing from "@/components/all_components/homepage/pricing";
import Compare from "@/components/all_components/homepage/compare";
import Faq from "@/components/all_components/homepage/faq";
import Contact from "@/components/all_components/homepage/contact";
import Footer from "@/components/all_components/homepage/footer";
import Modal from "@/components/all_components/homepage/modal";
import SiteScripts from "@/components/all_components/site-scripts";

export default function Page() {
  return (
    <>
      <div className="page-wrapper">
        <div className="main-wrapper">
          <Header />
          <Hero />
          <Worldwide />
          <About />
          <Brand />
          <Process />
          <Stories />
          <Tracks />
          <Speakers />
          <Programme />
          <Satisfied />
          <Pricing />
          <Compare />
          <Faq />
          <Contact />
        </div>
        <Footer />
      </div>
      <Modal />
      <SiteScripts />
    </>
  );
}
