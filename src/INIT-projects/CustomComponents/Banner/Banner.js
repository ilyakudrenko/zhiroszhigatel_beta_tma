import React from 'react';
import {AppRoot, Banner, Button} from "@telegram-apps/telegram-ui";

const roundedCellStyle = {
    borderRadius: '16px',
    overflow: 'hidden', // Ensures rounded corners display properly
    backgroundColor: 'var(--tgui--secondary_bg_color)',
};

const handleClick = () => {
    alert("Button clicked!");
};

const INITBanner = () => {
    return (
        <AppRoot>
            <Banner
                background={<img alt="Nasa streams"
                                 src="https://www.nasa.gov/wp-content/uploads/2023/10/streams.jpg?resize=1536,864"
                                 style={{width: '150%'}}/>}
                callout="Urgent notification"
                description="Start exploring TON in a new, better way"
                header="Introducing TON Space"
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