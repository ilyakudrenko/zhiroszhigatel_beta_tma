import React, { useState } from 'react';
import { AppRoot, Button, Section, Blockquote, Accordion } from "@telegram-apps/telegram-ui";
import { useNavigate } from "react-router-dom";
import { AccordionSummary } from "@telegram-apps/telegram-ui/dist/components/Blocks/Accordion/components/AccordionSummary/AccordionSummary";
import { AccordionContent } from "@telegram-apps/telegram-ui/dist/components/Blocks/Accordion/components/AccordionContent/AccordionContent";
import INITDivider from "../../CustomComponents/Dividers/Divider";
import INITAccordion from "../Profile/Accordion";

const roundedCellStyle = {
    borderRadius: '16px',
    overflow: 'hidden', // Ensures rounded corners display properly
    backgroundColor: 'var(--tgui--secondary_bg_color)',
};

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
                <INITAccordion />
                <INITAccordion />
                {/*<Accordion*/}
                {/*    expanded={expandedAccordion === 'course2'}*/}
                {/*    onChange={() => handleAccordionChange('course2')}*/}
                {/*>*/}
                {/*    <AccordionSummary>*/}
                {/*        Я смогу похудеть, если я никогда не тренировался?*/}
                {/*    </AccordionSummary>*/}
                {/*    <AccordionContent>*/}
                {/*        <div style={{ padding: '10px 20px 20px' }}>*/}
                {/*            <Blockquote>*/}
                {/*                Сможешь, я даю подробные инструкции и видеоматериал для того, чтобы без определённых навыков выполнять все мои рекомендации для похудения*/}
                {/*            </Blockquote>*/}
                {/*        </div>*/}
                {/*    </AccordionContent>*/}
                {/*</Accordion>*/}
            </Section>

            <INITDivider color='transparent' thickness="10%" />

            <Section
                style={roundedCellStyle}
                header="Вопросы по похудению"
            >
                <INITAccordion />
                <INITAccordion />
                {/*<Accordion*/}
                {/*    expanded={expandedAccordion === 'weightLoss1'}*/}
                {/*    onChange={() => handleAccordionChange('weightLoss1')}*/}
                {/*>*/}
                {/*    <AccordionSummary>*/}
                {/*        У меня замедлился метаболизм, что делать?*/}
                {/*    </AccordionSummary>*/}
                {/*    <AccordionContent>*/}
                {/*        <div style={{ padding: '10px 20px 20px' }}>*/}
                {/*            <Blockquote>*/}
                {/*                Есть только один эффективный способ раскрутить своей метаболизм, это больше двигаться...*/}
                {/*            </Blockquote>*/}
                {/*        </div>*/}
                {/*    </AccordionContent>*/}
                {/*</Accordion>*/}

                {/*<Accordion*/}
                {/*    expanded={expandedAccordion === 'weightLoss2'}*/}
                {/*    onChange={() => handleAccordionChange('weightLoss2')}*/}
                {/*>*/}
                {/*    <AccordionSummary>*/}
                {/*        У меня гипотиреоз, как худеть?*/}
                {/*    </AccordionSummary>*/}
                {/*    <AccordionContent>*/}
                {/*        <div style={{ padding: '10px 20px 20px' }}>*/}
                {/*            <Blockquote>*/}
                {/*                Поставленный диагноз гипотиреоза на сегодняшний день, компенсируется приемом гормонами щитовидной железы...*/}
                {/*                <br />*/}
                {/*                <a href='https://www.youtube.com/watch?v=sUnjR0D3Iko'>https://www.youtube.com/watch?v=sUnjR0D3Iko</a>*/}
                {/*            </Blockquote>*/}
                {/*        </div>*/}
                {/*    </AccordionContent>*/}
                {/*</Accordion>*/}
            </Section>
        </AppRoot>
    );
};

export default Support;
