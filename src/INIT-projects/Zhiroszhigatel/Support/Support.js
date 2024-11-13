import React from 'react';
import {AppRoot, Button, Section, Blockquote, Accordion} from "@telegram-apps/telegram-ui";
import {useNavigate} from "react-router-dom";
import {SectionHeader} from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader";
import {AccordionSummary} from "@telegram-apps/telegram-ui/dist/components/Blocks/Accordion/components/AccordionSummary/AccordionSummary";
import {AccordionContent} from "@telegram-apps/telegram-ui/dist/components/Blocks/Accordion/components/AccordionContent/AccordionContent";

const roundedCellStyle = {
    borderRadius: '16px',
    overflow: 'hidden', // Ensures rounded corners display properly
    backgroundColor: 'var(--tgui--secondary_bg_color)',
};

const Support = () => {
    const navigate = useNavigate();

    return (
        <AppRoot>
            <SectionHeader>
                <Button
                    mode="plain"
                    size="s"
                    onClick={() => navigate("/")}
                >
                    Back
                </Button>
            </SectionHeader>

            <Section
                style={roundedCellStyle}
                header="Questions"
            >
                <Accordion
                    expanded
                    onChange={function noRefCheck(){}}
                >
                    <AccordionSummary>
                        History of accordion
                    </AccordionSummary>
                    <AccordionContent>
                        <div
                            style={{
                                padding: '10px 20px 20px'
                            }}
                        >
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

export default Support;