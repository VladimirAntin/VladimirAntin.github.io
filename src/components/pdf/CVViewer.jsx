'use client';
import {memo, useEffect, useMemo, useState} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import {cn} from '@/utils/CN.js';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

const CVViewer = () => {
  const [numPages, setNumPages] = useState(1);
  const [width, setWidth] = useState(1024);
  const file = useMemo(() => ({url: '/Vladimir-Antin-CV.pdf'}), []);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const pages = useMemo(
    () =>
      Array.from(new Array(numPages), (_el, index) => (
        <Page
          key={`page_${index + 1}`}
          renderAnnotationLayer={false}
          pageNumber={index + 1}
          width={Math.min(width * 0.8, 800)}
          className={cn({'border-b-4 border-b-black': index + 1 < numPages})}
          renderTextLayer={false}
        />
      )),
    [numPages, width],
  );

  return (
    <Document
      file={file}
      loading={<></>}
      onLoadSuccess={({numPages: loadedPages}) => setNumPages(loadedPages)}>
      {pages}
    </Document>
  );
};

export default memo(CVViewer);
