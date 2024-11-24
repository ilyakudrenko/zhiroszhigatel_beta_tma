import React from 'react';
import {Badge, Caption, Cell, Image, List, Section, Title} from "@telegram-apps/telegram-ui";
import INITDivider from "../../CustomComponents/Dividers/Divider";
import INITBuyButton from "./BuyButton";



const INITMealPlanPromo = ({imageSrc, title, description, price}) => {
    return (
        <List>
            <Image
                src= {imageSrc}
                style={{
                    width: '100%',
                    height: '40vh',
                    objectFit: 'cover',
                    borderRadius: '0px'
                }}
            />

                {/* Заголовок */}
                <Title level="1" weight="bold" style={{margin: '16px 16px 8px'}}>
                    {title}
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
                <Section>
                    {description.map((item,index) => (
                        <Cell
                            multiline
                            subhead={item.descriptionTitle}
                        >
                            {item.descriptionFull}
                        </Cell>
                    ))}
                    {/*<Cell*/}
                    {/*    multiline*/}
                    {/*    subhead="Описание"*/}
                    {/*>*/}
                    {/*    Рекомендованное питание для снижения количества жира в теле и увеличения мышечной массы.*/}
                    {/*</Cell>*/}
                    {/*<Cell*/}
                    {/*    multiline*/}
                    {/*    subhead="Как опеределить калорийность рациона"*/}
                    {/*>*/}
                    {/*    В курсе ты найдешь: Видеоуроки, Встроенный калькулятор калорийности, Автоматическое составление*/}
                    {/*    мил-планов на основе ваших расчетов.*/}
                    {/*</Cell>*/}
                    {/*<Cell*/}
                    {/*    multiline*/}
                    {/*    subhead="Кулинарный урок вкусняшек"*/}
                    {/*>*/}
                    {/*    Видео рецепты моих вкусняш, на которых я похудел на 30 кг.*/}
                    {/*</Cell>*/}
                    {/*<Cell*/}
                    {/*    multiline*/}
                    {/*    subhead="Знания о питании"*/}
                    {/*    after={<Badge type={"number"}>бонус</Badge>}*/}
                    {/*>*/}
                    {/*    Список рекомендованнй литература про питание.*/}
                    {/*</Cell>*/}
                    {/*<Cell*/}
                    {/*    multiline*/}
                    {/*    subhead="Рационы"*/}
                    {/*>*/}
                    {/*    Курс включает разнообразные рационы на каждый день недели.*/}
                    {/*    Они уже настроены по калорийности и порциям специально под тебя.*/}
                    {/*</Cell>*/}
                    {/*<Cell*/}
                    {/*    multiline*/}
                    {/*    subhead="Цена"*/}
                    {/*>*/}
                    {/*    $50*/}
                    {/*</Cell>*/}
                </Section>
                <INITBuyButton itemKey="mealPlanPro" itemTitle="Питание PROЖЖгись" />
        </List>
    );
};

export default INITMealPlanPromo;