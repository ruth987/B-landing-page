import React from 'react';
import NavBar from '../common/NavBar';

const AboutusSection: React.FC = () => {
  return (
    <section
      className="relative h-screen flex items-start md:pt-44 pt-32 md:justify-start justify-center md:pl-40 pl-4 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/herobg.png')" }}
    >
        <div className="absolute top-0 left-0 w-full z-20">
            <NavBar />
        </div>
      <div className="absolute inset-0 bg-primary bg-opacity-60"></div>
      <div className="relative z-10 text-left max-w-3xl p-6">
        <p className="md:text-xs text-[10px]">Kompetenz, Diskretion und ein starkes Netzwerk für Ihre Werte.</p>
        <h1 className="md:text-6xl text-3xl font-bold pt-2">Bühne & Fawier<br />Ihr Experten-Team</h1>
      </div>
    </section>
  );
};

export default AboutusSection;