import React from 'react';
import {List} from "@telegram-apps/telegram-ui";
import pdfFile from './guide_1_pdf_version.pdf'

import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = ({ pdfUrl }) => (
    <Document file={pdfUrl}>
        <Page pageNumber={1} />
    </Document>
);


const INITGuide_1_PDF = () => {
    return (
        <List>
            {/*<PdfViewer pdfUrl={"https://drive.google.com/file/d/1dGXOJgnDkjSaq-1MpLFJeK0woT73A43K/view?usp=sharing"}/>*/}
            <PdfViewer pdfUrl={pdfFile}/>
        </List>
    )
}

export default INITGuide_1_PDF;