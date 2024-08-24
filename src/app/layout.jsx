import {Inter} from 'next/font/google';
import './index.css';
import Particles from '@/app/Particles.jsx';
import Header from '@/app/components/Header.jsx';
import {cn} from '@/app/utils/CN.js';
import Navigation from '@/app/components/Navigation.jsx';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'Vladimir Antin | Portfolio',
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Vladimir Antin</title>
        <base href="/" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta
          name="google-site-verification"
          content="rVhSpVb3sW36OBOqviY5UJAbUoNanLm_p0aSaNcspV0"
        />
        <meta
          name="description"
          content="Full Stack developer from Novi Sad, Serbia.Proficient in Java, JavaScript, MySQL, NoSQL.."
        />
        <meta
          name="google"
          content="notranslate"
        />
        <meta
          name="referrer"
          content="origin-when-crossorigin"
          id="meta_referrer"
        />
        <meta
          name="keywords"
          content="developer;programmer;full-stack;fullstack;java;javascript;angular;spring"
        />
        <meta
          property="og:url"
          content="https://vladimirantin.github.io/"
        />
        <meta
          property="og:description"
          content="Full Stack developer from Novi Sad, Serbia.Proficient in Java, JavaScript, MySQL, NoSQL.."
        />
        <meta
          property="og:site_name"
          content="Vladimir Antin | Portfolio"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="/images/va.png"
        />
      </head>
      <body
        className={cn(inter.className)}
        style={{
          backgroundImage: `url('/images/bg.png')`,
        }}
      >
        <Particles />
        <Header />
        <main className={'flex flex-row'}>
          <Navigation />
          {children}
        </main>
      </body>
    </html>
  );
}
