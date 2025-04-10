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
import ServiceSection from "@/components/sections/ServiceSection";
import ConsultationSection from "@/components/sections/ConsultationSection";
import AboutusSection from "@/components/sections/AboutusSection";
import CollectionCard from "@/components/common/CollectionCard";
import ExpertSection from "@/components/sections/ExpertSection";
import EstateServices from "@/components/sections/EstateServices";
import AssetsSection from "@/components/sections/AssetsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import OurProcessSection from "@/components/sections/OurProcessSection";

export default function Home() {

  return (
    <div className="">
      <Contact />
      <HeroSection />
      <Section2 />
      <Offers />
      <IntroSection />
      <ServiceSection />
      <ConsultationSection />
      
      {/* ABOUT US SECTION */}
      <div id="about-us"></div>
      <AboutusSection />
      <ExpertSection />
      <CollectionCard />

      {/* OUR SERVICES SECTION */}
      <div id="services"></div>
      <StickyButton />
          <ServicesSection />
        <OurProcessSection />
        <AssetsSection />
        <EstateServices />
        <CollectionCard />

      <Faqs />
      <TextBox text="Nutzen Sie unsere kostenlose Erstberatung unter 069 456 7890" />
      <StickyButton />
      <Footer />
    </div>
  );
}



