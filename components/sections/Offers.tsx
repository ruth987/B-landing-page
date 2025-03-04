import React from 'react'
import OfferCard from '../common/OfferCard'

const Offers = () => {
  return (
    <div className='bg-secondary-light py-20'>
        <p className='text-primary md:text-4xl text-3xl font-semibold text-center pb-20'>Unser Angebot</p>
        <div className='flex flex-col md:flex-row gap-4 justify-center'>
            <OfferCard number={1} title='Inventarisierung & Bewertung' description='Gerne unterstützen wir Sie bei der Bestandsaufnahme, Inventarisierung und Bewertung Ihrer Vermögensgegenstände. Bei Bedarf erstellen wir Ihnen auch erforderliche Gutachten. More Info' />
            <OfferCard number={2} title='Ankauf' description='Gerne unterbreiten wir Ihnen für sämtliche werthaltigen Einrichtungsgegenstände, Kunst, Sammlungen & Fahrzeugen ein seriöses und marktgerechtes Ankaufsangebot.' />
            <OfferCard number={3} title='Vermarktung' description='Gerne organisieren und planen wir gemeinsam mit Ihnen die wertmaximierende Vermarktung Ihrere Vermögensgegenstände über alle zur Verfügung stehenden Kanäle wir Händler, Sammler, Gallerien, Online Plattformen und Auktionshäuser.' />
        </div>
    </div>
  )
}

export default Offers