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
    <section className={'bg-white w-full xl:w-3/5 rounded-2xl'} aria-labelledby={'ng-typed-title'}>
      <JsonLd data={projectSchema} />
      <div className={'flex justify-between items-center my-5 mx-2'}>
        <div></div>
        <h1 id={'ng-typed-title'} className={'text-center text-2xl font-bold m-2'}>ng-typed</h1>
        <div className={'flex justify-end items-center'}>
          {links.map(({href, external, Icon, title}) => (
            <Link
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer noopener' : undefined}
              className={'p-2 rounded-2xl grayscale hover:grayscale-0 hover:scale-125 duration-300'}
              key={'href-' + href}
            >
              <Tooltip
                content={title}
                className={'text-white bg-black rounded-2xl px-2 py-1'}
              >
                <Icon />
              </Tooltip>
            </Link>
          ))}
        </div>
      </div>
      <div className={'px-4 pb-4 text-gray-700'}>
        <p>
          <strong>ng-typed</strong> is an Angular typing-effect library designed for portfolio sites, landing pages,
          and UI sections that need animated text with a lightweight developer-friendly API.
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
    images: [{ url: '/images/angular.png', width: 1200, height: 630, alt: 'ng-typed preview' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ng-typed | Angular Typing Effect Library by Vladimir Antin',
    description: 'Angular typing-effect animation library with npm package and live demo.',
    images: ['/images/angular.png'],
  },
};
export default memo(NgTyped);
