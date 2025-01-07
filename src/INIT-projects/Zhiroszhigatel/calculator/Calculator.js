import '@telegram-apps/telegram-ui/dist/styles.css';
import React, { useState } from 'react';
import {
    AppRoot,
    Button,
    Cell,
    IconContainer,
    Input,
    Section,
    Select,
} from "@telegram-apps/telegram-ui";
import INITBackButton from "../../../Hooks/BackButton";
import {Icon28Stats} from "@telegram-apps/telegram-ui/dist/icons/28/stats";
import INITDivider from "../../CustomComponents/Dividers/Divider";

const Calculator = () => {
    INITBackButton();

    return (
        <AppRoot>
            <Section
                //footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."
                header="Калькулятор калорий"
                style={{
                    width: '100%',
                }}
            >
                <Section
                    header="Возраст"
                    style={{
                        padding: '12px',
                    }}
                >
                    <Input placeholder="Укажите свой возраст"/>
                </Section>

                <Section
                    header="Рост"
                    style={{
                        padding: '12px',
                    }}
                >
                    <Input placeholder="Укажите свой рост в см"/>
                </Section>
                <Section
                    header="Вес"
                    style={{
                        padding: '12px',
                    }}
                >
                    <Input placeholder="Укажите свой вес в кг"/>
                </Section>
                <Section
                    header="Пол"
                    style={{
                        padding: '12px',
                    }}
                >
                    <Select>
                        <option>Мужчина</option>
                        <option>Женщина</option>
                    </Select>
                </Section>
                <Section
                    header="Уровень"
                    style={{
                        padding: '12px',
                    }}
                >
                    <Select>
                        <option>Hello</option>
                        <option>Okay</option>
                        <option>Hello</option>
                        <option>Okay</option>
                        <option>Okay</option>

                    </Select>
                </Section>

                <Button
                    mode="filled"
                    size="m"
                    stretched
                >
                    Рассчитать
                </Button>
            </Section>
            <INITDivider color='transparent' thickness="10%"/>
            <Section
                //footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."
                header="Ввш калораж"
            >
                <Cell before={<IconContainer><Icon28Stats /></IconContainer>}>
                    Белки: xxx
                </Cell>
                <Cell before={<IconContainer><Icon28Stats /></IconContainer>}>
                    Жиры: xxx
                </Cell>
                <Cell before={<IconContainer><Icon28Stats /></IconContainer>}>
                    Углеводы: xxx
                </Cell>
            </Section>
        </AppRoot>
    );
};

export default Calculator;