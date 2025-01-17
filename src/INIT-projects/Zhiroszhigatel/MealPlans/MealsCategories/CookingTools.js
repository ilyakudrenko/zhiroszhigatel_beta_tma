import React, {useEffect, useState} from 'react';
import {AppRoot, Button, Cell, List, Section, Title} from "@telegram-apps/telegram-ui";
import '@telegram-apps/telegram-ui/dist/styles.css';
import INITBackButton from "../../../../Hooks/BackButton";
import INITDivider from "../../../CustomComponents/Dividers/Divider";
import toolsPdf from "../Pdf/tools.pdf";



const INITCookingTools = () => {
    return (
       <AppRoot>
           <iframe id="pdf" src={toolsPdf} width="100%" height="600"></iframe>
       </AppRoot>
    );
};

export default INITCookingTools;