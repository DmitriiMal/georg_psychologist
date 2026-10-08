import { DEFAULT_OG_IMAGE_URL, SITE_URL, absoluteUrl } from './seoConfig';

export const homeStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Georg Josef Wildhaber, MSc',
    jobTitle: 'Klinischer Psychologe',
    url: SITE_URL,
    image: DEFAULT_OG_IMAGE_URL,
    email: 'mailto:wildhaber@gmx.at',
    telephone: '+43 660 902 67 67',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `${SITE_URL}/#praxis`,
    name: 'Praxis Georg Wildhaber, MSc',
    url: SITE_URL,
    image: DEFAULT_OG_IMAGE_URL,
    email: 'mailto:wildhaber@gmx.at',
    telephone: '+43 660 902 67 67',
    medicalSpecialty: 'Psychological',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lustkandlgasse 53/1',
      postalCode: '1090',
      addressLocality: 'Wien',
      addressCountry: 'AT',
    },
    areaServed: 'Wien',
    priceRange: '€€',
    sameAs: ['https://dao-zentrum.at/'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Praxis Georg Wildhaber, MSc',
    inLanguage: 'de-AT',
  },
];

export const aboutStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${absoluteUrl('/about')}#about-page`,
    url: absoluteUrl('/about'),
    name: 'Über mich | Georg Wildhaber, MSc',
    inLanguage: 'de-AT',
    about: {
      '@id': `${SITE_URL}/#person`,
    },
  },
];

export const impressumStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${absoluteUrl('/impressum')}#impressum-page`,
    url: absoluteUrl('/impressum'),
    name: 'Impressum | Praxis Georg Wildhaber, MSc',
    inLanguage: 'de-AT',
  },
];
