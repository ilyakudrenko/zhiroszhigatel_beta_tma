import React, {useEffect, useState} from 'react';
import {AppRoot, Badge, Banner, Button, Modal, Section} from "@telegram-apps/telegram-ui";
import '@telegram-apps/telegram-ui/dist/styles.css';
import INITDivider from "../../../CustomComponents/Dividers/Divider";
import INITBackButton from "../../../../Hooks/BackButton";


const INITBonus = () => {
    INITBackButton();

    return (
        <AppRoot>
            <Section multiline>
                1. Мой лучший друг – желудок. Еда для умных людей. Елена Мотова
                <img
                    src={}
                    style={{width: '100%', display: 'block'}}
                />
            </Section>
            <INITDivider color='transparent' thickness="10%"/>

            <Section multiline>
                2. Еда для радости. Записки диетолога. Елена Мотова
                <img
                    src={}
                    style={{width: '100%', display: 'block'}}
                />
            </Section>
            <INITDivider color='transparent' thickness="10%"/>

            <Section multiline>
                3. Очаровательный кишечник. Как самый могущественный орган управляет нами. Джулия Эндерс
                <img
                    src={}
                    style={{width: '100%', display: 'block'}}
                />
            </Section>
            <INITDivider color='transparent' thickness="10%"/>

            <Section multiline>
                4. Голодный мозг. Как перехитрить инстинкты, которые заставляют нас переедать
                <img
                    src={}
                    style={{width: '100%', display: 'block'}}
                />
            </Section>
            <INITDivider color='transparent' thickness="10%"/>

            <Section multiline>
                5. Почему мы толстеем. Мифы и факты о том, что мешает нам быть стройными Гэри  Таубс
                <img
                    src={}
                    style={{width: '100%', display: 'block'}}
                />
            </Section>
            <INITDivider color='transparent' thickness="10%"/>
        </AppRoot>
    );
};

export default INITBonus;