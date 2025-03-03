'use client'
import React from 'react'
import Contact from '@/components/common/TopContact'
import AboutusSection from '@/components/sections/AboutusSection'
import ExpertSection from '@/components/sections/ExpertSection'
import CollectionCard from '@/components/common/CollectionCard'
import Faqs from '@/components/sections/Faqs'
import TextBox from '@/components/common/TextBox'
import StickyButton from '@/components/common/StickyButton'
import Footer from '@/components/common/Footer'
const page = () => {
  return (
    <div>
        <Contact />
    <AboutusSection />
    <ExpertSection />
    <CollectionCard />
    <Faqs />
    <TextBox text="Nutzen Sie unsere kostenlose Erstberatung unter 069 456 7890" />
    <StickyButton />
    <Footer />

    </div>
  )
}

export default page