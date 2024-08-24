'use client';
import {memo} from 'react';

const Footer = () => {
  const currentDate = new Date();
  return (
    <footer className={'flex justify-center items-center h-[10vh]'}>
      <div className={'flex gap-2'}>
        <p className={'text-white'}>&copy; {currentDate.getFullYear()} Vladimir Antin and</p>
        <a
          className="cursor-pointer text-white font-bold hover:underline"
          href="https://pages.github.com"
          target="_blank"
          rel="noreferrer"
        >
          github.io
        </a>
      </div>
    </footer>
  );
};
export default memo(Footer);
