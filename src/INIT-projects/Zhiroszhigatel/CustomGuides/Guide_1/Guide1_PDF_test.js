import React from 'react';
import {List} from "@telegram-apps/telegram-ui";
import pdfFile from './guide_1_pdf_version.pdf'

const PdfViewer = ({ pdfUrl }) => (
    <iframe
        src={pdfUrl}
        style={{
            width: '100%',       // Полная ширина
            height: '100vh',      // Высота экрана
            border: 'none',       // Без рамок
        }}
        title="PDF Viewer"
    />
);


const INITGuide_1_PDF = () => {
    return (
        <List>
            <PdfViewer pdfUrl={"https://drive.google.com/file/d/1dGXOJgnDkjSaq-1MpLFJeK0woT73A43K/view?usp=sharing"}/>
        </List>
    )
}

export default INITGuide_1_PDF;