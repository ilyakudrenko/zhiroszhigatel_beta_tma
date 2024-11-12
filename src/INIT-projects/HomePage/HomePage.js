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
import guidesData from "../Zhiroszhigatel/CustomGuides/Guides_JSON/Guides.json"

const roundedCellStyle = {
    borderRadius: '16px',
    overflow: 'hidden', // Ensures rounded corners display properly
    backgroundColor: 'var(--tgui--secondary_bg_color)',
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
        <Banner
            background={<img alt="Nasa streams" src="https://www.nasa.gov/wp-content/uploads/2023/10/streams.jpg?resize=1536,864" style={{width: '150%'}}/>}
            callout="Urgent notification"
            description="Start exploring TON in a new, better way"
            header="Introducing TON Space"
            // onCloseIcon={function noRefCheck(){}}
            type="section"
            style={roundedCellStyle}
        >
            <React.Fragment key=".0">
                <Button size="s" onClick={handleClick}>
                    Try it out
                </Button>
            </React.Fragment>
        </Banner>

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
