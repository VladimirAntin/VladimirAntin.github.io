import {memo} from 'react';
import Information from '@/app/components/home/Information';
import References from '@/app/components/home/References';

const Home = () => {
  return (
    <div className={'flex w-full'}>
      <div className={'w-1/2'}>
        <Information />
      </div>
      <div>
        <References />
      </div>
    </div>
  );
};

export default memo(Home);
