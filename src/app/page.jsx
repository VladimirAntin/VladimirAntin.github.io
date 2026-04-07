import {memo} from 'react';
import Information from '@/components/home/Information';
import References from '@/components/home/References';
import JsonLd from '@/components/seo/JsonLd';
import {contact, defaultOgImage, siteUrl, socialProfiles} from '@/data/seo';

const homePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  name: 'Vladimir Antin | Full Stack Developer Portfolio',
  url: siteUrl,
  description:
    'Portfolio of Vladimir Antin, a full stack developer from Novi Sad, Serbia, with projects in Java, Spring Boot, Angular, React, and Next.js.',
  mainEntity: {
    '@type': 'Person',
    name: 'Vladimir Antin',
    jobTitle: 'Full Stack Developer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: contact.city,
      addressCountry: contact.countryCode,
    },
    sameAs: socialProfiles,
  },
};

export const metadata = {
  title: 'Full Stack Developer Portfolio',
  description:
    'Vladimir Antin is a full stack software engineer from Novi Sad, Serbia. Experienced in Java, Spring Boot, Angular, React, Next.js, NestJS, and mobile development with React Native.',
  keywords: [
    'Vladimir Antin',
    'Full Stack Developer Novi Sad',
    'Java Developer Serbia',
    'Spring Boot',
    'Angular Developer',
    'React Developer',
    'Next.js Portfolio',
    'Software Engineer',
    'React Native developer',
    'TypeScript developer Serbia',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Vladimir Antin | Full Stack Developer Portfolio',
    description:
      'Vladimir Antin is a full stack software engineer from Novi Sad, Serbia. Experienced in Java, Spring Boot, Angular, React, Next.js, NestJS, and React Native.',
    url: siteUrl,
    images: [{url: defaultOgImage, width: 300, height: 300, alt: 'Vladimir Antin'}],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vladimir Antin | Full Stack Developer Portfolio',
    description:
      'Java, Spring Boot, Angular, React, Next.js, NestJS, and React Native portfolio of Vladimir Antin.',
    images: [defaultOgImage],
  },
};

const Home = () => {
  return (
    <div className={'flex w-full flex-col items-center gap-4 xl:flex-row xl:items-start xl:gap-0'}>
      <JsonLd data={homePageSchema} />
      <section
        className={'w-full xl:w-1/2'}
        aria-labelledby={'home-hero-title'}>
        <Information />
      </section>
      <aside
        className={'flex flex-col items-center xl:items-start'}
        aria-label={'Professional profiles and references'}>
        <References />
      </aside>
    </div>
  );
};

export default memo(Home);
