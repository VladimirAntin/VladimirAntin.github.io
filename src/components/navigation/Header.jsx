'use client';
import {memo} from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
  return (
    <header>
      <Link
        className={'mb-20 flex h-[10vh] flex-row items-center gap-2 xl:mb-0'}
        href={'/'}
        aria-label={'Go to Vladimir Antin home page'}>
        <Image
          width={100}
          height={100}
          src={'/images/va.png'}
          alt={'Vladimir Antin logo'}
          priority
        />
        <div>
          <p className={'text-2xl font-bold text-white'}>Vladimir Antin</p>
          <p className={'text-xl font-medium text-gray-400'}>Software Engineer</p>
        </div>
      </Link>
    </header>
  );
};

export default memo(Header);
