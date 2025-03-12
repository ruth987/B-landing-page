import React from 'react'
import ProcessCard from '../common/ProcessCard';

const OurProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Bewertung / Begutachtung",
      description:
        "Gerne erstellen wir Ihnen für Ihren Nachlass / Haushalt eine neutrale Bewertung.",
      // buttonText: "Jetzt kontaktieren",
    },
    {
      number: "2",
      title: "Vermarktungs-strategien / Beratung",
      description:
        "Gerne unterbreiten wir Ihnen  ein seriöses und marktgerechtes Ankaufsangebot oder organisieren und planen gemeinsam mit Ihnen die wertmaximierende Vermarktung Ihrere Vermögensgegenstände.",
    },
    {
      number: "3",
      title: "Projektmanagement / Planung / Organisation / Umsetzung",
      description:"Ankäufe wickeln wir innerhalb von einer Woche ab / Vermarktungsaufträge gestalten wir individuell in Absprache mit Ihnen."    
    },
  ];

  return (
    <section className="bg-primary text-white md:pt-16 pt-10 md:pb-24 pb-16 px-4 md:px-8">
      <div className="max-w-xl flex flex-col justify-between items-start md:ml-44 ml-4 md:mb-12 mb-8">
        <p className="md:text-sm text-xs">Effiziente Nachlasslösung für Erben & Eigentümer</p>
        <h2 className="md:text-4xl text-2xl font-bold mt-2">Unser strukturierter <br className="md:block hidden" /> Prozess für maximale <br className="md:block hidden" /> Werte</h2>
        <p className="mt-4 text-gray-300 md:text-sm text-xs">
          Unser bewährter Prozess stellt sicher, dass Ihr Nachlass professionell bewertet, optimal 
          <br className="md:block hidden" /> verwertet und reibungslos abgewickelt wird. Ob Direktankauf oder individuelle Vermarktung – 
          <br className="md:block hidden" /> wir finden die beste Lösung für Sie.
        </p>
      </div>
      <div className='flex md:flex-row flex-col gap-6 md:gap-10 items-center justify-center'>
        {steps.map((step) => (
          <ProcessCard key={step.number} step={parseInt(step.number)} title={step.title} description={step.description} />
        ))}
      </div>
    </section>
  )
}

export default OurProcessSection