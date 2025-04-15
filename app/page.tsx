"use client";
import HeroSection from "@/components/sections/HeroSection";
import Contact from "@/components/common/TopContact";
import Faqs from "@/components/sections/Faqs";
import Footer from "@/components/common/Footer";
import TextBox from "@/components/common/TextBox";
import StickyButton from "@/components/common/StickyButton";
import Section2 from "@/components/sections/Section2";
import Offers from "@/components/sections/Offers";
import IntroSection from "@/components/sections/IntroSection";
import ConsultationSection from "@/components/sections/ConsultationSection";
import AboutusSection from "@/components/sections/AboutusSection";
import ExpertSection from "@/components/sections/ExpertSection";
import EstateServices from "@/components/sections/EstateServices";
import AssetsSection from "@/components/sections/AssetsSection";
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
        <TextSection 
        topText="Professionelle Vermögensverwertung"
        text1="Wir beraten Sie persönlich zu Zeithorizont, Bewertung der Vermögensgegenstände und den" 
        text2="besten Vermarktungsstrategien." />
      <ConsultationSection />
      
      {/* ABOUT US SECTION */}
      <div id="about-us"></div>
      <AboutusSection />
      <ExpertSection />
      {/* <CollectionCard /> */}

      {/* OUR SERVICES SECTION */}
      <div id="services"></div>
      <StickyButton />
          <ServicesSection />
        <OurProcessSection />
        <AssetsSection />
        <EstateServices />
        {/* <CollectionCard /> */}
        <TextSection 
        topText="Kostenlose Erstberatung"
        text1="Wir glauben, dass die richtige Entscheidung immer diejenige" 
        text2="ist, die Ruhe und Sicherheit bringt." />
      <div id="faq"></div>
      <Faqs />
      <TextBox text="Nutzen Sie unsere kostenlose Erstberatung unter 069 456 7890" />
      <StickyButton />
      <Footer />
    </div>
  );
}



