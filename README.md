# jourideligt.dev

Persoonlijke portfolio, gebouwd met [Nuxt 4](https://nuxt.com) en [Tailwind CSS v4](https://tailwindcss.com). Geen CMS en geen database: alle content staat in de repo.

## Lokaal draaien

```bash
npm install
npm run dev
```

De site draait dan op http://localhost:3000.

Om het contactformulier lokaal echt mail te laten versturen: kopieer `.env.example` naar `.env` en vul `SENDGRID_API_KEY` in.

## Checks

```bash
npm run lint        # ESLint (@nuxt/eslint)
npm run typecheck   # vue-tsc
npm run build       # productiebuild, prerendert alle pagina's en afbeeldingen
```

## Content aanpassen

| Wat                                     | Waar                                  |
| --------------------------------------- | ------------------------------------- |
| Featured cases + hobbyprojecten         | `shared/data/projects.ts`             |
| Sitegegevens, navigatie, socials, skills | `shared/data/site.ts`                 |
| Afbeeldingen van featured cases         | `public/static/projects/<slug>/`      |
| Teksten (hero, about, contact, privacy) | `app/components/`, `app/pages/`       |

**Featured case toevoegen:**

1. Zet de screenshots in `public/static/projects/<slug>/`, liefst als `.webp` (Nuxt Image maakt bij de build zelf de verkleinde varianten).
2. Voeg een object toe aan `featuredProjects` in `shared/data/projects.ts`, met een `description` van maximaal ~155 tekens (meta description en social preview).
3. Optioneel: een social preview van 1200×630 als `og.jpg` in dezelfde map en `ogImage` in de data. Zonder `ogImage` wordt het standaardbeeld gebruikt.

De projectpagina `/project/<slug>`, de sitemap en de structured data worden automatisch opgebouwd.

## SEO

- **Meta tags, canonical URL's en Open Graph:** `nuxt-seo-utils` vult canonical, `og:url`, `og:site_name` en twitter-tags automatisch aan. Per pagina zet je titel en description met `useSeoMeta`. Het standaard share-beeld is `public/og-image.jpg` (1200×630).
- **Sitemap en robots.txt:** gegenereerd door `@nuxtjs/sitemap` en `@nuxtjs/robots`, inclusief image-sitemap van de projectscreenshots. `/thankyou` staat op noindex en buiten de sitemap.
- **Structured data (JSON-LD):** via `nuxt-schema-org`. Op de homepage een `ProfilePage` met jou als `Person`, op projectpagina's een `CreativeWork` met breadcrumbs.
- **Vercel-previews:** die worden niet geïndexeerd. `site.indexable` volgt `VERCEL_ENV`, dus alleen productie is vindbaar.

## Performance

- **Afbeeldingen:** alle afbeeldingen lopen via `<NuxtImg>`. In productie gebruikt Nuxt Image de `ipxStatic`-provider: elke variant wordt bij de build als statisch WebP-bestand gegenereerd, en er draait geen beeldbewerking op de server.
- **Font:** Space Grotesk staat zelf gehost in `public/fonts/` (geen Google Fonts). `@nuxt/fonts` maakt er een preload en fallback-fonts met aangepaste metrics bij, zodat de tekst niet verspringt tijdens het laden.
- **CSS:** wordt inline in de HTML gezet (`features.inlineStyles`), zonder render-blokkerende stylesheet.
- **Slider:** de projectslider hydrateert pas als hij in beeld komt, dus Swiper laadt niet mee met de eerste paginaload.

## Beveiliging

- **Security-headers:** `nuxt-security` zet ze op elke pagina (X-Frame-Options, Referrer-Policy, HSTS, Permissions-Policy, COOP/CORP, nosniff).
- **Content-Security-Policy:** staat per pagina als `<meta>`-tag, met sha256-hashes van de inline scripts die bij elke build opnieuw berekend worden. Gebruik daarom geen externe scripts of iframes zonder de CSP in `nuxt.config.ts` aan te passen.
- **Header-volgorde op Vercel:** voeg geen paginaspecifieke `routeRules`-headers toe. Op Vercel wint de eerste matchende header-regel, waardoor die pagina de globale security-headers zou verliezen.

## Contactformulier

`server/api/contact.post.ts` verstuurt via de SendGrid API twee mails: een notificatie naar `j.deligt@hoort.dev` (met reply-to naar de afzender) en een bevestiging naar de bezoeker. Bescherming: verborgen honeypot-veld, Origin-check, validatie, maximale berichtgrootte en HTML-escaping.

## Deploy

Vercel, automatisch bij een push naar `main`. Alle pagina's en afbeeldingsvarianten worden bij de build geprerenderd naar statische bestanden. Alleen `/api/contact` draait als serverless function.

Benodigde environment variable in Vercel: `SENDGRID_API_KEY`.
