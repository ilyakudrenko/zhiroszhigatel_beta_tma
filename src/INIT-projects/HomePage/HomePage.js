import '@telegram-apps/telegram-ui/dist/styles.css';
import {
    List,
    Section,
    Cell,
    Caption,
    Banner,
    Button,
    AppRoot,

} from '@telegram-apps/telegram-ui';
import React from "react";
import {HorizontalScroll} from "@telegram-apps/telegram-ui/dist/components/Service/HorizontalScroll/HorizontalScroll";
import INITCardsList from "../CustomComponents/ScrollItemsSections/CardList";
import INITDivider from "../CustomComponents/Dividers/Divider";
import INITBanner from "../CustomComponents/Banner/Banner";
import Navigation from "../CustomComponents/Navigation/Navigation";

const HomePage = ({ data }) => (
    <AppRoot>
        <Navigation />

        {/*Some banner for sales*/}
        <INITDivider color = 'transparent' thickness="10%" />
        <INITBanner />

        {/*Free Guides*/}

        <INITDivider color = 'transparent' thickness="10%" />
        <List
        >
            <Caption
                caps
                level="1"
                weight="3"
                style={{ margin: '5%'}}
            >
                Available Free Guides
            </Caption>
            <HorizontalScroll
            >
                <INITCardsList items={data} />
            </HorizontalScroll>
        </List>

        {/*Courses*/}

        <INITDivider color = 'transparent' thickness="10%" />
        <List
        >
            <Caption
                caps
                level="1"
                weight="3"
                style={{ margin: '5%'}}
            >
                Available Courses
            </Caption>
            <HorizontalScroll
            >
                <INITCardsList items={data} />
            </HorizontalScroll>
        </List>

        {/*Meal plan*/}
        <INITDivider color = 'transparent' thickness="10%" />
        <List
        >
            <Caption
                caps
                level="1"
                weight="3"
                style={{ margin: '5%'}}
            >
                Available Meal Plans test
            </Caption>
            <HorizontalScroll
            >
                <INITCardsList items={data} />
            </HorizontalScroll>
        </List>
    </AppRoot>
);

export default HomePage;
