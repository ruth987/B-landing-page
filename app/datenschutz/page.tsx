"use client"
import React from 'react'
import TopContact from '@/components/common/TopContact'
import Footer from '@/components/common/Footer'
import NavBar from '@/components/common/NavBar'
const page = () => {
  return (
    <div className="bg-primary min-h-screen flex flex-col">
      <TopContact />
      <NavBar />
      
      <div className="container mx-auto max-w-4xl px-8 py-12 text-white flex-grow">
        <h1 className="text-3xl font-bold mb-8">Datenschutz</h1>

        <section className="mb-8">
          <p className="mb-6">
            Diese Datenschutzerklärung (nachstehend als ‚Erklärung' bezeichnet) gibt Aufschluss darüber, welche personenbezogenen Daten wir entweder direkt oder indirekt von Ihnen erfassen und wie wir diese nutzen. Personenbezogene Daten sind Informationen, anhand derer Sie identifiziert werden können, oder die wir mit Ihnen verknüpfen können. Diese Erklärung gibt auch an, welche Entscheidungen Sie über die von uns erhobenen Daten treffen können und wie Sie diese Entscheidungen steuern können. Sie gilt für alle von Buehne & Fawier kontrollierten Webseiten und sonstige Interaktionen außerhalb des Internets, wie beispielsweise der Besuch unserer Geschäftsräume oder die Teilnahme an einer Veranstaltung von Buehne & Fawier (nachstehend gemeinsam als ‚Dienstleistungen' bezeichnet). Bitte lesen Sie diese Erklärung sorgfältig durch, um zu erfahren, wie Buehne & Fawier Ihre personenbezogenen Daten erfasst, verwendet oder teilt. Formulierungen wie ‚wir', ‚uns' oder ‚Buehne & Fawier' verweisen allesamt auf Buehne & Fawier.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Erfassung allgemeiner Informationen</h2>
          <p>
            Wenn Sie auf unsere Webseite zugreifen, werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet Service Providers und Ähnliches. Hierbei handelt es sich ausschließlich um Informationen, welche keine Rückschlüsse auf Ihre Person zulassen. Diese Informationen sind technisch notwendig, um von Ihnen angeforderte Inhalte von Webseiten korrekt auszuliefern und fallen bei Nutzung des Internets zwingend an. Anonyme Informationen dieser Art werden von uns statistisch ausgewertet, um unseren Internetauftritt und die dahinterstehende Technik zu optimieren.
          </p>
        </section>
      </div>
      <div className='sticky bottom-0'>
        <Footer />
      </div>
    </div>
  )
}

export default page