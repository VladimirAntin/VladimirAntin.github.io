'use client';
import {memo, useCallback, useMemo, useRef, useState} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

type CVViewerProps = {
  onReady?: () => void;
};

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
      loading={null}
      onLoadSuccess={handleLoadSuccess}>
      {/* Scroll container */}
      <div
        ref={containerRef}
        className={'hide-scrollbar flex w-full gap-5 overflow-x-auto px-6 py-6'}
        style={{minHeight: pageHeight ? pageHeight + 48 : undefined}}>
        {pages}
      </div>
      {numPages > 1 && (
        <p className={'pb-3 text-center text-xs text-gray-400'}>
          {'← Scroll horizontally to see all pages →'}
        </p>
      )}
    </Document>
  );
};

export default memo(CVViewer);
