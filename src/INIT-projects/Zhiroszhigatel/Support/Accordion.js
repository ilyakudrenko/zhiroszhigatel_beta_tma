import React, { useState } from 'react';
import { AccordionSummary } from "@telegram-apps/telegram-ui/dist/components/Blocks/Accordion/components/AccordionSummary/AccordionSummary";
import { AccordionContent } from "@telegram-apps/telegram-ui/dist/components/Blocks/Accordion/components/AccordionContent/AccordionContent";
import { Accordion, Blockquote } from "@telegram-apps/telegram-ui";
// import accordionData from './accordionData.json'; // Adjust the path as needed
import accordionData from "./accordionData.json"

const INITAccordion = (summary, content, links) => {
    const [expandedAccordion, setExpandedAccordion] = useState(null);

    const handleAccordionChange = (accordionKey) => {
        setExpandedAccordion((prev) => (prev === accordionKey ? null : accordionKey));
    };

    // const courseData = accordionData["course1"]; // Access data for course1

    return (
        <Accordion
            expanded={expandedAccordion === 'course1'}
            onChange={() => handleAccordionChange('course1')}
        >
            <AccordionSummary>
                {summary}
            </AccordionSummary>
            <AccordionContent>
                <div style={{ padding: '10px 20px 20px' }}>
                    <Blockquote>
                        {content}
                        {/*<br />*/}
                        {/*{links[0] && (*/}
                        {/*    <a href={links[0]} target="_blank" rel="noopener noreferrer">*/}
                        {/*        {links[0]}*/}
                        {/*    </a>*/}
                        {/*)}*/}
                    </Blockquote>
                </div>
            </AccordionContent>
        </Accordion>
    );
};

const INITAccordionList = () => {
    return(
        <div>
            {accordionData.map((item, index) => (
                <INITAccordion
                    key={index}
                    summary={item.summary}
                    content={item.content}
                    // links={item.links}
                />
            ))}
        </div>
    )
}

export default INITAccordionList;
