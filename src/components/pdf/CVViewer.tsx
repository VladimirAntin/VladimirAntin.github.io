'use client';
import {memo, useEffect, useMemo, useState} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';

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
        <div
          key={`page_${index + 1}`}
          className={'shrink-0 border-r-4 border-r-black last:border-r-0'}>
          <Page
            renderAnnotationLayer={false}
            pageNumber={index + 1}
            width={Math.min(width * 0.75, 900)}
            renderTextLayer={false}
          />
        </div>
      )),
    [numPages, width],
  );

  return (
    <Document
      file={file}
      loading={<></>}
      onLoadSuccess={({numPages: loadedPages}: {numPages: number}) => setNumPages(loadedPages)}>
      <div className={'hide-scrollbar flex max-w-full gap-2 overflow-x-auto pb-4'}>{pages}</div>
    </Document>
  );
};

export default memo(CVViewer);
