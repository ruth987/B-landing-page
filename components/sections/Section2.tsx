import Image from "next/image";
import React from "react";

const Section2 = () => {
    return (
        <section className="w-full bg-primary py-20 flex md:flex-row flex-col justify-between items-center md:pl-40 px-6 text-white">
            {/* Left Content */}
            <div className="md:w-1/2 w-full">
                <p className="text-gray-300 md:text-sm text-xs">
                    Für alle, die eine reibungslose und professionelle Abwicklung schätzen
                </p>

                <h1 className="md:text-4xl text-2xl font-semibold leading-tight mt-3">
                    Ihre individuelle Beratung
                    <br />
                    für die bestmögliche
                    <br />
                    Vermarktungsstrategie.
                </h1>

                {/* Profile Images */}
                <div className="flex items-center mt-10 relative">
                    <Image
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
                    />
                </div>

                {/* Description */}
                <p className="text-gray-300 md:text-sm text-xs mt-2 leading-relaxed">
                    Ohne Erfahrung und Marktkenntnis kann die Nachlassabwicklung schnell komplex und 
                    zeitaufwendig werden – mit dem Risiko, Vermögenswerte unter Wert zu veräußern. 
                    Wir bieten eine maßgeschneiderte, effiziente Beratung, gestützt auf ein europaweites 
                    Expertennetzwerk und eine klare Strategie, die eine reibungslose, werterhaltende 
                    Abwicklung sicherstellt.
                </p>
            </div>

            {/* Right Content (Logo) */}
            <div className="hidden md:w-1/2 w-full md:flex justify-center mt-10 md:mt-0">
                <Image
                    src="/images/l-logo-2.svg"
                    alt="Bühne & Fawier Logo"
                    width={200}
                    height={200}
                    className="md:w-[200px] w-[150px]"
                />
            </div>
        </section>
    );
};

export default Section2;
