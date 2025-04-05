// layout/Footer.jsx

import ContactForm from '../components/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <>
      <footer id='contact' className='pt-1'>
        <div className='container'>
          <h2 className='scroll-animation fade-in-left'>Kontakt</h2>
          <div className='bottom-line scroll-animation fade-in-left'></div>
          <p className='scroll-animation fade-in-up'>Ich freue mich darauf Sie in einem Erstgespräch kennenzulernen, zu schauen ob wir gemeinsam arbeiten können und der Grundpfeiler Sympathie gegeben ist. Schreiben Sie mir gerne eine E-Mail oder rufen Sie mich persönlich an und hinterlassen mir eine Sprachnachricht- ich rufe Sie folgend ehestmöglich zurück.</p>
          <ContactForm />
          <ul className='contact-data'>
            <li>Wildhaber Georg Josef, MSc.</li>
            <li>
              <a href='https://dao-zentrum.at/' target='blank'>
                <FontAwesomeIcon id='arrow-up-right-from-square' icon={faArrowUpRightFromSquare} />
                Dao Zentrum
              </a>
            </li>
            <li>
              <FontAwesomeIcon id='location-dot' icon={faLocationDot} />
              Lustkandlgasse 53/1, 1090 Wien
            </li>
            <li>
              <a href='mailto:wildhaber@gmx.at'>
                <FontAwesomeIcon id='envelope' icon={faEnvelope} />
                wildhaber@gmx.at
              </a>
            </li>
            <li>
              <a href='tel:0660/ 902 67 67'>
                <FontAwesomeIcon id='phone' icon={faPhone} />
                660/ 902 67 67
              </a>
            </li>
          </ul>
        </div>
        <div id='copyright'>
          <p>&copy; {new Date().getFullYear()} Wildhaber</p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
