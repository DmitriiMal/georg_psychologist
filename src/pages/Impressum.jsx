import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
export default function Home() {
  return (
    <div className='container py-2'>
      <h1>Impressum</h1>
      <p>Wildhaber Georg Josef, MSc</p>
      <p>Dao Zentrum Wien</p>
      <ul className='contact-data pb-2 '>
        <li className='scroll-animation fade-in-up'>Wildhaber Georg Josef, MSc.</li>
        <li className='scroll-animation fade-in-up'>
          <a href='https://dao-zentrum.at/' target='blank'>
            <FontAwesomeIcon id='arrow-up-right-from-square' icon={faArrowUpRightFromSquare} />
            Dao Zentrum
          </a>
        </li>
        <li className='scroll-animation fade-in-up'>
          <FontAwesomeIcon id='location-dot' icon={faLocationDot} />
          Lustkandlgasse 53/1, 1090 Wien
        </li>
        <li className='scroll-animation fade-in-up'>
          <a href='mailto:wildhaber@gmx.at'>
            <FontAwesomeIcon id='envelope' icon={faEnvelope} />
            wildhaber@gmx.at
          </a>
          {/* Todo: check for custom email in GoDaddy */}
        </li>
        <li className='scroll-animation fade-in-up'>
          <a href='tel:0660/ 902 67 67'>
            <FontAwesomeIcon id='phone' icon={faPhone} />
            0660/ 902 67 67
          </a>
        </li>
      </ul>

      <div className='pb-2'>
        <h3>Berufsrechtliche Regelungen</h3>
        <a href='https://klinischepsychologie.ehealth.gv.at/Detail.aspx' target='blank'>
          <FontAwesomeIcon id='arrow-up-right-from-square' icon={faArrowUpRightFromSquare} />
          Berufsbezeichnung: Klinischer Psychologe (verliehen in Österreich)
        </a>
      </div>
      {/* <p>Die Berufsbezeichnung "Klinischer Psychologe" wurde in Österreich verliehen. Es gelten die Bestimmungen des Psychologengesetzes 2013.</p> */}
      <div className='pb-2'>
        <h3>Zuständige Aufsichtsbehörde</h3>
        <a href='https://www.sozialministerium.gv.at/' target='blank'>
          <FontAwesomeIcon id='arrow-up-right-from-square' icon={faArrowUpRightFromSquare} />
          Bundesministerium für Soziales, Gesundheit, Pflege und Konsumentenschutz
        </a>
      </div>
    </div>
  );
}
