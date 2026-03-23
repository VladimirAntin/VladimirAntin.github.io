import {memo} from 'react';
import DownloadIcon from '@/icons/DownloadIcon';
import dynamic from 'next/dynamic';
import Tooltip from '@/components/tooltip/Tooltip';

const CVViewer = dynamic(() => import('@/components/pdf/CVViewer'), {ssr: false});

const CV = () => {
  return (
    <div className={'flex justify-center w-full xl:w-3/5'}>
      <div className={'min-h-screen min-w-[100px] flex flex-col items-center bg-white rounded-2xl pb-[30px] animate-fade-in-left'}>
        <div className={'flex justify-between items-center bg-gray-300 p-4 w-full rounded-t-2xl'}>
          <h1>Vladimir Antin CV</h1>
          <a
            className={'flex items-center justify-center bg-white rounded-2xl group hover:bg-black'}
            href={'/Vladimir-Antin-CV.pdf'}
            download
          >
            <Tooltip
              content={'Download CV'}
              className={'bg-black text-white px-2 py-1 rounded-2xl'}
            >
              <DownloadIcon className={'group-hover:fill-white'} />
            </Tooltip>
          </a>
        </div>
        <CVViewer />
      </div>
    </div>
  );
};
export const metadata = {
  title: 'Vladimir Antin | CV',
  description:
    'View and download the CV of Vladimir Antin — full stack developer with 5+ years of experience in Java, Spring Boot, Angular, React, Next.js, React Native, and more.',
  keywords: [
    'Vladimir Antin CV',
    'Vladimir Antin resume',
    'full stack developer resume',
    'Java Spring Boot CV',
    'Angular React developer',
    'Novi Sad developer',
  ],
  alternates: {
    canonical: '/cv',
  },
  openGraph: {
    title: 'Vladimir Antin | CV',
    description:
      'Download the CV of Vladimir Antin, full stack developer from Novi Sad, Serbia.',
    images: [{ url: '/images/profile.jpg', width: 300, height: 300, alt: 'Vladimir Antin' }],
  },
};
export default memo(CV);
