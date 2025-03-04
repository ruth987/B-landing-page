import React from 'react'
import ProcessCard from '../common/ProcessCard';

const OurProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Kontakt",
      description:
        "Sie erreichen uns telefonisch oder per E-Mail für eine kostenlose Erstberatung.",
      buttonText: "Jetzt kontaktieren",
    },
    {
      number: "2",
      title: "Bewertung",
      description:
        "Gerne erstellen wir Ihnen für Ihren Nachlass / Haushalt eine neutrale Bewertung.",
    },
    {
      number: "3",
      title: "Ankauf / Vermarktung",
      description:
        "Gerne unterbreiten wir Ihnen ein seriöses und marktgerechtes Ankaufangebot oder organisieren die wertmaximierende Vermarktung Ihrer Vermögensgegenstände.",
    },
    {
      number: "4",
      title: "Abrechnung",
      description:
        "Ankäufe wickeln wir innerhalb von einer Woche ab / Vermarktungsaufträge gestalten wir individuell in Absprache mit Ihnen.",
    },
  ];

  return (
    <section className="bg-primary text-white pt-16 pb-24 px-8">
      <div className=" max-w-xl flex flex-col justify-between items-start ml-44 mb-12">
        <p className="text-sm">Effiziente Nachlasslösung für Erben & Eigentümer</p>
        <h2 className="text-4xl font-bold mt-2">Unser strukturierter <br /> Prozess für maximale <br /> Werte</h2>
        <p className="mt-4 text-gray-300 text-sm">
        Unser bewährter Prozess stellt sicher, dass Ihr Nachlass professionell bewertet, optimal 
        <br /> verwertet und reibungslos abgewickelt wird. Ob Direktankauf oder individuelle Vermarktung – 
        <br /> wir finden die beste Lösung für Sie.
        </p>
      </div>
      <div className='flex gap-10 justify-center'>
        {steps.map((step) => (
          <ProcessCard key={step.number} step={parseInt(step.number)} title={step.title} description={step.description} />
        ))}
      </div>
    </section>
  )
}

export default OurProcessSection