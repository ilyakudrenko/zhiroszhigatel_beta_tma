import React from 'react';
import {AppRoot, Button, Section} from "@telegram-apps/telegram-ui";
import {useNavigate} from "react-router-dom";
import INITDivider from "../../CustomComponents/Dividers/Divider";
import INITAccordionList from "./Accordion";
import questionsData from "./accordionData.json"
import INITBackButton from "../../../Hooks/BackButton";

const roundedCellStyle = {
    borderRadius: '16px',
    overflow: 'hidden', // Ensures rounded corners display properly
    // backgroundColor: 'var(--tgui--secondary_bg_color)',
};

const Support = () => {
    const navigate = useNavigate();
    INITBackButton();

    return (
        <AppRoot>
            <div>
                <Button
                    mode="plain"
                    size="s"
                    onClick={() => navigate("/")}
                >
                    Назад
                </Button>
            </div>

            <INITDivider color='transparent' thickness="10%"/>

            <Section
                style={roundedCellStyle}
                header="Вопросы по курсу"
            >
                <INITAccordionList items={questionsData} type="course"/>
            </Section>

            <INITDivider color='transparent' thickness="10%"/>

            <Section
                style={roundedCellStyle}
                header="Вопросы по похудению"
            >
                <INITAccordionList items={questionsData} type="nutrition"/>
            </Section>
        </AppRoot>
    );
};

export default Support;
