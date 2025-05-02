import React from 'react'
import ProcessCard from '../common/ProcessCard';

const OurProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Bewertung & Begutachtung",
      subtitle:"Wissen, was Ihre Vermögensgegenstände wert sind.",
      description:
        "Eine klare Einschätzung ist die Grundlage für jede Entscheidung. Unsere zertifizierten Gutachter bewerten Ihren Nachlass und Ihr Vermögen – neutral, fundiert und unabhängig. Ob Immobilien, Kunstwerke, Sammlungen oder Antiquitäten: Sie erhalten eine transparente und realistische Einschätzung des Marktwertes.",
      bolddescription:"Wir analysieren Ihren Nachlass professionell und unabhängig. So schaffen wir Klarheit und eine verlässliche Basis für alle weiteren Schritte.",
    },  
    {
      number: "2",
      title: "Individuelle Vermarktungsstrategie",
      subtitle:"Den bestmöglichen Wert erzielen mit einer Strategie, die zu Ihnen passt.",
      description:"Gemeinsam mit Ihnen entwickeln wir eine Vermarktungsstrategie, die genau zu Ihrer Situation passt und auf Ihre Ziele, Ihren Zeitrahmen und Ihre Wünsche abgestimmt ist. Wenn Sie mit Weitblick entscheiden wollen und Wert auf Transparenz und Verantwortung legen, sind wir Ihr Partner.",
      bolddescription:"Unser europaweites Netzwerk aus Sammlern, Galerien und Auktionshäusern ermöglicht es uns, gezielt den Wert Ihres Nachlasses zu maximieren.",
    },
    {
      number: "3",
      title: "Planung & Umsetzung",
      subtitle:"Entlastung durch professionelles Projektmanagement.",
      description:"Sie möchten nichts dem Zufall überlassen? Wir übernehmen als Ihr Partner die komplette Organisation und Abwicklung: von der Inventarisierung über die Logistik bis hin zur transparenten Abrechnung. Unser erfahrenes Team sorgt für eine reibungslose, werterhaltende Umsetzung. Diskret, effizient und verlässlich."   , 
      bolddescription:"Für Familien, die eine stressfreie Auflösung wünschen, mit der Sicherheit, dass alles in besten Händen ist und jeder Schritt mit Sorgfalt und Verantwortung erfolgt.",
    },
  ];

  return (
    <section className="bg-secondary-light  md:pt-16 pt-10 md:pb-24 pb-16 px-4 md:px-8">
      <div className=" flex flex-col justify-between items-start md:ml-32 ml-4 md:mb-12 mb-8">
        <h2 className="md:text-4xl text-2xl font-bold mt-2">Unsere Leistungen</h2>
      
      </div>
      <div className='flex md:flex-row flex-col gap-6 md:gap-10 items-center justify-center'>
        {steps.map((step) => {
          const romanNumerals = ['I', 'II', 'III'];
          const romanStep = romanNumerals[parseInt(step.number) - 1];
          return (
            <ProcessCard key={step.number} step={romanStep} subtitle={step.subtitle} title={step.title} description={step.description} bolddescription={step.bolddescription} />
          );
        })}
      </div>
    </section>
  )
}

export default OurProcessSection