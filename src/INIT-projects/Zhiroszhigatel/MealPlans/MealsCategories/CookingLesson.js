import React, {useEffect, useState} from 'react';
import {AppRoot, Button, Caption, Cell, List, Section, Title} from "@telegram-apps/telegram-ui";
import '@telegram-apps/telegram-ui/dist/styles.css';
import INITBackButton from "../../../../Hooks/BackButton";
import INITDivider from "../../../CustomComponents/Dividers/Divider";


const CookingLesson = () => {
    INITBackButton();

    return (
        <AppRoot>
            <List>
                <Section>
                    <Cell
                        multiline
                        subhead="5 Рецептов"
                    >
                        <div style={{textAlign: "center"}}>
                            <iframe
                                src="https://vkvideo.ru/video_ext.php?oid=9490543&id=456239820&hash=432b6138a9f4c282"
                                width="95%" height="215" frameBorder="0" allowFullScreen="1"
                                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                                style={{
                                    border: "none", // Removes the border
                                    borderRadius: 16,
                                    padding: 5,
                                }}
                            ></iframe>
                        </div>
                    </Cell>
                    <Cell
                        multiline
                        subhead="Готовый_2"
                    >
                        <div style={{textAlign: "center"}}>
                            <iframe
                                src="https://vkvideo.ru/video_ext.php?oid=9490543&id=456239822&hash=ecc17305affbf253"
                                width="95%" height="215" frameBorder="0" allowFullScreen="1"
                                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                                style={{
                                    border: "none", // Removes the border
                                    borderRadius: 16,
                                    padding: 5,
                                }}
                            ></iframe>
                        </div>
                    </Cell>
                    <Cell
                        multiline
                        subhead="Кулинарные утехи на диете"
                    >
                        <div style={{textAlign: "center"}}>
                            <iframe
                                width="95%"
                                height="215"
                                src="https://www.youtube.com/embed/_wUqQAZOjuk"
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
                    <Cell
                        multiline
                        subhead="Урок с кухни, готовим вкусняхи"
                    >
                        <div style={{textAlign: "center"}}>
                            <iframe
                                src="https://vkvideo.ru/video_ext.php?oid=9490543&id=456239827&hash=26d79dcb8b19ca66"
                                width="95%" height="215" frameBorder="0" allowFullScreen="1"
                                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                                style={{
                                    border: "none", // Removes the border
                                    borderRadius: 16,
                                    padding: 5,
                                }}
                            ></iframe>
                        </div>
                    </Cell>
                </Section>
            </List>

            <INITDivider color='transparent' thickness="15%"/>

            <List>
                <Title level="1" weight="bold" style={{margin: '16px 16px 8px'}}>
                    Все блюда, которые мы приготовили в этом уроке, написаны в хронологическом порядке
                </Title>
                <INITDivider color='transparent' thickness="10%"/>
                <Section>
                    <Cell multiline subhead="ЧебуПицца">
                        <ul>
                            <li>фарш куриный 170гр</li>
                            <li>Лук ¼, зелень для фарша</li>
                            <li>яйцо куриное – 1шт</li>
                            <li>Помидор – ½ шт</li>
                            <li>Сыр легкий – 60гр</li>
                        </ul>
                    </Cell>
                    <Cell multiline subhead="Ленивые вареники">
                        <ul>
                            <li>творог 200гр</li>
                            <li>яйцо 1шт</li>
                            <li>мука рисовая 60гр</li>
                            <li>подсластитель стевия</li>
                            <li>варим в кипящей подсоленной воде 1 мин после всплытия</li>
                        </ul>
                    </Cell>
                    <Cell multiline subhead="Протеиновое печенье">
                        <ul>
                            <li>200гр овсянки</li>
                            <li>70 гр протеина</li>
                            <li>яйца 3шт</li>
                            <li>молоко 60мл</li>
                            <li>Творог (по желанию)</li>
                            <li>Какао (считать), корица по желанию</li>
                            <li>20-25 мин в духовке</li>
                        </ul>
                    </Cell>
                    <Cell multiline subhead="Куриные тефтели с рисом">
                        <ul>
                            <li>куриный фарш из филе грудки -450гр</li>
                            <li>рис белый/бурый</li>
                            <li>специи, соль чеснок, зелень</li>
                            <li>морковь 1 шт на терке на дно формы</li>
                            <li>Для заливки: Вода + йогурт + томатная паста</li>
                            <li>40 мин в духовке</li>
                        </ul>
                    </Cell>
                    <Cell multiline subhead="Салат с тунцом">
                        <ul>
                            <li>нарвать лист салата</li>
                            <li>Огурец 1шт</li>
                            <li>Яйцо вареное 2шт</li>
                            <li>Болгарский перец ½ шт</li>
                            <li>Тунец консервированный 150-200 гр</li>
                            <li>Сыр легкий на терке 10-20гр</li>
                        </ul>
                    </Cell>
                    <Cell multiline subhead="Рол с тунцом (2шт)">
                        <ul>
                            <li>Тортилья – 2шт</li>
                            <li>Тунец или другая консерва рыбная (но не в масле) – 80-100гр</li>
                            <li>Яйцо 1шт</li>
                            <li>Помидор ¼ шт</li>
                            <li>Лук зеленый</li>
                            <li>1 ст ложка йогурта</li>
                            <li>лист салата</li>
                        </ul>
                    </Cell>
                    <Cell multiline subhead="Рол с курицей (2шт)">
                        <ul>
                            <li>Тортилья 2 шт</li>
                            <li>Копченая грудка 100гр</li>
                            <li>Горчица + 1 ст ложка йогурта</li>
                            <li>Яйцо вареное 1шт</li>
                            <li>Помидор 1/4 шт</li>
                            <li>Огурец, квашеная капуста по желанию</li>
                            <li>Лист салата</li>
                        </ul>
                    </Cell>
                    <Cell multiline subhead="Протеиновое желе">
                        <ul>
                            <li>Можно с протеином, можно на йогурте, на воде, молоке, как захотите</li>
                            <li>Понадобится желатин быстрорастворимый 10-20 гр</li>
                        </ul>
                    </Cell>
                    <Cell multiline subhead="Куриная колбаса">
                        <ul>
                            <li>300 гр фарша из филе грудки</li>
                            <li>300 гр резаного мяса бедра курицы</li>
                            <li>Соль, перец, чеснок</li>
                            <li>Ледяная вода или молоко 60мл</li>
                            <li>В морозилку на 1 час</li>
                            <li>Заворачиваем колбасу в рукав для запекания</li>
                            <li>Варить 1 час при температуре 80 гр (чтобы вода не кипела)</li>
                            <li>После варки охладить водой, потом в холодильник на 5-8 часов</li>
                        </ul>
                    </Cell>
                    <Cell multiline subhead="Боул Поке">
                        <ul>
                            <li>Рис или любая другая крупа</li>
                            <li>Курица или рыба</li>
                            <li>Авокадо</li>
                            <li>Огурец, помидор</li>
                            <li>Фасоль</li>
                            <li>Кунжутом можно посыпать</li>
                        </ul>
                    </Cell>
                    <Cell multiline subhead="Запеканка творожная">
                        <ul>
                            <li>Творог 200гр</li>
                            <li>Мука любая 60гр</li>
                            <li>Яйцо 1 шт</li>
                            <li>Подсластитель</li>
                            <li>Добавить фрукт по желанию</li>
                        </ul>
                    </Cell>
                </Section>
            </List>

            <INITDivider color='transparent' thickness="15%"/>

            <List>
                <Section>
                    <Cell
                        multiline
                        subhead="Диетический тортик"
                    >
                        <div style={{textAlign: "center"}}>
                            <iframe
                                width="95%"
                                height="215"
                                src="https://www.youtube.com/embed/UfiFueuUvT0"
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
                    <Cell
                        multiline
                        subhead="Протеиновое желе"
                    >
                        <div style={{textAlign: "center"}}>
                            <iframe
                                width="95%"
                                height="215"
                                src="https://www.youtube.com/embed/p09RbrYGkHE"
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
                    <Cell
                        multiline
                        subhead="Протеиновые панкейки"
                    >
                        <div style={{textAlign: "center"}}>
                            <iframe
                                width="95%"
                                height="215"
                                src="https://www.youtube.com/embed/F-2bf0N1TSs"
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
                    <Cell
                        multiline
                        subhead="Протеиновые кексы"
                    >
                        <div style={{textAlign: "center"}}>
                            <iframe
                                width="95%"
                                height="215"
                                src="https://www.youtube.com/embed/fGLCpAljkSk"
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
                    <Cell
                        multiline
                        subhead="Пирожки вишневые"
                    >
                        <div style={{textAlign: "center"}}>
                            <iframe
                                width="95%"
                                height="215"
                                src="https://www.youtube.com/embed/NX9lmVxlLHs"
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
                    <Cell
                        multiline
                        subhead="ПП Пицца"
                    >
                        <div style={{textAlign: "center"}}>
                            <iframe
                                width="95%"
                                height="215"
                                src="https://www.youtube.com/embed/rebIXu9UMd4"
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
                    <Cell
                        multiline
                        subhead="Пироги с льняной муки"
                    >
                        <div style={{textAlign: "center"}}>
                            <iframe
                                width="95%"
                                height="215"
                                src="https://www.youtube.com/embed/tqghmUtN3ec"
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
                </Section>
                <INITDivider color='transparent' thickness="10%"/>
                <Section>
                    <Cell multiline>
                        мой канал с рецептами (в доступе только у вас и участников курса)
                    </Cell>
                    <Cell multiline>
                        <a
                            href="https://t.me/+_D2nZaYhExJkNTMy"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{textDecoration: "none", color: "inherit" }}
                        >
                            <Button
                                mode="filled"
                                size="m"
                                stretched
                            >
                                Перейти в телеграм канал
                            </Button>
                        </a>
                    </Cell>
                </Section>
            </List>
        </AppRoot>
    );
};

export default CookingLesson;