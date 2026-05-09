'use client';

import {memo, useEffect, useRef, useState} from 'react';
import dynamic from 'next/dynamic';

const CVViewer = dynamic(() => import('./CVViewer'), {ssr: false});

const CVSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {rootMargin: '200px'},
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={'w-full'}>
      {visible ? <CVViewer /> : null}
    </div>
  );
};

export default memo(CVSection);
