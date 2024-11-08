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
import {Icon24ChevronRight} from "@telegram-apps/telegram-ui/dist/icons/24/chevron_right";
import {HorizontalScroll} from "@telegram-apps/telegram-ui/dist/components/Service/HorizontalScroll/HorizontalScroll";
import INITCardsList from "../CustomComponents/ScrollItemsSections/CardList";
import INITDivider from "../CustomComponents/Dividers/Divider";
import INITMessageBadgeIcon from "../CustomComponents/Icons/MessageBadgeIcon";
import INITProfileIcon from "../CustomComponents/Icons/ProfileIcon";
import INITBanner from "../CustomComponents/Banner/Banner";

const roundedCellStyle = {
    borderRadius: '16px',
    overflow: 'hidden', // Ensures rounded corners display properly
};

const handleClick = () => {
    alert("Button clicked!");
};

const HomePage = ({ data }) => (
    <AppRoot>
        <List>
            <Section
                style={roundedCellStyle}
            >
                <Cell
                    after={<Icon24ChevronRight />}
                    before={<INITProfileIcon />}
                >
                    Profile
                </Cell>
                <Cell
                    after={<Icon24ChevronRight />}
                    before={<INITMessageBadgeIcon color="white" />}
                >
                    Support
                </Cell>
            </Section>
        </List>

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
