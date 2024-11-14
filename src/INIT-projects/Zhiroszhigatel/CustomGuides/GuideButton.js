import React, { useState } from 'react';
import { Button } from '@telegram-apps/telegram-ui';

const GuideButton = () => {
    const [isGreen, setIsGreen] = useState(false);

    const handleButtonClick = () => {
        setIsGreen(!isGreen); // Toggle the color state
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
            zIndex: 1000, // Ensure it’s on top of other elements
        }}>
            <Button
                mode="filled"
                size="l"
                onClick={handleButtonClick}
                style={{
                    backgroundColor: isGreen ? '#53E651' : '',
                    // padding: '12px 24px', // Adds more padding to make the button bigger
                    marginRight: '8%',
                }}
            >
                Добавить в библиотеку
            </Button>
        </div>
    );
};

export default GuideButton;
