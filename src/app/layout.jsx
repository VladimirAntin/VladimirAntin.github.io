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
  description: 'Portfolio of Vladimir Antin, a full stack developer focused on Java, Spring, JavaScript, Angular, React, and Next.js.',
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vladimir Antin',
  url: siteUrl,
  image: `${siteUrl}/images/profile.jpg`,
  jobTitle: 'Full Stack Developer',
  email: 'mailto:antin502@gmail.com',
  telephone: '+381616279151',
  sameAs: ['https://github.com/vladimirantin'],
  knowsAbout: ['Java', 'Spring Boot', 'JavaScript', 'TypeScript', 'Angular', 'React', 'Next.js', 'Node.js'],
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Vladimir Antin | Full Stack Developer Portfolio',
    template: '%s',
  },
  description:
    'Portfolio of Vladimir Antin, a full stack developer from Novi Sad specialized in Java, Spring, JavaScript, Angular, React, and Next.js.',
  keywords: [
    'Vladimir Antin',
    'Full Stack Developer',
    'Java Developer',
    'Spring Boot',
    'JavaScript',
    'Angular',
    'React',
    'Next.js',
    'Portfolio',
  ],
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
