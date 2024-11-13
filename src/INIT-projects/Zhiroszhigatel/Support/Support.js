import React from 'react';
import {AppRoot, Button, Section, Blockquote, Accordion} from "@telegram-apps/telegram-ui";
import {useNavigate} from "react-router-dom";
import {AccordionSummary} from "@telegram-apps/telegram-ui/dist/components/Blocks/Accordion/components/AccordionSummary/AccordionSummary";
import {AccordionContent} from "@telegram-apps/telegram-ui/dist/components/Blocks/Accordion/components/AccordionContent/AccordionContent";
import INITDivider from "../../CustomComponents/Dividers/Divider";

const roundedCellStyle = {
    borderRadius: '16px',
    overflow: 'hidden', // Ensures rounded corners display properly
    backgroundColor: 'var(--tgui--secondary_bg_color)',
};

const Support = () => {
    const navigate = useNavigate();

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

            <INITDivider color = 'transparent' thickness="10%" />

            <Section
                style={roundedCellStyle}
                header="Вопросы по курсу"
            >
                <Accordion
                    expanded={true}
                    onChange={function noRefCheck(){}}
                >
                    <AccordionSummary>
                        Когда курс и как записаться?
                    </AccordionSummary>
                    <AccordionContent>
                        <div
                            style={{
                                padding: '10px 20px 20px'
                            }}
                        >
                            <Blockquote>
                                Старт курса в январе 2025!
                                Сейчас, ты можешь заполнить заявку на предзапись, чтобы потом для тебя были наиболее выгодные условия 💪
                                <br/>
                                <a href='https://t.me/+z95IeBYsKZg3MGIy'>https://t.me/+z95IeBYsKZg3MGIy'</a>

                            </Blockquote>
                        </div>
                    </AccordionContent>
                </Accordion>

                <Accordion
                    expanded={false}
                    onChange={function noRefCheck(){}}
                >
                    <AccordionSummary>
                        Я смогу похудеть, если я никогда не тренировался?
                    </AccordionSummary>
                    <AccordionContent>
                        <div
                            style={{
                                padding: '10px 20px 20px'
                            }}
                        >
                            <Blockquote>
                                Сможешь, я даю подробные инструкции и видеоматериал для того, чтобы без определённых навыков выполнять все мои рекомендации для похудения
                            </Blockquote>
                        </div>
                    </AccordionContent>
                </Accordion>
            </Section>

            <INITDivider color = 'transparent' thickness="10%" />

            <Section
                style={roundedCellStyle}
                header="Вопросы по похудению"
            >
                <Accordion
                    expanded={false}
                    onChange={function noRefCheck(){}}
                >
                    <AccordionSummary>
                        У меня замедлился метаболизм, что делать?
                    </AccordionSummary>
                    <AccordionContent>
                        <div
                            style={{
                                padding: '10px 20px 20px'
                            }}
                        >
                            <Blockquote>
                                Есть только один эффективный способ раскрутить своей метаболизм, это больше двигаться. Шаги – самый простой и самый измеряемый, туда же любая активность в том числе бытовая и запланированная. Замедление метаболизма внутри организма не происходит, это снижение активности и трат из-за образа жизни
                            </Blockquote>
                        </div>
                    </AccordionContent>
                </Accordion>

                <Accordion
                    expanded={false}
                    onChange={function noRefCheck(){}}
                >
                    <AccordionSummary>
                        У меня гипотиреоз, как худеть?
                    </AccordionSummary>
                    <AccordionContent>
                        <div
                            style={{
                                padding: '10px 20px 20px'
                            }}
                        >
                            <Blockquote>
                                Поставленный диагноз гипотиреоза на сегодняшний день, компенсируется приемом гормонами щитовидной железы, назначаемыми вашим лечащим врачом и худеется ровно так же, как без гипотиреоза, подробнее об этом в выпуске с эндокринологом на ютубе
                                <br/>
                                <a href='https://www.youtube.com/watch?v=sUnjR0D3Iko'>https://www.youtube.com/watch?v=sUnjR0D3Iko</a>
                            </Blockquote>
                        </div>
                    </AccordionContent>
                </Accordion>
            </Section>
        </AppRoot>
    );
};

export default Support;