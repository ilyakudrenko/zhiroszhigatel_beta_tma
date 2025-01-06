import '@telegram-apps/telegram-ui/dist/styles.css';
import React, { useState } from 'react';
import {AppRoot, Cell, IconContainer, Input, List, Section, Tappable,} from "@telegram-apps/telegram-ui";
import INITBackButton from "../../../Hooks/BackButton";
import {Icon28Stats} from "@telegram-apps/telegram-ui/dist/icons/28/stats";
import {Icon24Close} from "@telegram-apps/telegram-ui/dist/icons/24/close";

const Calculator = () => {
    INITBackButton();

    const [value, setValue] = useState(''); // State for the input field

    const clearInput = () => {
        setValue(''); // Function to clear the input value
    };

    return (
        <AppRoot>
            <Section
                header="Калькулятор"
            >
                <List
                    style={{
                        width: 400,
                        maxWidth: '100%',
                        margin: 'auto',
                        background: 'var(--tgui--secondary_bg_color)',
                    }}
                >
                    <Input
                        header="Input"
                        placeholder="I am usual input, just leave me alone"
                    />
                    <Input
                        status="error"
                        header="Input"
                        placeholder="I am error input, don't make my mistakes..."
                    />
                    <Input
                        status="focused"
                        header="Input"
                        placeholder="I am focused input, are u focused on me?"
                    />
                    <Input
                        disabled
                        header="Input"
                        placeholder="I am disabled input"
                    />
                    <Input
                        status="focused"
                        header="Input"
                        placeholder="Write and clean me"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        after={
                            <Tappable
                                Component="div"
                                style={{
                                    display: 'flex',
                                }}
                                onClick={clearInput}
                            >
                                <Icon24Close />
                            </Tappable>
                        }
                    />
                </List>
            </Section>
        </AppRoot>
    );
};
//test
export default Calculator;