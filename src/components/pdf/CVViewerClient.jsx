'use client';

import dynamic from 'next/dynamic';

// Keep react-pdf entirely on the client to avoid Node/runtime incompatibilities during prerender.
const CVViewer = dynamic(() => import('@components/pdf/CVViewer'), {
  ssr: false,
});

export default CVViewer;

