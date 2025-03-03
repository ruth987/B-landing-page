import Image from "next/image";
import React from "react";

const Section2 = () => {
    return (
        <section className="w-full bg-primary py-20 flex justify-between items-center pl-40 text-white">
            {/* Left Content */}
            <div className="w-1/2">
                <p className="text-gray-300 text-sm">
                    Für alle, die eine reibungslose und professionelle Abwicklung schätzen
                </p>

                <h1 className="text-3xl font-semibold leading-tight mt-3">
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
                        className="rounded-full w-16 h-16 object-cover border-2 border-white relative z-10"
                    />
                    <Image
                        src="/images/expert.png"
                        alt="Expert 2"
                        width={50}
                        height={50}
                        className="rounded-full w-16 h-16 object-cover border-2 border-white absolute left-10 z-20"
                    />
                    <Image
                        src="/images/expert.png"
                        alt="Expert 3"
                        width={50}
                        height={50}
                        className="rounded-full w-16 h-16 object-cover border-2 border-white absolute left-20 z-30"
                    />
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                    Ohne Erfahrung und Marktkenntnis kann die Nachlassabwicklung schnell komplex und 
                    <br />
                    zeitaufwendig werden – mit dem Risiko, Vermögenswerte unter Wert zu veräußern. 
                    Wir bieten <br /> eine maßgeschneiderte, effiziente Beratung, gestützt auf ein europaweites 
                    Expertennetzwerk <br /> und eine klare Strategie, die eine reibungslose, werterhaltende 
                    Abwicklung sicherstellt.
                </p>
            </div>

            {/* Right Content (Logo) */}
            <div className="w-1/2 flex justify-center">
                <Image
                    src="/images/l-logo-2.svg"
                    alt="Bühne & Fawier Logo"
                    width={200}
                    height={200}
                />
            </div>
        </section>
    );
};

export default Section2;
