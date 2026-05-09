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
    // fixed — always visible on the left on xl+, hidden on mobile
    <div
      className={
        'fixed top-0 left-0 z-30 hidden h-screen w-[20vw] items-start pt-[calc(10vh+32px)] xl:flex'
      }>
      <nav className={'flex w-full flex-col gap-4'}>
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
                'flex h-14 w-min items-center rounded-r-full px-3 transition-colors duration-150',
                isActive
                  ? 'bg-white text-black shadow-lg'
                  : 'bg-white/10 text-white backdrop-blur-sm hover:bg-white/20',
              )}>
              <Icon
                width={28}
                height={28}
                color={isActive ? '#000' : '#fff'}
              />
              <motion.span
                variants={labelVariants}
                transition={{duration: 0.18, ease: 'easeOut'}}
                className={'overflow-hidden text-sm font-bold whitespace-nowrap'}>
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
