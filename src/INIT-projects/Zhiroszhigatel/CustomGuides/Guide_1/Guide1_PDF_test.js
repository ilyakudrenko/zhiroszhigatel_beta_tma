import React from 'react';
import {List} from "@telegram-apps/telegram-ui";


const INITGuide_1_PDF = () => {
    return (
        <div style={{width: '100%', height: '100vh'}}>
            <iframe
                src='guide_1_pdf_version.pdf'  // Replace with the relative path to your PDF file
                title="PDF Viewer"
                width="100%"
                height="100%"
                style={{border: 'none'}}
            />
        </div>
    );
};

export default INITGuide_1_PDF;