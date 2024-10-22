import './App.css';
import { useEffect } from "react";

function App() {
    const tg = window.Telegram ? window.Telegram.WebApp : null;

    useEffect(() => {
        if (tg) {
            tg.ready();
        }
    }, [tg]);

    const onClose = () => {
        if (tg) {
            tg.close();
        }
    }

    return (
        <div className="App">
            Hello World
            <button className={'button'} onClick={onClose}>Закрыть</button>
        </div>
    );
}

export default App;
