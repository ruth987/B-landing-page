"use client"
import Image from 'next/image';

const AssetsSection = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Image */}
        <div className="relative w-full aspect-[4/3]">
          <Image
            src="/images/consult-pic.png" 
            alt="Modern luxury house at dusk"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right side - Content */}
        <div className="space-y-4 lg:pl-8 px-4">
          <span className="text-secondary text-xs md:text-sm tracking-wider">
            Werte
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
            Nachlass-
            <br />
            Verwertung
          </h2>

          <p className="text-gray-600 text-xs leading-relaxed max-w-xl">
            Wir übernehmen die komplette Abwicklung von Nachlässen – von der ersten Bewertung bis zum
            finalen Verkauf. Unser Team sorgt dafür, dass wertvolle Gegenstände wie Möbel, Kunst,
            Schmuck, Fahrzeuge, Immobilien oder Antiquitäten ihren fairen Marktwert erzielen. Dabei stehen
            Ihnen unsere Experten mit Rat und Tat zur Seite, um den Prozess so reibungslos wie möglich zu
            gestalten. Sei es die Planung für den Verkauf oder die Versteigerung Ihrer Wertgegenstände über
            unser Netzwerk der optimalen Auktionshäuser.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AssetsSection;