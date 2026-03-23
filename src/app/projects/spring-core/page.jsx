import {memo} from 'react';
import GithubIcon from '@/icons/projects/GithubIcon';
import Link from 'next/link';
import Tooltip from '@/components/tooltip/Tooltip';
import MavenIcon from '@/icons/projects/MavenIcon';
import SpringCore from '@/components/SpringCore.jsx';

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
  title: 'Vladimir Antin | spring-core — Spring Boot Component Generator',
  description:
    'spring-core is an open-source Spring Boot library by Vladimir Antin that generates Spring components. Available on Maven Central and GitHub.',
  keywords: [
    'spring-core',
    'Spring Boot library',
    'Java open source',
    'Maven Central',
    'Spring component generator',
    'Vladimir Antin Java',
    'com.github.vladimirantin',
  ],
  alternates: {
    canonical: '/projects/spring-core',
  },
  openGraph: {
    title: 'spring-core | Spring Boot Library by Vladimir Antin',
    description: 'Open-source Spring Boot component generator library available on Maven Central.',
    images: [{ url: '/images/java.png', width: 1200, height: 630, alt: 'spring-core preview' }],
  },
};
export default memo(SpringCorePage);
