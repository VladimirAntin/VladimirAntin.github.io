import {memo} from 'react';
import DownloadIcon from '@icons/DownloadIcon';
import Tooltip from '@components/tooltip/Tooltip';
import JsonLd from '@components/seo/JsonLd';
import CVViewer from '@components/pdf/CVViewerClient';
import {defaultOgImage, siteUrl} from '@data/seo';

const cvPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  name: 'Vladimir Antin CV',
  url: `${siteUrl}/cv`,
  mainEntity: {
    '@type': 'Person',
    name: 'Vladimir Antin',
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: 'Vladimir Antin CV',
      url: `${siteUrl}/Vladimir-Antin-CV.pdf`,
    },
  },
};

const CV = () => {
  return (
    <section
      className={'flex w-full justify-center xl:w-3/5'}
      aria-labelledby={'cv-title'}>
      <JsonLd data={cvPageSchema} />
      <div
        className={
          'flex min-h-screen min-w-[100px] animate-fade-in-left flex-col items-center rounded-2xl bg-white pb-[30px]'
        }>
        <div className={'flex w-full items-center justify-between rounded-t-2xl bg-gray-300 p-4'}>
          <h1 id={'cv-title'}>Vladimir Antin CV</h1>
          <a
            className={'group flex items-center justify-center rounded-2xl bg-white hover:bg-black'}
            href={'/Vladimir-Antin-CV.pdf'}
            download>
            <Tooltip
              content={'Download CV'}
              className={'rounded-2xl bg-black px-2 py-1 text-white'}>
              <DownloadIcon className={'group-hover:fill-white'} />
            </Tooltip>
          </a>
        </div>
        <CVViewer />
      </div>
    </section>
  );
};
export const metadata = {
  title: 'CV',
  description:
    'View and download the CV of Vladimir Antin — full stack developer with 5+ years of experience in Java, Spring Boot, Angular, React, Next.js, React Native, and more.',
  keywords: [
    'Vladimir Antin CV',
    'Vladimir Antin resume',
    'full stack developer resume',
    'Java Spring Boot CV',
    'Angular React developer',
    'Novi Sad developer',
  ],
  alternates: {
    canonical: '/cv',
  },
  openGraph: {
    title: 'Vladimir Antin | CV',
    description: 'Download the CV of Vladimir Antin, full stack developer from Novi Sad, Serbia.',
    url: `${siteUrl}/cv`,
    images: [{url: defaultOgImage, width: 300, height: 300, alt: 'Vladimir Antin'}],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vladimir Antin | CV',
    description:
      'Download the CV and resume of Vladimir Antin, full stack developer from Novi Sad, Serbia.',
    images: [defaultOgImage],
  },
};
export default memo(CV);
