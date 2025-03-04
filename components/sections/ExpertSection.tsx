// components/ExpertSection.tsx
import React from 'react';
import ExpertCard from '../common/ExpertCard';
const experts = [
  {
    name: 'Lars Bühne',
    specialization: 'Schwerpunkte Contemporary Arts & Design',
    description: 'Nach meinem BWL-Studium mit Schwerpunkt Steuern und Corporate Finance und langjähriger Tätigkeit als Serial Entrepreneur habe ich über die Jahre eine große Leidenschaft für Zeitgenößischer Kunst, Design und Antiquitäten entwickelt.\n\nMit über 20 Jahren Erfahrung im Kunst- und Antiquitätenhandel bin ich Ihr vertrauensvoller und kompetenter Ansprechpartner für exklusive Nachlassauflösungen.\n\nMeine fundierten Kenntnisse im Bereich der Nachlassbewertung ermöglichen es mir, individuelle und maßgeschneiderte Lösungen für komplexe Nachlässe zu entwickeln.\n\nIch bin spezialisiert auf die Bewertung und den Ankauf von Zeitgenößischer Kunst, Design und Antiquitäten.',
    imageUrl: '/images/expert.png',
  },
  {
    name: 'Erik Bühne',
    specialization: 'Schwerpunkte Collectibles & Asiatika',
    description: 'Mein Name ist Erik und ich bringe über 20 Jahre Erfahrung im internationalen Sales, Hotellerie und der Beratung mit.\n\nHierbei ist mein Interesse an schönen Raritäten, wertvollen Collectibales etc entstanden.\n\nIch bin bei uns im Team spezialisiert auf die Nachlassverwertung und den Ankauf von Uhren, Schmuck, Sports Memorabilia, Collectibales und Asiatika.\n\nMit meinem langjährigen Erfahrung und einem internationalen Netzwerk bewerte ich Ihre Schätze fair und zuverlässig.\n\nVertrauen, Transparenz und Diskretion stehen dabei für uns an erster Stelle.',
    imageUrl: '/images/expert.png',
  },
  {
    name: 'Lars Bühne',
    specialization: 'Schwerpunkte Immobilien, Fahrzeuge',
    description: 'Nach beruflichen Stationen in Reykjavik (Island) und Köln lebe ich seit über 15 Jahren in der pulsierenden Main-Metropole Frankfurt am Main.\n\nAls selbstständiger Architekt mit Schwerpunkt auf Entwurf & Design habe ich eine große Leidenschaft für Häuser, Inneneinrichtungen, Kunst und Luxusgüter entwickelt.\n\nMit über 25 Jahren Erfahrung bin ich Ihr vertrauensvoller und kompetenter Ansprechpartner für exklusive Sammlerstücke, hochwertige Immobilien und dem Ankauf von Oldtimern und Luxusfahrzeugen.\n\nDurch meine Zulassung nach §34c GewO bin ich berechtigt, Wohneigentum professionell für sie zu vermarkten.',
    imageUrl: '/images/expert.png',
  },
];

const ExpertSection: React.FC = () => {
  return (
    <section className="bg-primary text-white md:py-16 py-8 px-4 md:px-8">
      <div className="md:max-w-xl flex flex-col justify-between items-start md:ml-44 mb-8 md:mb-12">
        <p className="text-[10px] md:text-sm">Verlässliche Partner an Ihrer Seite</p>
        <h2 className="text-xl md:text-4xl font-bold mt-2">Wir sind leidenschaftliche Spezialisten aus verschiedenen Bereichen und Märkten</h2>
        <p className="mt-4 text-gray-300 text-sm md:text-base">
        Seit 2025 begleiten wir Erben und Eigentümer bei der professionellen Verwertung von Nachlässen, Wertgegenständen und Immobilien – transparent, diskret und zuverlässig.
        Ob Erbfall, Umzug oder Haushaltsauflösung: Wir bieten kostenlose Beratung, fundierte Bewertungen und individuelle Verkaufsstrategien – vom direkten Ankauf bis zur diskreten Vermarktung.
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