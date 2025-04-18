"use client";
import HeroSection from "@/components/sections/HeroSection";
import Contact from "@/components/common/TopContact";
import Faqs from "@/components/sections/Faqs";
import Footer from "@/components/common/Footer";
import StickyButton from "@/components/common/StickyButton";
import Section2 from "@/components/sections/Section2";
import Offers from "@/components/sections/Offers";
import IntroSection from "@/components/sections/IntroSection";
import AboutusSection from "@/components/sections/AboutusSection";
import ExpertSection from "@/components/sections/ExpertSection";
import ServicesSection from "@/components/sections/ServicesSection";
import OurProcessSection from "@/components/sections/OurProcessSection";
import TextSection from "@/components/sections/ServiceSection";

export default function Home() {

  return (
    <div className="">
      <Contact />
      <HeroSection />
      <Section2 />
      <Offers />
      <IntroSection />

      {/* OUR SERVICES SECTION */}
      <div id="services"></div>
          <ServicesSection />
        <OurProcessSection />
        {/* <AssetsSection /> */}
        {/* <EstateServices /> */}
        {/* <CollectionCard /> */}
         {/* ABOUT US SECTION */}
         <TextSection 
        topText="Kostenlose Erstberatung"
        text1="Wir glauben, dass die richtige Entscheidung immer diejenige" 
        text2="ist, die Ruhe und Sicherheit bringt." />
      <div id="about-us"></div>
      <AboutusSection />
      <ExpertSection />
      {/* <CollectionCard /> */}
        <TextSection 
        topText="Professionelle Vermögensverwertung"
        text1="Wir beraten Sie persönlich zu Zeithorizont, " 
        text2="Bewertung der Vermögensgegenstände und den besten Vermarktungsstrategien." />
      <div id="faq"></div>
      <Faqs />
      <StickyButton />
      <Footer />
    </div>
  );
}



