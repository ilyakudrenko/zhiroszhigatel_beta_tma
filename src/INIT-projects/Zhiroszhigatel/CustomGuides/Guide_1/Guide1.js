import React from 'react';
import {Image, List, Section, Title, Text, Cell, Card, Caption,} from "@telegram-apps/telegram-ui";
import logo from "./Images/Logo.jpg";
import {CardCell} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";
import INITDivider from "../../../CustomComponents/Dividers/Divider";
// import logo from "./Images/Logo.jpg";

const roundedCellStyle = {
    borderRadius: '16px',
    overflow: 'hidden', // Ensures rounded corners display properly
};


const containerStyle = {
    width: "100%",       // Занимает всю возможную ширину
    height: "300px",     // Фиксированная высота; можно изменить при необходимости
    overflow: "hidden",  // Обрезает изображение, чтобы соответствовать контейнеру
    position: "relative",
};

const imageStyle = {
    width: "100%",
    height: "100%",
    // objectFit: "cover",  // Масштабирует изображение, сохраняя пропорции, заполняя контейнер
    position: "absolute",
    top: 0,
    left: 0,
};


const INITGuide_1 = ({info = [],}) => {
    return (
        <List
            style={{
                padding: '5%',
                // backgroundColor: "var(--tgui--background)",
                // backgroundColor: "darkred",
            }}

        >

            <div style={containerStyle}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/32/20190616154621%21Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg"
                    alt="Background"
                    style={imageStyle}
                />
            </div>


                <Title level="1" weight="bold">
                    Гайд по продуктовой корзине
                </Title>

                <INITDivider color='transparent' thickness="10%"/>

                <Caption
                    caps
                    level="1"
                    weight="3"
                    style={{margin: '5%'}}
                >
                    Пояснение
                </Caption>
                <Section
                    style={roundedCellStyle}
                >
                    <Cell
                        multiline
                        interactiveAnimation="background"
                    >
                        Выбор наиболее оптимальных продуктов для похудения, рекомпозиции тела, улучшения СОСТОЯНИЯ
                        здоровья
                        и самочувствия.
                    </Cell>
                    <Cell
                        multiline
                        interactiveAnimation="background"
                    >
                        Выбор наиболее оптимальных продуктов для похудения, рекомпозиции тела, улучшения СОСТОЯНИЯ
                        здоровья
                        и самочувствия.
                    </Cell>
                    <Cell
                        multiline
                        interactiveAnimation="background"
                    >
                        Выбор наиболее оптимальных продуктов для похудения, рекомпозиции тела, улучшения СОСТОЯНИЯ
                        здоровья
                        и самочувствия.
                    </Cell>
                    <Cell
                        multiline
                        interactiveAnimation="background"
                    >
                        Выбор наиболее оптимальных продуктов для похудения, рекомпозиции тела, улучшения СОСТОЯНИЯ
                        здоровья
                        и самочувствия.
                    </Cell>

                </Section>
                {/*<Image*/}
                {/*    src={"./Images/Logo.jpg"}*/}
                {/*/>*/}
                {/*<Section*/}
                {/*    style={roundedCellStyle}*/}
                {/*>*/}
                {/*    <Cell>*/}

                {/*    </Cell>*/}
                {/*</Section>*/}
        </List>
    );
};

export default INITGuide_1;