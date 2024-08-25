'use client';

import {memo, useMemo, useState} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const CVViewer = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const pages = useMemo(
    () =>
      Array.from(new Array(pageNumber), (el, index) => (
        <Page
          key={`page_${index + 1}`}
          renderAnnotationLayer={false}
          pageNumber={index + 1}
          renderTextLayer={false}
        />
      )),
    [pageNumber]
  );

  return (
    <Document
      file={{url: '/Vladimir-Antin-CV.pdf'}}
      loading={<></>}
      onLoadSuccess={({numPages}) => setPageNumber(numPages)}
    >
      {pages}
    </Document>
  );
};

export default memo(CVViewer);
