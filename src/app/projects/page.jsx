import {memo} from 'react';
import MavenIcon from '@/app/components/icons/projects/MavenIcon';
import GithubIcon from '@/app/components/icons/projects/GithubIcon';
import Link from 'next/link';
import Image from 'next/image';
import NpmIcon from '@/app/components/icons/projects/NpmIcon';
import GitlabIcon from '@/app/components/icons/projects/GitlabIcon';

const projects = [
  {
    title: 'Spring Core',
    description: 'Spring core is library for Spring boot framework. This is component generator.',
    image: '/images/java.png',
    url: '/projects/spring-core',
    links: [
      {
        href: 'https://mvnrepository.com/artifact/com.github.vladimirantin/spring-core',
        Icon: MavenIcon,
        external: true,
      },
      {
        href: 'https://github.com/vladimirantin/spring-core',
        Icon: GithubIcon,
        external: true,
      },
    ],
  },
  {
    title: 'Ng Multiselect',
    description: 'Ng Multiselect is lib for Angular.',
    image: '/images/angular.png',
    links: [
      {
        href: 'https://www.npmjs.com/package/@antin502/ng-multiselect',
        Icon: NpmIcon,
        external: true,
      },
      {
        href: 'https://github.com/vladimirantin/ng-multiselect',
        Icon: GithubIcon,
        external: true,
      },
    ],
  },
  {
    title: 'Ng Typed',
    description: 'Ng Typed is lib for portfolio in Angular 6. This is simple type-on effect component for angular websites.',
    image: '/images/angular.png',
    links: [
      {
        href: 'https://www.npmjs.com/package/ng-typed',
        Icon: NpmIcon,
        external: true,
      },
      {
        href: 'https://github.com/vladimirantin/ng-typed',
        Icon: GithubIcon,
        external: true,
      },
    ],
  },
  {
    title: 'eBook',
    description: 'eBook is web application. Application created with Spring Boot framework, Angular framework and use Lucene lib for searching index of books.',
    image: '/images/ebook-project.png',
    links: [
      {
        href: 'https://gitlab.com/antin502/ebook',
        Icon: GitlabIcon,
        external: true,
      },
      {
        href: 'https://github.com/vladimirantin/ebook',
        Icon: GithubIcon,
        external: true,
      },
    ],
  },
  ,
  {
    title: 'eLearning',
    description: 'eLearning is web application. Application created with Spring Boot framework, Angular framework and use websockets for live chat.',
    image: '/images/elearning-project.png',
    links: [
      {
        href: 'https://github.com/vladimirantin/eo',
        Icon: GithubIcon,
        external: true,
      },
    ],
  },
];

const ContainerImage = ({children, url, ...props}) => {
  return !url ? (
    <div {...props}>{children}</div>
  ) : (
    <Link
      href={url}
      {...props}
    >
      {children}
    </Link>
  );
};

const Projects = () => {
  return (
    <div className={'flex flex-col gap-10 w-3/5'}>
      {projects.map(({title, description, image, links, url}, idx) => (
        <div
          key={'project-' + idx}
          className={'bg-white rounded-2xl p-4 flex justify-between gap-4'}
        >
          <ContainerImage
            className={'flex flex-col gap-2 border border-gray-600 bg-gray-600 rounded-2xl p-4 hover:scale-110 duration-300'}
            url={url}
          >
            <p className={'text-white text-2xl font-bold'}>{title}</p>
            <Image
              src={image}
              alt={title}
              width={200}
              height={200}
            />
          </ContainerImage>
          <div className={'flex flex-col items-end justify-between gap-2 w-1/2'}>
            <p className={'font-medium'}>{description}</p>
            <div className={'flex gap-4'}>
              {links.map(({href, external, Icon}) => (
                <Link
                  href={href}
                  target={external ? '_blank' : undefined}
                  className={'p-2 rounded-2xl grayscale hover:grayscale-0 hover:scale-125 duration-300'}
                  key={'href-' + href}
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(Projects);
