import React from 'react';
import { AppRoot, Cell, List, Section, Title } from "@telegram-apps/telegram-ui";
import '@telegram-apps/telegram-ui/dist/styles.css';
import INITDivider from "../../../CustomComponents/Dividers/Divider";

const INITHormones = () => {
    return (
        <AppRoot>
            <List>
                <Title>БОНУС Гормоны виноваты в ожирении</Title>

                <Section>
                    <Cell multiline>
                        <p>Занятие с врачом эндокринологом. Анвар
                            <a
                                href="https://www.instagram.com/dr.aibolit_spb_/"
                                style={{ color: '#82caff', textDecoration: 'underline', textDecorationColor: '#82caff' }}
                            > Instagram</a>
                        </p>
                    </Cell>
                    <Cell multiline>
                        <p>Тема: Гормоны и их связь с ожирением. Нужно ли сдавать анализы при похудении.</p>
                    </Cell>
                </Section>

                <INITDivider color='transparent' thickness="10%"/>

                <Section>
                    <Cell multiline subhead="Тезисы занятия:">
                        <ul>
                            <li>В 90% случаев патологий (метаболический синдром, инсулинорезистентность, гипертония, дислипидемия, диабет и другие) причиной является ожирение вследствие образа жизни.</li>
                            <li>Остальные 10% относятся к дисфункции щитовидной железы (гипотиреоз, гиперкортицизм, гиперпролактинемия), сопровождающиеся явными симптомами.</li>
                            <li>Врачи оценивают ожирение по ИМТ и обхвату талии.</li>
                            <li>Какие исследования помогут проверить работу эндокринных и внутренних органов:</li>
                        </ul>
                    </Cell>

                    <Cell multiline>
                        <ul style={{ listStyleType: 'none' }}>
                            <li>Щитовидная железа – ТТГ, Пролактин</li>
                            <li>Углеводный обмен – Глюкоза натощак, ГТТ, Гликированный гемоглобин</li>
                            <li>Липидный профиль, почки – креатинин, мочевая кислота</li>
                            <li>Печень – АЛТ, АСТ, ГГТ, билирубин</li>
                            <li>Витамин D</li>
                            <li>УЗИ брюшной полости (желчекаменная болезнь)</li>
                            <li>Работу сердца – ЭКГ, полисомнография (сонное апноэ)</li>
                        </ul>
                    </Cell>

                    <Cell multiline subhead="Основные рекомендации при работе с лишним весом:">
                        <ul style={{ listStyleType: 'none' }}>
                            <li>Частое питание малыми порциями для контроля голода</li>
                            <li>Кардио нагрузки – основной инструмент для сжигания жира</li>
                        </ul>
                    </Cell>

                    <Cell multiline subhead="Что делать предлагает Анвар:">
                        <ol>
                            <li>Понять, что причина лишнего веса – это вы. Взять на себя ответственность.</li>
                            <li>Добавить физическую активность, особенно кардио.</li>
                            <li>Снизить калорийность питания, исключить простые сахара.</li>
                            <li>Если самостоятельно не получается – обратиться к эндокринологу.</li>
                        </ol>

                        <ul style={{ listStyleType: 'none' }}>
                            <li>Добавки для щитовидной железы: йод (йодамарин 200 мкг), селен</li>
                            <li>Витамины:
                                <ul>
                                    <li>Витамин D3 (2000–5000 МЕ ежедневно)</li>
                                    <li>Витамины группы B (Нейробион) – особенно при депрессии</li>
                                    <li>Креатин моногидрат – для силовых тренировок</li>
                                    <li>Омега-3, альфа-липоевая кислота</li>
                                </ul>
                            </li>
                        </ul>
                    </Cell>

                    <Cell multiline>
                        <div style={{ textAlign: "center" }}>
                            <iframe
                                width="95%"
                                height="215"
                                src="https://www.youtube.com/embed/ZpNk3vIhjQw"
                                style={{
                                    border: "none",
                                    borderRadius: 16,
                                    padding: 5,
                                }}
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Cell>
                </Section>
            </List>
        </AppRoot>
    );
};

export default INITHormones;