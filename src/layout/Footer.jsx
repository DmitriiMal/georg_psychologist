// Footer.jsx

import ContactForm from '../components/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { trackContactClick } from '@utilities/analytics';

function Footer() {
  return (
    <>
      <footer id='contact' className='pt-1'>
        <div className='container'>
          <h2 className='scroll-animation fade-in-left'>Kontakt</h2>
          <div className='bottom-line scroll-animation fade-in-left'></div>
          <ul className='contact-data'>
            <li className='scroll-animation fade-in-up'>Georg Josef Wildhaber, MSc</li>
            <li className='scroll-animation fade-in-up'>
              <a href='https://dao-zentrum.at/' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon id='arrow-up-right-from-square' icon={faArrowUpRightFromSquare} />
                Dao Zentrum
              </a>
            </li>
            <li className='scroll-animation fade-in-up'>
              <FontAwesomeIcon id='location-dot' icon={faLocationDot} />
              Lustkandlgasse 53/1, 1090 Wien
            </li>
            <li className='scroll-animation fade-in-up'>
              <a
                href='mailto:wildhaber@gmx.at'
                onClick={() => {
                  trackContactClick('email');
                }}>
                <FontAwesomeIcon id='envelope' icon={faEnvelope} />
                wildhaber@gmx.at
              </a>
            </li>
            <li className='scroll-animation fade-in-up'>
              <a
                href='tel:+436609026767'
                onClick={() => {
                  trackContactClick('phone');
                }}>
                <FontAwesomeIcon id='phone' icon={faPhone} />
                +43 660 902 67 67
              </a>
            </li>
          </ul>
          <p className='scroll-animation fade-in-up'>Ich freue mich darauf Sie in einem Erstgespräch kennenzulernen, zu schauen ob wir gemeinsam arbeiten können und der Grundpfeiler Sympathie gegeben ist. Schreiben Sie mir gerne eine E-Mail oder rufen Sie mich persönlich an und hinterlassen mir eine Sprachnachricht- ich rufe Sie folgend ehestmöglich zurück.</p>
          <ContactForm />
        </div>
        <div id='bottom-info'>
          <p>&copy; {new Date().getFullYear()} Wildhaber</p>
          <p className='divider'>|</p>
          <Link to='/impressum'>Impressum</Link>
        </div>
      </footer>
    </>
  );
}
export default Footer;
