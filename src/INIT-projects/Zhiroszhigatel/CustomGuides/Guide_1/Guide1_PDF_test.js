import React from 'react';
// import { Document, Page } from 'react-pdf';
import {Image, List} from "@telegram-apps/telegram-ui";
import pdfFile from "./guide_1_pdf_version.pdf"

// Use require to import the PDF file

const INITGuide_1_PDF = () => {
    return (
        <List>
            <object data="http://africau.edu/images/default/sample.pdf" type="application/pdf" width="100%"
                    height="100%">
                <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the
                    PDF!</a></p>
            </object>
        </List>
    );
};

export default INITGuide_1_PDF;