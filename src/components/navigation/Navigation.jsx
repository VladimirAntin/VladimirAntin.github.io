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
    <div className={'hidden xl:flex w-[20vw] mt-[100px]'}>
      <nav className={'flex flex-col gap-5 w-full'}>
        {navItems.map(({href, title, Icon}, idx) => (
          <Link
            href={href}
            key={'nav-item-' + idx}
            className={cn('flex gap-1 text-black group h-[56px] justify-between items-center bg-white rounded-r-full px-3 w-min hover:w-1/2', {
              'bg-black': pathname === href,
            })}
          >
            <Icon
              width={32}
              height={32}
              color={pathname === href ? '#fff' : '#000'}
            />
            <p className={cn('font-bold hidden group-hover:block animate-fade-in-left', {'text-white': pathname === href})}>{title}</p>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default memo(Navigation);
