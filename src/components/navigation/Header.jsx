'use client';
import {memo} from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
  return (
    <header>
      <Link
        className={'flex flex-row items-center gap-2 h-[10vh] mb-20 xl:mb-0 '}
        href={'/'}
      >
        <Image
          width={100}
          height={100}
          src={'/images/va.png'}
          alt={'logo'}
          priority
        />
        <div>
          <h1 className={'text-2xl text-white font-bold'}>Vladimir Antin</h1>
          <h2 className={'text-xl text-gray-400 font-medium'}>Software Engineer</h2>
        </div>
      </Link>
    </header>
  );
};

export default memo(Header);
