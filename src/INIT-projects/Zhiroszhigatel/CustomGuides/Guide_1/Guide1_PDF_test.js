import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
// import pdfFile from './path/to/your/pdf_file.pdf';

// Устанавливаем путь к воркеру, чтобы избежать ошибок при загрузке PDF
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const INITGuide_1_PDF = () => {
    const [numPages, setNumPages] = useState(null);

    const onLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div style={{overflowY: 'scroll', height: '100vh', width: '100%'}}>
            <Document
                file="https://www.escaux.com/rsrc/CustomerDocs/DRD_T38Support_AdminGuide/T38_TEST_PAGES.pdf"
                onLoadSuccess={onLoadSuccess}
                style={{width: '100%'}}
            >
                {Array.from(new Array(numPages), (el, index) => (
                    <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        width={window.innerWidth} // Адаптируется под ширину экрана
                    />
                ))}
            </Document>
        </div>
    );
};

export default INITGuide_1_PDF;