import {memo} from 'react';
import GithubIcon from '@/app/components/icons/projects/GithubIcon';
import Link from 'next/link';
import Tooltip from '@/app/components/tooltip/Tooltip';
import MavenIcon from '@/app/components/icons/projects/MavenIcon';
import SpringCore from '@/app/components/SpringCore';

const links = [
  {
    href: 'https://mvnrepository.com/artifact/com.github.vladimirantin/spring-core',
    Icon: MavenIcon,
    title: 'maven',
    external: true,
  },
  {
    href: 'https://github.com/vladimirantin/spring-core',
    Icon: GithubIcon,
    title: 'Github',
    external: true,
  },
];

const SpringCorePage = () => {
  return (
    <div className={' w-full xl:w-3/5 bg-white p-5 rounded-2xl'}>
      <div className={'flex justify-between items-center my-5'}>
        <div></div>
        <h1 className="text-center text-2xl font-bold m-2">./projects/spring-core</h1>
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
      <SpringCore />
    </div>
  );
};

export const metadata = {
  title: 'Vladimir Antin | Spring Core',
};
export default memo(SpringCorePage);
