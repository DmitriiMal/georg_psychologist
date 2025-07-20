// Header.jsx

export default function Header({ children, className = '' }) {
  return (
    <header id='header' className={className}>
      {children}

      {/* <svg className='frame-decoration wave-animated' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 100' preserveAspectRatio='none'>
        <defs>
          <filter id='wave-shadow' x='-50%' y='-50%' width='200%' height='200%'>
            <feDropShadow dx='0' dy='-2' stdDeviation='4' floodColor='rgba(0,0,0,0.12)' />
          </filter>
        </defs>
        <path d='M0,0 C360,80 1080,20 1440,60 V100 H0 Z' fill='#ffffff' filter='url(#wave-shadow)' />
      </svg> */}

      <svg className='frame-decoration wave-animated' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 100' preserveAspectRatio='none'>
        <defs>
          <filter id='wave-shadow' x='-50%' y='-50%' width='200%' height='200%'>
            <feDropShadow
              // subtle shadow to lift the wave from the background
              dx='0'
              dy='-2'
              stdDeviation='4'
              floodColor='rgba(0,0,0,0.12)'
            />
          </filter>
        </defs>

        <path
          // scaled from 320px→100px height, white fill under the curve
          d='
      M0,100
      L0,10
      L60,8.34
      C120,6.56 240,3.44   360,5
      C480,6.56 600,13.44  720,28.34
      C840,43.44 960,66.56 1080,70
      C1200,73.44 1320,56.56 1380,48.34
      L1440,40
      L1440,100
      Z
    '
          fill='#ffffff'
          filter='url(#wave-shadow)'
        />
      </svg>
    </header>
  );
}

{
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L60,128C120,128,240,128,360,122.7C480,117,600,107,720,138.7C840,171,960,245,1080,261.3C1200,277,1320,235,1380,213.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */
}

{
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,32L60,26.7C120,21,240,11,360,16C480,21,600,43,720,90.7C840,139,960,213,1080,224C1200,235,1320,181,1380,154.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */
}

{
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L60,160C120,160,240,160,360,170.7C480,181,600,203,720,229.3C840,256,960,288,1080,288C1200,288,1320,256,1380,240L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */
}
