import React, { useState, useEffect } from 'react';
import { Placeholder, Spinner } from "@telegram-apps/telegram-ui";

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
 * @returns {JSX.Element} A list of images that represent each page of the guide, or an error message if none are found.
 */
const INITGuideTemplate = ({ guideKey, totalPages }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [guideImages, setGuideImages] = useState([]);

    useEffect(() => {
        // Load images dynamically, adding `null` if not found
        const images = Array.from({ length: totalPages }, (_, index) => {
            try {
                return require(`./${guideKey}/Images/${index + 1}.jpg`);
            } catch (error) {
                console.error(`File not found: ./Images/${guideKey}/Guide_page_${index + 1}.jpg`, error);
                return null;
            }
        }).filter(src => src !== null); // Filter out `null` values

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
        } else {
            setIsLoading(false); // No images to load, so stop loading
        }
    }, [guideImages]);

    // Display error placeholder if no images are found
    if (!isLoading && guideImages.length === 0) {
        return (
            <Placeholder
                description="Мы уже работаем над этой проблемой. Попробуйте позже или свяжитесь с поддержкой."
                header="Что-то пошло не так"
            >
                <img
                    alt="Telegram sticker"
                    className="blt0jZBzpxuR4oDhJc8s"
                    src="https://xelene.me/telegram.gif"
                />
            </Placeholder>
        );
    }

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

    // Display images if they are loaded
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
