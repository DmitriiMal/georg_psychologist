export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://praxis-wildhaber.at').replace(/\/$/, '');

export const DEFAULT_OG_IMAGE_PATH = '/images/og-wildhaber.jpg';

export const absoluteUrl = (path = '/') => {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
};

export const DEFAULT_OG_IMAGE_URL = absoluteUrl(DEFAULT_OG_IMAGE_PATH);

export const seoPages = {
  home: {
    title: 'Klinischer Psychologe in Wien – Georg Wildhaber, MSc',
    description:
      'Klinischer Psychologe in 1090 Wien. Unterstützung bei Stress, Burnout, Angst, Depression und Schlafstörungen. Termin nach Vereinbarung.',
    path: '/',
  },
  about: {
    title: 'Über mich | Georg Wildhaber, MSc – Klinischer Psychologe Wien',
    description:
      'Erfahren Sie mehr über Georg Wildhaber, MSc: Klinischer Psychologe in Wien mit Schwerpunkt auf Stressbewältigung, Burnout, Angst und Schlafstörungen.',
    path: '/about',
  },
  impressum: {
    title: 'Impressum | Praxis Georg Wildhaber, MSc',
    description:
      'Impressum der psychologischen Praxis von Georg Wildhaber, MSc in Wien 1090 mit allen rechtlich erforderlichen Angaben.',
    path: '/impressum',
  },
};
