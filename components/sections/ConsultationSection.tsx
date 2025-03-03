"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ConsultationSection = () => {
  const router = useRouter();
  return (
    <section className="container h-[80vh]">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-full">
        {/* Left side - Image */}
        <div className="relative w-full h-[610px]">
          <Image
            src="/images/consult-pic.png" 
            alt="Modern luxury house at dusk"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right side - Content */}
        <div className="space-y-6 lg:pl-8">
          <span className="text-secondary text-sm tracking-wider">
            Werte
          </span>

          <h2 className="text-4xl font-bold text-primary leading-tight">
            Jetzt kostenlose
            <br />
            Erstberatung vereinbaren
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
            Wir bieten diskrete und professionelle Unterstützung, um Ihren Nachlass effizient,
            werterhaltend und ohne Aufwand für Sie zu regeln.
          </p>

          <div onClick={() => router.push('/contact')} className=" px-8 py-2 text-sm bg-primary text-secondary rounded-full w-fit">
              KONTAKT
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;