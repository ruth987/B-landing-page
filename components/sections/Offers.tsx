import React from 'react'
import OfferCard from '../common/OfferCard'

const Offers = () => {
  return (
    <div className='bg-secondary-light py-20'>
        <p className='text-primary md:text-4xl text-3xl font-semibold text-center pb-20'>Unser Versprechen / Unsere Values</p>
        <div className='flex flex-col md:flex-row gap-4 justify-center px-4'>
            <OfferCard 
              number={1} 
              title='Unabhängige Beratung statt Eigeninteresse' 
              description='Wir kaufen keine Nachlässe direkt an. So bleiben wir neutral, handeln ausschließlich in Ihrem Sinne und
              sichern Ihnen eine faire, transparente Begleitung ganz ohne Interessenskonflikte.' 
            />
            <OfferCard 
              number={2} 
              title='Individuelle Verwertungsstrategien' 
              description='Jeder Nachlass ist anders. Deshalb entwickeln wir gemeinsam mit Ihnen eine Lösung, die zu Ihrem
              Zeitrahmen, Ihrem Bedarf und den Besonderheiten des Nachlasses passt.' 
            />
            <OfferCard 
              number={3} 
              title='Diskretion und Zeitersparnis' 
              description='Wir übernehmen die Organisation, koordinieren alle Beteiligten und sorgen dafür, dass der Prozess
              effizient, professionell und ohne unnötige Belastung für Sie verläuft.' 
              />
            <OfferCard
              number={4}
              title='Persönlicher Service und maximale Transparenz'
              description='Sie haben jederzeit einen festen Ansprechpartner und volle Einblicke in alle Schritte. Wir
              kommunizieren offen, klar und auf Augenhöhe.'
              />
               <OfferCard
              number={5}
              title='Vertrauensvolle Partnerschaften'
              description='Durch unser Netzwerk aus Gutachtern, Juristen, Auktionshäusern und Fachpartnern bieten wir Ihnen
              Zugang zu den besten Optionen, weltweit und mit geprüfter Qualität.'
              />
        </div>
    </div>
  )
}

export default Offers