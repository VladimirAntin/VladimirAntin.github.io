import {Inter} from 'next/font/google';
import './index.css';
import Particles from '@/particles/Particles.jsx';
import Header from '@/components/navigation/Header';
import {cn} from '@/utils/CN';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/navigation/Footer';
import MobileNavigation from '@/components/navigation/MobileNavigation';
import JsonLd from '@/components/seo/JsonLd';
import {contact, defaultOgImage, siteName, siteUrl, socialProfiles} from '@/data/seo';

const inter = Inter({subsets: ['latin']});

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
  url: siteUrl,
  inLanguage: 'en',
  description:
    'Portfolio of Vladimir Antin, a full stack developer from Novi Sad, Serbia focused on Java, Spring Boot, JavaScript, TypeScript, Angular, React, and Next.js.',
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vladimir Antin',
  url: siteUrl,
  image: `${siteUrl}/images/profile.jpg`,
  jobTitle: 'Full Stack Developer',
  description:
    'Full Stack Developer from Novi Sad, Serbia with expertise in Java, Spring Boot, JavaScript, TypeScript, Angular, React, and Next.js.',
  email: `mailto:${contact.email}`,
  telephone: contact.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: contact.city,
    addressCountry: contact.countryCode,
  },
  sameAs: socialProfiles,
  knowsAbout: [
    'Java', 'Spring Boot', 'Micronaut', 'JavaScript', 'TypeScript',
    'Angular', 'React', 'Next.js', 'NestJS', 'Node.js', 'React Native',
    'MongoDB', 'MySQL', 'PostgreSQL', 'REST API', 'GraphQL', 'Docker',
  ],
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/images/va.png`,
  sameAs: socialProfiles,
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: 'Vladimir Antin | Full Stack Developer Portfolio',
    template: '%s | Vladimir Antin',
  },
  description:
    'Portfolio of Vladimir Antin, a full stack developer from Novi Sad, Serbia, specialized in Java, Spring Boot, JavaScript, TypeScript, Angular, React, and Next.js.',
  keywords: [
    'Vladimir Antin',
    'Full Stack Developer',
    'Java Developer',
    'Spring Boot Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Angular Developer',
    'React Developer',
    'Next.js Developer',
    'NestJS',
    'Micronaut',
    'React Native',
    'Node.js',
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'REST API',
    'GraphQL',
    'Portfolio',
    'Software Engineer',
    'Novi Sad',
    'Serbia',
    'freelance developer',
  ],
  authors: [{name: 'Vladimir Antin', url: siteUrl}],
  creator: 'Vladimir Antin',
  publisher: 'Vladimir Antin',
  category: 'technology',
  manifest: '/manifest.webmanifest',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Vladimir Antin | Full Stack Developer Portfolio',
    description:
      'Software engineer portfolio with projects in Java, Spring, JavaScript, Angular, React, and Next.js.',
    url: siteUrl,
    siteName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: defaultOgImage,
        width: 300,
        height: 300,
        alt: 'Vladimir Antin profile image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vladimir Antin | Full Stack Developer Portfolio',
    description:
      'Software engineer portfolio with projects in Java, Spring, JavaScript, Angular, React, and Next.js.',
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'rVhSpVb3sW36OBOqviY5UJAbUoNanLm_p0aSaNcspV0',
  },
  icons: {
    icon: '/images/va.png',
    apple: '/images/va.png',
  },
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className)}
        style={{
          backgroundImage: `url('/images/bg.png')`,
        }}
        suppressHydrationWarning
      >
        <JsonLd data={websiteSchema} />
        <JsonLd data={personSchema} />
        <JsonLd data={organizationSchema} />
        <Particles />
        <Header />
        <MobileNavigation />
        <main className={'flex flex-col xl:flex-row min-h-[80vh] mx-4 xl:mx-0'}>
          <Navigation />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
