import '@telegram-apps/telegram-ui/dist/styles.css';
import {
    AppRoot,
    Placeholder,
    Button,
    Card,
    Banner,
    List,
    Section,
    Cell,

} from '@telegram-apps/telegram-ui';
import {CardChip} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";
import {CardCell} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";
import React from "react";
import {
    HorizontalScroll
} from "@telegram-apps/telegram-ui/dist/components/Service/HorizontalScroll/HorizontalScroll";
import {Icon32ProfileColoredSquare} from "@telegram-apps/telegram-ui/dist/icons/32/profile_colored_square";
import {Icon24ChevronRight} from "@telegram-apps/telegram-ui/dist/icons/24/chevron_right";
import {Icon24Chat} from "@telegram-apps/telegram-ui/dist/icons/24/chat";


const App = () => (
    <AppRoot>



        <Placeholder
            header="Title"
            description="App.js test"
        >
            <List
                style={{
                    backgroundColor: 'var(--tgui--secondary_bg_color)',
                    width: '100%',
                    borderRadius: '16px',
                }}
            >
                <Section
                    style={{
                        borderRadius: '16px',
                    }}
                >
                    <Cell
                        after={<Icon24ChevronRight />}
                        before={<Icon32ProfileColoredSquare />}
                        style={{
                            borderRadius: '16px',
                        }}
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
            <Banner
                background={<img alt="Nasa streams" src="https://www.nasa.gov/wp-content/uploads/2023/10/streams.jpg?resize=1536,864" style={{width: '150%'}}/>}
                callout="Urgent notification"
                description="Start exploring TON in a new, better way"
                header="Introducing TON Space"
                // onCloseIcon={function noRefCheck(){}}
                type="section"
            >
                <React.Fragment key=".0">
                    <Button size="s">
                        Try it out
                    </Button>
                </React.Fragment>
            </Banner>

            <HorizontalScroll>
                <div style={{ display: 'flex', overflowX: 'scroll', whiteSpace: 'nowrap', gap: '16px' }}>
                    <Card type="ambient">
                        <React.Fragment key=".0">
                            <CardChip readOnly>
                                Hot place
                            </CardChip>
                            <img
                                alt="Dog"
                                src="https://i.imgur.com/892vhef.jpeg"
                                style={{
                                    display: 'block',
                                    height: 308,
                                    objectFit: 'cover',
                                    width: 254
                                }}
                            />
                            <CardCell
                                readOnly
                                subtitle="United states"
                            >
                                New York
                            </CardCell>
                        </React.Fragment>
                    </Card>
                    <Card type="ambient">
                        <React.Fragment key=".0">
                            <CardChip readOnly>
                                Hot place
                            </CardChip>
                            <img
                                alt="Dog"
                                src="https://i.imgur.com/892vhef.jpeg"
                                style={{
                                    display: 'block',
                                    height: 308,
                                    objectFit: 'cover',
                                    width: 254
                                }}
                            />
                            <CardCell
                                readOnly
                                subtitle="United states"
                            >
                                New York
                            </CardCell>
                        </React.Fragment>
                    </Card>
                    <Card type="ambient">
                        <React.Fragment key=".0">
                            <CardChip readOnly>
                                Hot place
                            </CardChip>
                            <img
                                alt="Dog"
                                src="https://i.imgur.com/892vhef.jpeg"
                                style={{
                                    display: 'block',
                                    height: 308,
                                    objectFit: 'cover',
                                    width: 254
                                }}
                            />
                            <CardCell
                                readOnly
                                subtitle="United states"
                            >
                                New York
                            </CardCell>
                        </React.Fragment>
                    </Card>
                </div>
            </HorizontalScroll>

        </Placeholder>
    </AppRoot>
);

export default App;


// import './App.css';
// import { useEffect } from "react";
//
// function App() {
//     const tg = window.Telegram ? window.Telegram.WebApp : null;
//
//     useEffect(() => {
//         if (tg) {
//             tg.ready();
//             console.log("Telegram WebApp is ready");
//         } else {
//             console.log("Telegram WebApp is not available");
//         }
//     }, [tg]);
//
//
//     const onClose = () => {
//         if (tg) {
//             tg.close();
//         }
//     }
//
//     return (
//         <div className="App">
//             Hello World
//             <button className={'button'} onClick={onClose}>Закрыть</button>
//         </div>
//     );
// }
//
// export default App;
