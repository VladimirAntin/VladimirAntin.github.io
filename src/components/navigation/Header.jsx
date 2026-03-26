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
        aria-label={'Go to Vladimir Antin home page'}
      >
        <Image
          width={100}
          height={100}
          src={'/images/va.png'}
          alt={'Vladimir Antin logo'}
          priority
        />
        <div>
          <p className={'text-2xl text-white font-bold'}>Vladimir Antin</p>
          <p className={'text-xl text-gray-400 font-medium'}>Software Engineer</p>
        </div>
      </Link>
    </header>
  );
};

export default memo(Header);
