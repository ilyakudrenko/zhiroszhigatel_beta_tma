import React, {useEffect, useState} from 'react';
import {AppRoot, Caption, Cell, List, Section, Title} from "@telegram-apps/telegram-ui";
import '@telegram-apps/telegram-ui/dist/styles.css';
import INITBackButton from "../../../../Hooks/BackButton";
import INITDivider from "../../../CustomComponents/Dividers/Divider";


const CookingLesson = () => {
    INITBackButton();

    return (
        <AppRoot>

            {/*5 Рецептов*/}
            <Section header="5 Рецептов">
                <div style={{textAlign: "center"}}>
                    <iframe src="https://vkvideo.ru/video_ext.php?oid=9490543&id=456239820&hash=432b6138a9f4c282"
                            width="90%" height="215" frameBorder="0" allowFullScreen="1"
                            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                            style={{
                                border: "none", // Removes the border
                                borderRadius: 16,
                                padding: 5,
                            }}
                    ></iframe>
                </div>
            </Section>
            <INITDivider color='transparent' thickness="10%"/>

            {/*Готовый_2*/}
            <Section header="Готовый_2">
                <div style={{textAlign: "center"}}>
                    <iframe src="https://vkvideo.ru/video_ext.php?oid=9490543&id=456239822&hash=ecc17305affbf253"
                            width="90%" height="215" frameBorder="0" allowFullScreen="1"
                            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                            style={{
                                border: "none", // Removes the border
                                borderRadius: 16,
                                padding: 5,
                            }}
                    ></iframe>
                </div>
            </Section>
            <INITDivider color='transparent' thickness="10%"/>

            {/*Кулинарные утехи на диете*/}
            <Section header="Кулинарные утехи на диете">
                <div style={{textAlign: "center"}}>
                    <iframe
                        width="90%"
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
            </Section>
            <INITDivider color='transparent' thickness="10%"/>

            {/*Урок с кухни, готовим вкусняхи*/}
            <Section header="Урок с кухни, готовим вкусняхи">
                <div style={{textAlign: "center"}}>
                    <iframe src="https://vkvideo.ru/video_ext.php?oid=9490543&id=456239827&hash=26d79dcb8b19ca66"
                            width="90%" height="215" frameBorder="0" allowFullScreen="1"
                            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                            style={{
                                border: "none", // Removes the border
                                borderRadius: 16,
                                padding: 5,
                            }}
                    ></iframe>
                </div>
            </Section>
            <INITDivider color='transparent' thickness="15%"/>

            <List>
                <Title level="1" weight="bold" style={{margin: '16px 16px 8px'}}>
                    Все блюда, которые мы приготовили в этом уроке, написаны в хронологическом порядке
                </Title>
                <INITDivider color='transparent' thickness="10%"/>
                <Section>
                    <Cell
                        multiline
                        subhead="ЧебуПицца"
                    >
                        <ul>
                            <li>фарш куриный 170гр</li>
                            <li>Лук ¼, зелень для фарша</li>
                            <li>яйцо куриное – 1шт</li>
                            <li>Помидор – ½ шт</li>
                            <li>Помидор – ½ шт</li>
                            <li>Помидор – ½ шт</li>
                            <li>Сыр легкий – 60гр</li>
                        </ul>
                    </Cell>
                    <Cell
                        multiline
                        subhead="Ленивые вареники"
                    >
                        - творог 200гр
                        - яйцо 1шт
                        - мука рисовая 60гр
                        - подсластитель стевия
                        - варим в кипящей подсоленной воде 1 мин после всплытия
                    </Cell>
                    <Cell
                        multiline
                        subhead="Протеиновое печенье"
                    >
                        - 200гр овсянки
                        - 70 гр протеина
                        - яйца 3шт
                        - молоко 60мл
                        Творог (пожеланию)
                        Какао (считать) , корица по желанию
                        20-25 мин в духовке
                    </Cell>
                    <Cell
                        multiline
                        subhead="Куриные тефтели с рисом"
                    >
                        - куриный фарш из филе грудки -450гр
                        - рис белый/бурый
                        - специи, соль чеснок, зелень
                        - морковь 1 шт на терке на дно формы
                        Для заливки Вода + йогурт +томатная паста
                        40 мин в духовке
                    </Cell>
                    <Cell
                        multiline
                        subhead="Салат с тунцом"
                    >
                        - нарвать лист салата
                        -Огурец 1шт
                        - Яйцо вареное 2шт
                        - Болгарский перец ½ шт
                        - Тунец консервированный 150-200 гр
                        Сыр легкий на терке 10-20гр
                    </Cell>
                    <Cell
                        multiline
                        subhead="Рол с тунцом (2шт)"
                    >
                        Тортилья – 2шт
                        - Тунец или другая консерва рыбная (но не масле) – 80-100гр
                        - Яйцо 1шт
                        - Помидор ¼ шт
                        - Лук зеленый
                        - 1ст ложка йогурта
                        - лист салата
                    </Cell>
                    <Cell
                        multiline
                        subhead="Рол с курицей (2шт)"
                    >
                        -Тортилья 2 шт
                        - Копченая грудка 100гр
                        - Горчица + ст ложка йогрута
                        - Яйцо вареное 1шт
                        - помидор 1/4 шт
                        - огурец, квашеная капуста по желанию
                        - Лист салата
                    </Cell>
                    <Cell
                        multiline
                        subhead="Протеиновое желе"
                    >
                        Можно с протеином, можно на йогурте, на воде, молоке, как захотите
                        Понадобиться желатин быстрорастворимый 10-20 гр в зависимости сколько желе будете делать
                    </Cell>
                    <Cell
                        multiline
                        subhead="Куриная колбаса"
                    >
                        300 гр фарша из филе грудки, 300 гр резаного мяса бедра курицы
                        Соль, перец, чеснок
                        Ледяная вода или молоко 60мл
                        В морозилку на 1 час
                        Заворачиваем колбасу в рукав для запекания
                        Варить 1 час при температуре 80 гр (то есть чтоб вода не кипела)
                        После варки охладить водой потом в холодильник на часов 5-8
                    </Cell>
                    <Cell
                        multiline
                        subhead="Боул Поке"
                    >
                        Рис или любая другая крупа
                        Курица или рыба
                        Авокадо
                        Огурец помидор
                        фасоль
                        Кунжутом можно посыпать
                    </Cell>
                    <Cell
                        multiline
                        subhead="Запеканка творожная"
                    >
                        Творог 200гр
                        Мука любая 60гр
                        Яйцо 1 шт
                        Водсластитель
                        Добавить фрукт по желанию
                    </Cell>
                </Section>

            </List>
        </AppRoot>
    );
};

export default CookingLesson;