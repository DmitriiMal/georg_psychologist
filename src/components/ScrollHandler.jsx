// ScrollHandler.jsx
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      // If there's a hash — плавно скроллим к нужному элементу
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Если без хеша — просто наверх
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}
