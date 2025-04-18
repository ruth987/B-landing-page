import Image from "next/image";
import React from "react";

const Section2 = () => {
    return (
        <section className="w-full bg-primary py-20 flex md:flex-row flex-col justify-between items-center md:pl-28 px-6 text-white">
            {/* Left Content */}
            <div className="md:w-2/3 w-full">
                <p className="text-gray-300 md:text-sm text-xs">
                    Professionelle Vermögensverwertung
                </p>

                <h1 className="md:text-4xl text-2xl font-semibold leading-tight mt-3">
                    Vermögensverwertung, die Zeit spart 
                    
                    <br />
                    und Sicherheit schafft
                </h1>

                {/* Profile Images */}
                <div className="flex items-center mt-10 relative">
                    {/* <Image
                        src="/images/expert.png"
                        alt="Expert 1"
                        width={50}
                        height={50}
                        className="rounded-full md:w-16 md:h-16 w-12 h-12 object-cover border-2 border-white relative z-10"
                    />
                    <Image
                        src="/images/expert.png"
                        alt="Expert 2"
                        width={50}
                        height={50}
                        className="rounded-full md:w-16 md:h-16 w-12 h-12 object-cover border-2 border-white absolute md:left-10 left-8 z-20"
                    />
                    <Image
                        src="/images/expert.png"
                        alt="Expert 3"
                        width={50}
                        height={50}
                        className="rounded-full md:w-16 md:h-16 w-12 h-12 object-cover border-2 border-white absolute md:left-20 left-16 z-30"
                    /> */}
                </div>

                {/* Description */}
                <p className="text-gray-300 md:text-sm text-xs mt-2 leading-relaxed">
                Sie haben geerbt, durchleben eine Scheidung, planen den Umzug ins Ausland oder möchten sich im Alter anpassen?
                <br />
                Ihr Besitz umfasst Kunst, Antiquitäten, Fahrzeuge oder Immobilien, die bewertet oder vermarktet werden sollen?
                <br />
                Sie wünschen sich eine professionelle und diskrete Abwicklung ohne eigenen Aufwand?
                <br />
                Mit persönlicher Beratung, einer durchdachten Strategie und einem europaweiten Expertennetzwerk sorgen wir dafür, 
                dass Ihre Werte optimal erhalten und vermarktet werden – strukturiert, transparent und vertrauensvoll.
                </p>
            </div>

            {/* Right Content (Logo) */}
            <div className="hidden md:w-1/3 w-full md:flex justify-center mt-10 md:mt-0">
                <Image
                    src="/images/WHITE_ThickenedLogo_Quattrocento Sans_Bold_Vertical_DAN_1.svg"
                    alt="Bühne & Fawier Logo"
                    width={230}
                    height={230}
                    className="md:w-[230px] w-[150px]"
                />
            </div>
        </section>
    );
};

export default Section2;
