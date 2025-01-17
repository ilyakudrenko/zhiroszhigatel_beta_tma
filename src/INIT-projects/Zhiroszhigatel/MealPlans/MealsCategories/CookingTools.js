import React, {useEffect, useState} from 'react';
import {AppRoot, Button, Cell, List, Section, Title} from "@telegram-apps/telegram-ui";
import '@telegram-apps/telegram-ui/dist/styles.css';
// import toolsPdf from "../Pdf/tools";

/**
 * ImageGallery Component
 * Загружает изображения из указанной папки и отображает их последовательно.
 *
 * @param {string} folderPath - Путь к папке с изображениями.
 * @param {number} totalImages - Общее количество изображений.
 */

const INITCookingTools = () => {

    const folderPath = '../Pdf/tools'; // Укажите путь к вашей папке
    const totalImages = 13; // Укажите количество изображений в папке

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadImages = () => {
            const loadedImages = [];

            for (let i = 1; i <= totalImages; i++) {
                try {
                    // Динамическая загрузка изображений с помощью require
                    const image = require(`${folderPath}/${i}.jpg`);
                    loadedImages.push(image);
                } catch (error) {
                    console.error(`Не удалось загрузить изображение: ${folderPath}/${i}.jpg`, error);
                }
            }

            setImages(loadedImages);
            setIsLoading(false);
        };

        loadImages();
    }, [folderPath, totalImages]);

    if (isLoading) {
        return (
            <div style={{ textAlign: 'center' }}>
                <p>Загрузка изображений...</p>
            </div>
        );
    }

    if (images.length === 0) {
        return (
            <div style={{textAlign: 'center'}}>
                <p>Изображения не найдены в указанной папке.</p>
            </div>
        );
    }

    return (
        <div>
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src.default || src}
                    alt={`Изображение ${index + 1}`}
                    style={{width: '100%', marginBottom: '10px', display: 'block'}}
                />
            ))}
        </div>
    );
};

export default INITCookingTools;