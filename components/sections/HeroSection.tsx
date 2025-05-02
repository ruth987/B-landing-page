import React from 'react';
import NavBar from '../common/NavBar';

const HeroSection: React.FC = () => {
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
        <p className="md:text-lg text-sm">Zuverlässige Lösungen bei Erbschaft, Scheidung, Umzug und Auswanderung</p>
        <h1 className="md:text-6xl text-2xl font-bold pt-2 pb-4">Vermögen und Nachlass  
        <br />optimal verwerten.</h1>
        <p className='md:text-xl text-lg'>
          Wir sind Ihr vertrauensvoller Partner für alle Themen von der Bewertung über die 
          <br />
          Logistik bis hin zu der Verwertung von Immobilien, Fahrzeugen, Kunst und Antiquitäten.
        </p>

      </div>
      <div className='absolute md:bottom-20 bottom-10 left-0 right-0 md:px-24 px-12'>
        <div className='grid grid-cols-2 md:grid-cols-5 items-center justify-between w-full gap-6 md:gap-10'>
          <div onClick={() => {
                            document.getElementById('offers')?.scrollIntoView({behavior: 'smooth'});
                        }} className='flex items-center gap-2 cursor-pointer'>
              <p className='md:text-6xl text-xl'>1</p>
              <p className='md:text-[16px] font-semibold text-xs'>Unabhängige
              <br />
              Beratung</p>
          </div>
          <div onClick={() => {
                            document.getElementById('offers')?.scrollIntoView({behavior: 'smooth'});
                        }}  className='flex items-center gap-2 cursor-pointer'>
              <p className='md:text-6xl text-xl'>2</p>
              <p className='md:text-[16px] font-semibold text-xs'>
              Individuelle
              <br />
              Verwertungsstrategien
              </p>
          </div>
          <div onClick={() => {
                            document.getElementById('offers')?.scrollIntoView({behavior: 'smooth'});
                        }}  className='flex items-center gap-2 cursor-pointer'>
              <p className='md:text-6xl text-xl'>3</p>
              <p className='md:text-[16px] font-semibold text-xs'>
              Diskretion und 
              <br />
              Zeitersparnis
              </p>
          </div>
          <div onClick={() => {
                            document.getElementById('offers')?.scrollIntoView({behavior: 'smooth'});
                        }}  className='flex items-center gap-2 cursor-pointer'>
              <p className='md:text-6xl text-xl'>4</p>
              <p className='md:text-[16px] font-semibold text-xs'>
              Persönlicher Service & 
              <br />
              maximale Transparenz
              </p>
          </div>
          <div onClick={() => {
                            document.getElementById('offers')?.scrollIntoView({behavior: 'smooth'});
                        }}  className='flex items-center gap-2 cursor-pointer'>
              <p className='md:text-6xl text-xl'>5</p>
              <p className='md:text-[16px] font-semibold text-xs'>
              Vertrauensvolle
              <br />
              Partnerschaften
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
