import React from 'react';
import {AppRoot, Button, Image, List, Modal, Placeholder, Section} from "@telegram-apps/telegram-ui";

const INITItemCoursePromo = ({info = [],  }) => {
    return (
        <List>
            <Section>
                <Image
                    src={info.imageSrc}
                />
            </Section>
            <Section>

            </Section>
        </List>
    );
};

/*

/Zhiroszhigatel/CustomGuides/

    guide1.js
    guide2.js
    guide3.js
    guide3.js

*/
export default INITItemCoursePromo;