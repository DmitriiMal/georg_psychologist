// Header.jsx

export default function Header({ children, className = '' }) {
  return (
    <header id='header' className={className}>
      {children}

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
