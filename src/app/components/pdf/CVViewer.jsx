'use client';
import {memo, useMemo, useState} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;
const CVViewer = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const {innerWidth: width} = window;
  const file = useMemo(() => ({url: '/Vladimir-Antin-CV.pdf'}), []);

  const pages = useMemo(
    () =>
      Array.from(new Array(pageNumber), (el, index) => (
        <Page
          key={`page_${index + 1}`}
          renderAnnotationLayer={false}
          pageNumber={index + 1}
          width={Math.min(width * 0.8, 800)}
          renderTextLayer={false}
        />
      )),
    [pageNumber]
  );

  return (
    <Document
      file={file}
      loading={<></>}
      onLoadSuccess={({numPages}) => setPageNumber(numPages)}
    >
      {pages}
    </Document>
  );
};

export default memo(CVViewer);
