import React, {useEffect, useState} from 'react';
import {AppRoot, Badge, Banner, Button, Cell, List, Modal, Section} from "@telegram-apps/telegram-ui";
import '@telegram-apps/telegram-ui/dist/styles.css';
import INITDivider from "../../../CustomComponents/Dividers/Divider";
import INITBackButton from "../../../../Hooks/BackButton";


const INITBonus = () => {
    INITBackButton();

    return (
        <AppRoot>
            <List>
                <Section multiline>
                    <Cell>
                        1. Мой лучший друг – желудок. Еда для умных людей. Елена Мотова
                        <img
                            src="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg"
                            style={{width: '100%', display: 'block'}}
                            alt="Book Cover"
                        />
                    </Cell>
                    <Cell>
                        <a
                            href="https://fs02.getcourse.ru/fileservice/file/download/a/562611/sc/156/h/d66edc46b3387fca4093854c71732af6.zip"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{textDecoration: 'none', color: 'inherit'}}
                        >
                            📥Ссылка на скачивание
                        </a>
                    </Cell>
                </Section>
                <INITDivider color='transparent' thickness="10%"/>

                <Section multiline>
                    2. Еда для радости. Записки диетолога. Елена Мотова
                    <img
                        src="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg"
                        style={{width: '100%', display: 'block'}}
                        alt="Book Cover"
                    />
                </Section>
                <INITDivider color='transparent' thickness="10%"/>

                <Section multiline>
                    3. Очаровательный кишечник. Как самый могущественный орган управляет нами. Джулия Эндерс
                    <img
                        src="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg"
                        style={{width: '100%', display: 'block'}}
                        alt="Book Cover"
                    />
                </Section>
                <INITDivider color='transparent' thickness="10%"/>

                <Section multiline>
                    4. Голодный мозг. Как перехитрить инстинкты, которые заставляют нас переедать
                    <img
                        src="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg"
                        style={{width: '100%', display: 'block'}}
                        alt="Book Cover"
                    />
                </Section>
                <INITDivider color='transparent' thickness="10%"/>

                <Section multiline>
                    5. Почему мы толстеем. Мифы и факты о том, что мешает нам быть стройными Гэри Таубс
                    <img
                        src="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg"
                        style={{width: '100%', display: 'block'}}
                        alt="Book Cover"
                    />
                </Section>
            </List>
        </AppRoot>
    );
};

export default INITBonus;