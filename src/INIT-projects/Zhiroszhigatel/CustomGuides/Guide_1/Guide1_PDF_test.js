import React from 'react';

// Define the total number of pages in the guide
const totalPages = 12; // Set this to the actual number of images in your folder

// Generate an array of image paths based on the total page count
const guideImages = Array.from({ length: totalPages }, (_, index) => {
    return require(`./Images/Guide_1_page_${index+1}.jpg`);
});

const INITGuide_1_PDF = () => {
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

export default INITGuide_1_PDF;