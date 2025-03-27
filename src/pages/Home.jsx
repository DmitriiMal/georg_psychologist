import React, { useEffect } from 'react';
import { wildhaber } from '@assets/images/index.js';

// Function to animate elements on scroll
function checkBoxes() {
  const boxes = document.querySelectorAll('.scroll-animation');
  const triggerBottom = (window.innerHeight / 5) * 4.5;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}

export default function Home() {
  // Hook to ensure the animation works both on load and on scroll
  useEffect(() => {
    window.addEventListener('scroll', checkBoxes);
    checkBoxes();
    return () => {
      window.removeEventListener('scroll', checkBoxes);
    };
  }, []);

  return (
    <>
      <header>
        <div className='header-content'>
          <h1 className='gradient-animation scroll-animation fade-in-left'>Wildhaber Georg Josef, MSc</h1>
          <h2 className='scroll-animation fade-in-up'>Klinischer Psychologe in Wien</h2>
          <p className='scroll-animation fade-in-up'>Spezialisierung auf Stress &amp; Stressfolgeerkrankungen</p>
        </div>

        {/* Wave SVG */}
        <svg className='frame-decoration' data-name='Layer 2' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' viewBox='0 0 1920 192.275'>
          <path className='cls-1' d='M0,158.755s63.9,52.163,179.472,50.736c121.494-1.5,185.839-49.738,305.984-49.733,109.21,0,181.491,51.733,300.537,50.233,123.941-1.562,225.214-50.126,390.43-50.374,123.821-.185,353.982,58.374,458.976,56.373,217.907-4.153,284.6-57.236,284.6-57.236V351.03H0V158.755Z' transform='translate(0 -100)' />
        </svg>
      </header>

      {/* Über mich */}
      <section id='ueber-mich' className='section-light pt-2 pb-2'>
        <div className='container'>
          <h2 className='scroll-animation fade-in-left'>Über mich</h2>
          <div className='bottom-line scroll-animation fade-in-left'></div>

          <div className='section-flexbox'>
            <div className='section-contet'>
              <p className='scroll-animation fade-in-up'>Guten Tag und hallo! Ich heiße Sie recht herzlich auf meiner Homepage willkommen. Ich bin Klinischer Psychologe, spezialisiert auf Stress- und Stressfolgeerkrankungen. In meinem Werdegang konnte ich verschiedene berufliche Erfahrungen sammeln, darunter Pflege, Rettungswesen und Seelsorge. Dabei wurde mir klar, dass Stress ein großes Thema unserer heutigen Zeit ist.</p>
              <p className='scroll-animation fade-in-up'>Mir ist es ein Anliegen, gemeinsam mit meinen KlientInnen Techniken zu erarbeiten, um schwierige Lebensabschnitte zu meistern und zu innerer Ruhe zu finden. Dabei orientiere ich mich an Verhaltenstherapie, Positiver und Buddhistischer Psychologie sowie Entspannungsverfahren (Meditation, Yoga, PMR, etc.).</p>
            </div>
            <div className='photo scroll-animation fade-in-up'>
              <img src={wildhaber} alt='Foto vom Georg Wildhaber' />
            </div>
          </div>
        </div>
      </section>

      {/* Angebot */}
      <section id='angebot' className='section-white pt-2 pb-2'>
        <div className='container'>
          <h2 className='scroll-animation fade-in-left'>Mein Angebot</h2>
          <div className='bottom-line scroll-animation fade-in-left'></div>
          <p className='scroll-animation fade-in-up'>Ich biete Psychologische Therapie, Supervision, Coaching, Vorträge und Workshops für Gruppen an. In meiner Arbeit lege ich besonderen Wert auf ein empathisches Gespräch auf Augenhöhe, um neue Perspektiven zu eröffnen und den Umgang mit Stress zu erleichtern.</p>
        </div>
      </section>

      {/* Themengebiete */}
      <section id='themen' className='section-light pt-2 pb-2'>
        <div className='container'>
          <h2 className='scroll-animation fade-in-left'>Themengebiete</h2>
          <div className='bottom-line scroll-animation fade-in-left'></div>
          <ul>
            <li className='scroll-animation fade-in-up'>Stressbewältigung</li>
            <li className='scroll-animation fade-in-up'>Umgang mit Krisen und Konflikten</li>
            <li className='scroll-animation fade-in-up'>Trauerarbeit und Verlust</li>
            <li className='scroll-animation fade-in-up'>Angst und Panik</li>
            <li className='scroll-animation fade-in-up'>Depression und Burnout</li>
            <li className='scroll-animation fade-in-up'>Schlafstörungen</li>
            <li className='scroll-animation fade-in-up'>Suchtverhalten</li>
            <li className='scroll-animation fade-in-up'>Körperliche Beschwerden im Kontext von Stress (z.B. Bluthochdruck)</li>
          </ul>
        </div>
      </section>

      {/* Rahmenbedingungen */}
      <section id='rahmen' className='section-white pt-2 pb-2'>
        <div className='container'>
          <h2 className='scroll-animation fade-in-left'>Rahmenbedingungen</h2>
          <div className='bottom-line scroll-animation fade-in-left'></div>
          <p className='scroll-animation fade-in-up'>Eine Einheit (50 Minuten) kostet 90 Euro. Bei Vorliegen einer krankheitswertigen Störung ist ein Kostenzuschuss durch die Krankenkasse möglich (ca. 35 Euro pro Einheit). In Ausnahmefällen biete ich einen Sozialtarif an. Meine Absageregelung: bitte informieren Sie mich bis spätestens 24 Stunden vor dem Termin, ansonsten muss der volle Betrag verrechnet werden.</p>
        </div>
      </section>
    </>
  );
}
