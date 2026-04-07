'use client';
import {memo, useState} from 'react';

const Footer = () => {
  const [currentDate] = useState(new Date());
  return (
    <footer className={'flex h-[10vh] items-center justify-center'}>
      <div className={'flex gap-2'}>
        <p className={'text-white'}>&copy; {currentDate.getFullYear()} Vladimir Antin and</p>
        <a
          className="cursor-pointer font-bold text-white hover:underline"
          href="https://pages.github.com"
          target="_blank"
          rel="noreferrer">
          github.io
        </a>
      </div>
    </footer>
  );
};
export default memo(Footer);
