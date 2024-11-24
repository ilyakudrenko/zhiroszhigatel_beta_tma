import React, {useState} from 'react';
import {Button, Snackbar} from "@telegram-apps/telegram-ui";
import INITProfileIcon from "../../CustomComponents/Icons/ProfileIcon";

const handleClickHaptic = (effect = 'light') =>{
    window.Telegram.WebApp.HapticFeedback.impactOccurred(effect);
}

const INITBuyButton = ({title, price}) => {

    const [isGreen, setIsGreen] = useState(false);
    const [isSnackbarVisible, setSnackbarVisible] = useState(false);

    const handleButtonClick = () => {
        handleClickHaptic('light')
        setIsGreen(true); // Toggle the color state
        setSnackbarVisible(true);
    };

    const handleCloseSnackbar = () => {
        setSnackbarVisible(false);
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
                Купить: ${price}
            </Button>

            {isSnackbarVisible && (
                <Snackbar
                    before={<INITProfileIcon/>}
                    children={title}
                    description="Добавлен в библиотеку(вы можите найти его в профиле)"
                    duration={4000}
                    onClose={handleCloseSnackbar}
                    style={{
                        zIndex: 1000, // Ensure it’s on top of other elements
                    }}
                >
                </Snackbar>
            )}
        </div>
    );
};

export default INITBuyButton;