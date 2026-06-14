# Deploy Checklist

Use this checklist before each content or technical release.

## Before Commit

- Run `npm audit`.
- Run `npm run lint`.
- Run `npm run build`.
- Confirm the homepage iframe URL still loads.
- Confirm `public/og-image.jpg` is a real JPEG image, ideally 1200x630.
- Confirm `app/sitemap.ts` includes any new indexable routes.
- Confirm pages do not publish unverified codes, dates, drop rates, or item values.
- Review changed page titles and descriptions for the target query.

## Deploy

- Check `git status`.
- Stage the intended files.
- Commit with a clear release message.
- Push to `main`.

## After Deploy

- Check the GitHub Actions Cloudflare Pages run.
- Verify the live pages:
  - `https://stealbrainrot67.com/`
  - `https://stealbrainrot67.com/steal-brainrot`
  - `https://stealbrainrot67.com/lucky-blocks`
  - `https://stealbrainrot67.com/guides/how-to-get-67`
  - `https://stealbrainrot67.com/og-image.jpg`
- Inspect important URLs in Google Search Console.
- Resubmit the sitemap when new indexable routes are added.

## Monitoring Notes

- Check GSC again after 7 days for early impression movement.
- Check the 28-day view after enough data has accumulated.
- If `steal brainrot` starts appearing with impressions but weak CTR, update title and meta description first.
- If impressions appear only for variants like `steal brainrot 67`, expand the broader hub copy and internal links.
