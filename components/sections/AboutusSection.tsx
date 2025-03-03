import React from 'react';
import NavBar from '../common/NavBar';

const AboutusSection: React.FC = () => {
  return (
    <section
      className="relative h-screen flex items-start pt-44 justify-start pl-40 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/herobg.png')" }}
    >
        <div className="absolute top-0 left-0 w-full z-20">
            <NavBar />
        </div>
      <div className="absolute inset-0 bg-primary bg-opacity-60"></div>
      <div className="relative z-10 text-left max-w-3xl p-6">
        <p className="text-xs">Kompetenz, Diskretion und ein starkes Netzwerk für Ihre Werte.</p>
        <h1 className="text-6xl font-bold pt-2">Bühne & Fawier<br />Ihr Experten-Team</h1>
      </div>
    </section>
  );
};

export default AboutusSection;
