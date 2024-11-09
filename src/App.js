import '@telegram-apps/telegram-ui/dist/styles.css';
import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import HomePage from "./INIT-projects/HomePage/HomePage";
import ItemCoursePromo from "./INIT-projects/Zhiroszhigatel/ItemCourse/ItemCoursePromo";

const data = [
    {
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/32/20190616154621%21Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg',
        title: 'Los Angeles',
        description: 'United States',
        cardChip: 'Пупсик',
    },
    {
        imageSrc: 'https://i.imgur.com/892vhef.jpeg',
        title: 'New York',
        description: 'United States',
        cardChip: 'Hot place',
    },
    {
        imageSrc: 'https://i.imgur.com/892vhef.jpeg',
        title: 'New York',
        description: 'United States',
        cardChip: 'Hot place',
    },
    {
        imageSrc: 'https://i.imgur.com/892vhef.jpeg',
        title: 'New York',
        description: 'United States',
        cardChip: 'Hot place',
    },
    {
        imageSrc: 'https://i.imgur.com/892vhef.jpeg',
        title: 'New York',
        description: 'United States',
        cardChip: 'Hot place',
    },
    // Добавьте столько объектов, сколько вам нужно
];

const App = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        isHomePage ? (

                <Routes>
                    <Route path="/" element={<HomePage data={data} />} />
                    <Route path="/item" element={<ItemCoursePromo />} />
                </Routes>

        ) : (
                <Routes>
                    <Route path="/" element={<HomePage data={data} />} />
                    <Route path="/item" element={<ItemCoursePromo />} />
                </Routes>
        )
    );
};

export default App;
