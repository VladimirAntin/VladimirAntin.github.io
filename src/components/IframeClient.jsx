'use client';

import {memo} from 'react';

const IframeClient = props => {
  return (
    <iframe
      {...props}
      className={'min-h-[70vh] w-full'}
    />
  );
};
export default memo(IframeClient);
