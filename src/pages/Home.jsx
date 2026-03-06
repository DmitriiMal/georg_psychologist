// Home.jsx
import Header from '@layout/Header.jsx';
import { useNavigate } from 'react-router';
import { wildhaber } from '@assets/images';
import { Link } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header className='height-header-main'>
        <div className='header-content'>
          {/* Single H1 for SEO & accessibility; style parts independently */}
          {/* <h1 className='hero-title'>
            <span className='hero-name'>Georg Josef Wildhaber, MSc</span>
            <span className='hero-desc'>Klinischer Psychologe · Stress &amp; Stressfolgeerkrankungen</span>
          </h1> */}
          <h3>Georg Josef Wildhaber, MSc</h3>
          <p>Klinischer Psychologe</p>
          <p>Stress &amp; Stressfolgeerkrankungen</p>
        </div>
      </Header>
      {/* Über mich */}
      <section id='ueber-mich' className='section-white pb-2'>
        <div className='container about-me-grid'>
          <div className='about-me-text'>
            <h2 className='scroll-animation fade-in-left'>Guten Tag und hallo,</h2>
            <h4 className='scroll-animation fade-in-left'>ich heiße Sie recht herzlich auf der Homepage meiner psychologischen Praxis willkommen.</h4>
            <div className='bottom-line scroll-animation fade-in-left'></div>
            <p className='scroll-animation fade-in-up'>Im Leben ist nicht immer alles nur ein Hoch, sondern ab und zu befindet sich der Mensch aufgrund verschiedener Umstände in einem Tief. In einem solchen Moment, sei es verursacht durch Stress, Krankheit oder schwierige Lebensumstände, ist es sehr mutig sich jemandem Objektiven und Außenstehenden anzuvertrauen, um eigene Perspektiven und Vorstellungen zu relativieren.</p>
            <p className='scroll-animation fade-in-up'>Durch ein Gespräch auf Augenhöhe können gemeinsam neue Perspektiven erarbeiteten werden, sowie werden hilfreiche Interventionen in das Behandlungssetting eingebaut um mit den Herausforderungen des Lebens ein Stück leichter umgehen zu können und zu mehr innerer Ruhe zu finden.</p>
          </div>
          <div onClick={() => navigate('/about')} className='about-me-photo'>
            <img src={wildhaber} alt='Foto vom Psychologen Georg Wildhaber in Wien' />
          </div>
          <div className='about-me-link'>
            <Link to='/about' className='btn-secondary'>
              Mehr über mich
            </Link>
          </div>
        </div>
      </section>

      {/* Angebot */}
      <section id='angebot' className='section-light pt-2 pb-2'>
        <div className='container section-flexbox'>
          <div className='section-content'>
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
          <div className='badges scroll-animation fade-in-right'>
            <div className='badge-text-1 scroll-animation fade-in-right'>
              <span>Jugendliche</span>
            </div>
            <div className='badge-text-2 scroll-animation fade-in-right'>
              <span>Junge Erwachsene</span>
            </div>
            <div className='badge-text-3 scroll-animation fade-in-right'>
              <span>Erwachsene</span>
            </div>
          </div>
        </div>
      </section>

      {/* Themengebiete */}
      <section id='themen' className='section-white themen-section pt-2 pb-2'>
        <div className='container'>
          <h2 className='scroll-animation fade-in-left'>Themengebiete</h2>
          <div className='bottom-line scroll-animation fade-in-left'></div>
          <p className='themen-intro scroll-animation fade-in-up'>Im gemeinsamen Prozess arbeiten wir an persönlichen, emotionalen und stressbedingten Themen, abgestimmt auf Ihre aktuelle Lebenssituation.</p>
          <div className='themen-grid'>
            <article className='themen-card scroll-animation fade-in-up'>
              <h3>Zentrale Schwerpunkte</h3>
              <ul>
                <li>Stressbewältigung</li>
                <li>Persönlichkeitsentwicklung</li>
                <li>Umgang mit Krisen und Konflikten</li>
                <li>Umgang mit Verlusten</li>
                <li>Trauerarbeit</li>
              </ul>
            </article>
            <article className='themen-card themen-card-accent scroll-animation fade-in-up'>
              <h3>Körperliche Beschwerden bei Stress</h3>
              <ul>
                <li>Bluthochdruck</li>
                <li>Kopfschmerzen</li>
                <li>Verspannungen, Schmerzen</li>
                <li>Magen-, Darmbeschwerden</li>
              </ul>
            </article>
            <article className='themen-card scroll-animation fade-in-up'>
              <h3>Weitere Themen</h3>
              <ul>
                <li>Angst und Panik</li>
                <li>Depression und Burnout</li>
                <li>Schlafstörungen</li>
                <li>Suchtverhalten</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Rahmenbedingungen */}
      <section id='rahmen' className='section-light rahmen-section pt-2 pb-2'>
        <div className='container'>
          <h2 className='scroll-animation fade-in-left'>Rahmenbedingungen</h2>
          <div className='bottom-line scroll-animation fade-in-left'></div>
          <div className='rahmen-facts'>
            <article className='rahmen-fact scroll-animation fade-in-up'>
              <span className='label'>Preis</span>
              <strong>105 Euro pro Einheit</strong>
            </article>
            <article className='rahmen-fact scroll-animation fade-in-up'>
              <span className='label'>Dauer</span>
              <strong>50 Minuten</strong>
            </article>
            <article className='rahmen-fact scroll-animation fade-in-up'>
              <span className='label'>Kassa-Zuschuss</span>
              <strong>ca. 35 Euro</strong>
            </article>
            <article className='rahmen-fact scroll-animation fade-in-up'>
              <span className='label'>Absageregelung</span>
              <strong>mindestens 24h vorher</strong>
            </article>
          </div>
          <p className='scroll-animation fade-in-up'>
            Als Klinischer Psychologe unterliege ich der gesetzlichen <mark>Schweigepflicht</mark>, aber auch Dokumentationspflicht. Der Preis für dieses beläuft sich auf <mark>105 Euro pro Einheit,</mark> wobei eine Einheit <mark>50 Minuten</mark> umfasst, hierbei kann in Ausnahmefällen ein Sozialtarif vereinbart werden. Im Falle einer krankheitswertigen Störung kann mit Ihrer Krankenkasse ein Zuschuss zur Behandlung geltend gemacht werden, dieser ist abhängig von Ihrer Krankenkasse und umfasst
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
