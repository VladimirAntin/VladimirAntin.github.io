import {memo} from 'react';
import Link from 'next/link';
import NpmIcon from '@/icons/projects/NpmIcon';
import GithubIcon from '@/icons/projects/GithubIcon';
import NetlifyIcon from '@/icons/projects/NetlifyIcon';
import Tooltip from '@/components/tooltip/Tooltip';
import IframeClient from '@/components/IframeClient';
import JsonLd from '@/components/seo/JsonLd';
import {siteUrl} from '@/data/seo';

const links = [
  {
    href: 'https://www.npmjs.com/package/ng-typed',
    Icon: NpmIcon,
    title: 'NPM',
    external: true,
  },
  {
    href: 'https://github.com/vladimirantin/ng-typed',
    Icon: GithubIcon,
    title: 'Github',
    external: true,
  },
  {
    href: 'https://ng-typed.netlify.app/',
    Icon: NetlifyIcon,
    title: 'Netlify',
    external: true,
  },
];

const projectSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareSourceCode',
  name: 'ng-typed',
  codeRepository: 'https://github.com/vladimirantin/ng-typed',
  url: `${siteUrl}/projects/ng-typed`,
  programmingLanguage: 'TypeScript',
  runtimePlatform: 'Angular',
  description:
    'Open-source Angular typing-effect library by Vladimir Antin with npm package and live demo.',
};

const NgTyped = () => {
  return (
    <section
      className={'w-full rounded-2xl bg-white xl:w-3/5'}
      aria-labelledby={'ng-typed-title'}>
      <JsonLd data={projectSchema} />
      <div className={'mx-2 my-5 flex items-center justify-between'}>
        <div></div>
        <h1
          id={'ng-typed-title'}
          className={'m-2 text-center text-2xl font-bold'}>
          ng-typed
        </h1>
        <div className={'flex items-center justify-end'}>
          {links.map(({href, external, Icon, title}) => (
            <Link
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer noopener' : undefined}
              className={'rounded-2xl p-2 grayscale duration-300 hover:scale-125 hover:grayscale-0'}
              key={'href-' + href}>
              <Tooltip
                content={title}
                className={'rounded-2xl bg-black px-2 py-1 text-white'}>
                <Icon />
              </Tooltip>
            </Link>
          ))}
        </div>
      </div>
      <div className={'px-4 pb-4 text-gray-700'}>
        <p>
          <strong>ng-typed</strong> is an Angular typing-effect library designed for portfolio
          sites, landing pages, and UI sections that need animated text with a lightweight
          developer-friendly API.
        </p>
      </div>
      <IframeClient src={'https://ng-typed.netlify.app/'} />
    </section>
  );
};

export const metadata = {
  title: 'ng-typed — Angular Typing Effect Library',
  description:
    'ng-typed is an Angular typing-effect animation library built by Vladimir Antin. Explore the live demo, npm package, and source code on GitHub and GitLab.',
  keywords: [
    'ng-typed',
    'Angular typing effect',
    'Angular animation library',
    'npm Angular package',
    'Vladimir Antin Angular',
    'typing animation component',
    'open source Angular',
  ],
  alternates: {
    canonical: '/projects/ng-typed',
  },
  openGraph: {
    title: 'ng-typed | Angular Typing Effect Library by Vladimir Antin',
    description: 'Open-source Angular library for typing-effect animations with live demo.',
    url: `${siteUrl}/projects/ng-typed`,
    images: [{url: '/images/angular.png', width: 1200, height: 630, alt: 'ng-typed preview'}],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ng-typed | Angular Typing Effect Library by Vladimir Antin',
    description: 'Angular typing-effect animation library with npm package and live demo.',
    images: ['/images/angular.png'],
  },
};
export default memo(NgTyped);
