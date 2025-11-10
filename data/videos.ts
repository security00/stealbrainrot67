export type Video = {
  id: string; // YouTube video id (11 chars)
  title: string;
  author?: string;
  published?: string; // YYYY-MM-DD
  start?: number;
};

export const videosBySlug: Record<string, Video[]> = {
  // Curated videos for item 67 (YouTube IDs must be 11 chars)
  '67': [
    { id: 'VVpARgKYr2Q', title: 'Unlocking 1 in a Million 67 BRAINROT In Steal a Brainrot' },
    { id: 'Mz_pWZ8SlCM', title: 'How to EASILY GET 67 BRAINROT TOKYO EASTER EGG SECRET CODES in Fortnite Steal The Brainrot' },
    { id: 'hYlbqR3ytlI', title: 'The Sad Story Of 67 In Steal A Brainrot..' },
    { id: '5yp4VV3wBtY', title: 'Who Killed 67 In Steal A Brainrot?' },
    // Duplicates provided by user are intentionally kept here for traceability; getVideos() will de-duplicate by id.
    { id: 'VVpARgKYr2Q', title: 'Unlocking 1 in a Million 67 BRAINROT In Steal a Brainrot' },
    { id: 'Mz_pWZ8SlCM', title: 'How to EASILY GET 67 BRAINROT TOKYO EASTER EGG SECRET CODES in Fortnite Steal The Brainrot' },
  ],
};

export function getVideos(slug: string): Video[] {
  const list = videosBySlug[slug] || [];
  // keep valid ids and de-duplicate by id
  const seen = new Set<string>();
  const out: Video[] = [];
  for (const v of list) {
    if (!/^[A-Za-z0-9_-]{11}$/.test(v.id)) continue;
    if (seen.has(v.id)) continue;
    seen.add(v.id);
    out.push(v);
  }
  return out;
}
