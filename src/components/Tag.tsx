'use client';

import {type ReactNode, memo} from 'react';
import {cn} from '@/utils/CN';

type TagProps = {
  tagName?: string;
  containerClass?: string;
  className?: string;
  startClass?: string;
  endClass?: string;
  children?: ReactNode;
};

const Tag = ({
  tagName = '',
  containerClass = '',
  className = '',
  startClass = '',
  endClass = '',
  children,
}: TagProps) => {
  return (
    <div className={containerClass}>
      <p className={cn('italic text-gray-500', startClass, className)}>
        <i>{`<${tagName}>`}</i>
      </p>
      <div className={className}>{children}</div>
      <p className={cn('italic text-gray-500', endClass, className)}>
        <i>{`</${tagName}>`}</i>
      </p>
    </div>
  );
};

export default memo(Tag);
