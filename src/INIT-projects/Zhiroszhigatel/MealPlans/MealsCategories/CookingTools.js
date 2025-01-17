import React, {useEffect, useState} from 'react';
import {AppRoot, Button, Section} from "@telegram-apps/telegram-ui";
import '@telegram-apps/telegram-ui/dist/styles.css';
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import pdfFile from "../Pdf/tools.pdf"; // Replace with the correct path



const INITCookingTools = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    const onDocumentLoadSuccess = (e) => {
        setTotalPages(e.numPages);
    };
    return (
        <AppRoot>
            <Section header="Cooking Tools PDF">
                <div style={{ width: "100%", height: "500px", overflow: "auto" }}>
                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js`}>
                        <Viewer
                            fileUrl={pdfFile}
                            plugins={[defaultLayoutPluginInstance]}
                            onDocumentLoad={onDocumentLoadSuccess}
                            defaultScale={1.0} // Adjust zoom if needed
                            currentPageNumber={page}
                        />
                    </Worker>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                    <Button
                        size="m"
                        disabled={page <= 1}
                        onClick={() => setPage((prev) => prev - 1)}
                    >
                        Previous
                    </Button>
                    <span>
            Page {page} of {totalPages || "Loading..."}
          </span>
                    <Button
                        size="m"
                        disabled={page >= totalPages}
                        onClick={() => setPage((prev) => prev + 1)}
                    >
                        Next
                    </Button>
                </div>
            </Section>
        </AppRoot>
    );
};

export default INITCookingTools;