'use client';
import {memo} from 'react';
import {TypeAnimation} from 'react-type-animation';

type TypingProps = {
  text: string;
  onDone?: () => void;
};

const Typing = ({text, onDone = () => {}}: TypingProps) => {
  return (
    <TypeAnimation
      sequence={[text, onDone]}
      cursor={false}
    />
  );
};

export default memo(Typing);
