import '@telegram-apps/telegram-ui/dist/styles.css';
import {
    AppRoot,
    Button,
    Card,
    List,
    Section,
    Cell,
    Text, Placeholder,

} from '@telegram-apps/telegram-ui';
import {CardChip} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";
import {CardCell} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";
import React from "react";
import {Icon32ProfileColoredSquare} from "@telegram-apps/telegram-ui/dist/icons/32/profile_colored_square";
import {Icon24ChevronRight} from "@telegram-apps/telegram-ui/dist/icons/24/chevron_right";
import {Icon24Chat} from "@telegram-apps/telegram-ui/dist/icons/24/chat";
import {
    SectionHeader
} from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader";
import {HorizontalScroll} from "@telegram-apps/telegram-ui/dist/components/Service/HorizontalScroll/HorizontalScroll";
import INITCardsList from "./INIT-projects/CustomComponents/ScrollItemsSections/CardList";


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
                marginBottom: '10px'
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

        {/*<Banner*/}
        {/*    background={<img alt="Nasa streams" src="https://www.nasa.gov/wp-content/uploads/2023/10/streams.jpg?resize=1536,864" style={{width: '150%'}}/>}*/}
        {/*    callout="Urgent notification"*/}
        {/*    description="Start exploring TON in a new, better way"*/}
        {/*    header="Introducing TON Space"*/}
        {/*    // onCloseIcon={function noRefCheck(){}}*/}
        {/*    type="section"*/}
        {/*    style={roundedCellStyle}*/}
        {/*>*/}
        {/*    <React.Fragment key=".0">*/}
        {/*        <Button size="s">*/}
        {/*            Try it out*/}
        {/*        </Button>*/}
        {/*    </React.Fragment>*/}
        {/*</Banner>*/}

        {/*Courses*/}
        <List
            style={{
                marginTop: '24px'
            }}
        >
            <Text
                caps
                weight = "3"
                // style={{color:'(var)'}}
            >
                Available Courses
            </Text>
            <HorizontalScroll
            >
                <INITCardsList items={data} />
            </HorizontalScroll>
        </List>


    </AppRoot>
);

export default App;
