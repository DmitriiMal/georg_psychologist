// useScrollReveal.js
// Hook to toggle `.show` for `.scroll-animation` elements on mount/scroll.
import { useEffect, useRef } from 'react';

export default function useScrollReveal(selector = '.scroll-animation', deps = []) {
  const observerRef = useRef(null);

  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    // Ensure initial state without any scroll
    const ensureInitial = () => {
      const limit = window.innerHeight * 0.9;
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < limit && rect.bottom > 0;
        el.classList.toggle('show', inView);
      });
    };

    // Reset previous observer on re-init
    observerRef.current?.disconnect();

    if ('IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.toggle('show', entry.isIntersecting);
          });
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.01 }
      );

      elements.forEach((el) => observerRef.current.observe(el));
      // First paint check (covers route transitions & late layout shifts)
      requestAnimationFrame(ensureInitial);

      return () => observerRef.current?.disconnect();
    }

    // Fallback for very old browsers
    const onScroll = () => ensureInitial();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    ensureInitial();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [deps, selector]);
}
