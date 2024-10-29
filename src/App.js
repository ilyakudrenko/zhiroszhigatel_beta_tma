import '@telegram-apps/telegram-ui/dist/styles.css';
import {
    AppRoot,
    List,
    Section,
    Cell,
    Caption,
    Divider, Banner, Button,

} from '@telegram-apps/telegram-ui';
import React from "react";
import {Icon32ProfileColoredSquare} from "@telegram-apps/telegram-ui/dist/icons/32/profile_colored_square";
import {Icon24ChevronRight} from "@telegram-apps/telegram-ui/dist/icons/24/chevron_right";
import {Icon24Chat} from "@telegram-apps/telegram-ui/dist/icons/24/chat";
import {HorizontalScroll} from "@telegram-apps/telegram-ui/dist/components/Service/HorizontalScroll/HorizontalScroll";
import INITCardsList from "./INIT-projects/CustomComponents/ScrollItemsSections/CardList";
import INITDivider from "./INIT-projects/CustomComponents/Dividers/Divider";


// Custom Bullshit


const roundedCellStyle = {
    borderRadius: '16px',
    overflow: 'hidden', // Ensures rounded corners display properly
};

const handleClick = () => {
    alert("Button clicked!");
};


const data = [
    {
        imageSrc: 'https://i.imgur.com/892vhef.jpeg',
        title: 'New York',
        description: 'United States',
        cardChip: 'Hot place',
    },
    {
        imageSrc: 'https://i.imgur.com/892vhef.jpeg',
        title: 'New York',
        description: 'United States',
        cardChip: 'Hot place',
    },
    {
        imageSrc: 'https://i.imgur.com/892vhef.jpeg',
        title: 'New York',
        description: 'United States',
        cardChip: 'Hot place',
    },
    {
        imageSrc: 'https://i.imgur.com/892vhef.jpeg',
        title: 'New York',
        description: 'United States',
        cardChip: 'Hot place',
    },
    {
        imageSrc: 'https://i.imgur.com/892vhef.jpeg',
        title: 'New York',
        description: 'United States',
        cardChip: 'Hot place',
    },
    // Добавьте столько объектов, сколько вам нужно
];

const App = () => (
    <AppRoot>

        {/*The button section*/}

        <List
            style={{
                //backgroundColor: 'var(--tgui--secondary_bg_color)',
                // marginBottom: '10px'
            }}
        >
            <Section
                style={roundedCellStyle}
            >
                <Cell
                    after={<Icon24ChevronRight />}
                    before={<Icon32ProfileColoredSquare />}
                >
                    Profile
                </Cell>
                <Cell
                    after={<Icon24ChevronRight />}
                    before={<Icon24Chat />}
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


    </AppRoot>
);

export default App;
