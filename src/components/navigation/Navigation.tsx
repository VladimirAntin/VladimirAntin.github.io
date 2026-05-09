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

// Variant propagates from parent motion.a whileHover → child motion.span
const labelVariants = {
  rest: {opacity: 0, maxWidth: 0, marginLeft: 0},
  hovered: {opacity: 1, maxWidth: 160, marginLeft: 8},
};

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
              key={'nav-item-' + idx}
              href={href}
              initial={'rest'}
              whileHover={'hovered'}
              animate={'rest'}
              transition={{duration: 0.18, ease: 'easeOut'}}
              className={cn(
                'flex h-14 w-min items-center rounded-r-full bg-white px-3 text-black',
                {'bg-black': isActive},
              )}>
              <Icon
                width={32}
                height={32}
                color={isActive ? '#fff' : '#000'}
              />
              <motion.span
                variants={labelVariants}
                transition={{duration: 0.18, ease: 'easeOut'}}
                className={cn('overflow-hidden whitespace-nowrap font-bold', {
                  'text-white': isActive,
                })}>
                {title}
              </motion.span>
            </motion.a>
          );
        })}
      </nav>
    </div>
  );
};

export default memo(Navigation);
