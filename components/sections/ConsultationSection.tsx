"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ConsultationSection = () => {
  const router = useRouter();
  return (
    <section className="container md:h-[80vh] h-[65vh]">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center md:h-full h-[50%]">
        {/* Left side - Image */}
        <div className="relative w-full md:h-[603px] h-[300px]">
          <Image
            src="/images/consult-pic.png" 
            alt="Modern luxury house at dusk"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right side - Content */}
        <div className="md:space-y-6 space-y-3 lg:pl-8 pl-4 md:pl-0  md:h-full h-[50%] flex flex-col justify-center">
          <span className="text-secondary md:text-sm text-xs tracking-wider pt-4 md:pt-0">
            Werte
          </span>

          <h2 className="md:text-4xl text-2xl font-bold text-primary leading-tight">
            Jetzt kostenlose
            <br />
            Erstberatung vereinbaren
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
            Wir bieten diskrete und professionelle Unterstützung, um Ihren Nachlass effizient,
            werterhaltend und ohne Aufwand für Sie zu regeln.
          </p>

          <div onClick={() => router.push('/contact')} className=" px-8 py-2 md:text-sm text-xs bg-primary text-secondary rounded-full w-fit">
              KONTAKT
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;