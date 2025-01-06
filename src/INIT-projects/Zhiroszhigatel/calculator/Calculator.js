import React, { useState } from 'react';
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

const Calculator = () => {
    INITBackButton();

    const [value, setValue] = useState('');
    const clearInput = () => setValue('');

    return (
        <AppRoot>
            <Section header="Калькулятор калорий">
                <List
                    style={{
                        width: 400,
                        maxWidth: '100%',
                        margin: 'auto',
                        background: 'var(--tgui--secondary_bg_color)'
                    }}
                >
                    <Input
                        header="Обычный ввод"
                        placeholder="Введите значение"
                    />
                    <Input
                        status="error"
                        header="Ошибка"
                        placeholder="Ошибка в значении"
                    />
                    <Input
                        status="focused"
                        header="Фокус"
                        placeholder="Сфокусированное поле ввода"
                    />
                    <Input
                        disabled
                        header="Отключено"
                        placeholder="Поле отключено"
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
                        display: 'block', // Makes the button behave like a block-level element
                        margin: '20px auto', // Centers the block element horizontally.
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