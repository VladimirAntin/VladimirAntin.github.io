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
    <section
      className={'w-full rounded-2xl bg-white p-5 xl:w-3/5'}
      aria-labelledby={'spring-core-title'}>
      <JsonLd data={projectSchema} />
      <div className={'my-5 flex items-center justify-between'}>
        <div></div>
        <h1
          id={'spring-core-title'}
          className="m-2 text-center text-2xl font-bold">
          spring-core
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
      <div className={'mb-6 text-gray-700'}>
        <p>
          <strong>spring-core</strong> is a Java and Spring Boot library focused on component
          generation and reusable backend development patterns, published for easier adoption
          through Maven repositories.
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
    images: [{url: '/images/java.png', width: 1200, height: 630, alt: 'spring-core preview'}],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'spring-core | Spring Boot Library by Vladimir Antin',
    description:
      'Open-source Spring Boot component generator library available on Maven repositories.',
    images: ['/images/java.png'],
  },
};
export default memo(SpringCorePage);
