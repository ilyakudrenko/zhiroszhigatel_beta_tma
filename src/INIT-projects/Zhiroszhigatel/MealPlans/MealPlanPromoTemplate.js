import React from 'react';
import {Badge, Caption, Cell, Image, List, Section, Title} from "@telegram-apps/telegram-ui";
import INITDivider from "../../CustomComponents/Dividers/Divider";
import INITBuyButton from "./BuyButton";

const roundedCellStyle = {
    borderRadius: '16px',
    overflow: 'hidden', // Ensures rounded corners display properly
    backgroundColor: 'var(--tgui--secondary_bg_color)',
};



const INITMealPlanPromo = () => {
    return (
        <div
            style={{
                borderRadius: '10px 10px 0px 0px'
            }}
        >
            <Image
                src="https://i.pinimg.com/736x/97/de/da/97dedaee23a0a310206ca50c9f565281.jpg" // Замените на URL изображения
                style={{
                    width: '100%',
                    height: '40vh',
                    objectFit: 'cover',
                    borderRadius: '0px'
                }}
            />

            <List
                style={{marginLeft: '5%', marginRight: '5%'}}
            >
                {/* Заголовок */}
                <Title level="1" weight="bold" style={{margin: '16px 16px 8px'}}>
                    Питание PROЖЖгись
                </Title>

                <INITDivider color='transparent' thickness="10%"/>

                <Caption
                    caps
                    level="1"
                    weight="3"
                    style={{margin: '5%'}}
                >
                    ЧТО ВХОДИТ
                </Caption>
                <Section
                    style={roundedCellStyle}
                >
                    <Cell
                        multiline
                        subhead="Описание"
                    >
                        Рекомендованное питание для снижения количества жира в теле и увеличения мышечной массы.
                    </Cell>
                    <Cell
                        multiline
                        subhead="Как опеределить калорийность рациона"
                    >
                        В курсе ты найдешь: Видеоуроки, Встроенный калькулятор калорийности, Автоматическое составление
                        мил-планов на основе ваших расчетов.
                    </Cell>
                    <Cell
                        multiline
                        subhead="Кулинарный урок вкусняшек"
                    >
                        Видео рецепты моих вкусняш, на которых я похудел на 30 кг.
                    </Cell>
                    <Cell
                        multiline
                        subhead="Знания о питании"
                        after={<Badge type={"number"}>бонус</Badge>}
                    >
                        Список рекомендованнй литература про питание.
                    </Cell>
                    <Cell
                        multiline
                        subhead="Рационы"
                    >
                        Курс включает разнообразные рационы на каждый день недели.
                        Они уже настроены по калорийности и порциям специально под тебя.
                    </Cell>
                    <Cell
                        multiline
                        subhead="Цена"
                    >
                        $50
                    </Cell>
                </Section>

                <INITBuyButton itemKey="mealPlanPro" itemTitle="Питание PROЖЖгись" />

            </List>
        </div>
    )
        ;
};

export default INITMealPlanPromo;