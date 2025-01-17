import React, {useEffect, useState} from 'react';
import {AppRoot, Button, Cell, List, Section, Title} from "@telegram-apps/telegram-ui";
import '@telegram-apps/telegram-ui/dist/styles.css';
import toolsPdf from "../Pdf/tools.pdf";



const INITCookingTools = () => {
    return (
        <AppRoot>
            <div style={{
                width: '100%',
                height: '600px',
                overflow: 'auto',
                border: '1px solid #ccc',
                borderRadius: '8px'
            }}>
                <embed src={toolsPdf} height="100%" width="100%" type="application/pdf"/>
            </div>
        </AppRoot>
    );
};

export default INITCookingTools;