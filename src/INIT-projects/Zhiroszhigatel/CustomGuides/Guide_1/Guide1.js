import React from 'react';
import {Image, List, Section, Title, Text, Cell, Card,} from "@telegram-apps/telegram-ui";
import logo from "./Images/Logo.jpg";
import {CardCell} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";
// import logo from "./Images/Logo.jpg";

const roundedCellStyle = {
    borderRadius: '16px',
    overflow: 'hidden', // Ensures rounded corners display properly
};


const INITGuide_1 = ({info = [],  }) => {
    return (
        <List
            style = {{
                padding: '3%',
                // backgroundColor: "var(--tgui--background)",
                // backgroundColor: "darkred",
            }}

        >
            <Image
                size={96}
                src={"https://upload.wikimedia.org/wikipedia/commons/3/32/20190616154621%21Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg"}
            />
            <Title level="1" weight="bold">
                Гайд по продуктовой корзине
            </Title>
            <Section
                header="Пояснение"
                style={roundedCellStyle}
            >
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    Выбор наиболее оптимальных продуктов для похудения, рекомпозиции тела, улучшения СОСТОЯНИЯ здоровья и самочувствия.
                </Cell>
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    Выбор наиболее оптимальных продуктов для похудения, рекомпозиции тела, улучшения СОСТОЯНИЯ здоровья и самочувствия.
                </Cell>
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    Выбор наиболее оптимальных продуктов для похудения, рекомпозиции тела, улучшения СОСТОЯНИЯ здоровья и самочувствия.
                </Cell>
                <Cell
                    multiline
                    interactiveAnimation="background"
                >
                    Выбор наиболее оптимальных продуктов для похудения, рекомпозиции тела, улучшения СОСТОЯНИЯ здоровья и самочувствия.
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