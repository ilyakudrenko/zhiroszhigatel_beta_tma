import React from 'react';
import {Placeholder} from "@telegram-apps/telegram-ui";

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
    // Загружаем изображения, если не найдено, добавляем `null`
    const guideImages = Array.from({ length: totalPages }, (_, index) => {
        try {
            return require(`./${guideKey}/Images/${index + 1}.jpg`);
        } catch (error) {
            console.error(`Файл не найден: ./Images/${guideKey}/Guide_page_${index + 1}.jpg`, error);
            return null;
        }
    }).filter(src => src !== null); // Убираем `null` значения из массива

    // Если ни одного изображения не найдено, показываем сообщение об ошибке
    if (guideImages.length === 0) {
        return (
            <div className="HIJtihMA8FHczS02iWF5">
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
            </div>
        );
    }

    // Отображаем изображения, если они найдены
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