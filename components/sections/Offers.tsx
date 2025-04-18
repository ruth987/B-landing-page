import React from 'react'
import OfferCard from '../common/OfferCard'

const Offers = () => {
  return (
    <div id='offers' className='bg-secondary-light py-20'>
        <p className='text-primary md:text-4xl text-3xl font-semibold text-center pb-20'>Unser Versprechen</p>
        <div className='flex flex-col md:flex-row gap-4 justify-center px-4'>
            <OfferCard 
              number={1} 
              title='Unabhängige Beratung' 
              description='Wir handeln unabhängig und frei von eigenen wirtschaftlichen Interessen – 
              denn wir kaufen keine Nachlässe auf eigene Rechnung an. Diese bewusste Entscheidung 
              ermöglicht es uns, neutral und ausschließlich in Ihrem Sinne zu agieren. Sie können 
              sich darauf verlassen, dass unsere Empfehlungen objektiv und transparent sind. Unser 
              Ziel ist es, Sie mit fachlicher Kompetenz, Empathie und Fairness durch alle Schritte 
              der Nachlassabwicklung zu begleiten – ganz ohne versteckte Motive oder Interessenkonflikte.' 
            />
            <OfferCard 
              number={2} 
              title='Individuelle Verwertungsstrategien' 
              description='Erbschaft, Trennung, Alterswandel oder Auswanderung: Jede Situation 
              erfordert eine maßgeschneiderte Lösung. Wir nehmen uns die Zeit, Ihre Situation 
              sorgfältig zu verstehen. Und entwickeln daraus eine klare Strategie, die zu Ihnen passt: 
              realistisch, wertschätzend und mit Blick auf das Wesentliche. Damit Sie mit einem guten 
              Gefühl loslassen können.' 
            />
            <OfferCard 
              number={3} 
              title='Diskretion und Zeitersparnis' 
              description='Viele unserer Kundinnen und Kunden schätzen die unauffällige Arbeitsweise. 
              Ob in einer emotional angespannten Erbangelegenheit oder einer Scheidung – wir agieren 
              diskret, geräuschlos und professionell im Hintergrund. Während wir uns um alles kümmern, 
              gewinnen Sie Zeit und Ruhe. Unser Ziel: Ihnen den Prozess so angenehm und unkompliziert 
              wie möglich zu gestalten, während wir eine detaillierte Schätzung vornehmen.' 
              />
            <OfferCard
              number={4}
              title='Persönlicher Service & maximale Transparenz'
              description='Ein Nachlass, eine Trennung oder ein Umzug werfen viele Fragen auf, nicht 
              nur wirtschaftliche. Deshalb hören wir zuerst zu. Und sprechen erst dann Empfehlungen aus. 
              Sie behalten in jedem Schritt die Kontrolle. Wir sorgen dafür, dass Sie immer genau wissen, 
              wo Sie stehen. Ohne Umwege, ohne Unklarheiten. Nur verlässliche Unterstützung auf Augenhöhe, 
              die Ihnen hilft, sich mit anderen Aufgaben zu beschäftigen'
              />
               <OfferCard
              number={5}
              title='Vertrauensvolle Partnerschaften'
              description='Manchmal entscheidet die Wahl der richtigen Partner über den Erfolg. 
              Unser weltweites Netzwerk aus anerkannten Sammlern, Gutachtern, Auktionshäusern und 
              Juristen öffnet Türen, die sonst verschlossen bleiben, insbesondere bei der Auktion 
              von wertvollen Objekten. So sorgen wir dafür, dass Ihre Werte nicht nur den richtigen 
              Käufer finden, sondern die Wertschätzung, die sie verdienen.'
              />
        </div>
    </div>
  )
}

export default Offers