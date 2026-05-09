'use client';

import {memo, useEffect, useRef, useState} from 'react';
import dynamic from 'next/dynamic';

const CVViewer = dynamic(() => import('./CVViewer'), {ssr: false});

const PageSkeleton = () => (
  <div className={'flex gap-4 overflow-hidden px-6 py-4'}>
    {[0, 1].map(i => (
      <div
        key={i}
        className={'h-[calc(100vh-120px)] w-[320px] shrink-0 animate-pulse rounded-lg bg-gray-200 md:w-120'}
      />
    ))}
  </div>
);

const CVSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

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
      {!loaded && <PageSkeleton />}
      {visible && (
        <div className={loaded ? 'block' : 'hidden'}>
          <CVViewer onReady={() => setLoaded(true)} />
        </div>
      )}
    </div>
  );
};

export default memo(CVSection);

