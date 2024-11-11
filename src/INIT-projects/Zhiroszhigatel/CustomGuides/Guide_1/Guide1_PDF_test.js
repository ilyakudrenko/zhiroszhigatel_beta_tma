import React from 'react';
import {List} from "@telegram-apps/telegram-ui";

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
            <PdfViewer pdfUrl={"https://drive.google.com/file/d/15s3sZcgNA1arqj7Pn7gj5nvIpPsZgJmV/view?usp=drivesdk"}/>
        </List>
    )
}

export default INITGuide_1_PDF;