import React from 'react';
import {List} from "@telegram-apps/telegram-ui";
import pdfUrl from './guide_1_pdf_version.pdf'
import PDFViewer from 'pdf-viewer-reactjs';

const INITGuide_1_PDF = () => {
    return (
        <div style={{width: '100%', height: '100vh'}}>
            {/*<iframe*/}
            {/*    src="https://www.escaux.com/rsrc/CustomerDocs/DRD_T38Support_AdminGuide/T38_TEST_PAGES.pdf"  // Replace with the relative path to your PDF file*/}
            {/*    title="PDF Viewer"*/}
            {/*    width="100%"*/}
            {/*    height="100%"*/}
            {/*    style={{border: 'none'}}*/}
            {/*/>*/}

            {/*<embed*/}
            {/*    src="https://drive.google.com/file/d/1dGXOJgnDkjSaq-1MpLFJeK0woT73A43K/view"*/}
            {/*    width="100%"*/}
            {/*    height="100%"*/}
            {/*    type="application/pdf"/>*/}

            <div style="overflow: auto; -webkit-overflow-scrolling: touch;">
                <embed
                    src="https://drive.google.com/file/d/1dGXOJgnDkjSaq-1MpLFJeK0woT73A43K/view"
                    width="100%"
                    height="600px"
                    type="application/pdf"
                    style="display: block; margin: 0 auto;"/>
            </div>


            {/*<PDFViewer*/}
            {/*    document={{*/}
            {/*        url: pdfUrl,*/}
            {/*    }}*/}
            {/*/>*/}
        </div>
    );
};

export default INITGuide_1_PDF;