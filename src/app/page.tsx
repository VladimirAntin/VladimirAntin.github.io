import {memo} from 'react';
import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Information from '@/components/home/Information';
import References from '@/components/home/References';
import ContactMeForm from '@/components/contact-me/ContactMeForm';
import CVViewerClient from '@/components/pdf/CVViewerClient';
import FadeIn from '@/components/ui/FadeIn';
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
    <div className={'mx-auto flex w-full max-w-6xl flex-col items-center gap-28 px-4 pb-20 xl:px-8'}>
      <JsonLd data={homePageSchema} />

      {/* ── Hero ──────────────────────────────────────── */}
      <section
        id={'home'}
        className={'flex w-full flex-col gap-10 xl:flex-row xl:gap-16'}
        aria-labelledby={'home-hero-title'}>
        <div className={'w-full xl:w-1/2'}>
          <Information />
        </div>
        <aside
          className={'w-full xl:w-1/2'}
          aria-label={'Professional profiles and references'}>
          <References />
        </aside>
      </section>

      {/* ── CV ────────────────────────────────────────── */}
      <FadeIn
        className={'w-full'}
        direction={'up'}>
        <section
          id={'cv'}
          aria-labelledby={'cv-title'}>
          <div className={'overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5'}>
            {/* Browser-chrome header */}
            <div className={'flex items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-3'}>
              <div className={'flex items-center gap-3'}>
                <span className={'size-3 rounded-full bg-red-400'} />
                <span className={'size-3 rounded-full bg-yellow-400'} />
                <span className={'size-3 rounded-full bg-green-400'} />
                <h2
                  id={'cv-title'}
                  className={'ml-2 text-xs font-semibold tracking-wide text-gray-500'}>
                  {'Vladimir-Antin-CV.pdf'}
                </h2>
              </div>
              <a
                className={'flex items-center gap-1.5 rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-black'}
                href={'/Vladimir-Antin-CV.pdf'}
                download>
                <DownloadIcon width={13} height={13} />
                {'Download'}
              </a>
            </div>
            {/* Direct load — no lazy wrapper */}
            <CVViewerClient />
          </div>
        </section>
      </FadeIn>

      {/* ── Contact ───────────────────────────────────── */}
      <FadeIn
        className={'flex w-full flex-col items-center gap-10'}
        direction={'up'}>
        <section
          id={'contact'}
          className={'flex w-full flex-col items-center gap-10'}
          aria-labelledby={'contact-title'}>
          <div className={'max-w-xl text-center'}>
            <h2
              id={'contact-title'}
              className={'mb-3 text-4xl font-bold text-white'}>
              {"Let's work together"}
            </h2>
            <p className={'text-base text-gray-400'}>
              {'Available for freelance projects, long-term collaboration, and technical consulting.'}
            </p>
          </div>

          <div className={'flex w-full flex-col items-center gap-6 xl:flex-row xl:items-start xl:justify-center xl:gap-16'}>
            {/* Profile card */}
            <div className={'flex flex-col items-center gap-4'}>
              <Image
                src={'/images/profile.jpg'}
                className={'rounded-2xl shadow-xl ring-2 ring-white/10'}
                alt={'Vladimir Antin - Full Stack Developer from Novi Sad, Serbia'}
                width={220}
                height={220}
                priority
              />
              <div className={'flex flex-col items-center gap-1 text-center'}>
                {contacts.map(({link, content}, idx) => (
                  <Link
                    key={'link-' + idx}
                    href={link}
                    className={'text-sm text-gray-400 transition hover:text-white hover:underline'}>
                    {content}
                  </Link>
                ))}
              </div>
            </div>

            <ContactMeForm />
          </div>
        </section>
      </FadeIn>
    </div>
  );
};

export default memo(Home);
