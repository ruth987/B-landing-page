"use client"

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Check } from 'lucide-react';

const Faqs = () => {
  return (
    <div className='flex md:flex-row flex-col items-start justify-center gap-5 md:gap-20 md:py-20 py-0 px-4 md:mt-2 mt-6 '>
        <div className='flex flex-col gap-2 md:pt-10 pt-4'>
            <p className='md:text-xs text-[10px]'>FAQS</p>
            <p className='md:text-4xl text-2xl font-semibold'>Häufig gestellte Fragen</p>
        </div>
        <div className='max-w-2xl w-full'>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Warum ist eine professionelle Nachlassberatung so wichtig?</AccordionTrigger>
                    <AccordionContent>
                    Ein Nachlass ist oft mit finanziellen, rechtlichen und emotionalen Herausforderungen verbunden. Unsere Beratung hilft Ihnen, Fallstricke zu vermeiden, Werte optimal zu sichern und die beste Strategie für Ihren individuellen Fall zu entwickeln.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>Was passiert in der Erstberatung?</AccordionTrigger>
                    <AccordionContent>
                        Wir nehmen uns Zeit für Ihre Situation, analysieren Ihre Bedürfnisse und klären erste wichtige Fragen:
                        <ul className="list-disc pl-6 mt-2">
                            <li>Welche Vermögenswerte sind vorhanden?</li>
                            <li>Welche Verkaufs- oder Verwertungsstrategien kommen infrage?</li>
                            <li>Gibt es steuerliche oder rechtliche Besonderheiten?</li>
                        </ul>
                        <p className="mt-2">Diese Beratung ist unverbindlich und hilft Ihnen, Klarheit über Ihre Optionen zu gewinnen.</p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>Wie unterscheidet sich Ihre Beratung von anderen Anbietern?</AccordionTrigger>
                    <AccordionContent>
                        <ul className="space-y-2">
                            <li><span className="font-semibold">Individuelle Strategien:</span> Jeder Nachlass ist einzigartig – wir entwickeln maßgeschneiderte Lösungen.</li>
                            <li><span className="font-semibold">Netzwerk & Expertise:</span> Zugriff auf exklusive Käufer, Gutachter & Fachanwälte.</li>
                            <li><span className="font-semibold">Absolute Diskretion:</span> Keine öffentlichen Ausschreibungen, keine standardisierten Abläufe.</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger>Was kostet die Beratung?</AccordionTrigger>
                    <AccordionContent>
                        Die Erstberatung ist kostenlos. Danach erhalten Sie ein transparentes Angebot, das sich nach dem Umfang und der Komplexität Ihres Nachlasses richtet.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger>Wie geht es nach der Beratung weiter?</AccordionTrigger>
                    <AccordionContent>
                        Nach der Analyse erstellen wir einen klaren Fahrplan für Sie:
                        <ul className="space-y-2 mt-2">
                            <li><span className='flex items-center gap-2'><Check className='w-4 h-4' /> Bewertung & Einschätzung der Vermögenswerte</span></li>
                            <li><span className='flex items-center gap-2'><Check className='w-4 h-4' /> Strategieentwicklung für Verkauf oder Verwaltung</span></li>
                            <li><span className='flex items-center gap-2'><Check className='w-4 h-4' /> Abwicklung durch unser Expertennetzwerk</span></li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
  )
}

export default Faqs