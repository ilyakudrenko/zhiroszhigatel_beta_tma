import React from 'react';
import {List} from "@telegram-apps/telegram-ui";
import pdfUrl from './guide_1_pdf_version.pdf'

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

            <embed
                src="https://www.escaux.com/rsrc/CustomerDocs/DRD_T38Support_AdminGuide/T38_TEST_PAGES.pdf"
                width="100%"
                height="100%"
                type="application/pdf"/>
        </div>
    );
};

export default INITGuide_1_PDF;