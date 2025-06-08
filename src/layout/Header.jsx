export default function Header() {
  return (
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
            <feDropShadow dx='0' dy='-2' stdDeviation='4' floodColor='rgba(0,0,0,0.12)' />
          </filter>
        </defs>
        <path d='M0,0 C360,80 1080,20 1440,60 V100 H0 Z' fill='#ffffff' filter='url(#wave-shadow)' />
      </svg>
    </header>
  );
}
