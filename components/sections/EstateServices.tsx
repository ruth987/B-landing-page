import React from "react";
import EstateServiceCard from "../common/EstateServiceCard";

const EstateServices = () => {
  const services = [
    {
      title: "Dokumentation, Inventarisierung & Bewertung",
      description:
        "Unsere erfahrenen Sachverständigen bieten professionelle Bewertungen von Wertgegenständen. Ob Kunst, Fahrzeuge, Immobilien,  Antiquitäten oder Sammlerstücke – wir ermitteln den fairen Marktwert und stellen Ihnen bei Bedarf ein detailliertes Gutachten aus.",
      image: "/images/consult-pic.png",
    },
    {
      title: "Nachlassankauf / Ankauf Haushaltsauflösung",
      description:
        "Wenn gewünscht kaufen wir Ihren Nachlass und / oder Ihren Haushalt direkt an.",
      image: "/images/consult-pic.png", 
    },
  ];

  return (
    <section className="pt-16 pb-24 px-6 bg-white">
      <div className=" w-fullmx-auto flex justify-around">
        {services.map((service, index) => (
          <EstateServiceCard key={index} image={service.image} title={service.title} description={service.description} />
        ))}
      </div>
    </section>
  );
};

export default EstateServices;
