"use client"
import React from 'react'
import TopContact from '@/components/common/TopContact'
import Footer from '@/components/common/Footer'
import NavBar from '@/components/common/NavBar'
import TextBox from '@/components/common/TextBox'

const PrivacyPolicy = () => {
  return (
    <div className="bg-primary min-h-screen flex flex-col">
      <TopContact />
      <NavBar />
      
      <div className="container mx-auto max-w-4xl px-8 py-12 text-white pb-12">
        <h1 className="text-3xl font-bold mb-8">Cookies</h1>

        <section className="mb-8">
          <p className="mb-4">
            Wie viele andere Webseiten verwenden wir auch so genannte „Cookies&quot;. Cookies sind kleine Textdateien, die von einem Webseitenserver auf Ihre Festplatte übertragen werden. Hierdurch erhalten wir automatisch bestimmte Daten wie z. B. IP-Adresse, verwendeter Browser, Betriebssystem über Ihren Computer und Ihre Verbindung zum Internet. Cookies können nicht verwendet werden, um Programme zu starten oder Viren auf einen Computer zu übertragen. Anhand der in Cookies enthaltenen Informationen können wir Ihnen die Navigation erleichtern und die korrekte Anzeige unserer Webseiten ermöglichen. In keinem Fall werden die von uns erfassten Daten an Dritte weitergegeben oder ohne Ihre Einwilligung eine Verknüpfung mit personenbezogenen Daten hergestellt. Natürlich können Sie unsere Webseite grundsätzlich auch ohne Cookies betrachten. Internet-Browser sind regelmäßig so eingestellt, dass sie Cookies akzeptieren. Sie können die Verwendung von Cookies jederzeit über die Einstellungen Ihres Browsers deaktivieren. Bitte verwenden Sie die Hilfefunktionen Ihres Internetbrowsers, um zu erfahren, wie Sie diese Einstellungen ändern können. Bitte beachten Sie, dass einzelne Funktionen unserer Webseite möglicherweise nicht funktionieren, wenn Sie die Verwendung von Cookies deaktiviert haben.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Kontaktformular</h2>
          <p className="mb-4">
            Treten Sie per E-Mail oder Kontaktformular mit uns in Kontakt, werden die von Ihnen gemachten Angaben zum Zwecke der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Löschung bzw. Sperrung der Daten</h2>
          <p className="mb-4">
            Wir halten uns an die Grundsätze der Datenvermeidung und Datensparsamkeit. Wir speichern Ihre personenbezogenen Daten daher nur so lange, wie dies zur Erreichung der hier genannten Zwecke erforderlich ist oder wie es die vom Gesetzgeber vorgesehenen vielfältigen Speicherfristen vorsehen. Nach Fortfall des jeweiligen Zweckes bzw. Ablauf dieser Fristen werden die entsprechenden Daten routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt oder gelöscht.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Google Maps API</h2>
          <p className="mb-4">
            Diese Webseite verwendet Google Maps API, um geographische Informationen visuell darzustellen. Bei der Nutzung von Google Maps werden von Google auch Daten über die Nutzung der Kartenfunktionen durch Besucher erhoben, verarbeitet und genutzt. Nähere Informationen über die Datenverarbeitung durch Google können Sie den Google-Datenschutzhinweisen (http://www.google.com/privacypolicy.html) entnehmen. Dort können Sie im Datenschutzcenter auch Ihre persönlichen Datenschutz-Einstellungen verändern. Ausführliche Anleitungen zur Verwaltung der eigenen Daten im Zusammenhang mit Google-Produkten finden Sie hier.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Ihre Rechte auf Auskunft, Berichtigung, Sperre, Löschung und Widerspruch</h2>
          <p className="mb-4">
            Sie haben das Recht, jederzeit Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten. Ebenso haben Sie das Recht auf Berichtigung, Sperrung oder, abgesehen von der vorgeschriebenen Datenspeicherung zur Geschäftsabwicklung, Löschung Ihrer personenbezogenen Daten. Bitte wenden Sie sich dazu an unseren Datenschutzbeauftragten. Die Kontaktdaten finden Sie ganz unten. Damit eine Sperre von Daten jederzeit berücksichtigt werden kann, müssen diese Daten zu Kontrollzwecken in einer Sperrdatei vorgehalten werden. Sie können auch die Löschung der Daten verlangen, soweit keine gesetzliche Archivierungsverpflichtung besteht. Soweit eine solche Verpflichtung besteht, sperren wir Ihre Daten auf Wunsch. Sie können Änderungen oder den Widerruf einer Einwilligung durch entsprechende Mitteilung an uns mit Wirkung für die Zukunft vornehmen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Änderung unserer Datenschutzbestimmungen</h2>
          <p className="mb-4">
            Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z. B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Fragen an den Datenschutzbeauftragten</h2>
          <p className="mb-4">
            Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an uns:
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Datenverarbeitung nach DS-GVO</h2>
          <p className="mb-4">
            Buehne & Fawier garantiert die Einhaltung der geltenden deutschen Bestimmungen zum Datenschutz nach BDSG und DS-GVO. Dazu sind die bei Buehne & Fawier tätigen Mitarbeiter gemäß § 5 Satz 2 BDSG (bzw. §53 BDSG-neu) schriftlich auf das Datengeheimnis verpflichtet worden.
          </p>
          <p className="mb-4">
            Soweit Buehne & Fawier bei der Durchführung von Projekten personenbezogene Daten verarbeitet, wird Buehne & Fawier im Auftrag des Auftraggebers im Sinne des § 11 BDSG / Art. 28 DS-GVO tätig. Buehne & Fawier wird die personenbezogenen Daten daher nur im Rahmen der getroffenen Vereinbarungen oder anderer schriftlicher Weisungen des Auftraggebers und gemäß den datenschutzrechtlichen Bestimmungen nutzen.
          </p>
          <p className="mb-4">
            Zudem garantiert Buehne & Fawier, alle erhaltenen Informationen unbefristet geheim zu halten. Das gilt neben den betrieblichen Organisationsabläufen besonders für alle Informationen, die als vertraulich bezeichnet werden oder als Betriebs- und Geschäftsgeheimnisse erkennbar sind. Soweit es die Projekte nicht erfordern, werden keine Aufzeichnungen und Mitteilungen an Dritte übermittelt. Wir geben personenbezogene Daten nur in Ausnahmefällen an Dritte weiter. Dies geschieht nur, wenn: eine ausdrückliche Einwilligung des Betroffenen dazu vorliegt,
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>die Verarbeitung zur Abwicklung eines Vertrags mit dem Betroffenen erforderlich ist,</li>
            <li>die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist,</li>
            <li>die Verarbeitung zur Wahrung berechtigter Interessen erforderlich ist und kein Grund zur Annahme besteht, dass der Betroffene ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe seiner Daten hat.</li>
          </ul>
          <p className="mb-4">
            Wir berücksichtigen die Grundsätze der Datenminimierung und Datensparsamkeit nach Art. 5 DS-GVO, d.h. personenbezogene Daten werden nur so lange gespeichert, wie es gesetzliche Vorgaben vorsehen bzw. wie es für die genannten Zwecke erforderlich ist. Danach werden die personenbezogenen gesperrt bzw. gelöscht.
          </p>
          <p className="mb-4">
            Buehne & Fawier unternimmt die nach Art. 32 DS-GVO und § 9 BDSG vorgeschriebenen Sicherheitsmaßnahmen, um die auf ihren Systemen gespeicherten Daten vor unbefugtem Zugriff, Veränderung, Entwendung oder Zerstörung zu schützen. Dies umfasst organisatorische und technische Maßnahmen, um den Zugriff auf personenbezogene Daten auf Mitarbeiter von Buehne & Fawier zu beschränken (Zugangskontrolle). Ebenso wird der physische Zugang zu informationstechnischen Systeme kontrolliert und geschützt, auf denen personenbezogene Daten gespeichert sind (Zutrittskontrolle). Die Server von Buehne & Fawier befinden sich in Deutschland.
          </p>
          <p className="mb-4">
            Wir behalten uns das Recht vor, unsere Datenschutzerklärung anzupassen, z.B. um aktuelle rechtliche Anforderungen zu erfüllen.
          </p>
          <p className="mb-4">
            Für Fragen bezüglich des Datenschutzes wenden Sie sich bitte an Buehne & Fawier
          </p>
        </section>
      </div>
      <div className='sticky bottom-0'>
      <TextBox text="Nutzen Sie unsere kostenlose Erstberatung unter 069 456 7890" />
        <Footer />
      </div>
    </div>
  )
}

export default PrivacyPolicy