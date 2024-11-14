import React, { useState } from 'react';
import { Button } from '@telegram-apps/telegram-ui';

const GuideButton = () => {
    const [isGreen, setIsGreen] = useState(false);

    const handleButtonClick = () => {
        setIsGreen(!isGreen);
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            padding: '20px',
            //backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background
            //boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
        }}>
            <Button
                mode="filled"
                size="l"
                onClick={handleButtonClick}
                style={{
                    backgroundColor: isGreen ? '#53E651' : '',
                    fontSize: '18px',
                    padding: '12px 24px',
                    width: '90%',
                    //maxWidth: '600px',
                }}
            >
                Добавить в библиотеку
            </Button>
        </div>
    );
};

export default GuideButton;
