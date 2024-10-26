'use client';

import {memo} from 'react';

const IframeClient = (props) => {
  return (
    <iframe
      {...props}
      className={'w-full min-h-[70vh]'}
    />
  );
};
export default memo(IframeClient);
