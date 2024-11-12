import React from 'react';
import {List} from "@telegram-apps/telegram-ui";


const INITGuideTemplate = ({guideKey, totalPages}) => {
    const guideImages = Array.from({length: totalPages}, (_, index) => {
        // return require(`./Images/Guide_1_page_${index + 1}.jpg`);
        return require(`${guideKey}/Images/${index + 1}.jpg`);
    });

    return (
        <List>
            <div>
                {guideImages.map((src, index) => (
                    <img
                        key={index}
                        src={src.default || src} // In case of different export formats
                        alt={`Guide Page ${index + 1}`}
                        style={{width: '100%', display: 'block'}}
                    />
                ))}
            </div>
        </List>
    );
};

export default INITGuideTemplate;