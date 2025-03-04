import React from 'react';

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
                            diskrete Nachlasslösungen
                        </h1>
                    </div>

                    <p className="text-gray-600 md:text-sm text-xs leading-relaxed">
                        Wir sind spezialisiert auf die Verwertung hochwertiger Nachlässe
                        und <br className='hidden md:block' />
                        bieten exklusive Lösungen für Erben, die sich nicht selbst um
                        die <br className='hidden md:block' />Abwicklung kümmern möchten.
                    </p>

                    
                </div>

                {/* Right Side - Image or Content */}
                <div className="bg-blue-50 rounded-lg h-full min-h-[400px]">
                    {/* image or some content */}
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