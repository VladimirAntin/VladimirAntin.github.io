'use client';

import {memo} from 'react';
import {cn} from '@/app/utils/CN';

const Tag = ({tagName = '', containerClass = '', className = '', startClass = '', endClass = '', children}) => {
  return (
    <div className={containerClass}>
      <p className={cn('italic text-gray-500', startClass, className)}>
        <i>&lt;{tagName}&gt;</i>
      </p>
      <div className={className}>{children}</div>
      <p className={cn('italic text-gray-500', endClass, className)}>
        <i>&lt;/{tagName}&gt;</i>
      </p>
    </div>
  );
};

export default memo(Tag);
