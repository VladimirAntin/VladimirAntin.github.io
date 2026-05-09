'use client';
import {memo, useCallback, useMemo, useRef, useState} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

type CVViewerProps = {
  onReady?: () => void;
};

const CVSkeleton = ({width, height}: {width: number; height: number}) => (
  <div
    className={'flex gap-5 px-6 py-6'}
    style={{minHeight: height + 48}}>
    {[0, 1].map(i => (
      <div
        key={i}
        className={'shrink-0 animate-pulse rounded-lg bg-black/10 ring-1 ring-black/20'}
        style={{width, height}}>
        {/* Header block */}
        <div className={'mx-8 mt-10 h-6 rounded bg-black/25'} />
        <div className={'mx-16 mt-3 h-4 rounded bg-black/15'} />
        {/* Divider */}
        <div className={'mx-8 mt-6 h-px bg-black/20'} />
        {/* Content lines */}
        {[...Array(6)].map((_, j) => (
          <div
            key={j}
            className={'mx-8 mt-5'}>
            <div className={'mb-2 h-3 w-1/3 rounded bg-black/25'} />
            <div className={'h-2 rounded bg-black/15'} />
            <div className={'mt-1.5 h-2 w-4/5 rounded bg-black/15'} />
          </div>
        ))}
      </div>
    ))}
  </div>
);

const CVViewer = ({onReady}: CVViewerProps) => {
  const [numPages, setNumPages] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Derive per-page height so container doesn't jump
  const pageWidth = useMemo(() => {
    if (typeof window === 'undefined') return 700;
    return Math.min(window.innerWidth * 0.72, 820);
  }, []);

  const handleLoadSuccess = useCallback(
    ({numPages: n}: {numPages: number}) => {
      setNumPages(n);
      onReady?.();
    },
    [onReady],
  );

  const handlePageRender = useCallback((page: {height: number}) => {
    if (page.height) setPageHeight(page.height);
  }, []);

  const pages = useMemo(
    () =>
      Array.from({length: numPages}, (_, index) => (
        <div
          key={`page_${index + 1}`}
          className={
            'shrink-0 overflow-hidden rounded-lg shadow-lg ring-1 ring-black/10 last:mr-0'
          }>
          <Page
            renderAnnotationLayer={false}
            pageNumber={index + 1}
            width={pageWidth}
            renderTextLayer={false}
            onRenderSuccess={handlePageRender}
          />
        </div>
      )),
    [numPages, pageWidth, handlePageRender],
  );

  return (
    <Document
      file={'/Vladimir-Antin-CV.pdf'}
      loading={
        <CVSkeleton
          width={pageWidth}
          height={Math.round(pageWidth * 1.414)}
        />
      }
      onLoadSuccess={handleLoadSuccess}>
      {/* Scroll container */}
      <div
        ref={containerRef}
        className={'hide-scrollbar flex w-full gap-5 overflow-x-auto px-6 py-6'}
        style={{minHeight: pageHeight ? pageHeight + 48 : undefined}}>
        {pages}
      </div>
      {numPages > 1 ? (
        <p className={'pb-3 text-center text-xs text-gray-400'}>
          {'← Scroll horizontally to see all pages →'}
        </p>
      ) : null}
    </Document>
  );
};

export default memo(CVViewer);
