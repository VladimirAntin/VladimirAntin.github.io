'use client';

import {memo} from 'react';
import {cn} from '@/app/utils/CN.js';

const Tag = ({tagName = '', className = '', startClass = '', endClass = '', children}) => {
  return (
    <>
      <p className={cn('italic text-gray-500', startClass, className)}>
        <i>&lt;{tagName}&gt;</i>
      </p>
      <div className={className}>{children}</div>
      <p className={cn('italic text-gray-500', endClass, className)}>
        <i>&lt;/{tagName}&gt;</i>
      </p>
    </>
  );
};

export default memo(Tag);
