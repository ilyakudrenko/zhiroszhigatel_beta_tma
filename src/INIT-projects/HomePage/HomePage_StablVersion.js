import React, {useState} from 'react';
import {Accordion, AppRoot, Blockquote, Cell, Section} from "@telegram-apps/telegram-ui";
import {AccordionSummary} from "@telegram-apps/telegram-ui/dist/components/Blocks/Accordion/components/AccordionSummary/AccordionSummary";
import {AccordionContent} from "@telegram-apps/telegram-ui/dist/components/Blocks/Accordion/components/AccordionContent/AccordionContent";
import { useNavigate } from 'react-router-dom';
import INITBackButton from "../../Hooks/BackButton";

const HomePage_StablVersion = () => {
    const navigate = useNavigate();
    INITBackButton();

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleAccordion = () => {
        setIsExpanded((prev) => !prev); // Toggle between open and closed
    };
    return(
        <AppRoot>
            <Section>
                <Cell>
                    Cell1
                </Cell>
                <Cell>
                    Cell2
                </Cell>
            </Section>

            <Section>
            <Accordion
                expanded={isExpanded}
                onChange={toggleAccordion}
            >
                <AccordionSummary multiline>
                    History of accordion
                </AccordionSummary>
                <AccordionContent>
                    <div style={{padding: '10px 20px 20px'}}>
                        <Blockquote>
                            The accordion's basic form is believed to have been invented in Berlin, in 1822, by Christian Friedrich Ludwig Buschmann, although one instrument was discovered in 2006 that appears to have been built earlier. The earliest history of the accordion in Russia is poorly documented.
                        </Blockquote>
                    </div>
                </AccordionContent>
            </Accordion>
            </Section>
        </AppRoot>
    );
};

export default HomePage_StablVersion;