import {memo} from 'react';
import CVViewer from '@/app/components/pdf/CVViewer';
import DownloadIcon from '@/app/components/icons/DownloadIcon';

const CV = () => {
  return (
    <div className={'flex w-full'}>
      <div className={'min-h-screen flex flex-col items-center w-1/2 bg-white rounded-2xl grayscale hover:grayscale-0  animate-fade-in-left'}>
        <div className={'flex justify-between items-center bg-gray-300 p-4 w-full rounded-t-2xl'}>
          <h1>Vladimir Antin CV</h1>
          <button className={'flex items-center justify-center '}>
            <DownloadIcon />
          </button>
        </div>
        <CVViewer />
      </div>
    </div>
  );
};

export default memo(CV);