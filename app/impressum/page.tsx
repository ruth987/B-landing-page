'use client'
import React from 'react'
import TopContact from '@/components/common/TopContact'
import NavBar from '@/components/common/NavBar'
import Footer from '@/components/common/Footer'
import TextBox from '@/components/common/TextBox'

const page = () => {
  return (
    <div className="bg-primary text-white min-h-screen flex flex-col">
    <TopContact />
    <NavBar />
      <div className="container mx-auto max-w-4xl px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Impressum</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Diensteanbieter</h2>
          <p>Buehne & Fawier</p>
          <p>Damte Str 36</p> 
          <p>51674 Wiehl</p>
          <p>Deutschland</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Kontaktmöglichkeiten</h2>
          <p>E-Mail-Adresse: info@buehne-fawier.de</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Vertretungsberechtigte Personen</h2>
          <p>Vertretungsberechtigt: Inhaber Erik Bühne, Lars Bühne und Sebastian Fawier</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Angaben zum Unternehmen</h2>
          <p>Umsatzsteuer Identifikationsnummer (USt-ID): noch nicht erteilt</p>
          <p>Wirtschafts-Identifikationsnummer (W-IdNr): noch nicht erteilt</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Haftungs- und Schutzrechtshinweise</h2>
          
          <h3 className="text-lg font-medium mb-2">Haftungsausschluss:</h3>
          <p className="mb-4">Die Inhalte dieses Onlineangebotes wurden sorgfältig und nach unserem aktuellen Kenntnisstand erstellt, dienen jedoch nur der Information und entfalten keine rechtlich bindende Wirkung, sofern es sich nicht um gesetzlich verpflichtende Informationen (z. B. das Impressum, die Datenschutzerklärung, AGB oder verpflichtende Belehrungen von Verbrauchern) handelt. Wir behalten uns vor, die Inhalte vollständig oder teilweise zu ändern oder zu löschen, soweit vertragliche Verpflichtungen unberührt bleiben. Alle Angebote sind freibleibend und unverbindlich.</p>
          
          <h3 className="text-lg font-medium mb-2">Links auf fremde Webseiten:</h3>
          <p className="mb-4">Die Inhalte fremder Webseiten, auf die wir direkt oder indirekt verweisen, liegen außerhalb unseres Verantwortungsbereiches und wir machen sie uns nicht zu Eigen. Für alle Inhalte und Nachteile, die aus der Nutzung der in den verlinkten Webseiten aufrufbaren Informationen entstehen, übernehmen wir keine Verantwortung.</p>
          
          <h3 className="text-lg font-medium mb-2">Urheberrechte und Markenrechte:</h3>
          <p className="mb-4">Alle auf dieser Website dargestellten Inhalte, wie Texte, Fotografien, Grafiken, Marken und Warenzeichen sind durch die jeweiligen Schutzrechte (Urheberrechte, Markenrechte) geschützt. Die Verwendung, Vervielfältigung usw. unterliegen unseren Rechten oder den Rechten der jeweiligen Urheber bzw. Rechteinhaber.</p>
          
          <h3 className="text-lg font-medium mb-2">Hinweise auf Rechtsverstöße:</h3>
          <p>Sollten Sie innerhalb unseres Internetauftritts Rechtsverstöße bemerken, bitten wir Sie uns auf diese hinzuweisen. Wir werden rechtswidrige Inhalte und Links nach Kenntnisnahme unverzüglich entfernen. Die EU-Kommission hat eine Internetseite zur Online-Streitbeilegung zwischen Unternehmern und Verbrauchern (OS-Plattform) eingerichtet, die Sie unter <a href="http://ec.europa.eu/consumers/odr/" className="underline">http://ec.europa.eu/consumers/odr/</a> erreichen.</p>
        </section>
      </div>
      <div className='sticky bottom-0'>
      <TextBox text="Nutzen Sie unsere kostenlose Erstberatung unter 069 456 7890" />
        <Footer />
      </div>
    </div>
  )
}

export default page