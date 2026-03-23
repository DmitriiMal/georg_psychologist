import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { scrollToTop } from '@utilities/scrollToTop';
import { useState, useEffect, useRef } from 'react';

export default function ToTopButton() {
  const [showButton, setShowButton] = useState(false);
  const iconRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // cleanup
  }, []);

  const addBounce = () => {
    if (iconRef.current) {
      iconRef.current.classList.add('fa-bounce');
      setTimeout(() => {
        iconRef.current?.classList.remove('fa-bounce');
      }, 1000);
    }
  };

  return (
    <button id='to-top' type='button' className={showButton ? 'show' : ''} aria-label='Nach oben scrollen' onClick={scrollToTop} onMouseOver={addBounce} onMouseOut={() => iconRef.current?.classList.remove('fa-bounce')}>
      <FontAwesomeIcon ref={iconRef} id='chevron-up' icon={faChevronUp} size='xl' />
    </button>
  );
}
