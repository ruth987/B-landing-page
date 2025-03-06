"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ConsultationSection = () => {
  const router = useRouter();
  return (
    <section className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Image */}
        <div className="relative w-full aspect-[4/3]">
          <Image
            src="/images/section-6.jpg" 
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
            Jetzt kostenlose
            <br />
            Erstberatung vereinbaren
          </h2>

          <p className="text-gray-600 text-xs leading-relaxed max-w-xl">
            Wir bieten diskrete und professionelle Unterstützung, um Ihren Nachlass effizient,
            werterhaltend und ohne Aufwand für Sie zu regeln.
          </p>

          <div onClick={() => router.push('/contact')} className="px-8 py-2 bg-primary text-secondary rounded-full w-fit">
            KONTAKT
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;