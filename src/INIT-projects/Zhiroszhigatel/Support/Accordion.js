import React, {useState} from 'react';
import {AccordionSummary} from "@telegram-apps/telegram-ui/dist/components/Blocks/Accordion/components/AccordionSummary/AccordionSummary";
import {AccordionContent} from "@telegram-apps/telegram-ui/dist/components/Blocks/Accordion/components/AccordionContent/AccordionContent";
import {Accordion, Blockquote} from "@telegram-apps/telegram-ui";



// INITAccordion Component
/**
 * This component represents an individual accordion item that can expand or collapse
 * when clicked. It accepts `summary`, `content`, and `links` as props to display information within the accordion.
 *
 * @param {string} summary - The title or summary shown on the Accordion when it's collapsed.
 * @param {string} content - The main content displayed inside the Accordion when expanded.
 * @param {Array} links - Array of links (optional), used for additional references or resources.
 *
 * State:
 * - `expandedAccordion`: Tracks the current state of the accordion (expanded or collapsed).
 *
 * Functions:
 * - `handleAccordionChange`: Toggles the accordion's expansion based on its key.
 */
const INITAccordion = ({summary, content, links}) => {
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
            <AccordionSummary multiline>
                {summary}
            </AccordionSummary>
            <AccordionContent>
                <div style={{padding: '10px 20px 20px'}}>
                    <Blockquote>
                        {content}
                        {links && links.length > 0 && (
                            <div style={{ marginTop: '10px' }}>
                                {links.map((link, index) => (
                                    <span key={index}>
                                        <br />
                                        <a
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {link}
                                        </a>
                                    </span>
                                ))}
                            </div>
                        )}
                    </Blockquote>
                </div>
            </AccordionContent>
        </Accordion>
    );
};

// INITAccordionList Component
/**
 * This component generates a list of accordion items based on an array of data (items).
 * It filters the items by `type` to selectively render only matching entries.
 *
 * @param {Array} items - Array of accordion data objects with properties:
 *   - `type`: The category or type of accordion item (e.g., "course").
 *   - `summary`: Summary/title of the accordion.
 *   - `content`: Main content displayed when accordion expands.
 *   - `links`: Optional array of links for additional resources.
 * @param {string} type - Type of accordion item to filter by, ensuring only relevant items are rendered.
 *
 * Usage:
 * Pass an array of items and specify the type of accordion items you want to display.
 */
const INITAccordionList = ({items = [], type}) => {
    return (
        <div>
            {items.map((item, index) => {
                if (item.type === type) {
                    // Conditionally render only items that match the specified type
                    return (
                        <INITAccordion
                            key={index}
                            summary={item.summary}
                            content={item.content}
                            links={item.links}
                        />)
                }
                return null; // Return nothing if item does not match the type
            })}
        </div>
    )
}

export default INITAccordionList;
