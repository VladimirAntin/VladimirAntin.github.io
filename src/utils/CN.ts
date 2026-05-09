import {twMerge} from 'tailwind-merge';
import clsx from 'clsx';

type ClassValue = Parameters<typeof clsx>[number];

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(...inputs));
};

export {cn};
