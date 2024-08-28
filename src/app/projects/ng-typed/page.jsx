import {memo} from 'react';
import Link from 'next/link';
import NpmIcon from '@/app/components/icons/projects/NpmIcon';
import GithubIcon from '@/app/components/icons/projects/GithubIcon';
import NetlifyIcon from '@/app/components/icons/projects/NetlifyIcon';
import Tooltip from '@/app/components/tooltip/Tooltip';
import IframeClient from '@/app/components/IframeClient';

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

const NgTyped = () => {
  return (
    <div className={'bg-white w-full xl:w-3/5 rounded-2xl'}>
      <div className={'flex justify-between items-center my-5 mx-2'}>
        <div></div>
        <h1 className={'text-center text-2xl font-bold m-2'}>./projects/ng-typed</h1>
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
      <IframeClient src={'https://ng-typed.netlify.app/'} />
    </div>
  );
};

export const metadata = {
  title: 'Vladimir Antin | Ng Typed',
};
export default memo(NgTyped);
