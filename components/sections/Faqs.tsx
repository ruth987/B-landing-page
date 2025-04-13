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
    <div className='flex md:flex-row flex-col items-start justify-center gap-5 md:gap-20 md:py-20 py-0 px-4 md:mt-2 mt-6 md:mx-20 '>
        <div className='flex flex-col gap-2 md:pt-10 pt-4'>
            <p className='md:text-xs text-[10px]'>FAQS</p>
            <p className='md:text-4xl text-2xl font-semibold'>Häufige Fragen zur Nachlass- und Vermögensverwertung</p>
        </div>
        <div className='max-w-2xl w-full'>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Warum ist eine professionelle Beratung zur Verwertung so wichtig?</AccordionTrigger>
                    <AccordionContent>
                    Ein Nachlass besteht oft aus hochwertigen Gegenständen, die über viele Jahre gesammelt oder vererbt wurden: Kunst, Antiquitäten, Sammlungen und Designobjekte. Ohne Erfahrung auf diesen spezialisierten Märkten besteht das Risiko, Werte zu übersehen oder weit unter ihrem tatsächlichen Potenzial zu veräußern. Hinzu kommen rechtliche und steuerliche Fragen, die bei der Verwertung bedacht werden müssen.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>Was passiert in der kostenlosen Erstberatung?</AccordionTrigger>
                    <AccordionContent>
                    In der Erstberatung nehmen wir uns als professionelle Dienstleister viel Zeit, um Ihre individuelle Situation zu verstehen. Gemeinsam besprechen wir, welche Gegenstände Teil des zu vermarktenden Vermögens sind. Unser Service bezieht sich unter anderem auf Kunstwerke, Fahrzeuge bis hin zu Sammlungen oder Designklassikern.
                    Dabei klären wir Fragen wie:
                        <ul className="list-disc pl-6 mt-2">
                        <li>Welche Vermögenswerte sind vorhanden?</li>
                        <li>Welche Verkaufs- oder Vermarktungswege bieten sich an?</li>
                        <li>Gibt es rechtliche oder steuerliche Aspekte, die berücksichtigt werden sollten?</li>
                        <li>Gibt es Immobilien wo eine Räumung ansteht oder Gegenstände zu entsorgen sind?</li>
                        </ul>
                        <p className="mt-2">Die Erstberatung ist für Sie unverbindlich und kostenfrei. Sie gibt Ihnen einen klaren Überblick über Ihre Optionen und das beruhigende Gefühl, von Anfang an den richtigen Weg einzuschlagen.</p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>Wie unterscheidet sich Ihre Beratung von anderen Anbietern?</AccordionTrigger>
                    <AccordionContent>
                        Unsere Klienten schätzen insbesondere die persönliche Begleitung und die maßgeschneiderte Vorgehensweise bei der Vermögensvermarktung. Jeder Fall erzählt eine andere Geschichte und genau so individuell behandeln wir ihn auch.
                        <br />
                        <br />
                        Wir entwickeln eine exklusive Vermarktungsstrategie, abgestimmt auf Ihre Wünsche, den Werterhalt Ihrer Vermögenswerte und Ihren persönlichen Zeithorizont.
                        <br />
                        <br />
                        Dank unseres europaweiten Netzwerks aus Sammlern, Galerien und renommierten Auktionshäusern verfügen wir über
                        eine Vielzahl an Vermarktungsoptionen
                        <br />
                        <br />
                        Unsere Beratung ist transparent, diskret und von Beginn an auf Verlässlichkeit und Vertrauen ausgelegt.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger>Was kostet eine komplette Abwicklung?</AccordionTrigger>
                    <AccordionContent>
                    Die Erstberatung ist grundsätzlich kostenlos. In diesem ersten Gespräch verschaffen wir uns gemeinsam einen Überblick über Ihre Situation und klären, welche nächsten Schritte bei der Abwicklung sinnvoll sind.
                    <br />
                    <br />
                    Sollten Sie sich anschließend für eine Zusammenarbeit entscheiden, erhalten Sie ein transparentes Angebot. Dieses richtet sich nach dem Umfang und der Komplexität Ihres Nachlasses sowie nach den gewünschten Leistungen. Sei es die Bewertung, die Logistik, die Vermarktung oder die komplette Abwicklung.
                    <br />
                    <br />
                    Versteckte Kosten gibt es bei uns nicht. Sie wissen zu jedem Zeitpunkt, was wir tun und welche Leistungen erbracht werden.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger>Wie geht es nach der Erstberatung weiter?</AccordionTrigger>
                    <AccordionContent>
                    Nach der Erstberatung folgt eine strukturierte Analyse Ihrer zu vermarktenden Vermögenswerte. Wir erstellen eine detaillierte Bewertung und entwickeln gemeinsam mit Ihnen eine maßgeschneiderte Strategie für die Vermarktung. Dabei behalten wir stets Ihren persönlichen Zeithorizont, Ihre Wünsche und Ihre Zielsetzungen im Blick. Anschließend koordinieren wir den gesamten Verkaufsprozess diskret und professionell bis hin zur Übergabe und Abwicklung.
                    <br />
                    <br />
                    Während des gesamten Prozesses behalten wir jederzeit die Kontrolle. Wir sorgen im Hintergrund dafür, dass alles reibungslos und transparent in Ihrem Sinne umgesetzt wird und Sie eine echte Entlastung erfahren.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                    <AccordionTrigger>Kaufen Sie Objekte auch direkt an?</AccordionTrigger>
                    <AccordionContent>
                    Nein. Aus gutem Grund.
                    <br />
                    <br />
                    Wir sehen unsere Aufgabe in der unabhängigen Beratung und professionellen Vermögensverwertung und nicht im direkten Ankauf und Handel.
                    <br />
                    <br />
                    Ein direkter Ankauf würde unsere Neutralität infrage stellen und birgt ethische Herausforderungen, da der wirtschaftliche Vorteil dann auf unserer Seite liegen könnte. Wir möchten jedoch, dass unsere Kunden jederzeit sicher sein können: Wir handeln ausschließlich in ihrem Interesse.
                    <br />
                    <br />
                    Unser Ziel ist es, gemeinsam die bestmögliche Lösung zu finden – transparent, fair und vertrauensvoll. Nicht der schnelle Abschluss zählt, sondern das Ergebnis, mit dem Sie sich gut fühlen können.
                    <br />
                    <br />
                    Wir beraten Sie gern, welche Form der Verwertung für Ihre Situation die beste ist.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
  )
}

export default Faqs