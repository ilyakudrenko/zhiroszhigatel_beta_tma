import React, { useState } from 'react';
import { AccordionSummary } from "@telegram-apps/telegram-ui/dist/components/Blocks/Accordion/components/AccordionSummary/AccordionSummary";
import { AccordionContent } from "@telegram-apps/telegram-ui/dist/components/Blocks/Accordion/components/AccordionContent/AccordionContent";
import { Accordion, Blockquote } from "@telegram-apps/telegram-ui";
import accordionData from './accordionData.json'; // Adjust the path as needed

const INITAccordion = () => {
    const [expandedAccordion, setExpandedAccordion] = useState(null);

    const handleAccordionChange = (accordionKey) => {
        setExpandedAccordion((prev) => (prev === accordionKey ? null : accordionKey));
    };

    const courseData = accordionData["course1"]; // Access data for course1

    return (
        <Accordion
            expanded={expandedAccordion === 'course1'}
            onChange={() => handleAccordionChange('course1')}
        >
            <AccordionSummary>
                {courseData.summary}
            </AccordionSummary>
            <AccordionContent>
                <div style={{ padding: '10px 20px 20px' }}>
                    <Blockquote>
                        {courseData.content}
                        <br />
                        {courseData.link && (
                            <a href={courseData.link} target="_blank" rel="noopener noreferrer">
                                {courseData.link}
                            </a>
                        )}
                    </Blockquote>
                </div>
            </AccordionContent>
        </Accordion>
    );
};

export default INITAccordion;
