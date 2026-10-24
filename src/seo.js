const SITE_URL = 'https://aboudlabs.com';

export const SEO_COPY = {
  ar: {
    title: 'عبود لابز – تطوير المواقع والبرامج',
    description: 'عبود لابز استوديو تطوير مواقع وبرامج وتطبيقات ويب ومتاجر إلكترونية بتصميم احترافي وأداء فائق السرعة. نخدم الشركات في سوريا وحمص وخارجها. ابدأ مشروعك عبر واتساب.',
    locale: 'ar_AR',
    alt: 'en_US'
  },
  en: {
    title: 'Aboud Labs – Web & Software Development',
    description: 'Aboud Labs is a web & software development studio building fast, custom websites, web apps and e-commerce stores for businesses in Syria, Homs and worldwide. Start your project on WhatsApp.',
    locale: 'en_US',
    alt: 'ar_AR'
  }
};

const setContent = (selector, value) => {
  const el = document.querySelector(selector);
  if (el) el.setAttribute('content', value);
};

export function applySeo(lang) {
  const c = SEO_COPY[lang] || SEO_COPY.ar;
  document.title = c.title;
  setContent('meta[name="description"]', c.description);
  setContent('meta[property="og:title"]', c.title);
  setContent('meta[property="og:description"]', c.description);
  setContent('meta[name="twitter:title"]', c.title);
  setContent('meta[name="twitter:description"]', c.description);
  setContent('meta[property="og:locale"]', c.locale);
  setContent('meta[property="og:locale:alternate"]', c.alt);
  if (new URLSearchParams(window.location.search).get('lang') === 'en') {
    const url = SITE_URL + '/?lang=en';
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', url);
    setContent('meta[property="og:url"]', url);
  }
}
