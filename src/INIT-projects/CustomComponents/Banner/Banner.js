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
    infoLink,

                    }) => {
    return (
        <AppRoot>
            <Banner
                background={<img alt="Новый Апдейт"
                                 src={imageSrc}
                                 style={{
                                     width: "100%",
                                     height: "100%",
                                     objectFit: "cover"
                                 }}
                            />}
                callout="Новое уведомление"
                description={description}
                header={header}
                // onCloseIcon={function noRefCheck(){}}
                type="section"
                style={roundedCellStyle}
            >
                <React.Fragment key=".0">
                    <a
                        href={infoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button size="s">
                            8====D
                        </Button>
                    </a>
                </React.Fragment>
            </Banner>
        </AppRoot>
    );
};

export default INITBanner;