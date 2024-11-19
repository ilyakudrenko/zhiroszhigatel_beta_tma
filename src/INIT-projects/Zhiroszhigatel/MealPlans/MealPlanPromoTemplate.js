import React, { useState, useEffect } from 'react';
import { Badge, Caption, Cell, List, Section, Title } from "@telegram-apps/telegram-ui";
import INITDivider from "../../CustomComponents/Dividers/Divider";
import INITBuyButton from "./BuyButton";

const roundedCellStyle = {
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: 'var(--tgui--secondary_bg_color)',
};

const INITMealPlanPromo = () => {
    const [offsetY, setOffsetY] = useState(0);

    // Обработчик события скролла
    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    useEffect(() => {
        // Добавляем обработчик скролла
        window.addEventListener('scroll', handleScroll);
        return () => {
            // Удаляем обработчик скролла при размонтировании компонента
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {/* Параллакс-секция */}
            <div
                style={{
                    transform: `translateY(${offsetY * 0.5}px)`, // Параллакс-эффект (медленнее прокрутка)
                    backgroundImage: 'url("https://i.pinimg.com/736x/97/de/da/97dedaee23a0a310206ca50c9f565281.jpg")',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '40vh',
                    width: '100%',
                }}
            ></div>

            {/* Секция списка */}
            <List style={{ marginLeft: '5%', marginRight: '5%' }}>
                <Title level="1" weight="bold" style={{ margin: '16px 16px 8px' }}>
                    Питание PROЖЖгись
                </Title>

                <INITDivider color="transparent" thickness="10%" />

                <Caption caps level="1" weight="3" style={{ margin: '5%' }}>
                    ЧТО ВХОДИТ
                </Caption>
                <Section style={roundedCellStyle}>
                    <Cell multiline subhead="Описание">
                        Рекомендованное питание для снижения количества жира в теле и увеличения мышечной массы.
                    </Cell>
                    <Cell multiline subhead="Как опеределить калорийность рациона">
                        В курсе ты найдешь: Видеоуроки, Встроенный калькулятор калорийности, Автоматическое составление
                        мил-планов на основе ваших расчетов.
                    </Cell>
                    <Cell multiline subhead="Кулинарный урок вкусняшек">
                        Видео рецепты моих вкусняш, на которых я похудел на 30 кг.
                    </Cell>
                    <Cell multiline subhead="Знания о питании" after={<Badge type={"number"}>бонус</Badge>}>
                        Список рекомендованной литературы про питание.
                    </Cell>
                    <Cell multiline subhead="Рационы">
                        Курс включает разнообразные рационы на каждый день недели. Они уже настроены по калорийности и порциям специально под тебя.
                    </Cell>
                    <Cell multiline subhead="Цена">$50</Cell>
                </Section>

                <INITBuyButton />
            </List>
        </div>
    );
};

export default INITMealPlanPromo;