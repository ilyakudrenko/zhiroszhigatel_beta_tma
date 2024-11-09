import React from 'react';
import {Image, List, Section, Title, Text, } from "@telegram-apps/telegram-ui";
import logo from "./Images/Logo.jpg";
// import logo from "./Images/Logo.jpg";
const INITGuide_1 = ({info = [],  }) => {
    return (
        <List>
            <Image
                src={"./Images/Logo.jpg"}
            />
            <Section>
                <Title
                    level="1"
                    weight="1"
                >
                    Пояснение
                </Title>

                <Text weight="3">
                    Здесь будут группы
                    продуктов и мои
                    пояснения к ним.
                </Text>

                <Text weight="3">
                    Наиболее оптимальные
                    продукты для питания,
                    то есть энергетически не

                    плотные и богатые содер-
                    жанию витаминов, минералов (содержат отно-
                    сительно немного калорий на 100гр продукта).
                </Text>

                <Text weight="3">
                    Выбор таких продуктов, хорошая стратегия
                    для поддержания оптимального здоровья,

                    самочувствия, а главное поможет в построе-
                    нии или поддержании здорового подтянутого

                    тела, без лишних килограмм.
                </Text>

                <Text weight="3">

                </Text>

                <Text weight="3">

                </Text>

            </Section>
        </List>
    );
};

export default INITGuide_1;