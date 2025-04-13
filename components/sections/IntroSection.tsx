import React from 'react';
import Image from 'next/image';

const IntroSection = () => {
    return (
        <section className="container mx-auto px-4 py-20 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div className="space-y-2">
                    <p className="text-gray-600 md:text-xs text-[10px]">
                        Für alle, die eine reibungslose und professionelle Abwicklung schätzen
                    </p>

                    <div className="space-y-4">
                        <h1 className="md:text-4xl text-2xl font-bold text-primary leading-tight">
                            Bühne & Fawier
                            <br />
                            Ihre Experten für
                            <br />
                            die individuelle Beratung und diskrete Vermarktung
                        </h1>
                    </div>

                    <p className="text-gray-600 md:text-sm text-xs leading-relaxed">
                    Mit unserer Erfahrung, unserem feinen Gespür für Werte und der nötigen Diskretion sorgen wir dafür,
                    dass Ihr Nachlass sicher und in Ihrem Sinne geregelt wird. Leise. Verlässlich. Ohne Umwege. An unseren 
                    Standorten in Nordrhein-Westfalen und dem Großraum Frankfurt am Main und überall dort, wo Sie uns brauchen.
                    </p>

                    
                </div>

                {/* Right Side - Image or Content */}
                <div className="bg-blue-50 rounded-lg h-full min-h-[400px]">
                    <Image 
                    src="/images/porche.png" 
                    alt="Intro Section" 
                    width={500} 
                    height={500} 
                    className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className="md:pt-16 pt-8">
                        <p className="flex items-center gap-2 md:text-base text-sm">
                            <span className="font-semibold">Standorte:</span>
                            <span className="text-gray-600">Wiehl, Köln & Frankfurt am Main</span>
                        </p>
                    </div>
        </section>
    );
};

export default IntroSection;