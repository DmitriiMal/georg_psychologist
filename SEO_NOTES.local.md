# Praxis Wildhaber Website (SEO-ready)

React + Vite website for the psychology practice of Georg Wildhaber, MSc.

## SEO and analytics setup

1. Copy `.env.example` to `.env`.
2. Set `VITE_SITE_URL` to the final production domain.
3. Set `VITE_GA4_MEASUREMENT_ID` to your GA4 measurement ID.
4. Optional: set `VITE_GOOGLE_SITE_VERIFICATION` for Search Console verification.

## Implemented SEO baseline

- Valid single `index.html` document.
- Route-level metadata managed with React (`useEffect`) for:
  - `/`
  - `/about`
  - `/impressum`
- Canonical, Open Graph and Twitter tags per route.
- Structured data (JSON-LD): `Person`, `MedicalBusiness`, `WebSite`, `AboutPage`, `WebPage`.
- `robots.txt` and `sitemap.xml` in `public/`.
- Consistent NAP data (name, address, phone, email) across pages.
- Conversion tracking events:
  - `contact_click` (phone/email)
  - `form_submit`

## Weekly SEO mini-report template

Track weekly in GA4 + Google Search Console:

- Organic clicks
- Organic impressions
- Average position
- CTR
- Organic sessions (landing pages: `/`, `/about`, `/impressum`)
- Conversions (`contact_click` phone/email, `form_submit`)

Suggested query set (10 local intents):

1. klinischer psychologe wien
2. psychologe wien 1090
3. stressbewältigung wien
4. burnout hilfe wien
5. angst psychologe wien
6. depression psychologe wien
7. schlafstörungen psychologe wien
8. psychologische therapie wien
9. supervision wien psychologe
10. georg wildhaber psychologe

## Where to view data

Google Search Console:

- Performance -> Search results
- Filter by pages: `/`, `/about`, `/impressum`
- Filter by the query list above
- Metrics: Clicks, Impressions, CTR, Average position

GA4:

- Reports -> Engagement -> Landing page
- Filter session default channel group = Organic Search
- Landing pages: `/`, `/about`, `/impressum`
- For conversions: Reports -> Engagement -> Events (`contact_click`, `form_submit`)

Optional:

- Build one custom report in Looker Studio and track the same metrics weekly.
