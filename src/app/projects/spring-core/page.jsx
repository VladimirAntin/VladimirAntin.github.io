import {memo} from 'react';
import GithubIcon from '@/icons/projects/GithubIcon';
import Link from 'next/link';
import Tooltip from '@/components/tooltip/Tooltip';
import MavenIcon from '@/icons/projects/MavenIcon';
import SpringCore from '@/components/SpringCore.jsx';
import JsonLd from '@/components/seo/JsonLd';
import {siteUrl} from '@/data/seo';

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

const projectSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareSourceCode',
  name: 'spring-core',
  codeRepository: 'https://github.com/vladimirantin/spring-core',
  url: `${siteUrl}/projects/spring-core`,
  programmingLanguage: 'Java',
  runtimePlatform: 'Spring Boot',
  description:
    'Open-source Spring Boot component generator library by Vladimir Antin, published to Maven repositories.',
};

const SpringCorePage = () => {
  return (
    <section className={' w-full xl:w-3/5 bg-white p-5 rounded-2xl'} aria-labelledby={'spring-core-title'}>
      <JsonLd data={projectSchema} />
      <div className={'flex justify-between items-center my-5'}>
        <div></div>
        <h1 id={'spring-core-title'} className="text-center text-2xl font-bold m-2">spring-core</h1>
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
      <div className={'mb-6 text-gray-700'}>
        <p>
          <strong>spring-core</strong> is a Java and Spring Boot library focused on component generation and reusable
          backend development patterns, published for easier adoption through Maven repositories.
        </p>
      </div>
      <SpringCore />
    </section>
  );
};

export const metadata = {
  title: 'spring-core — Spring Boot Component Generator',
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
    url: `${siteUrl}/projects/spring-core`,
    images: [{ url: '/images/java.png', width: 1200, height: 630, alt: 'spring-core preview' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'spring-core | Spring Boot Library by Vladimir Antin',
    description: 'Open-source Spring Boot component generator library available on Maven repositories.',
    images: ['/images/java.png'],
  },
};
export default memo(SpringCorePage);
