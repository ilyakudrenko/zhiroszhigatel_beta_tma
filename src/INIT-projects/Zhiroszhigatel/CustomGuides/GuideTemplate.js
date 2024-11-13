import React, { useState, useEffect } from 'react';
import { List, Placeholder, Spinner } from '@telegram-apps/telegram-ui';

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
    const [guideImages, setGuideImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadImages = async () => {
            const images = [];

            for (let i = 1; i <= totalPages; i++) {
                try {
                    const image = require(`./${guideKey}/Images/${i}.jpg`);
                    images.push(image);
                } catch (error) {
                    console.error(`File not found: ./${guideKey}/Images/${i}.jpg`, error);
                }
            }

            setGuideImages(images);
            setIsLoading(false);
        };

        loadImages();
    }, [guideKey, totalPages]);

    if (isLoading) {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <Spinner size="l" />
                <p>Загрузка контента. Пожалуйста, подождите...</p>
            </div>
        );
    }

    if (guideImages.length === 0) {
        return (
            <List>
                <Placeholder
                    description="Мы уже работаем над этой проблемой. Попробуйте позже или свяжитесь с поддержкой."
                    header="Что-то пошло не так"
                >
                    <img
                        alt="Telegram sticker"
                        src="https://xelene.me/telegram.gif"
                    />
                </Placeholder>
            </List>
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