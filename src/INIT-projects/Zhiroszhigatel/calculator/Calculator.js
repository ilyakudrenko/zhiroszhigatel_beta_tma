import React from 'react';
import {
    AppRoot,
    Button,
    Cell,
    IconContainer,
    Input, List,
    Section,
    Select
} from "@telegram-apps/telegram-ui";
import INITBackButton from "../../../Hooks/BackButton";
import {Icon28Stats} from "@telegram-apps/telegram-ui/dist/icons/28/stats";
import INITDivider from "../../CustomComponents/Dividers/Divider";



const Calculator = () => {
    INITBackButton();
    return (
        <AppRoot>
            <List
                style={{
                    background: 'var(--tgui--secondary_bg_color)',
                    padding: '40px',
                    width: '100%'
                }}
            >
                <Section
                    header="Калькулятор калорий"
                >
                    <Input
                        header="Возраст"
                        placeholder="Укажите ваш возраст"
                    />
                    <Input
                        header="Рост"
                        placeholder="Укажите ваш рост в см"
                    />
                    <Input
                        header="Вес"
                        placeholder="Укажите ваш вес в кг"
                    />
                    <Select header="Пол" placeholder="I am usual input, just leave me alone">
                        <option>Мужчина</option>
                        <option>Женщина</option>
                    </Select>
                    <Select header="Уровень активности" placeholder="I am usual input, just leave me alone">
                        <option>Минмальная активность</option>
                        <option>Слабый уровень активности</option>
                        <option>Умеренный активности</option>
                        <option>Тяжелая или трудоемкая активность</option>
                        <option>Экстремальный уровень активности</option>
                    </Select>
                    <Button
                        mode="filled"
                        size="m"
                        stretched
                        style={{
                            display: 'block', // Makes the button behave like a block-level element
                            margin: '0 auto', // Centers the block element horizontally.
                        }}
                    >
                        Рассчитать
                    </Button>
                </Section>
                <INITDivider color='transparent' thickness="10%"/>
                <Section
                    footer="доп информация"
                    header="Ваш калораж"
                >
                    <Cell before={<IconContainer><Icon28Stats /></IconContainer>}>
                        Chat Settings
                    </Cell>
                    <Cell before={<IconContainer><Icon28Stats /></IconContainer>}>
                        Data and Storage
                    </Cell>
                    <Cell before={<IconContainer><Icon28Stats /></IconContainer>}>
                        Devices
                    </Cell>
                </Section>
            </List>

        </AppRoot>
    );
};

export default Calculator;