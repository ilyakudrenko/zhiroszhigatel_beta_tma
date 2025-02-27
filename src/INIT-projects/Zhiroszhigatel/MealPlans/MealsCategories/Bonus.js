import React from 'react';
import {AppRoot, Cell, List, Section} from "@telegram-apps/telegram-ui";
import '@telegram-apps/telegram-ui/dist/styles.css';
import INITDivider from "../../../CustomComponents/Dividers/Divider";
import book1 from "../Books_img/book1.jpeg"
import book2 from "../Books_img/book2.jpeg"
import book3 from "../Books_img/book3.jpeg"
import book4 from "../Books_img/book4.jpeg"
import book5 from "../Books_img/book5.jpeg"


const INITBonus = () => {
    return (
        <AppRoot>
            <List>
                <Section>
                    <Cell multiline>
                        1. Мой лучший друг – желудок. Еда для умных людей. Елена Мотова
                        <INITDivider color='transparent' thickness="10%"/>
                        <img
                            src={book1}
                            style={{width: '100%', display: 'block'}}
                            alt="Book Cover"
                        />
                    </Cell>
                    <Cell>
                        <a
                            href="https://fs02.getcourse.ru/fileservice/file/download/a/562611/sc/156/h/d66edc46b3387fca4093854c71732af6.zip"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{color: "inherit"}}
                        >
                            📥 Скачать ZIP файл
                        </a>
                    </Cell>
                </Section>
                <INITDivider color='transparent' thickness="10%"/>

                <Section>
                    <Cell multiline>
                        2. Еда для радости. Записки диетолога. Елена Мотова
                        <INITDivider color='transparent' thickness="10%"/>
                        <img
                            src={book2}
                            style={{width: '100%', display: 'block'}}
                            alt="Book Cover"
                        />
                    </Cell>
                    <Cell>
                        <a
                            href="https://fs17.getcourse.ru/fileservice/file/download/a/562611/sc/115/h/38f3c4938ec425298c8245cea19ad484.zip"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{color: "inherit"}}
                        >
                            📥 Скачать ZIP файл
                        </a>
                    </Cell>
                </Section>
                <INITDivider color='transparent' thickness="10%"/>

                <Section>
                    <Cell multiline>
                        3. Очаровательный кишечник. Как самый могущественный орган управляет нами. Джулия Эндерс
                        <INITDivider color='transparent' thickness="10%"/>
                        <img
                            src={book3}
                            style={{width: '100%', display: 'block'}}
                            alt="Book Cover"
                        />
                    </Cell>
                    <Cell>
                        <a
                            href="https://fs24.getcourse.ru/fileservice/file/download/a/562611/sc/466/h/379b049c08efe5153881690305b102e5.zip"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{color: "inherit"}}
                        >
                            📥 Скачать ZIP файл
                        </a>
                    </Cell>
                </Section>
                <INITDivider color='transparent' thickness="10%"/>

                <Section>
                    <Cell multiline>
                        4. Голодный мозг. Как перехитрить инстинкты, которые заставляют нас переедать
                        <INITDivider color='transparent' thickness="10%"/>
                        <img
                            src={book4}
                            style={{width: '100%', display: 'block'}}
                            alt="Book Cover"
                        />
                    </Cell>
                    <Cell>
                        <a
                            href="https://fs21.getcourse.ru/fileservice/file/download/a/562611/sc/339/h/db4600eda0ad71bf2e98b9d4df59e750.zip"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{color: "inherit"}}
                        >
                            📥 Скачать ZIP файл
                        </a>
                    </Cell>
                </Section>
                <INITDivider color='transparent' thickness="10%"/>

                <Section>
                    <Cell multiline>
                        5. Почему мы толстеем. Мифы и факты о том, что мешает нам быть стройными Гэри Таубс
                        <INITDivider color='transparent' thickness="10%"/>
                        <img
                            src={book5}
                            style={{width: '100%', display: 'block'}}
                            alt="Book Cover"
                        />
                    </Cell>
                    <Cell>
                        <a
                            href="https://fs19.getcourse.ru/fileservice/file/download/a/562611/sc/409/h/efc8ecc64ed425e98d6cde4e4585b16f.zip"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{color: "inherit"}}
                        >
                            📥 Скачать ZIP файл
                        </a>
                    </Cell>
                </Section>
            </List>
        </AppRoot>
    );
};

export default INITBonus;