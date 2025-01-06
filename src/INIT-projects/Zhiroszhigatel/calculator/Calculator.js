import React, { useEffect, useState } from 'react';
import {
    AppRoot,
    Button,
    Cell,
    IconContainer,
    Input,
    Section,
    Select,
    List,
    Tappable
} from "@telegram-apps/telegram-ui";
import INITBackButton from "../../../Hooks/BackButton";
import { Icon28Stats } from "@telegram-apps/telegram-ui/dist/icons/28/stats";
import { Icon24Close } from "@telegram-apps/telegram-ui/dist/icons/24/close";
import INITDivider from "../../CustomComponents/Dividers/Divider";
import '@telegram-apps/telegram-ui/dist/styles.css';

const Calculator = () => {
    INITBackButton();

    const [value, setValue] = useState('');
    const clearInput = () => setValue('');

    // Telegram theme integration
    useEffect(() => {
        const telegramTheme = window.Telegram.WebApp.themeParams || {};
        document.documentElement.style.setProperty('--tgui--primary_bg_color', telegramTheme.bg_color || '#ffffff');
        document.documentElement.style.setProperty('--tgui--secondary_bg_color', telegramTheme.secondary_bg_color || '#f0f0f0');
        document.documentElement.style.setProperty('--tgui--text_color', telegramTheme.text_color || '#000000');
        document.documentElement.style.setProperty('--tgui--hint_color', telegramTheme.hint_color || '#8a8a8a');
    }, []);

    return (
        <AppRoot>
            <Section header="Калькулятор калорий">
                <List
                    style={{
                        width: 400,
                        maxWidth: '100%',
                        margin: 'auto',
                        background: 'var(--tgui--secondary_bg_color)', // Matches Telegram theme
                        padding: '10px',
                        borderRadius: '8px',
                    }}
                >
                    <Input
                        header="Обычный ввод"
                        placeholder="Введите значение"
                        style={{ marginBottom: '15px' }}
                    />
                    <Input
                        status="error"
                        header="Ошибка"
                        placeholder="Ошибка в значении"
                        style={{ marginBottom: '15px' }}
                    />
                    <Input
                        status="focused"
                        header="Фокус"
                        placeholder="Сфокусированное поле ввода"
                        style={{ marginBottom: '15px' }}
                    />
                    <Input
                        disabled
                        header="Отключено"
                        placeholder="Поле отключено"
                        style={{ marginBottom: '15px' }}
                    />
                    <Input
                        status="focused"
                        header="Очистить меня"
                        placeholder="Напишите и очистите"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        after={
                            <Tappable
                                Component="div"
                                style={{ display: 'flex' }}
                                onClick={clearInput}
                            >
                                <Icon24Close />
                            </Tappable>
                        }
                    />
                </List>
                <Button
                    mode="filled"
                    size="m"
                    stretched
                    style={{
                        display: 'block',
                        margin: '20px auto',
                        backgroundColor: 'var(--tgui--primary_bg_color)',
                        color: 'var(--tgui--text_color)',
                    }}
                >
                    Рассчитать
                </Button>
            </Section>
            <INITDivider color="transparent" thickness="10%" />
            <Section footer="доп информация" header="Ваш калораж">
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
        </AppRoot>
    );
};

export default Calculator;