"use client"
import React from 'react'
import ServicesSection from '@/components/sections/ServicesSection'
import TopContact from '@/components/common/TopContact'
import StickyButton from '@/components/common/StickyButton'
import OurProcessSection from '@/components/sections/OurProcessSection'
import AssetsSection from '@/components/sections/AssetsSection'
import Faqs from '@/components/sections/Faqs'
import TextBox from '@/components/common/TextBox'
import Footer from '@/components/common/Footer'
import CollectionCard from '@/components/common/CollectionCard'
import EstateServices from '@/components/sections/EstateServices'

const page = () => {
  return (
    <div>
        <StickyButton />
        <TopContact />
        <ServicesSection />
        <OurProcessSection />
        <AssetsSection />
        <EstateServices />
        <CollectionCard />
        <Faqs />
        <TextBox text="Nutzen Sie unsere kostenlose Erstberatung unter 069 456 7890" />
        <Footer />

    </div>
  )
}

export default page