import {Inter} from 'next/font/google';
import './index.css';
import Particles from '@/particles/Particles.jsx';
import Header from '@/components/navigation/Header';
import {cn} from '@/utils/CN';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/navigation/Footer';
import MobileNavigation from '@/components/navigation/MobileNavigation';

const inter = Inter({subsets: ['latin']});
const siteUrl = 'https://vladimirantin.hok.rs';

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Vladimir Antin Portfolio',
  url: siteUrl,
  inLanguage: 'en',
  description: 'Portfolio of Vladimir Antin, a full stack developer from Novi Sad, Serbia focused on Java, Spring Boot, JavaScript, TypeScript, Angular, React, and Next.js.',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/projects`,
    'query-input': 'required name=search_term_string',
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vladimir Antin',
  url: siteUrl,
  image: `${siteUrl}/images/profile.jpg`,
  jobTitle: 'Full Stack Developer',
  description: 'Full Stack Developer from Novi Sad, Serbia with expertise in Java, Spring Boot, JavaScript, TypeScript, Angular, React, and Next.js.',
  email: 'mailto:antin502@gmail.com',
  telephone: '+381616279151',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Novi Sad',
    addressCountry: 'RS',
  },
  sameAs: [
    'https://github.com/vladimirantin',
    'https://gitlab.com/antin502',
    'https://www.linkedin.com/in/vladimir-antin',
    'https://npmjs.com/~antin502',
  ],
  knowsAbout: [
    'Java', 'Spring Boot', 'Micronaut', 'JavaScript', 'TypeScript',
    'Angular', 'React', 'Next.js', 'NestJS', 'Node.js', 'React Native',
    'MongoDB', 'MySQL', 'PostgreSQL', 'REST API', 'GraphQL', 'Docker',
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {'@type': 'ListItem', position: 1, name: 'Home', item: siteUrl},
    {'@type': 'ListItem', position: 2, name: 'Projects', item: `${siteUrl}/projects`},
    {'@type': 'ListItem', position: 3, name: 'Skills', item: `${siteUrl}/skills`},
    {'@type': 'ListItem', position: 4, name: 'CV', item: `${siteUrl}/cv`},
    {'@type': 'ListItem', position: 5, name: 'Contact', item: `${siteUrl}/contact-me`},
  ],
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Vladimir Antin | Full Stack Developer Portfolio',
    template: '%s',
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Vladimir Antin | Full Stack Developer Portfolio',
    description:
      'Software engineer portfolio with projects in Java, Spring, JavaScript, Angular, React, and Next.js.',
    url: siteUrl,
    siteName: 'Vladimir Antin Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/profile.jpg',
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
    images: ['/images/profile.jpg'],
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
  },
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head  />
      <body
        className={cn(inter.className)}
        style={{
          backgroundImage: `url('/images/bg.png')`,
        }}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(websiteSchema)}}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(personSchema)}}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbSchema)}}
        />
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
