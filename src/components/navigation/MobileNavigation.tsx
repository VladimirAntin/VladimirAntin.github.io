'use client';
import {type ComponentType, memo, useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import HomeIcon from '@/icons/HomeIcon.jsx';
import CVIcon from '@/icons/CVIcon.jsx';
import AskIcon from '@/icons/AskIcon.jsx';
import {cn} from '@/utils/CN';
import MenuIcon from '@/icons/MenuIcon.jsx';
import CloseIcon from '@/icons/CloseIcon.jsx';

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

const MobileNavigation = () => {
  const [activeHash, setActiveHash] = useState('#home');
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash || '#home');
    updateHash();
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  return (
    <>
      <AnimatePresence>
        {opened ? (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className={'fixed inset-0 z-40 h-screen w-screen bg-black/80'}
          />
        ) : null}
      </AnimatePresence>
      <div
        className={cn('fixed right-10 bottom-10 z-50 flex flex-col items-end xl:hidden')}
        onBlur={e => {
          if (!e.relatedTarget) {
            setOpened(false);
          }
        }}>
        <AnimatePresence>
          {opened ? (
            <motion.nav
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: 10}}
              className={'mb-4 flex w-full flex-col gap-5'}>
              {navItems.map(({href, title, Icon}, idx) => {
                const isActive = activeHash === href;
                return (
                  <motion.a
                    initial={{opacity: 0, x: 20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: idx * 0.06}}
                    href={href}
                    key={'nav-item-' + idx}
                    onClick={() => setOpened(false)}
                    className={cn(
                      'flex h-14 w-full items-center justify-between gap-1 rounded-full bg-white px-3 text-black',
                      {
                        'bg-black': isActive,
                      },
                    )}>
                    <p className={cn('font-bold', {'text-white': isActive})}>{title}</p>
                    <Icon
                      width={32}
                      height={32}
                      color={isActive ? '#fff' : '#000'}
                    />
                  </motion.a>
                );
              })}
            </motion.nav>
          ) : null}
        </AnimatePresence>
        <motion.button
          whileTap={{scale: 0.95}}
          className={cn(
            'z-10 flex size-14 items-center justify-center rounded-full bg-black p-2 text-white duration-500',
            {'bg-white': opened},
          )}
          onClick={() => setOpened(v => !v)}>
          {opened ? <CloseIcon color={'#000'} /> : <MenuIcon color={'#fff'} />}
        </motion.button>
      </div>
    </>
  );
};

export default memo(MobileNavigation);
