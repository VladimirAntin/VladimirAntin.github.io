export const siteUrl = 'https://vladimirantin.hok.rs';
export const siteName = 'Vladimir Antin Portfolio';
export const defaultOgImage = '/images/profile.jpg';

export const socialProfiles: string[] = [
  'https://github.com/vladimirantin',
  'https://gitlab.com/antin502',
  'https://www.linkedin.com/in/vladimir-antin',
  'https://npmjs.com/~antin502',
];

export const contact = {
  email: 'antin502@gmail.com',
  phone: '+381616279151',
  city: 'Novi Sad',
  country: 'Serbia',
  countryCode: 'RS',
};

export type RouteEntry = {
  url: string;
  changeFrequency: 'weekly' | 'monthly';
  priority: number;
};

export const routeEntries: RouteEntry[] = [{url: '/', changeFrequency: 'weekly', priority: 1}];
