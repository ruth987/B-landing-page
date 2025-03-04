"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const AssetsSection = () => {
  const router = useRouter();
  return (
    <section className="container h-[80vh]">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-full">
        {/* Left side - Image */}
        <div className="relative w-full h-[603px]">
          <Image
            src="/images/consult-pic.png" 
            alt="Modern luxury house at dusk"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right side - Content */}
        <div className="space-y-4 lg:pl-8">
          <span className="text-secondary text-sm tracking-wider">
            Werte
          </span>

          <h2 className="text-4xl font-bold text-primary leading-tight">
          Nachlass-
          <br />
          Verwertung
          </h2>

          <p className="text-gray-600 text-xs leading-relaxed max-w-xl">
          Wir übernehmen die komplette Abwicklung von Nachlässen – von der ersten Bewertung bis zum 
          <br />
          finalen Verkauf. Unser Team sorgt dafür, dass wertvolle Gegenstände wie Möbel, Kunst, 
          <br />
          Schmuck, Fahrzeuge, Immobilien oder Antiquitäten ihren fairen Marktwert erzielen. Dabei stehen 
          <br />
          Ihnen unsere Experten mit Rat und Tat zur Seite, um den Prozess so reibungslos wie möglich zu 
          <br />
          gestalten. Sei es die Planung für den Verkauf oder die Versteigerung Ihrer Wertgegenstände über 
          <br />
          unser Netzwerk der optimalen Auktionshäuser.
          </p>

        </div>
      </div>
    </section>
  );
};

export default AssetsSection;