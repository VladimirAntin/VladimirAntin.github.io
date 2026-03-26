import {memo} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactMeForm from '@/components/contact-me/ContactMeForm.jsx';
import JsonLd from '@/components/seo/JsonLd';
import {contact, defaultOgImage, siteUrl} from '@/data/seo';

const contacts = [
  {link: `tel:${contact.phone}`, content: '+381 61 627 91 51'},
  {link: `mailto:${contact.email}`, content: contact.email},
];

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Vladimir Antin',
  url: `${siteUrl}/contact-me`,
  description:
    'Get in touch with Vladimir Antin for full stack development, freelance work, collaboration, or technical consulting.',
  mainEntity: {
    '@type': 'Person',
    name: 'Vladimir Antin',
    email: contact.email,
    telephone: contact.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: contact.city,
      addressCountry: contact.countryCode,
    },
  },
};

const ContactMe = () => {
  return (
    <section className={'flex flex-col items-center w-full xl:w-3/5 gap-10'} aria-labelledby={'contact-title'}>
      <JsonLd data={contactPageSchema} />
      <div className={'text-center text-white max-w-2xl'}>
        <h1 id={'contact-title'} className={'text-4xl font-bold mb-3'}>Contact Vladimir Antin</h1>
        <p className={'text-lg text-gray-300'}>
          Available for freelance projects, product development, long-term collaboration, and technical consulting.
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
      <div className={'flex flex-col gap-4 bg-white w-full xl:w-1/2 p-5 rounded-2xl'}>
        <p className={'text-gray-500'}>{`I'm happy to answer any questions you have or provide you with an estimate. Just send me a message in the form below with any questions you may have.`}</p>
        <div className={'flex justify-between px-2'}>
          {contacts.map(({link, content}, idx) => (
            <Link
              key={'link-' + idx}
              href={link}
              className={'text-gray-500 hover:underline'}
            >
              {content}
            </Link>
          ))}
        </div>
      </div>
      <ContactMeForm />
    </section>
  );
};
export const metadata = {
  title: 'Contact me',
  description:
    'Get in touch with Vladimir Antin for full stack development, project collaboration, freelance work, or technical consulting. Based in Novi Sad, Serbia.',
  keywords: [
    'contact Vladimir Antin',
    'hire full stack developer',
    'freelance Java developer',
    'hire React developer',
    'software engineer Novi Sad',
    'collaborate developer Serbia',
  ],
  alternates: {
    canonical: '/contact-me',
  },
  openGraph: {
    title: 'Contact Vladimir Antin | Full Stack Developer',
    description:
      'Get in touch with Vladimir Antin for development projects, freelance work, or collaboration.',
    url: `${siteUrl}/contact-me`,
    images: [{url: defaultOgImage, width: 300, height: 300, alt: 'Vladimir Antin'}],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Vladimir Antin | Full Stack Developer',
    description:
      'Get in touch for freelance work, collaboration, and technical consulting.',
    images: [defaultOgImage],
  },
};

export default memo(ContactMe);
