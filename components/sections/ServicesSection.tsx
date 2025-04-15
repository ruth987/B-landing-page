import React from 'react';
import Image from 'next/image';

const ServicesSection: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex w-full items-center justify-center"
    >
        <div className='flex md:flex-row flex-col items-center justify-center md:gap-20 gap-10 w-full md:px-20 px-4 py-20 md:py-0'>
            <div className='text-primary md:w-1/2 w-full'>
                <p className='md:text-xs text-[10px] mb-4'>Maßgeschneiderte Lösungen für Ihren Nachlass</p>
                <p className='md:text-7xl text-4xl font-semibold mb-6'>Unsere
                    <br />
                Leistungen</p>
                <p className='md:text-lg text-sm md:leading-relaxed'>
                Ob Bewertung, Ankauf oder diskrete Vermarktung 
                <br className='md:block hidden'/>
                – wir bieten Ihnen eine strukturierte, transparente 
                <br className='md:block hidden'/>
                und professionelle Lösung für Ihren Nachlass. 
                </p>
            </div>
            <div className='md:w-1/2 w-full md:h-[500px] h-[300px] relative'>
                <Image 
                src="/images/Einpacken.jpeg" 
                alt="services-section" 
                fill
                className='object-cover'
                />
            </div>
        </div>

    </section>
  );
};

export default ServicesSection;
