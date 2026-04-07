import {siteName, siteUrl} from '@/data/seo';

export const dynamic = 'force-static';

export default function manifest() {
  return {
    name: siteName,
    short_name: 'Vladimir Antin',
    description:
      'Portfolio of Vladimir Antin, full stack developer specialized in Java, Spring Boot, Angular, React, and Next.js.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#101828',
    theme_color: '#101828',
    icons: [
      {
        src: `${siteUrl}/images/va.png`,
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: `${siteUrl}/images/va.png`,
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
