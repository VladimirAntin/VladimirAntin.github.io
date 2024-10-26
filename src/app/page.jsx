import {memo} from 'react';
import Information from '@/components/home/Information';
import References from '@/components/home/References';

const Home = () => {
  return (
    <div className={'flex flex-col items-center gap-4 xl:flex-row xl:items-start xl:gap-0 w-full'}>
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
