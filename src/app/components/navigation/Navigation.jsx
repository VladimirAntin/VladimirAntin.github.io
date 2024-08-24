'use client';
import Link from 'next/link';
import {memo} from 'react';
import HomeIcon from '@/app/components/icons/HomeIcon';
import SkillsIcon from '@/app/components/icons/SkillsIcon';
import ProjectsIcon from '@/app/components/icons/ProjectsIcon';
import CVIcon from '@/app/components/icons/CVIcon';
import AskIcon from '@/app/components/icons/AskIcon';
import {cn} from '@/app/utils/CN';
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
    <div className={'flex w-[20vw] mt-[100px]'}>
      <nav className={'flex flex-col gap-10  w-1/2 pl-10'}>
        {navItems.map(({href, title, Icon}, idx) => (
          <Link
            href={href}
            key={'nav-item-' + idx}
            className={cn('flex gap-1 text-white group h-[48px] justify-center items-center', {'border-b-4 border-b-white pb-4': pathname === href})}
          >
            <div className={'group-hover:hidden'}>
              <Icon
                width={48}
                height={48}
              />
            </div>
            <p className={'hidden group-hover:block'}>{title}</p>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default memo(Navigation);
