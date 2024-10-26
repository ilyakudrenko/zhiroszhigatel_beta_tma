import '@telegram-apps/telegram-ui/dist/styles.css';
import {AppRoot, Placeholder, Button, Card, Banner, List, Section, Cell, IconContainer} from '@telegram-apps/telegram-ui';
import {CardChip} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";
import {CardCell} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";
import React from "react";
import {
    HorizontalScroll
} from "@telegram-apps/telegram-ui/dist/components/Service/HorizontalScroll/HorizontalScroll";


const App = () => (
    <AppRoot>

        <List
            style={{
                background: 'var(--tgui--secondary_bg_color)',
            }}
        >
            <Section
                header=""
            >
                <Cell before={<IconContainer></IconContainer>}>
                    Profile
                </Cell>
                <Cell before={<IconContainer></IconContainer>}>
                    Support
                </Cell>
            </Section>
        </List>

        <Placeholder
            header="Title"
            description="App.js test"
        >
            <img
                alt="Telegram sticker"
                src="https://xelene.me/telegram.gif"
                style={{ display: 'block', width: '144px', height: '144px' }}
            />
            <Button
                mode="bezeled"
                size="m"
            >
                Action
            </Button>

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
