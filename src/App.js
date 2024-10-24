import '@telegram-apps/telegram-ui/dist/styles.css';

import { AppRoot, Placeholder, Button } from '@telegram-apps/telegram-ui';



const App = () => (
    <AppRoot>
        <Placeholder
            header="Title"
            description="NoonFog test"
        >
            <img
                alt="Telegram sticker"
                src="https://xelene.me/telegram.gif"
                style={{ display: 'block', width: '144px', height: '144px' }}
            />
            <Button
                mode="filled"
                size="m"
            >
                Action
            </Button>
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
