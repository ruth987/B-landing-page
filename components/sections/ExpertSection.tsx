// components/ExpertSection.tsx
import React from 'react';
import ExpertCard from '../common/ExpertCard';
const experts = [
  {
    name: 'Lars Bühne',
    specialization: 'Schwerpunkte Contemporary Arts & Design',
    description: 'Lars Bühne verbindet betriebswirtschaftliches Know-how mit über 20 Jahren Leidenschaft für zeitgenössische Kunst, Designobjekte und Antiquitäten. Mit einem analytischen Blick und einem tiefen Verständnis für den Kunst- und Antiquitätenmarkt entwickelt er maßgeschneiderte Verwertungsstrategie, die wirtschaftlich und werterhaltend zugleich sind.',
    imageUrl: '/images/guy2.jpg',
    action: 'mailto:lb@buehne-fawier.com',
  },
  {
    name: 'Erik Bühne',
    specialization: 'Schwerpunkte Collectibles & Asiatika',
    description: 'Erik Bühne bringt über 20 Jahre internationale Vertriebs- und Beratungserfahrung mit. Seine Ausbildung im Hotelfach und die Leidenschaft für außergewöhnliche Collectibles, und ausgewählte Asiatika prägen seinen Blick für das Wertvolle. Er weiß genau, worauf es ankommt, damit Schätze fair bewertet und diskret in die richtigen Hände vermittelt werden. Transparent, zuverlässig und immer im Sinne unserer Kunden.',
    imageUrl: '/images/guy3.jpg',
    action: 'mailto:eb@buehne-fawier.com',
  },
  {
    name: 'Sebastian Fawier',
    specialization: 'Schwerpunkte Immobilien, Fahrzeuge',
    description: 'Sebastian Fawier ist Architekt mit einer Leidenschaft für Immobilien, Inneneinrichtung und exklusive Fahrzeuge. Nach beruflichen Stationen in Reykjavik und Köln lebt er heute in Frankfurt am Main. Mit über 25 Jahren Erfahrung ist er ein Experte für die Begutachtung und Vermarktung hochwertiger Immobilien, Oldtimer, Luxusfahrzeuge und Designklassiker. Als zugelassener Immobilienmakler garantiert er eine professionelle Vermarktung, legt höchsten Wert auf Qualität und Werterhalt und sorgt für eine zuverlässige und reibungslose Abwicklung.',
    imageUrl: '/images/guy1.jpg',
    action: 'mailto:sf@buehne-fawier.com',
  },
];

const ExpertSection: React.FC = () => {
  return (
    <section className="bg-primary text-white md:py-16 py-8 px-4 md:px-8">
      <div className="md:max-w-xl flex flex-col justify-between items-start md:ml-44 mb-8 md:mb-12">
        <p className="text-[10px] md:text-sm">Bühne & Fawier</p>
        <h2 className="text-xl md:text-4xl font-bold mt-2">Drei Experten. Eine gemeinsame Mission.</h2>
        <p className="mt-4 text-gray-300 text-sm md:text-base">
          Ein Nachlass ist mehr als die Summe seiner Werte. Es sind Erinnerungen, Geschichten und 
          Verantwortung. Gemeinsam bündeln wir unsere Expertise und unsere Netzwerke, um Nachlässe 
          mit Weitsicht, Diskretion und Verantwortungsbewusstsein zu vermarkten.
        </p>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-8">
        {experts.map((expert, index) => (
          <ExpertCard key={index} {...expert} />
        ))}
      </div>
    </section>
  );
};

export default ExpertSection;