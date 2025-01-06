import React, { useState } from 'react';
import '@telegram-apps/telegram-ui/dist/styles.css';
import {AppRoot, Cell, IconContainer, Input, List, Section,} from "@telegram-apps/telegram-ui";
import INITBackButton from "../../../Hooks/BackButton";
import {Icon28Stats} from "@telegram-apps/telegram-ui/dist/icons/28/stats";

const Calculator = () => {
    INITBackButton();
    return (
        <AppRoot>
            <List
                style={{
                    background: 'var(--tgui--secondary_bg_color)',
                }}
            >
                <Section
                    footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."
                    header=""
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
                <Section
                    footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."
                    header=""
                >
                    <Input
                        header="First name"
                        placeholder="21 y.o. designer from San Francisco"
                    />
                    <Input
                        header="Last name"
                        placeholder="21 y.o. designer from San Francisco"
                    />
                </Section>
            </List>
        </AppRoot>
    );
};
//test
export default Calculator;