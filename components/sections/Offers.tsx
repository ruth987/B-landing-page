import React from 'react'
import OfferCard from '../common/OfferCard'

const Offers = () => {
  return (
    <div className='bg-secondary-light py-20'>
        <p className='text-primary md:text-4xl text-3xl font-semibold text-center pb-20'>Unser Versprechen / Unsere Values</p>
        <div className='flex flex-col md:flex-row gap-4 justify-center'>
            <OfferCard 
              number={1} 
              title='Individuelle Vermarktungsstrategien' 
              description='Mit unserer Expertise entwickeln wir individuelle Vermarktungsstrategien, die genau auf Ihre Bedürfnisse zugeschnitten sind. Wir erklären Ihnen alle Optionen transparent, wägen Vor- und Nachteile ab und berücksichtigen Ihren persönlichen Zeithorizont – für eine Entscheidung, die Sie mit gutem Gefühl treffen können.' 
            />
            <OfferCard 
              number={2} 
              title='Diskretion und Zeitersparnis' 
              description='Wir handeln vertraulich in Ihrem Auftrag und übernehmen organisatorische Aufgaben, um Ihnen Zeit, Mühe und Unannehmlichkeiten zu ersparen. So können Sie sich auf das Wesentliche konzentrieren. Ihre Privatsphäre steht bei uns an erster Stelle. Wir handeln vertraulich in Ihrem Auftrag und sorgen dafür, dass sensible Angelegenheiten diskret und professionell abgewickelt werden – ganz ohne Aufsehen.Unser Ziel: Ihnen den Prozess so angenehm und unkompliziert wie möglich zu gestalten.' 
            />
            <OfferCard 
              number={3} 
              title='Persönlicher Service / maximale Transparenz' 
              description='Sie legen Wert auf persönliche Betreuung und fundierte Beratung? Bei uns stehen Sie im Mittelpunkt. Wir hören Ihnen zu, verstehen IhreBedürfnisse und bieten Ihnen eine Unterstützung, die höchsten Ansprüchen gerecht wird.' 
              />
            <OfferCard
              number={4}
              title='Vertrauensvolle Partnerschaften'
              description='Durch unsere langjährigen Verbindungen zu Sammlern, Galerien, Händlern, Restauratoren, Gutachtern und international agierenden Auktionshäusern finden wir die besten Wege, um den Wert Ihres Nachlasses zu maximieren – europaweit und darüber hinaus. Zudem wir pflegen eine enge und vertrauensvolle Kooperation mit angesehenen Kanzleien, Notaren, Rechtsanwälten, Rechtspflegern, Nachlassverwaltern und Steuerberatern. So gewährleisten wir eine rechtlich und steuerlich einwandfreie Abwicklung – alles aus einer Hand.'
              />
        </div>
    </div>
  )
}

export default Offers