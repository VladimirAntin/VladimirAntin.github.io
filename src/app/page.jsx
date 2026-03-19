import {memo} from 'react';
import Information from '@/components/home/Information';
import References from '@/components/home/References';

export const metadata = {
  title: 'Vladimir Antin | Portfolio',
  description:
    'Explore Vladimir Antin portfolio: full stack projects, skills, CV, and contact information.',
  alternates: {
    canonical: '/',
  },
};

const Home = () => {
  return (
    <div className={'flex flex-col items-center gap-4 xl:flex-row xl:items-start xl:gap-0 w-full'}>
      <h1 className={'sr-only'}>Vladimir Antin - Full Stack Developer Portfolio</h1>
      <div className={'w-full xl:w-1/2'}>
        <Information />
      </div>
      <div className={'flex flex-col items-center xl:items-start'}>
        <References />
      </div>
    </div>
  );
};

export default memo(Home);
