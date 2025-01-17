import React, {useEffect, useState} from 'react';
import {AppRoot, Button, Cell, List, Section, Title} from "@telegram-apps/telegram-ui";
import '@telegram-apps/telegram-ui/dist/styles.css';
import INITBackButton from "../../../../Hooks/BackButton";
import INITDivider from "../../../CustomComponents/Dividers/Divider";
import toolsPdf from "../Pdf/tools.pdf";


const INITCookingTools = () => {
    return (
       <AppRoot>
           <iframe src={toolsPdf}></iframe>
       </AppRoot>
    );
};

export default INITCookingTools;