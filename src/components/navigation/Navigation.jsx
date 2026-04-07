'use client';
import Link from 'next/link';
import {memo} from 'react';
import HomeIcon from '@/icons/HomeIcon.jsx';
import SkillsIcon from '@/icons/SkillsIcon.jsx';
import ProjectsIcon from '@/icons/ProjectsIcon.jsx';
import CVIcon from '@/icons/CVIcon.jsx';
import AskIcon from '@/icons/AskIcon.jsx';
import {cn} from '@/utils/CN.js';
import {usePathname} from 'next/navigation';

const navItems = [
  {title: 'Home', href: '/', Icon: HomeIcon},
  {title: 'Skills', href: '/skills', Icon: SkillsIcon},
  {title: 'Projects', href: '/projects', Icon: ProjectsIcon},
  {title: 'CV', href: '/cv', Icon: CVIcon},
  {title: 'Contact me', href: '/contact-me', Icon: AskIcon},
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className={'mt-[100px] hidden w-[20vw] xl:flex'}>
      <nav className={'flex w-full flex-col gap-5'}>
        {navItems.map(({href, title, Icon}, idx) => (
          <Link
            href={href}
            key={'nav-item-' + idx}
            className={cn(
              'group flex h-[56px] w-min items-center justify-between gap-1 rounded-r-full bg-white px-3 text-black hover:w-1/2',
              {
                'bg-black': pathname === href,
              },
            )}>
            <Icon
              width={32}
              height={32}
              color={pathname === href ? '#fff' : '#000'}
            />
            <p
              className={cn('hidden animate-fade-in-left font-bold group-hover:block', {
                'text-white': pathname === href,
              })}>
              {title}
            </p>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default memo(Navigation);
