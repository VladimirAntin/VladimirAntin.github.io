'use client';
import {type ComponentType, memo, useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import HomeIcon from '@/icons/HomeIcon.jsx';
import CVIcon from '@/icons/CVIcon.jsx';
import AskIcon from '@/icons/AskIcon.jsx';
import {cn} from '@/utils/CN';

type NavItem = {
  title: string;
  href: '#home' | '#cv' | '#contact';
  Icon: ComponentType<{width?: number; height?: number; color?: string}>;
};

const navItems: NavItem[] = [
  {title: 'Home', href: '#home', Icon: HomeIcon},
  {title: 'CV', href: '#cv', Icon: CVIcon},
  {title: 'Contact me', href: '#contact', Icon: AskIcon},
];

const Navigation = () => {
  const [activeHash, setActiveHash] = useState('#home');

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash || '#home');
    updateHash();
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  return (
    <div className={'mt-25 hidden w-[20vw] xl:flex'}>
      <nav className={'flex w-full flex-col gap-5'}>
        {navItems.map(({href, title, Icon}, idx) => {
          const isActive = activeHash === href;

          return (
            <motion.a
              whileHover={{width: '50%'}}
              transition={{duration: 0.2}}
              href={href}
              key={'nav-item-' + idx}
              className={cn(
                'group flex h-14 w-min items-center justify-between gap-1 rounded-r-full bg-white px-3 text-black hover:w-1/2',
                {
                  'bg-black': isActive,
                },
              )}>
              <Icon
                width={32}
                height={32}
                color={isActive ? '#fff' : '#000'}
              />
              <motion.p
                initial={{opacity: 0, x: -16}}
                whileHover={{opacity: 1, x: 0}}
                className={cn('hidden font-bold group-hover:block', {
                  'text-white': isActive,
                })}>
                {title}
              </motion.p>
            </motion.a>
          );
        })}
      </nav>
    </div>
  );
};

export default memo(Navigation);
