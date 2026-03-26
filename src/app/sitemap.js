import {routeEntries, siteUrl} from '@/data/seo';

export default function sitemap() {
  const lastModified = new Date('2026-03-26T00:00:00.000Z');

  return routeEntries.map(({url, changeFrequency, priority}) => ({
    url: `${siteUrl}${url}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

