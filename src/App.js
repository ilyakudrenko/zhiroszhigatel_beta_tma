import './App.css';
import {useEffect} from "react";
const tg = window.Telegram.WebApp;

function App() {

    // useEffect(() => {
    //     tg.ready();
    // }, [])
    //
    // const onClose = () => {
    //     tg.close();
    // }

  return (
    <div className="App">
      Hello World
        <button>Закрыть</button>
    </div>
  );
}

export default App;
