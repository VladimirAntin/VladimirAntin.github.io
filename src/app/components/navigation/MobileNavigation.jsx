'use client';
import Link from 'next/link';
import {memo, useState} from 'react';
import HomeIcon from '@/app/components/icons/HomeIcon';
import SkillsIcon from '@/app/components/icons/SkillsIcon';
import ProjectsIcon from '@/app/components/icons/ProjectsIcon';
import CVIcon from '@/app/components/icons/CVIcon';
import AskIcon from '@/app/components/icons/AskIcon';
import {cn} from '@/app/utils/CN';
import {usePathname} from 'next/navigation';
import MenuIcon from '@/app/components/icons/MenuIcon';
import CloseIcon from '@/app/components/icons/CloseIcon';

const navItems = [
  {title: 'Home', href: '/', Icon: HomeIcon},
  {title: 'Skills', href: '/skills', Icon: SkillsIcon},
  {title: 'Projects', href: '/projects', Icon: ProjectsIcon},
  {title: 'CV', href: '/cv', Icon: CVIcon},
  {title: 'Contact me', href: '/contact-me', Icon: AskIcon},
];

const MobileNavigation = () => {
  const pathname = usePathname();
  const [opened, setOpened] = useState(false);

  return (
    <>
      {opened ? <div className={'fixed inset-0 bg-fixed w-screen h-screen bg-black bg-opacity-80 z-40'} /> : null}
      <div
        className={cn('fixed bottom-10 right-10 flex flex-col items-end xl:hidden z-50')}
        onBlur={(e) => {
          if (!e.relatedTarget) {
            setOpened(false);
          }
        }}
      >
        <nav className={cn('flex flex-col gap-5 w-full mb-4', {hidden: !opened})}>
          {navItems.map(({href, title, Icon}, idx, items) => (
            <Link
              href={href}
              key={'nav-item-' + idx}
              onClick={() => setOpened(false)}
              className={cn('flex gap-1 text-black h-[56px] justify-between items-center bg-white rounded-full px-3 w-full animate-fade-in-right ', {
                'bg-black': pathname === href,
              })}
              style={{animationDuration: `${200 * (items.length - idx)}ms`}}
            >
              <p className={cn('font-bold', {'text-white': pathname === href})}>{title}</p>
              <Icon
                width={32}
                height={32}
                color={pathname === href ? '#fff' : '#000'}
              />
            </Link>
          ))}
        </nav>
        <button
          className={cn('rounded-full text-white bg-black p-2 size-[56px] flex items-center justify-center z-10 duration-500', {'bg-white': opened})}
          onClick={() => setOpened((v) => !v)}
        >
          <CloseIcon
            color={'#000'}
            className={cn({'animate-fade-out duration-500 hidden': !opened})}
          />
          <MenuIcon
            color={'#fff'}
            className={cn({'animate-fade-out duration-500 hidden': opened})}
          />
        </button>
      </div>
    </>
  );
};

export default memo(MobileNavigation);
