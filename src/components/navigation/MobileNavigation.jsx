'use client';
import Link from 'next/link';
import {memo, useState} from 'react';
import HomeIcon from '@/icons/HomeIcon.jsx';
import SkillsIcon from '@/icons/SkillsIcon.jsx';
import ProjectsIcon from '@/icons/ProjectsIcon.jsx';
import CVIcon from '@/icons/CVIcon.jsx';
import AskIcon from '@/icons/AskIcon.jsx';
import {cn} from '@/utils/CN.js';
import {usePathname} from 'next/navigation';
import MenuIcon from '@/icons/MenuIcon.jsx';
import CloseIcon from '@/icons/CloseIcon.jsx';

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
      {opened ? (
        <div className={'fixed inset-0 z-40 h-screen w-screen bg-black bg-opacity-80 bg-fixed'} />
      ) : null}
      <div
        className={cn('fixed bottom-10 right-10 z-50 flex flex-col items-end xl:hidden')}
        onBlur={e => {
          if (!e.relatedTarget) {
            setOpened(false);
          }
        }}>
        <nav className={cn('mb-4 flex w-full flex-col gap-5', {hidden: !opened})}>
          {navItems.map(({href, title, Icon}, idx, items) => (
            <Link
              href={href}
              key={'nav-item-' + idx}
              onClick={() => setOpened(false)}
              className={cn(
                'flex h-[56px] w-full animate-fade-in-right items-center justify-between gap-1 rounded-full bg-white px-3 text-black',
                {
                  'bg-black': pathname === href,
                },
              )}
              style={{animationDuration: `${200 * (items.length - idx)}ms`}}>
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
          className={cn(
            'z-10 flex size-[56px] items-center justify-center rounded-full bg-black p-2 text-white duration-500',
            {'bg-white': opened},
          )}
          onClick={() => setOpened(v => !v)}>
          <CloseIcon
            color={'#000'}
            className={cn({'hidden animate-fade-out duration-500': !opened})}
          />
          <MenuIcon
            color={'#fff'}
            className={cn({'hidden animate-fade-out duration-500': opened})}
          />
        </button>
      </div>
    </>
  );
};

export default memo(MobileNavigation);
