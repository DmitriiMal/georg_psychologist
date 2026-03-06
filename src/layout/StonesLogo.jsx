import { useEffect, useRef } from 'react';

const StonesLogo = () => {
  const timeoutsRef = useRef(new Map());

  useEffect(() => {
    return () => {
      for (const timeoutId of timeoutsRef.current.values()) {
        clearTimeout(timeoutId);
      }
      timeoutsRef.current.clear();
    };
  }, []);

  const handleTouchStart = (event) => {
    const stone = event.currentTarget;
    const previousTimeout = timeoutsRef.current.get(stone);

    if (previousTimeout) {
      clearTimeout(previousTimeout);
    }

    stone.classList.remove('is-touch-active');
    void stone.offsetWidth;
    stone.classList.add('is-touch-active');

    const timeoutId = setTimeout(() => {
      stone.classList.remove('is-touch-active');
      timeoutsRef.current.delete(stone);
    }, 1400);

    timeoutsRef.current.set(stone, timeoutId);
  };

  return (
    <svg className='stones-logo' viewBox='0 0 80 100' xmlns='http://www.w3.org/2000/svg' aria-label='Stones Logo' role='img'>
      <g className='stone-group'>
        <path d='M8 70 C 18 95, 62 92, 72 70 C 74 58, 10 58, 8 70' className='stone stone-top' onTouchStart={handleTouchStart} />
        <path d='M22 44 C 30 60, 52 56, 58 42 C 59 38, 23 36, 22 44' className='stone stone-middle' onTouchStart={handleTouchStart} />
        <path d='M34 23 C 36 30, 48 30, 50 22 C 49 18, 35 18, 34 23' className='stone stone-bottom' onTouchStart={handleTouchStart} />
      </g>
    </svg>
  );
};

export default StonesLogo;
