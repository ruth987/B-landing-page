"use client"
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Faqs = () => {
  return (
    <div className='flex items-start justify-center gap-20 py-20 px-4'>
        <div className='flex flex-col gap-2 pt-10'>
            <p className='text-xs'>FAQS</p>
            <p className='text-4xl font-semibold'>Häufig gestellte Fragen</p>
        </div>
        <div className='max-w-2xl w-full'>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Warum ist eine professionelle Nachlassberatung so wichtig?</AccordionTrigger>
                    <AccordionContent>
                        Eine professionelle Nachlassberatung ist entscheidend, da sie Ihnen hilft, den komplexen Prozess der Nachlassregelung effizient und rechtssicher zu gestalten. Wir unterstützen Sie dabei, wichtige Entscheidungen zu treffen und potenzielle Konflikte zu vermeiden.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>Was passiert in der Erstberatung?</AccordionTrigger>
                    <AccordionContent>
                        In der Erstberatung führen wir ein ausführliches Gespräch, um Ihre individuelle Situation zu verstehen. Wir analysieren Ihre Bedürfnisse, besprechen mögliche Vorgehensweisen und entwickeln gemeinsam einen ersten Handlungsplan.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>Wie unterscheidet sich Ihre Beratung von anderen Anbietern?</AccordionTrigger>
                    <AccordionContent>
                        Unsere Beratung zeichnet sich durch einen ganzheitlichen Ansatz aus. Wir bieten nicht nur rechtliche Unterstützung, sondern berücksichtigen auch emotionale und familiäre Aspekte. Unser erfahrenes Team steht Ihnen während des gesamten Prozesses zur Seite.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger>Was kostet die Beratung?</AccordionTrigger>
                    <AccordionContent>
                        Die Kosten für unsere Beratung richten sich nach dem Umfang und der Komplexität Ihres individuellen Falls. In einem ersten kostenlosen Gespräch können wir Ihnen einen konkreten Kostenrahmen nennen.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger>Wie geht es nach der Beratung weiter?</AccordionTrigger>
                    <AccordionContent>
                    Nach der Analyse erstellen wir einen klaren Fahrplan für Sie:
                    Bewertung & Einschätzung der Vermögenswerte
                    Strategieentwicklung für Verkauf oder Verwaltung
                    Abwicklung durch unser Expertennetzwerk

                    <p className='mt-4 font-semibold'>Holen Sie sich jetzt eine fundierte Einschätzung – ohne Verpflichtung!</p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
  )
}

export default Faqs