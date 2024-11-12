import React from 'react';
import {Title} from "@telegram-apps/telegram-ui";
import INITDivider from "../../../CustomComponents/Dividers/Divider";

// Define the total number of pages in the guide
const totalPages = 12; // Set this to the actual number of images in your folder

// Generate an array of image paths based on the total page count
const guideImages = Array.from({length: totalPages}, (_, index) => {
    return require(`./Images/Guide_1_page_${index + 1}.jpg`);
});

const containerStyle = {
    width: "100%",       // Занимает всю возможную ширину
    height: "300px",     // Фиксированная высота; можно изменить при необходимости
    overflow: "hidden",  // Обрезает изображение, чтобы соответствовать контейнеру
    position: "relative",
    borderRadius: '16px',
    marginTop: '5%',
};

const imageStyle = {
    width: "100%",
    height: "100%",
    // objectFit: "cover",  // Масштабирует изображение, сохраняя пропорции, заполняя контейнер
    position: "absolute",
    top: 0,
    left: 0,
};

const INITGuide_1_PDF = ({imageSrc, title}) => {
    return (
        <div>
            <div style={containerStyle}>
                <img
                    src={imageSrc}
                    alt="Background"
                    style={imageStyle}
                />
            </div>

            <Title level="1" weight="bold">
                {title}
            </Title>

            <INITDivider color='transparent' thickness="20%"/>

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