import {memo} from 'react';
import Link from 'next/link';
import NpmIcon from '@/icons/projects/NpmIcon';
import GitlabIcon from '@/icons/projects/GitlabIcon';
import GithubIcon from '@/icons/projects/GithubIcon';
import NetlifyIcon from '@/icons/projects/NetlifyIcon';
import Tooltip from '@/components/tooltip/Tooltip';
import IframeClient from '@/components/IframeClient';
import JsonLd from '@/components/seo/JsonLd';
import {siteUrl} from '@/data/seo';

const links = [
  {
    href: 'https://www.npmjs.com/package/@antin502/ng-multiselect',
    Icon: NpmIcon,
    title: 'NPM',
    external: true,
  },
  {
    href: 'https://gitlab.com/antin502/ng-multiselect',
    Icon: GitlabIcon,
    title: 'Gitlab',
    external: true,
  },
  {
    href: 'https://github.com/vladimirantin/ng-multiselect',
    Icon: GithubIcon,
    title: 'Github',
    external: true,
  },
  {
    href: 'https://ng-multiselect.netlify.app/',
    Icon: NetlifyIcon,
    title: 'Netlify',
    external: true,
  },
];

const projectSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareSourceCode',
  name: 'ng-multiselect',
  codeRepository: 'https://github.com/vladimirantin/ng-multiselect',
  url: `${siteUrl}/projects/ng-multiselect`,
  programmingLanguage: 'TypeScript',
  runtimePlatform: 'Angular',
  description:
    'Open-source Angular multiselect dropdown library by Vladimir Antin with live demo and package distribution.',
};

const NgMultiSelect = () => {
  return (
    <section
      className={'mx-2 w-full rounded-2xl bg-white xl:w-3/5'}
      aria-labelledby={'ng-multiselect-title'}>
      <JsonLd data={projectSchema} />
      <div className={'mx-2 my-5 flex items-center justify-between'}>
        <div></div>
        <h1
          id={'ng-multiselect-title'}
          className={'m-2 text-center text-2xl font-bold'}>
          ng-multiselect
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
          <strong>ng-multiselect</strong> is an Angular multiselect dropdown component focused on
          easy integration, reusable UI behavior, and a practical developer experience for
          real-world Angular applications.
        </p>
      </div>
      <IframeClient src={'https://ng-multiselect.netlify.app/'} />
    </section>
  );
};

export const metadata = {
  title: 'ng-multiselect — Angular Multiselect Dropdown',
  description:
    'ng-multiselect is an Angular multiselect dropdown library built by Vladimir Antin. Browse the live demo, npm package, and source code on GitHub and GitLab.',
  keywords: [
    'ng-multiselect',
    'Angular multiselect dropdown',
    'Angular library',
    'npm package',
    'Vladimir Antin Angular',
    'open source Angular component',
  ],
  alternates: {
    canonical: '/projects/ng-multiselect',
  },
  openGraph: {
    title: 'ng-multiselect | Angular Multiselect Dropdown by Vladimir Antin',
    description: 'Open-source Angular multiselect dropdown library with live demo.',
    url: `${siteUrl}/projects/ng-multiselect`,
    images: [
      {url: '/images/angular-website.png', width: 1200, height: 630, alt: 'ng-multiselect preview'},
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ng-multiselect | Angular Multiselect Dropdown by Vladimir Antin',
    description: 'Open-source Angular multiselect dropdown library with live demo and npm package.',
    images: ['/images/angular-website.png'],
  },
};
export default memo(NgMultiSelect);
