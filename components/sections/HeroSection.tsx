import React from 'react';
import NavBar from '../common/NavBar';
import { useRouter } from 'next/navigation';

const HeroSection: React.FC = () => {
  const router = useRouter();
  return (
    <section
      className="relative h-screen flex items-start md:pt-44 pt-20 justify-start md:pl-40 px-6 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-section.jpg')" }}
    >
        <div className="absolute top-0 left-0 w-full z-20">
            <NavBar />
        </div>
      <div className="absolute inset-0 bg-primary bg-opacity-10"></div>
      <div className="relative z-10 text-left md:max-w-3xl p-6 text-white">
        <p className="text-xs">Nachlassmanagement ohne Unsicherheiten</p>
        <h1 className="md:text-6xl text-4xl font-bold pt-2 pb-4">Nachlass optimal
        <br />verwerten.</h1>
        <p className='text-sm'>
        Sie haben geerbt und wissen nicht, wo Sie anfangen sollen?
        <br />
        Ihr Nachlass umfasst hochwertige Immobilien, Kunst, Antiquitäten oder Fahrzeuge?
        <br />
        Sie möchten eine reibungslose, diskrete und professionelle Abwicklung?
        </p>

      </div>
      <div className='absolute md:bottom-20 bottom-10 left-0 right-0 md:px-44 px-12'>
        <div className='grid grid-cols-2 md:grid-cols-4 items-center justify-between w-full gap-6 md:gap-0'>
          <div onClick={() => router.push('/services')} className='flex items-center gap-2 cursor-pointer'>
              <p className='md:text-6xl text-xl'>1</p>
              <p className='md:text-sm text-xs'>Maximale
              <br />
              Transparenz</p>
          </div>
          <div onClick={() => router.push('/services')} className='flex items-center gap-2 cursor-pointer'>
              <p className='md:text-6xl text-xl'>2</p>
              <p className='md:text-sm text-xs'>
              Individuelle
              <br />
              Vermarktungsstrategie
              </p>
          </div>
          <div onClick={() => router.push('/services')} className='flex items-center gap-2 cursor-pointer'>
              <p className='md:text-6xl text-xl'>3</p>
              <p className='md:text-sm text-xs'>
              Diskrete
              <br />
              Abwicklung
              </p>
          </div>
          <div onClick={() => router.push('/services')} className='flex items-center gap-2 cursor-pointer'>
              <p className='md:text-6xl text-xl'>4</p>
              <p className='md:text-sm text-xs'>
              Europaweites
              <br />
              Netzwerk
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
