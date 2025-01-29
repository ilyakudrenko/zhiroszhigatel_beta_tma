import React, {useEffect, useState} from 'react';
import {AppRoot, Cell, List, Section, Title} from "@telegram-apps/telegram-ui";
import '@telegram-apps/telegram-ui/dist/styles.css';
import INITDivider from "../../../CustomComponents/Dividers/Divider";



const INITHormones = () => {
    return (
        <AppRoot>
            <Title>БОНУС Гормоны виноваты в ожирении</Title>
            <List>
                <Section>
                    <Cell multiline>
                        <h2>Занятие с врачом эндокринологом. Анвар <a href="https://www.instagram.com/dr.aibolit_spb_/"> https://www.instagram.com/dr.a...</a></h2>
                        <h2>Тема: Гормоны и их связь с ожирением. Нужно ли сдавать анализы при похудении.</h2>
                    </Cell>
                </Section>
                <INITDivider color='transparent' thickness="10%"/>

                <Section
                    header="Тезисы занятия:"
                >
                    <Cell
                        multiline
                        subhead="Тезисы занятия:"
                    >
                        <ul>
                            <li>В 90% случаев патологий, болезней, нарушений (метаболический синдром,
                                инсулинорезистентность, гипертония, дислипидемия, диабет, желчекаменная болезнь, артрит,
                                подагра, болезни сердца) ПЕРВОПРИЧИНОЙ ЯВЛЯЕТСЯ ОЖИРЕНИЕ ВСЛЕДСТВИИ ОБРАЗА ЖИЗНИ И
                                ПЕРЕДАНИЯ КАЛОРИЙ И ЭНЕРГИИ
                            </li>
                            <li>Остальные 10% относятся к дисфункции щитовидной железы – гипотиреоз или гиперкортицизм-
                                гиперфункция надпочечников, гиперпролактеномия (опухоль гипофиза), как наиболее часто
                                случающихся. При этом данные патологии сопровождаются явными симптомами, которые человек
                                не сможет не заметить и не обратиться ко врачу.
                            </li>
                            <li>Врачи оценивают ожирение по ИМТ и обхвату талии.</li>
                            <li>Какие исследования можно провести, чтоб самостоятельно проверить работу эндокринных органов и внутренних органов на нормальную работу:</li>
                        </ul>
                    </Cell>
                    <Cell
                        multiline
                        // subhead="ЧебуПицца"
                    >
                        <ul style="list-style-type:none;">
                            <li>Щитовидная железа – ТТГ, Пролактин</li>
                            <li>Углеводный обмен - Глюкоза на тощак, глюкоз толерантный тест, Гликированный гемоглобин)</li>
                            <li>Липидный профиль, Почки – креатинин, мочевая кислота</li>
                            <li>Печень – АЛТ, АСТ, ГГТ, свободный и связанный билирубин</li>
                            <li>Витамин Д</li>
                            <li>Изи брюшной полости на предмет Желчекаменной болезни</li>
                            <li>Работу сердца -ЭКГ, на предмет Сонного апное – полисомнография</li>
                        </ul>
                    </Cell>
                </Section>
                <INITDivider color='transparent' thickness="10%"/>
                <Cell
                    multiline
                    subhead="Основные рекомендации Анвара при работе с лишним весом:"
                >
                    <ul style="list-style-type:none;">
                        <li>Частое питание по малу (улучшенный контроль голода и снижаем вероятность запасти жир при приеме пищи)</li>
                        <li>Кардио нагрузки, как основной инструмент в работе с жиром</li>
                    </ul>
                </Cell>
                <INITDivider color='transparent' thickness="10%"/>
                <Cell
                    multiline
                    subhead="Что делать предлагает Анвар:"
                >
                    <ol>
                        <li>Шаг. Понять, что причина лишнего веса это ВЫ. Взять на себя ответственность за это. Оценить
                            ожирение по талии и ИМТ
                        </li>
                        <li>Шаг. Добавить Физ активность, как минимум аэробную нагрузки (кардио)</li>
                        <li>Шаг. Снизить калорийность питания, прежде всего убрать простые сахара</li>
                        <li>Шаг. Если не получается самостоятельно, обращать ко врачам. Эндокринолог.</li>
                    </ol>
                    <ul style="list-style-type:none;">
                        <li>Добавки для поддержания работы щитовидной железы – йод (йодамарин 200мкр ) , селен</li>
                        <li>Добавки витамины для здоровья:</li>
                        <li>Витамин Д3 2000-5000МЕ ежедневно</li>
                        <li>Витамины группы Б (нейробион), особенно если дипрессия</li>
                        <li>Креатин моногидрат для эффективности на силовой тренировке</li>
                        <li>Омега 3, альфалипоевая кислота</li>
                    </ul>
                </Cell>
                <INITDivider color='transparent' thickness="10%"/>
                <Cell
                    multiline
                    // subhead=""
                >
                    <div style={{textAlign: "center"}}>
                        <iframe
                            width="95%"
                            height="215"
                            src="https://www.youtube.com/embed/ZpNk3vIhjQw"
                            style={{
                                border: "none", // Removes the border
                                borderRadius: 16,
                                padding: 5,
                            }}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </Cell>

            </List>
        </AppRoot>
    );
};

export default INITHormones;