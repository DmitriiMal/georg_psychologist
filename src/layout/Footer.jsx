// layout/Footer.jsx

import ContactForm from '../components/ContactForm';

function Footer() {
  return (
    <>
      <footer id='contact' className='pt-1'>
        <div className='container'>
          <h2 className='scroll-animation fade-in-left'>Kontakt</h2>
          <div className='bottom-line scroll-animation fade-in-left'></div>
          <p className='scroll-animation fade-in-up'>Ich freue mich darauf Sie in einem Erstgespräch kennenzulernen, zu schauen ob wir gemeinsam arbeiten können und der Grundpfeiler Sympathie gegeben ist. Schreiben Sie mir gerne eine E-Mail oder rufen Sie mich persönlich an und hinterlassen mir eine Sprachnachricht- ich rufe Sie folgend ehestmöglich zurück.</p>
          <ContactForm />
        </div>
        <div id='copyright'>
          <p>&copy; {new Date().getFullYear()} Wildhaber</p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
