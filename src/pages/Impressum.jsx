// Impressum.jsx
import Header from '@layout/Header.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
export default function Impressum() {
  return (
    <>
      <Header />
      <section id='ueber-mich' className='section-light pt-2 pb-2'>
        <div className='container'>
          <h1>Impressum</h1>
          <div className='pb-2'>
            <p>Wildhaber Georg Josef, MSc</p>
          </div>

          <div className='pb-2'>
            <h4>Berufsbezeichnung: Klinischer Psychologe</h4>
            <a href='https://klinischepsychologie.ehealth.gv.at/Detail.aspx' target='blank'>
              <FontAwesomeIcon id='arrow-up-right-from-square' icon={faArrowUpRightFromSquare} />
              Verliehen in Österreich
            </a>
          </div>
          {/* <p>Die Berufsbezeichnung "Klinischer Psychologe" wurde in Österreich verliehen. Es gelten die Bestimmungen des Psychologengesetzes 2013.</p> */}
          <div className='pb-2'>
            <h4>Zuständige Aufsichtsbehörde</h4>
            <a href='https://www.sozialministerium.gv.at/' target='blank'>
              <FontAwesomeIcon id='arrow-up-right-from-square' icon={faArrowUpRightFromSquare} />
              Bundesministerium für Soziales, Gesundheit, Pflege und Konsumentenschutz
            </a>
          </div>
          <div className='pb-2'>
            <h4>Berufsrechtliche Regelungen</h4>
            <a href='https://www.boep.or.at/download/57e3cbefe08cfc0937000012/Psychologengesetz_2013-Fassung_vom_22.09.2016.pdf' target='blank'>
              <FontAwesomeIcon id='arrow-up-right-from-square' icon={faArrowUpRightFromSquare} />
              Es gelten folgende berufsrechtliche Bestimmungen: Psychologengesetz 2013
            </a>
          </div>
          <div className='pb-2'>
            <h4>Haftungsausschluss:</h4>
            <p>Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
          </div>
          <div className='pb-2'>
            <h4>Urheberrecht:</h4>
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
          </div>
        </div>
      </section>
    </>
  );
}
