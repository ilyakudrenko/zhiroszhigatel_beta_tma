import React from 'react';

/**
 * INITGuideTemplate Component
 *
 * This component dynamically generates a list of images for a guide based on the
 * total number of pages specified. It expects images to be organized in a folder
 * structure that matches the guide key and loads them using `require`.
 *
 * @param {string} guideKey - Unique identifier for the guide, used to locate the specific image directory.
 * @param {number} totalPages - Total number of pages (images) in the guide to display.
 *
 * @returns {JSX.Element} A list of images that represent each page of the guide.
 */
const INITGuideTemplate = ({guideKey, totalPages}) => {
    const guideImages = Array.from({length: totalPages}, (_, index) => {
        // return require(`./Images/Guide_1_page_${index + 1}.jpg`);
        return require(`./${guideKey}/Images/${index + 1}.jpg`);
        // return require(`./Guide_2/Images/${index + 1}.jpg`);
        // return require('./Guide_2/Images/2.jpg')
    });

    return (

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
    );
};

export default INITGuideTemplate;