import React from 'react';
import {Image, List, Section, Title, Text, Cell,} from "@telegram-apps/telegram-ui";
import logo from "./Images/Logo.jpg";
// import logo from "./Images/Logo.jpg";

const roundedCellStyle = {
    borderRadius: '16px',
    overflow: 'hidden', // Ensures rounded corners display properly
};

const INITGuide_1 = ({info = [],  }) => {
    return (
        <List>
            <Image
                src={"./Images/Logo.jpg"}
            />
            <Section
                style={roundedCellStyle}
            >
                <Text
                    weight="1"
                >
                    Пояснение
                </Text>
                <Cell>
                        Здесь будут группы
                        продуктов и мои
                        пояснения к ним.
                </Cell>
                <Cell>
                    <Text weight="3">
                        Наиболее оптимальные
                        продукты для питания,
                        то есть энергетически не

                        плотные и богатые содер-
                        жанию витаминов, минералов (содержат отно-
                        сительно немного калорий на 100гр продукта).
                    </Text>
                </Cell>
                <Cell>
                    <Text weight="3">
                        Выбор таких продуктов, хорошая стратегия
                        для поддержания оптимального здоровья,

                        самочувствия, а главное поможет в построе-
                        нии или поддержании здорового подтянутого

                        тела, без лишних килограмм.
                    </Text>
                </Cell>
            </Section>
        </List>
    );
};

export default INITGuide_1;