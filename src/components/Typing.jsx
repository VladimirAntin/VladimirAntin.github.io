'use client';
import {memo} from 'react';
import {TypeAnimation} from 'react-type-animation';

const Typing = ({text, onDone = () => {}}) => {
  return (
    <TypeAnimation
      sequence={[text, onDone]}
      cursor={false}
    />
  );
};

export default memo(Typing);
