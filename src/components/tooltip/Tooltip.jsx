'use client';

import {memo} from 'react';
import Tippy from '@tippyjs/react';

const Tooltip = (props) => {
  return <Tippy {...props} />;
};

export default memo(Tooltip);
