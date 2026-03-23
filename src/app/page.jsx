import {memo} from 'react';
import Information from '@/components/home/Information';
import References from '@/components/home/References';

export const metadata = {
  title: 'Vladimir Antin | Full Stack Developer Portfolio',
  description:
    'Vladimir Antin is a full stack software engineer from Novi Sad, Serbia. Experienced in Java, Spring Boot, Angular, React, Next.js, and mobile development with React Native.',
  keywords: [
    'Vladimir Antin',
    'Full Stack Developer Novi Sad',
    'Java Developer Serbia',
    'Spring Boot',
    'Angular Developer',
    'React Developer',
    'Next.js Portfolio',
    'Software Engineer',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Vladimir Antin | Full Stack Developer Portfolio',
    description:
      'Vladimir Antin is a full stack software engineer from Novi Sad, Serbia. Experienced in Java, Spring Boot, Angular, React, Next.js, and React Native.',
    images: [{ url: '/images/profile.jpg', width: 300, height: 300, alt: 'Vladimir Antin' }],
  },
};

const Home = () => {
  return (
    <div className={'flex flex-col items-center gap-4 xl:flex-row xl:items-start xl:gap-0 w-full'}>
      <h1 className={'sr-only'}>Vladimir Antin - Full Stack Developer Portfolio</h1>
      <div className={'w-full xl:w-1/2'}>
        <Information />
      </div>
      <div className={'flex flex-col items-center xl:items-start'}>
        <References />
      </div>
    </div>
  );
};

export default memo(Home);
