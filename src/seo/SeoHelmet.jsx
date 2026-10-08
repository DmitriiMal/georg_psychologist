import { useEffect } from 'react';
import { DEFAULT_OG_IMAGE_URL, absoluteUrl } from './seoConfig';

export default function SeoHelmet({ title, description, path = '/', image = DEFAULT_OG_IMAGE_URL, type = 'website', locale = 'de_AT', noindex = false, structuredData = [] }) {
  useEffect(() => {
    const canonicalUrl = absoluteUrl(path);
    const verificationToken = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION;

    document.documentElement.lang = 'de-AT';
    document.title = title;

    upsertMeta('name', 'description', description);
    upsertLink('canonical', canonicalUrl);
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:locale', locale);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', image);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);

    if (verificationToken) {
      upsertMeta('name', 'google-site-verification', verificationToken);
    }

    removeManagedStructuredDataScripts();
    structuredData.forEach((item) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-managed', 'true');
      script.text = JSON.stringify(item);
      document.head.appendChild(script);
    });

    return () => {
      removeManagedStructuredDataScripts();
    };
  }, [title, description, path, image, type, locale, noindex, structuredData]);

  return null;
}

function upsertMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

function removeManagedStructuredDataScripts() {
  document.head.querySelectorAll('script[data-seo-managed="true"]').forEach((node) => node.remove());
}
