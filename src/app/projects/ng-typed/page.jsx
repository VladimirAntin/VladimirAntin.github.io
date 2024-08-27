import {memo} from 'react';

const NgTyped = () => {
  return (
    <div className={'bg-white w-3/5 rounded-2xl'}>
      <h1 className={'text-center text-2xl font-bold m-2'}>./projects/ng-multiselect</h1>
      <iframe
        src={'https://ng-typed.netlify.app/'}
        className={'w-full h-full'}
      />
    </div>
  );
};

export default memo(NgTyped);
