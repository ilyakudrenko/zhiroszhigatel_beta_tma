import React, {useEffect, useState} from 'react';
import {AppRoot, Caption, Cell, List, Section, Title} from "@telegram-apps/telegram-ui";
import '@telegram-apps/telegram-ui/dist/styles.css';
import INITBackButton from "../../../../Hooks/BackButton";
import INITDivider from "../../../CustomComponents/Dividers/Divider";


const CookingLesson = () => {
    INITBackButton();

    return (
        <AppRoot>

            {/*5 Рецептов*/}
            <Section header="5 Рецептов">
                <div style={{textAlign: "center"}}>
                    <iframe src="https://vkvideo.ru/video_ext.php?oid=9490543&id=456239820&hash=432b6138a9f4c282"
                            width="90%" height="215" frameBorder="0" allowFullScreen="1"
                            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                    ></iframe>
                </div>
            </Section>
            <INITDivider color='transparent' thickness="10%"/>

            {/*Готовый_2*/}
            <Section header="Готовый_2">
                <div style={{textAlign: "center"}}>
                    <iframe src="https://vkvideo.ru/video_ext.php?oid=9490543&id=456239822&hash=ecc17305affbf253"
                            width="90%" height="215" frameBorder="0" allowFullScreen="1"
                            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                    ></iframe>
                </div>
            </Section>
            <INITDivider color='transparent' thickness="10%"/>

            {/*Кулинарные утехи на диете*/}
            <Section header="Кулинарные утехи на диете">
                <div style={{textAlign: "center", margin: 0, padding: 0, borderRadius: 16}}>
                    <iframe
                        width="90%"
                        height="215"
                        src="https://www.youtube.com/embed/_wUqQAZOjuk"
                        style={{
                            border: "none", // Removes the border
                        }}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </Section>
            <INITDivider color='transparent' thickness="10%"/>

            {/*Урок с кухни, готовим вкусняхи*/}
            <Section header="Урок с кухни, готовим вкусняхи">
                <div style={{textAlign: "center"}}>
                    <iframe src="https://vkvideo.ru/video_ext.php?oid=9490543&id=456239827&hash=26d79dcb8b19ca66"
                            width="90%" height="215" frameBorder="0" allowFullScreen="1"
                            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                    ></iframe>
                </div>
            </Section>
            <INITDivider color='transparent' thickness="10%"/>
        </AppRoot>
    );
};

export default CookingLesson;