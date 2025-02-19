import React, {useState} from 'react';
import {Button} from "@telegram-apps/telegram-ui";
import {useNavigate} from "react-router-dom";


const handleClickHaptic = (effect = 'light') => {
    window.Telegram.WebApp.HapticFeedback.impactOccurred(effect);
}

const INITBuyButton = ({title, price}) => {
    const navigate = useNavigate();


    const [isGreen, setIsGreen] = useState(false);

    const handleButtonClick = () => {
        handleClickHaptic('light')
        setIsGreen(true); // Toggle the color state
        navigate("/calculator", {state: {title, price}});
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: '20px',
            zIndex: 1000, // Ensure it’s on top of other elements
        }}>
            <Button
                mode="filled"
                size="l"
                //stretched
                onClick={handleButtonClick}
                style={{
                    backgroundColor: isGreen ? '#53E651' : '',
                }}
            >
                Дальше
            </Button>
        </div>
    );
};

export default INITBuyButton;