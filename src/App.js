import '@telegram-apps/telegram-ui/dist/styles.css';

import {AppRoot, Placeholder, Button, Card} from '@telegram-apps/telegram-ui';
import {CardChip} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";
import {CardCell} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";
import React from "react";
import {
    HorizontalScroll
} from "@telegram-apps/telegram-ui/dist/components/Service/HorizontalScroll/HorizontalScroll";


const App = () => (
    <AppRoot>
        <Placeholder
            header="Title"
            description="NoonFog test"
        >
            {/*<img*/}
            {/*    alt="Telegram sticker"*/}
            {/*    src="https://xelene.me/telegram.gif"*/}
            {/*    style={{ display: 'block', width: '144px', height: '144px' }}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    mode="bezeled"*/}
            {/*    size="m"*/}
            {/*>*/}
            {/*    Action*/}
            {/*</Button>*/}
            {/*<HorizontalScroll>*/}
            {/*    <Card type="ambient">*/}
            {/*        <React.Fragment key=".0">*/}
            {/*            <CardChip readOnly>*/}
            {/*                Hot place*/}
            {/*            </CardChip>*/}
            {/*            <img*/}
            {/*                alt="Dog"*/}
            {/*                src="https://i.imgur.com/892vhef.jpeg"*/}
            {/*                style={{*/}
            {/*                    display: 'block',*/}
            {/*                    height: 308,*/}
            {/*                    objectFit: 'cover',*/}
            {/*                    width: 254*/}
            {/*                }}*/}
            {/*            />*/}
            {/*            <CardCell*/}
            {/*                readOnly*/}
            {/*                subtitle="United states"*/}
            {/*            >*/}
            {/*                New York*/}
            {/*            </CardCell>*/}
            {/*        </React.Fragment>*/}
            {/*    </Card>*/}
            {/*    <Card type="ambient">*/}
            {/*        <React.Fragment key=".0">*/}
            {/*            <CardChip readOnly>*/}
            {/*                Hot place*/}
            {/*            </CardChip>*/}
            {/*            <img*/}
            {/*                alt="Dog"*/}
            {/*                src="https://i.imgur.com/892vhef.jpeg"*/}
            {/*                style={{*/}
            {/*                    display: 'block',*/}
            {/*                    height: 308,*/}
            {/*                    objectFit: 'cover',*/}
            {/*                    width: 254*/}
            {/*                }}*/}
            {/*            />*/}
            {/*            <CardCell*/}
            {/*                readOnly*/}
            {/*                subtitle="United states"*/}
            {/*            >*/}
            {/*                New York*/}
            {/*            </CardCell>*/}
            {/*        </React.Fragment>*/}
            {/*    </Card>*/}
            {/*</HorizontalScroll>*/}
            <HorizontalScroll>
                <CardCell
                    header="Course 1"
                    subheader="Course for Beginners"
                    description="This course is perfect for beginners"
                    cover={<img src="https://path-to-your-image.jpg" alt="Course 1" />}
                />
                <CardCell
                    header="Course 2"
                    subheader="Course for Pros"
                    description="Good fit for the experienced"
                    cover={<img src="https://path-to-your-image.jpg" alt="Course 2" />}
                />
                <CardCell
                    header="Course 3"
                    subheader="Advanced Level"
                    description="For experts who want to excel"
                    cover={<img src="https://path-to-your-image.jpg" alt="Course 3" />}
                />
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
