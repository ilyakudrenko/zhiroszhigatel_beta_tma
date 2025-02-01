import React from 'react';
import {AppRoot, Banner, Button} from "@telegram-apps/telegram-ui";

const roundedCellStyle = {
    borderRadius: '16px',
    overflow: 'hidden', // Ensures rounded corners display properly
    backgroundColor: 'var(--tgui--secondary_bg_color)',
};

const handleClick = ( ) => {
    alert("Button clicked!");
};

const INITBanner = ({
    imageSrc,
    header,
    description,


                    }) => {
    return (
        <AppRoot>
            <Banner
                background={<img alt="Новый Апдейт"
                                 src={imageSrc}
                                 style={{width: '150%'}}/>}
                callout="Новое уведомление"
                description={description}
                header={header}
                // onCloseIcon={function noRefCheck(){}}
                type="section"
                style={roundedCellStyle}
            >
                <React.Fragment key=".0">
                    <Button size="s" onClick={handleClick}>
                        Try it out
                    </Button>
                </React.Fragment>
            </Banner>
        </AppRoot>
    );
};

export default INITBanner;