# Steal Brainrot 67

SEO-focused static Next.js site for stealbrainrot67.com. The site embeds a playable browser entry and supports search demand around Steal Brainrot 67, Lucky Blocks, item stats, and player guides.

## Stack

- Next.js 16 static export
- React 19
- Tailwind CSS 4
- Cloudflare Pages via GitHub Actions
- Build output directory: `out`

## Key Routes

- `/`
- `/steal-brainrot`
- `/lucky-blocks`
- `/guides/how-to-get-67`
- `/items`
- `/items/67`

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

Run these before committing or deploying:

```bash
npm audit
npm run lint
npm run build
```

## Deployment

Push to `main`. `.github/workflows/deploy.yml` builds the static site and deploys `out` to the Cloudflare Pages project `stealbrainrot67`.

## SEO Restart Notes

- GSC baseline before restart: last 3 months had 93 clicks, 4.05K impressions, 2.3% CTR, and average position 16.5.
- Main keyword gap: `steal brainrot` had trend demand but was not showing in GSC.
- First restart release added `/steal-brainrot` and `/lucky-blocks`, updated the iframe, corrected 67 data, and rebuilt sitemap coverage.
- Keep game/item data dated and conservative. If a source is not official, describe it as community-reported or currently observed.
