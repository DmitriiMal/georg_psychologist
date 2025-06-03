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
          <h1 className='gradient-animation'>Wildhaber Georg Josef, MSc</h1>
          <h2>Klinischer Psychologe in Wien</h2>
          <p>Spezialisierung auf Stress &amp; Stressfolgeerkrankungen</p>
        </div>

        {/* Wave SVG */}
        {/* <svg className='frame-decoration' data-name='Layer 2' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' viewBox='0 0 1920 192.275'>
          <path className='cls-1' d='M0,158.755s63.9,52.163,179.472,50.736c121.494-1.5,185.839-49.738,305.984-49.733,109.21,0,181.491,51.733,300.537,50.233,123.941-1.562,225.214-50.126,390.43-50.374,123.821-.185,353.982,58.374,458.976,56.373,217.907-4.153,284.6-57.236,284.6-57.236V351.03H0V158.755Z' transform='translate(0 -100)' />
        </svg> */}
        <svg className='frame-decoration wave-animated' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 100' preserveAspectRatio='none'>
          <defs>
            <filter id='wave-shadow' x='-50%' y='-50%' width='200%' height='200%'>
              <feDropShadow dx='0' dy='-2' stdDeviation='4' flood-color='rgba(0,0,0,0.12)' />
            </filter>
          </defs>
          <path d='M0,0 C360,80 1080,20 1440,60 V100 H0 Z' fill='#ffffff' filter='url(#wave-shadow)' />
        </svg>
      </header>

      {/* Über mich */}
      <section id='ueber-mich' className='section-light pt-2 pb-2'>
        <div className='container'>
          <div className='section-flexbox'>
            <div className='section-contet'>
              <h2 className='scroll-animation fade-in-left'>Guten Tag und hallo,</h2>
              <h4 className='scroll-animation fade-in-left'>ich heiße Sie recht herzlich auf der Homepage meiner psychologischen Praxis willkommen.</h4>
              <div className='bottom-line scroll-animation fade-in-left'></div>
              {/* <p className='scroll-animation fade-in-up'>Guten Tag und hallo! Ich heiße Sie recht herzlich auf meiner Homepage willkommen. Ich bin Klinischer Psychologe, spezialisiert auf Stress- und Stressfolgeerkrankungen. In meinem Werdegang konnte ich verschiedene berufliche Erfahrungen sammeln, darunter Pflege, Rettungswesen und Seelsorge. Dabei wurde mir klar, dass Stress ein großes Thema unserer heutigen Zeit ist.</p> */}
              {/* <p className='scroll-animation fade-in-up'>Mir ist es ein Anliegen, gemeinsam mit meinen KlientInnen Techniken zu erarbeiten, um schwierige Lebensabschnitte zu meistern und zu innerer Ruhe zu finden. Dabei orientiere ich mich an Verhaltenstherapie, Positiver und Buddhistischer Psychologie sowie Entspannungsverfahren (Meditation, Yoga, PMR, etc.).</p> */}
              {/* <p className='scroll-animation fade-in-up'>ich heiße Sie recht herzlich auf der Homepage meiner psychologischen Praxis willkommen.</p> */}
              <p className='scroll-animation fade-in-up'>Im Leben ist nicht immer alles nur ein Hoch, sondern ab und zu befindet sich der Mensch aufgrund verschiedener Umstände in einem Tief. In einem solchen Moment, sei es verursacht durch Stress, Krankheit oder schwierige Lebensumstände, ist es sehr mutig sich jemandem Objektiven und Außenstehenden anzuvertrauen, um eigene Perspektiven und Vorstellungen zu relativieren.</p>
              <p className='scroll-animation fade-in-up'>Durch ein Gespräch auf Augenhöhe können gemeinsam neue Perspektiven erarbeiteten werden, sowie werden hilfreiche Interventionen in das Behandlungssetting eingebaut um mit den Herausforderungen des Lebens ein Stück leichter umgehen zu können und zu mehr innerer Ruhe zu finden.</p>
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
          {/* <p className='scroll-animation fade-in-up'>Ich biete Psychologische Therapie, Supervision, Coaching, Vorträge und Workshops für Gruppen an. In meiner Arbeit lege ich besonderen Wert auf ein empathisches Gespräch auf Augenhöhe, um neue Perspektiven zu eröffnen und den Umgang mit Stress zu erleichtern.</p> */}
          <ul>
            <li className='scroll-animation fade-in-up'>Psychologische Therapie</li>
            <li className='scroll-animation fade-in-up'>Supervision</li>
            <li className='scroll-animation fade-in-up'>Coaching</li>
            <li className='scroll-animation fade-in-up'>Vortragstätigkeit</li>
            <li className='scroll-animation fade-in-up'>Workshops für Gruppen</li>
          </ul>
        </div>
      </section>

      {/* Themengebiete */}
      <section id='themen' className='section-light pt-2 pb-2'>
        <div className='container'>
          <h2 className='scroll-animation fade-in-left'>Themengebiete</h2>
          <div className='bottom-line scroll-animation fade-in-left'></div>
          <ul>
            <li className='scroll-animation fade-in-up'>Stressbewältigung</li>
            <li className='scroll-animation fade-in-up'>Persönlichkeitsentwicklung</li>
            <li className='scroll-animation fade-in-up'>Umgang mit Krisen und Konflikten</li>
            <li className='scroll-animation fade-in-up'>Umgang mit Verlusten</li>
            <li className='scroll-animation fade-in-up'>Trauerarbeit</li>
            <li className='scroll-animation fade-in-up'>Körperliches Gebrechen assoziiert mit Stress</li>
            <ul>
              <li className='scroll-animation fade-in-up'>Bluthochdruck</li>
              <li className='scroll-animation fade-in-up'>Kopfschmerzen</li>
              <li className='scroll-animation fade-in-up'>Verspannungen, Schmerzen</li>
              <li className='scroll-animation fade-in-up'>Magen-, Darmbeschwerden</li>
              <li className='scroll-animation fade-in-up'>etc.</li>
            </ul>
            <li className='scroll-animation fade-in-up'>Angst und Panik</li>
            <li className='scroll-animation fade-in-up'>Depression und Burnout</li>
            <li className='scroll-animation fade-in-up'>Schlafstörungen</li>
            <li className='scroll-animation fade-in-up'>Suchtverhalten</li>
            <li className='scroll-animation fade-in-up'>...</li>
          </ul>
        </div>
      </section>

      {/* Rahmenbedingungen */}
      <section id='rahmen' className='section-white pt-2 pb-2'>
        <div className='container'>
          <h2 className='scroll-animation fade-in-left'>Rahmenbedingungen</h2>
          <div className='bottom-line scroll-animation fade-in-left'></div>
          {/* <p className='scroll-animation fade-in-up'>Eine Einheit (50 Minuten) kostet 90 Euro. Bei Vorliegen einer krankheitswertigen Störung ist ein Kostenzuschuss durch die Krankenkasse möglich (ca. 35 Euro pro Einheit). In Ausnahmefällen biete ich einen Sozialtarif an. Meine Absageregelung: bitte informieren Sie mich bis spätestens 24 Stunden vor dem Termin, ansonsten muss der volle Betrag verrechnet werden.</p> */}
          <p className='scroll-animation fade-in-up'>
            Als Klinischer Psychologe unterliege ich der gesetzlichen <mark>Schweigepflicht</mark>, aber auch Dokumentationspflicht. Der Preis für dieses beläuft sich auf <mark>90 Euro pro Einheit,</mark> wobei eine Einheit <mark>50 Minuten</mark> umfasst, hierbei kann in Ausnahmefällen ein Sozialtarif vereinbart werden. Im Falle einer krankheitswertigen Störung kann mit Ihrer Krankenkasse ein Zuschuss zur Behandlung geltend gemacht werden, dieser ist abhängig von Ihrer Krankenkasse und umfasst
            in etwa <mark>35 Euro pro Behandlungseinheit</mark>.
          </p>
          <p className='scroll-animation fade-in-up'>
            <mark>Sollten Sie einen Termin nicht wahrnehmen können</mark>, besagt meine Absageregelung, dass Sie mir dies bitte bis <mark>24 Stunden vor dem Termin melden</mark>, ansonsten muss der volle Betrag in Rechnung gestellt werden. Sollten sich bei Ihnen Unklarheiten ergeben, informiere ich Sie gerne bei unserem Erstgespräch nochmals diesbezüglich.
          </p>
        </div>
      </section>
    </>
  );
}
