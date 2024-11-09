import React from 'react';
import {Image, List, Section, Title, Text, Cell, Card,} from "@telegram-apps/telegram-ui";
import logo from "./Images/Logo.jpg";
import {CardCell} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";
// import logo from "./Images/Logo.jpg";

const roundedCellStyle = {
    borderRadius: '16px',
    overflow: 'hidden', // Ensures rounded corners display properly
};

const containerStyle = {
    position: "relative",
    overflow: "hidden",
    backgroundAttachment: "fixed",
};

const backgroundStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "400px",  // Adjust as needed for the parallax area
    objectFit: "cover",
    zIndex: -1,
    transform: "translateZ(0)",  // Improves parallax smoothness
};

const contentStyle = {
    position: "relative",
    padding: "3%",
    // backdropFilter: "blur(5px)", // Optional, to make content stand out
    // background: "rgba(255, 255, 255, 0.8)", // Slight transparency for better readability
    // borderRadius: "8px",
};

const INITGuide_1 = ({info = [],  }) => {
    return (
        <div style={containerStyle}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/32/20190616154621%21Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg"
                alt="Parallax Background"
                style={backgroundStyle}
            />
            <List
                style={contentStyle}
                // style={{
                //     padding: '3%',
                //     // backgroundColor: "var(--tgui--background)",
                //     // backgroundColor: "darkred",
                // }}

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
                        Выбор наиболее оптимальных продуктов для похудения, рекомпозиции тела, улучшения СОСТОЯНИЯ
                        здоровья и самочувствия.
                    </Cell>
                    <Cell
                        multiline
                        interactiveAnimation="background"
                    >
                        Выбор наиболее оптимальных продуктов для похудения, рекомпозиции тела, улучшения СОСТОЯНИЯ
                        здоровья и самочувствия.
                    </Cell>
                    <Cell
                        multiline
                        interactiveAnimation="background"
                    >
                        Выбор наиболее оптимальных продуктов для похудения, рекомпозиции тела, улучшения СОСТОЯНИЯ
                        здоровья и самочувствия.
                    </Cell>
                    <Cell
                        multiline
                        interactiveAnimation="background"
                    >
                        Выбор наиболее оптимальных продуктов для похудения, рекомпозиции тела, улучшения СОСТОЯНИЯ
                        здоровья и самочувствия.
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
        </div>
    );
};

export default INITGuide_1;