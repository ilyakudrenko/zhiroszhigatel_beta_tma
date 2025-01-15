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
                <div style={{ textAlign: "center" }}>
                    <iframe
                        width="90%"
                        height="215"
                        src="https://vkvideo.ru/video9490543_456239820?list=ln-8XTuZxfRfLjjIvL4Bl&ref_domain=course.zhzhgis.ru"
                        //title="YouTube video player"
                        //frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </Section>
            <INITDivider color='transparent' thickness="10%"/>

            {/*Готовый_2*/}
            <Section header="Готовый_2">
                <div style={{ textAlign: "center" }}>
                    <iframe
                        width="90%"
                        height="215"
                        src="https://vkvideo.ru/video9490543_456239822?list=ln-TnzEGjZuizWyCzLo6f&ref_domain=course.zhzhgis.ru"
                        //title="YouTube video player"
                        //frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </Section>
            <INITDivider color='transparent' thickness="10%"/>

            {/*Кулинарные утехи на диете*/}
            <Section header="Кулинарные утехи на диете">
                <div style={{ textAlign: "center" }}>
                    <iframe
                        width="90%"
                        height="215"
                        src="https://youtu.be/_wUqQAZOjuk"
                        //title="YouTube video player"
                        //frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </Section>
            <INITDivider color='transparent' thickness="10%"/>

            {/*Урок с кухни, готовим вкусняхи*/}
            <Section header="Урок с кухни, готовим вкусняхи">
                <div style={{ textAlign: "center" }}>
                    <iframe
                        width="90%"
                        height="215"
                        src="https://vkvideo.ru/video9490543_456239827?list=ln-wR21pZzbqFv80Xa6Ul&ref_domain=course.zhzhgis.ru"
                        //title="YouTube video player"
                        //frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </Section>
            <INITDivider color='transparent' thickness="10%"/>
        </AppRoot>
    );
};

export default CookingLesson;