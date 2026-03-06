let isAnalyticsInitialized = false;

const getMeasurementId = () => import.meta.env.VITE_GA4_MEASUREMENT_ID;

export const initAnalytics = () => {
  if (typeof window === 'undefined' || isAnalyticsInitialized) return;

  const measurementId = getMeasurementId();
  if (!measurementId) return;

  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  if (!window.gtag) {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }

  const scriptId = 'ga4-script';
  if (!document.getElementById(scriptId)) {
    const gaScript = document.createElement('script');
    gaScript.id = scriptId;
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(gaScript);
  }

  window.gtag('js', new Date());
  window.gtag('config', measurementId, { anonymize_ip: true });
  isAnalyticsInitialized = true;
};

export const trackPageView = (path) => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  const measurementId = getMeasurementId();
  if (!measurementId) return;

  window.gtag('config', measurementId, {
    page_path: path,
    page_location: `${window.location.origin}${path}`,
    page_title: document.title,
  });
};

export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, eventParams);
};

export const trackContactClick = (contactType) => {
  trackEvent('contact_click', {
    contact_type: contactType,
  });
};
