import React, { useState, useEffect } from 'react';
import {Placeholder, Spinner } from '@telegram-apps/telegram-ui';
import GuideButton from "./GuideButton";

/**
 * INITGuideTemplate Component
 *
 * This component dynamically generates a list of images for a guide based on the
 * total number of pages specified. It expects images to be organized in a folder
 * structure that matches the guide key and loads them using `require`.
 *
 * @param {string} guideKey - Unique identifier for the guide, used to locate the specific image directory.
 * @param {number} totalPages - Total number of pages (images) in the guide to display.
 * @param {string} title - Title of selected guide.
 *
 * @returns {JSX.Element} A list of images that represent each page of the guide, or an error message if none are found.
 */
const INITGuideTemplate = ({ guideKey, totalPages, title}) => {
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
            <Placeholder
                header="ТРО-ЛО-ЛО ЖИРНОТА"
                description="ДЛЯ ТЕБЯ ГАЙД ЗАБАНЕН - ВРЕМЯ КУШАТЬ ТОРТИК"
            >
                <img
                    alt="Telegram sticker"
                    src="https://xelene.me/telegram.gif"
                    style={{ display: 'block', width: '144px', height: '144px' }}
                />
            </Placeholder>
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
            <GuideButton  title={title} />
        </div>
    );
};

export default INITGuideTemplate;