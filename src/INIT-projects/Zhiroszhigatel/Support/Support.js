import React, { useState } from 'react';
import { AppRoot, Button, Section} from "@telegram-apps/telegram-ui";
import { useNavigate } from "react-router-dom";
import INITDivider from "../../CustomComponents/Dividers/Divider";
import INITAccordion from "./Accordion";
import questionsData from "./accordionData.json"
import INITAccordionList from "./Accordion";

const roundedCellStyle = {
    borderRadius: '16px',
    overflow: 'hidden', // Ensures rounded corners display properly
    // backgroundColor: 'var(--tgui--secondary_bg_color)',
};

const data = typeof questionsData;

const Support = () => {
    const navigate = useNavigate();

    // State variables for each accordion item
    const [expandedAccordion, setExpandedAccordion] = useState(null);

    // Toggle function
    const handleAccordionChange = (accordionKey) => {
        setExpandedAccordion((prev) => (prev === accordionKey ? null : accordionKey));
    };

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

            <INITDivider color='transparent' thickness="10%" />

            <Section
                style={roundedCellStyle}
                header="Вопросы по курсу"
            >
                {data}
                {/*<INITAccordion />*/}
                {/*<INITAccordion />*/}

            </Section>

            <INITDivider color='transparent' thickness="10%" />

            <Section
                style={roundedCellStyle}
                header="Вопросы по похудению"
            >
                {/*{questionsData.map((question, index) => (*/}
                {/*    <INITAccordion*/}
                {/*        key={index}*/}
                {/*        summary={question.summary}*/}
                {/*        content={question.content}*/}
                {/*        links={question.links}*/}
                {/*    />*/}
                {/*))}*/}

                {/*<INITAccordionList items={questionsData}/>*/}

                {questionsData.map((item, index) =>{
                    if(item.type === "4"){
                        return(
                            <INITAccordion
                            key={index}
                            summary={item.summary}
                            content={item.content}
                            links={item.links}
                        />)
                    }
                    return null;
                })}

            </Section>
        </AppRoot>
    );
};

export default Support;
