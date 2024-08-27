import {memo} from 'react';

const NgMultiSelect = () => {
  return (
    <div className={'bg-white w-full rounded-2xl mx-2'}>
      <h1 className={'text-center text-2xl font-bold m-2'}>./projects/ng-multiselect</h1>
      <iframe
        src={'https://ng-multiselect.netlify.app/'}
        className={'w-full h-full'}
      />
    </div>
  );
};

export default memo(NgMultiSelect);
