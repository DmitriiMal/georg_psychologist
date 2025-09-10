// About.jsx
import Header from '@layout/Header.jsx';
import { wildhaber } from '@assets/images/index.js';
export default function About() {
  return (
    <>
      <Header />
      <section id='ueber-mich' className='section-white pb-2'>
        <div className='container about-me-grid'>
          <div className='about-me-text'>
            <h2 className='scroll-animation fade-in-left'>Über mich</h2>
            <div className='bottom-line scroll-animation fade-in-left'></div>
            <p className='scroll-animation fade-in-up'>Von meiner Profession bin ich Klinischer Psychologe sowie Schulpsychologe und neben meiner eigenen Praxis bei der Schulpsychologie Wien im Bereich Berufsbildende Pflichtschulen tätig (Bildungsdirektion Wien).</p>
            <p className='scroll-animation fade-in-up'>In meinem Werdegang konnte ich verschiedene Berufe in meinem Leben erlernen, so sei es der Bereich Pflege, Rettungswesen, die Arbeit als Seelsorger bei einer Notrufnummer, aber auch unter anderem die Tätigkeit als mobiler Psychologe in der Arbeit mit Schwerkranken.</p>
          </div>
          <div className='about-me-photo'>
            <img src={wildhaber} alt='Foto vom Georg Wildhaber' />
          </div>
        </div>
      </section>

      <section id='ueber-mich' className='section-white pt-2 pb-2'>
        <div className='container'>
          <p className='scroll-animation fade-in-up'>Im Laufe der verschiedenen beruflichen Tätigkeiten in meinem Leben, aber auch durch eigene Lebenserfahrung habe ich gemerkt, dass Stress in unserer heutigen Zeit ein großes Thema ist, sowie viele Krankheiten damit assoziiert sind.</p>
          <p className='scroll-animation fade-in-up'>
            Demnach habe ich mich in meiner Ausbildung während meines Masterstudiums der Psychologie an der Alpen- Adria- Universität Klagenfurt und folgend bei meiner Ausbildung zum Klinischen Psychologen bei der Österreichischen Akademie für Psychologie, auf Stress- und Stressfolgeerkrankungen spezialisiert, mit Fokus auf Entspannungsverfahren und Interventionen um mehr innere Ruhe und Frieden zu erlangen (Meditation, Yoga, PMR, Autogenes Training etc.).
          </p>
          <p className='scroll-animation fade-in-up'>Mir ist es ein Anliegen, durch verschiedene Techniken in Orientierung an die Verhaltenstherapie, der personenzentrierten Psychotherapie, der Positiven- und Buddhistischen Psychologie, mit Ihnen gemeinsam Möglichkeiten zu erarbeiten, um schwierige Lebensabschnitte zu meistern und gestärkt daraus hervor zu gehen.</p>
        </div>
      </section>

      {/* <section id='ueber-mich' className='section-white pt-2 pb-2'>
        <div className='container'>
          <h2 className='scroll-animation fade-in-left'>Meine Ausbildung</h2>
          <div className='bottom-line scroll-animation fade-in-left'></div>
          <ul className='scroll-animation fade-in-up'>
            <li>Masterstudium der Psychologie an der Alpen-Adria-Universität Klagenfurt</li>
            <li>Ausbildung zum Klinischen Psychologen an der Österreichischen Akademie für Psychologie</li>
            <li>Schulpsychologe bei der Bildungsdirektion Wien</li>
            <li>Fortbildung in Entspannungsverfahren (Meditation, Yoga, PMR, Autogenes Training)</li>
          </ul>
        </div>
      </section> */}
    </>
  );
}
