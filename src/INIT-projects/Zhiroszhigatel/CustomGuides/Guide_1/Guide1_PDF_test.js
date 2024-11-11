import React, {useState} from 'react';
// import { Document, Page } from 'react-pdf';
import {Image, List} from "@telegram-apps/telegram-ui";
import pdfFile from "./guide_1_pdf_version.pdf"
import { Document, Page,pdfjs } from 'react-pdf';

const url = "https://www.escaux.com/rsrc/CustomerDocs/DRD_T38Support_AdminGuide/T38_TEST_PAGES.pdf"

// Use require to import the PDF file

const INITGuide_1_PDF = () => {
    pdfjs.GlobalWorkerOptions.workerSrc =
        `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    return (
        <List>
            <Document
                file={url}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
        </List>
    );
};

export default INITGuide_1_PDF;