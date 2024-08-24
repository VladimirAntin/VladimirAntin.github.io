'use client';
import {memo} from 'react';
import Image from 'next/image';
const Header = () => {
  return (
    <header className={'flex flex-row items-center gap-2 h-[10vh]'}>
      <Image
        width={100}
        height={100}
        src={'/images/va.png'}
        alt={'logo'}
      />
      <div>
        <h1 className={'text-2xl text-white font-bold'}>Vladimir Antin</h1>
        <h2 className={'text-xl text-gray-400 font-medium'}>Software Engineer Lead</h2>
      </div>
    </header>
  );
};

export default memo(Header);
