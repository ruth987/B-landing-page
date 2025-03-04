import React from 'react';
import NavBar from '../common/NavBar';
import Image from 'next/image';

const ServicesSection: React.FC = () => {
  return (
    <section
      className="relative h-screen flex w-full items-center justify-center"
    >
        <div className="absolute top-0 left-0 w-full z-20">
            <NavBar />
        </div>
        <div className='flex items-center justify-center gap-20 w-full px-20'>
            <div className='text-primary w-1/2'>
                <p className='text-xs mb-4'>Maßgeschneiderte Lösungen für Ihren Nachlass</p>
                <p className='text-7xl font-semibold mb-6'>Unsere
                    <br />
                Leistungen</p>
                <p className='text-lg leading-relaxed'>
                Ob Bewertung, Ankauf oder diskrete Vermarktung 
                <br />
                – wir bieten Ihnen eine strukturierte, transparente 
                <br />
                und professionelle Lösung für Ihren Nachlass. 
                </p>
            </div>
            <div className='w-1/2 h-[300px] relative'>
                <Image 
                src="/images/services-right.png" 
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
