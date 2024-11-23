import '@telegram-apps/telegram-ui/dist/styles.css';
import {
    AppRoot,
    Banner,
    Button,
    Caption,
    Cell,
    List,
    Section,
} from '@telegram-apps/telegram-ui';
import React from "react";
import {Icon24ChevronRight} from "@telegram-apps/telegram-ui/dist/icons/24/chevron_right";
import {HorizontalScroll} from "@telegram-apps/telegram-ui/dist/components/Service/HorizontalScroll/HorizontalScroll";
import INITCardsList from "../CustomComponents/ScrollItemsSections/CardList";
import INITDivider from "../CustomComponents/Dividers/Divider";
import INITMessageBadgeIcon from "../CustomComponents/Icons/MessageBadgeIcon";
import INITProfileIcon from "../CustomComponents/Icons/ProfileIcon";
import guidesData from "../Zhiroszhigatel/CustomGuides/Guides_JSON/Guides.json";
import {useNavigate} from "react-router-dom";
import INITHelp from "../CustomComponents/Help/Help";
import INITBanner from "../CustomComponents/Banner/Banner";

const roundedCellStyle = {
    borderRadius: '16px',
    overflow: 'hidden', // Ensures rounded corners display properly
    backgroundColor: 'var(--tgui--secondary_bg_color)',
};


const handleClick = () => {
    alert("Button clicked!");
};

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <AppRoot>
            {/*<INITHelp />*/}

            <List>
                <Section
                >
                    <Cell
                        after={<Icon24ChevronRight/>}
                        before={<INITProfileIcon/>}
                        onClick={() => {
                            navigate("/profile")}}
                    >
                        Профиль
                    </Cell>
                    <Cell
                        after={<Icon24ChevronRight/>}
                        before={<INITMessageBadgeIcon color="white"/>}
                        onClick={() => navigate("/support")}
                    >
                        Задать вопрос
                    </Cell>
                </Section>
            </List>

            {/*Some banner for sales*/}
            <INITDivider color='transparent' thickness="10%"/>

            <INITBanner />

            {/*Free Guides*/}

            <INITDivider color='transparent' thickness="10%"/>
            <List
            >
                <Caption
                    caps
                    level="1"
                    weight="3"
                    style={{margin: '5%'}}
                >
                    Гайды
                </Caption>
                <HorizontalScroll
                >
                    <INITCardsList items={guidesData}/>
                </HorizontalScroll>
            </List>

            {/*Courses*/}

            <INITDivider color='transparent' thickness="10%"/>
            <List
            >
                <Caption
                    caps
                    level="1"
                    weight="3"
                    style={{margin: '5%'}}
                >
                    Курсы
                </Caption>
                <HorizontalScroll
                >
                    <INITCardsList items={guidesData}/>
                </HorizontalScroll>
            </List>

            {/*Meal plan*/}
            <INITDivider color='transparent' thickness="10%"/>
            <List
            >
                <Caption
                    caps
                    level="1"
                    weight="3"
                    style={{margin: '5%'}}
                >
                    Питание
                </Caption>
                <HorizontalScroll
                >
                    <INITCardsList items={guidesData}/>
                </HorizontalScroll>
            </List>
        </AppRoot>
    );
};

export default HomePage;
