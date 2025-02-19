import React, {useEffect, useState} from 'react';
// import {AppRoot, Button, Cell, List, Section, Title} from "@telegram-apps/telegram-ui";
import '@telegram-apps/telegram-ui/dist/styles.css';
// import toolsPdf from "../Pdf/recipes/1.jpg";


const INITRecipes = () => {

    const totalImages = 26; // Укажите количество изображений в папке

    const [toolImages, settoolImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadImages = async () => {
            const images = [];

            for (let i = 1; i <= totalImages; i++) {
                try {
                    const image = require(`../Pdf/recipes/${i}.jpg`);
                    images.push(image);
                } catch (error) {
                    console.error(`File not found: ../Pdf/recipes/${i}.jpg`, error);
                }
            }

            settoolImages(images);
            setIsLoading(false);
        };

        loadImages();
    }, [totalImages]);

    if (isLoading) {
        return (
            <div style={{textAlign: 'center'}}>
                <p>Загрузка изображений...</p>
            </div>
        );
    }

    if (toolImages.length === 0) {
        return (
            <div style={{textAlign: 'center'}}>
                <p>Изображения не найдены в указанной папке.</p>
            </div>
        );
    }

    return (
        <div>
            {toolImages.map((src, index) => (
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

export default INITRecipes;