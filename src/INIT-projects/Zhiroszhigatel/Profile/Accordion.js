import React, {useState} from 'react';
import {AccordionSummary} from "@telegram-apps/telegram-ui/dist/components/Blocks/Accordion/components/AccordionSummary/AccordionSummary";
import {AccordionContent} from "@telegram-apps/telegram-ui/dist/components/Blocks/Accordion/components/AccordionContent/AccordionContent";
import {Accordion, Blockquote} from "@telegram-apps/telegram-ui";

const INITAccordion = () => {
    // State variables for each accordion item
    const [expandedAccordion, setExpandedAccordion] = useState(null);

    // Toggle function
    const handleAccordionChange = (accordionKey) => {
        setExpandedAccordion((prev) => (prev === accordionKey ? null : accordionKey));
    };

    return (
        <Accordion
            expanded={expandedAccordion === 'course1'}
            onChange={() => handleAccordionChange('course1')}
        >
            <AccordionSummary>
                Когда курс и как записаться?
            </AccordionSummary>
            <AccordionContent>
                <div style={{ padding: '10px 20px 20px' }}>
                    <Blockquote>
                        Старт курса в январе 2025!
                        Сейчас, ты можешь заполнить заявку на предзапись, чтобы потом для тебя были наиболее выгодные условия 💪
                        <br />
                        <a href='https://t.me/+z95IeBYsKZg3MGIy'>https://t.me/+z95IeBYsKZg3MGIy</a>
                    </Blockquote>
                </div>
            </AccordionContent>
        </Accordion>
    );
};

export default INITAccordion;