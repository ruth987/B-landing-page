import React from 'react';

const AboutusSection: React.FC = () => {
  return (
    <section
      className="relative md:h-screen flex items-start md:pt-80 pt-32 md:justify-start justify-center md:pl-40 pl-4 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/group-photo.jpg')" }}
    >

      <div className="absolute inset-0 bg-primary bg-opacity-60"></div>
      <div className="relative z-10 text-left max-w-3xl p-6">
        <h1 className="md:text-6xl text-3xl font-bold pt-2">Bühne & Fawier</h1>
      </div>
    </section>
  );
};

export default AboutusSection;