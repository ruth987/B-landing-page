"use client";
import HeroSection from "@/components/sections/HeroSection";
import Faqs from "@/components/sections/Faqs";
import Footer from "@/components/common/Footer";
import StickyButton from "@/components/common/StickyButton";
import Section2 from "@/components/sections/Section2";
import Offers from "@/components/sections/Offers";
import IntroSection from "@/components/sections/IntroSection";
import AboutusSection from "@/components/sections/AboutusSection";
import ExpertSection from "@/components/sections/ExpertSection";
import OurProcessSection from "@/components/sections/OurProcessSection";
import TextSection from "@/components/sections/ServiceSection";

export default function Home() {

  return (
    <div className="">
      <HeroSection />
      <Section2 />
      <div id="promise"></div>
      <Offers />
      <IntroSection />

      {/* OUR SERVICES SECTION */}
      <div id="services"></div>
          {/* <ServicesSection /> */}
        <OurProcessSection />
         {/* ABOUT US SECTION */}
         <TextSection 
        text1="Wir glauben, dass die richtige Entscheidung immer diejenige" 
        text2="ist, die Ruhe und Sicherheit bringt." />
      <div id="about-us"></div>
      <AboutusSection />
      <ExpertSection />
      {/* <CollectionCard /> */}
        <TextSection 
        text1="Wir beraten Sie persönlich bezüglich Zeithorizont, " 
        text2="Bewertung der Vermögensgegenstände und den besten Vermarktungsstrategien." />
      <div id="faq"></div>
      <Faqs />
      <TextSection 
        text1="Ob Bewertung, Logistik oder individuelle und diskrete Vermarktung, wir " 
        text2="bieten Ihnen eine strukturierte, transparente und professionelle Lösung." />
      <StickyButton />
      <Footer />
    </div>
  );
}



