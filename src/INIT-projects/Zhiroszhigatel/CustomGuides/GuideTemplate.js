import React, { useState, useEffect } from 'react';
import { Placeholder, Spinner } from "@telegram-apps/telegram-ui";

const INITGuideTemplate = ({ guideKey, totalPages }) => {
    // State to track loading status
    const [isLoading, setIsLoading] = useState(true);
    const [guideImages, setGuideImages] = useState([]);

    useEffect(() => {
        // Load images and set loading state
        const images = Array.from({ length: totalPages }, (_, index) => {
            try {
                const src = require(`./${guideKey}/Images/${index + 1}.jpg`);
                return src;
            } catch (error) {
                console.error(`File not found: ./Images/${guideKey}/Guide_page_${index + 1}.jpg`, error);
                return null;
            }
        }).filter(src => src !== null);

        setGuideImages(images);
    }, [guideKey, totalPages]);

    // Check if all images are loaded
    useEffect(() => {
        if (guideImages.length > 0) {
            const loadImagePromises = guideImages.map(src => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = src.default || src;
                    img.onload = resolve;
                    img.onerror = reject;
                });
            });

            Promise.all(loadImagePromises).then(() => {
                setIsLoading(false); // Set loading to false when all images are loaded
            });
        }
    }, [guideImages]);

    // Display spinner if loading, otherwise show images
    if (isLoading) {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border: '1px dashed #9747FF',
                    borderRadius: '5px',
                    padding: '20px',
                    width: '100%',
                }}
            >
                <Spinner size="m" />
                <p>Loading content, please wait...</p>
            </div>
        );
    }

    return (
        <div>
            {guideImages.map((src, index) => (
                <img
                    key={index}
                    src={src.default || src}
                    alt={`Guide Page ${index + 1}`}
                    style={{ width: '100%', display: 'block' }}
                />
            ))}
        </div>
    );
};

export default INITGuideTemplate;
