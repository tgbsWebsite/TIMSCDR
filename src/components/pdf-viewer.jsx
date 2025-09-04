import React from 'react';
import './pdf.css';

const PdfViewer = ({ file }) => {

    
    return (
        <div className="pdf-viewer-container">
            <embed src={file} type="application/pdf" className="pdf-fullscreen" />
        </div>
    );
};

export default PdfViewer;
