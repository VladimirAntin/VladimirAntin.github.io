import {memo} from 'react';
import Link from 'next/link';
import GitlabIcon from '@/icons/projects/GitlabIcon';
import GithubIcon from '@/icons/projects/GithubIcon';
import NetlifyIcon from '@/icons/projects/NetlifyIcon';
import Tooltip from '@/components/tooltip/Tooltip';
import IframeClient from '@/components/IframeClient';

const links = [
  {
    href: 'https://gitlab.com/antin502/ebook',
    Icon: GitlabIcon,
    title: 'Gitlab',
    external: true,
  },
  {
    href: 'https://github.com/vladimirantin/ebook',
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

const NgMultiSelect = () => {
  return (
    <div className={'bg-white w-full xl:w-3/5 rounded-2xl mx-2'}>
      <div className={'flex justify-between items-center my-5 mx-2'}>
        <div></div>
        <h1 className={'text-center text-2xl font-bold m-2'}>./projects/ng-multiselect</h1>
        <div className={'flex justify-end items-center'}>
          {links.map(({href, external, Icon, title}) => (
            <Link
              href={href}
              target={external ? '_blank' : undefined}
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
      <IframeClient src={'https://ng-multiselect.netlify.app/'} />
    </div>
  );
};

export const metadata = {
  title: 'Vladimir Antin | ng-multiselect — Angular Multiselect Dropdown',
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
    images: [{ url: '/images/angular-website.png', width: 1200, height: 630, alt: 'ng-multiselect preview' }],
  },
};
export default memo(NgMultiSelect);
