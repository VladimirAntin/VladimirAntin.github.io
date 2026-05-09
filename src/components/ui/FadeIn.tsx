'use client';
import {type ReactNode, memo} from 'react';
import {type Variants, motion} from 'framer-motion';

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
};

const variants: Record<string, Variants> = {
  up: {
    hidden: {opacity: 0, y: 32},
    show: {opacity: 1, y: 0},
  },
  down: {
    hidden: {opacity: 0, y: -32},
    show: {opacity: 1, y: 0},
  },
  left: {
    hidden: {opacity: 0, x: -32},
    show: {opacity: 1, x: 0},
  },
  right: {
    hidden: {opacity: 0, x: 32},
    show: {opacity: 1, x: 0},
  },
  none: {
    hidden: {opacity: 0},
    show: {opacity: 1},
  },
};

const FadeIn = ({children, className, delay = 0, direction = 'up'}: FadeInProps) => (
  <motion.div
    initial={'hidden'}
    whileInView={'show'}
    viewport={{once: true, amount: 0.15}}
    variants={variants[direction]}
    transition={{duration: 0.5, ease: 'easeOut', delay}}
    className={className}>
    {children}
  </motion.div>
);

export default memo(FadeIn);

