"use client";
import HeroSection from "@/components/sections/HeroSection";
import Contact from "@/components/common/TopContact";
import ExpertSection from "@/components/sections/ExpertSection";
import CollectionCard from "@/components/common/CollectionCard";
import Faqs from "@/components/sections/Faqs";
import Footer from "@/components/common/Footer";

export default function Home() {

  return (
  <div >
    <Contact />
    <HeroSection />
    <ExpertSection />
    <CollectionCard />
    <Faqs />
    <Footer />

  </div>
  );
}



