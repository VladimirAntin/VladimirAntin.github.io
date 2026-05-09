'use client';

import {memo} from 'react';
import Tippy from '@tippyjs/react';
import type {TippyProps} from '@tippyjs/react';

const Tooltip = (props: TippyProps) => {
  return <Tippy {...props} />;
};

export default memo(Tooltip);
