// ScrollHandler.jsx
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToTop } from '@utilities/scrollToTop';

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
      scrollToTop();
    }
  }, [pathname, hash]);

  return null;
}
