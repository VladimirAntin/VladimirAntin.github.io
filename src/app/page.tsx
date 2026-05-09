import {memo} from 'react';
import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Information from '@/components/home/Information';
import References from '@/components/home/References';
import ContactMeForm from '@/components/contact-me/ContactMeForm';
import CVViewer from '@/components/pdf/CVViewerClient';
import Tooltip from '@/components/tooltip/Tooltip';
import DownloadIcon from '@/icons/DownloadIcon.jsx';
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

export const metadata: Metadata = {
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
  const contacts = [
    {link: `tel:${contact.phone}`, content: '+381 61 627 91 51'},
    {link: `mailto:${contact.email}`, content: contact.email},
  ];

  return (
    <div className={'flex w-full flex-col items-center gap-20 pb-12'}>
      <JsonLd data={homePageSchema} />
      <section
        id={'home'}
        className={'flex w-full flex-col items-center gap-4 xl:flex-row xl:items-start xl:gap-0'}
        aria-labelledby={'home-hero-title'}>
        <div className={'w-full xl:w-1/2'}>
          <Information />
        </div>
        <aside
          className={'flex flex-col items-center xl:items-start'}
          aria-label={'Professional profiles and references'}>
          <References />
        </aside>
      </section>

      <section
        id={'cv'}
        className={'flex w-full justify-center'}
        aria-labelledby={'cv-title'}>
        <div className={'flex min-h-screen w-full min-w-25 flex-col items-center rounded-2xl bg-white pb-7.5 xl:w-4/5'}>
          <div className={'flex w-full items-center justify-between rounded-t-2xl bg-gray-300 p-4'}>
            <h2 id={'cv-title'}>{'Vladimir Antin CV'}</h2>
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

      <section
        id={'contact'}
        className={'flex w-full flex-col items-center gap-10'}
        aria-labelledby={'contact-title'}>
        <div className={'max-w-2xl text-center text-white'}>
          <h2
            id={'contact-title'}
            className={'mb-3 text-4xl font-bold'}>
            {'Contact Vladimir Antin'}
          </h2>
          <p className={'text-lg text-gray-300'}>
            {
              'Available for freelance projects, product development, long-term collaboration, and technical consulting.'
            }
          </p>
        </div>
        <Image
          src={'/images/profile.jpg'}
          className={'rounded-2xl bg-white p-1'}
          alt={'Vladimir Antin - Full Stack Developer from Novi Sad, Serbia'}
          width={300}
          height={300}
          priority
        />
        <div className={'flex w-full flex-col gap-4 rounded-2xl bg-white p-5 xl:w-1/2'}>
          <p className={'text-gray-500'}>
            {
              "I'm happy to answer any questions you have or provide you with an estimate. Just send me a message in the form below with any questions you may have."
            }
          </p>
          <div className={'flex justify-between px-2'}>
            {contacts.map(({link, content}, idx) => (
              <Link
                key={'link-' + idx}
                href={link}
                className={'text-gray-500 hover:underline'}>
                {content}
              </Link>
            ))}
          </div>
        </div>
        <ContactMeForm />
      </section>
    </div>
  );
};

export default memo(Home);
