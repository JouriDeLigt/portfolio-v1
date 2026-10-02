# jourideligt.dev

Persoonlijke portfolio, gebouwd met [Nuxt 4](https://nuxt.com) en [Tailwind CSS v4](https://tailwindcss.com). Geen CMS en geen database: alle content staat in de repo.

## Lokaal draaien

```bash
npm install
npm run dev
```

De site draait dan op http://localhost:3000.

Om het contactformulier lokaal echt mail te laten versturen: kopieer `.env.example` naar `.env` en vul `SENDGRID_API_KEY` in.

## Content aanpassen

| Wat                                | Waar                                     |
| ---------------------------------- | ---------------------------------------- |
| Featured cases + hobbyprojecten    | `shared/data/projects.ts`                |
| Navigatie, social links, skills    | `shared/data/site.ts`                    |
| Afbeeldingen van featured cases    | `public/static/projects/<slug>/`         |
| Teksten (hero, about, contact, …)  | de componenten in `app/components/`      |

**Featured case toevoegen:** zet de screenshots in `public/static/projects/<slug>/` (liefst als WebP) en voeg een object toe aan `featuredProjects` in `shared/data/projects.ts`. De projectpagina `/project/<slug>` en de sitemap worden daar automatisch uit opgebouwd.

Screenshots omzetten naar WebP (macOS, `brew install webp`):

```bash
cwebp -q 88 -resize 1920 0 screenshot.png -o desktop-1.webp
```

## Contactformulier

`server/api/contact.post.ts` verstuurt via de SendGrid API twee mails: een notificatie naar `j.deligt@hoort.dev` (met reply-to naar de afzender) en een bevestiging naar de bezoeker. Bots worden tegengehouden door een verborgen honeypot-veld.

## Deploy

Vercel, automatisch bij een push naar `main`. Alle pagina's worden bij de build geprerenderd naar statische HTML. Alleen `/api/contact` draait als serverless function.

Benodigde environment variable in Vercel: `SENDGRID_API_KEY`.
