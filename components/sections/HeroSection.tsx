import React from 'react';
import NavBar from '../common/NavBar';
import { Button } from '../ui/button';

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative h-screen flex items-start pt-44 justify-start pl-40 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
        <div className="absolute top-0 left-0 w-full z-20">
            <NavBar />
        </div>
      <div className="absolute inset-0 bg-primary bg-opacity-10"></div>
      <div className="relative z-10 text-left max-w-3xl p-6 text-white">
        <p className="text-xs">Nachlassmanagement ohne Unsicherheiten</p>
        <h1 className="text-6xl font-bold pt-2 pb-4">Nachlass optimal
        <br />verwerten.</h1>
        <p className='text-sm'>
        Sie haben geerbt und wissen nicht, wo Sie anfangen sollen?
        <br />
        Ihr Nachlass umfasst hochwertige Immobilien, Kunst, Antiquitäten oder Fahrzeuge?
        <br />
        Sie möchten eine reibungslose, diskrete und professionelle Abwicklung?
        </p>
        <Button className='bg-white rounded-full text-black mt-6 px-10 py-4'>Kostenlose Erstberatung</Button>
      </div>
      <div className='absolute bottom-20 left-0 right-0 px-44'>
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center gap-2'>
              <p className='text-6xl '>1</p>
              <p>Maximale Transparenz</p>
          </div>
          <div className='flex items-center gap-2'>
              <p className='text-6xl'>2</p>
              <p>
              Individuelle
              <br />
              Vermarktungsstrategie
              </p>
          </div>
          <div className='flex items-center gap-2'>
              <p className='text-6xl '>3</p>
              <p>
              Diskrete
              <br />
              Abwicklung
              </p>
          </div>
          <div className='flex items-center gap-2'>
              <p className='text-6xl '>4</p>
              <p>Europaweites
              <br />
              Netzwerk</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
