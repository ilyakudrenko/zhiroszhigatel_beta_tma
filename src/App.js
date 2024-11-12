import '@telegram-apps/telegram-ui/dist/styles.css';
import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import HomePage from "./INIT-projects/HomePage/HomePage";
import ItemCoursePromo from "./INIT-projects/Zhiroszhigatel/ItemCourse/ItemCoursePromo";

const data = [
    {
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/32/20190616154621%21Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg',
        title: 'Гайд по продуктовой корзине',
        description: 'Гайд по продуктовой корзине(description)',
        cardChip: 'Пупсик',
        guideComponent: 'INITGuide_1_PDF'
    },
    {
        imageSrc: 'https://imgur.com/a/G0HsUNg',
        title: 'New York',
        description: 'United States',
        cardChip: 'Hot place',
        guideComponent: 'INITGuide_2_PDF'
    },
    {
        imageSrc: 'https://i.imgur.com/892vhef.jpeg',
        title: 'New York',
        description: 'United States',
        cardChip: 'Hot place',
        guideComponent: 'INITGuide_3_PDF'
    },
    {
        imageSrc: 'https://i.imgur.com/892vhef.jpeg',
        title: 'New York',
        description: 'United States',
        cardChip: 'Hot place',
        guideComponent: 'INITGuide_4_PDF'
    },
    {
        imageSrc: 'https://i.imgur.com/892vhef.jpeg',
        title: 'New York',
        description: 'United States',
        cardChip: 'Hot place',
        guideComponent: 'INITGuide_5_PDF'
    },
    // Добавьте столько объектов, сколько вам нужно
];
const data_1 = [
    {
        "imageSrc": "https://i.imgur.com/892vhef.jpeg",
        "title": "Гайд по продуктовой корзине",
        "description": "Description for guide 1.",
        "cardChip": "Guide",
        "guideKey": "Guide_1",
        "numPage": 12
    },
    {
        "imageSrc": "https://i.imgur.com/892vhef.jpeg",
        "title": "Мой список продуктов и блюд которые не скажутся на похудении",
        "description": "",
        "cardChip": "Guide",
        "guideKey": "Guide_2",
        "numPage": 10
    },
    {
        "imageSrc": "https://i.imgur.com/892vhef.jpeg",
        "title": "10 причин, почему не получается привести себя в форму",
        "description": "",
        "cardChip": "Guide",
        "guideKey": "Guide_3",
        "numPage": 13
    },
    {
        "imageSrc": "https://i.imgur.com/892vhef.jpeg",
        "title": "Гайд по спортивному питанию",
        "description": "",
        "cardChip": "Guide",
        "guideKey": "Guide_4",
        "numPage": 28
    },
    {
        "imageSrc": "https://i.imgur.com/892vhef.jpeg",
        "title": "Пошаговый план похудения",
        "description": "",
        "cardChip": "Guide",
        "guideKey": "Guide_5",
        "numPage": 11
    },
    {
        "imageSrc": "https://i.imgur.com/892vhef.jpeg",
        "title": "Руководство по подсчету калорийности и составу пищи",
        "description": "",
        "cardChip": "Guide",
        "guideKey": "Guide_6",
        "numPage": 17
    },
    {
        "imageSrc": "https://i.imgur.com/892vhef.jpeg",
        "title": "6 причин почему ты не в дефиците калорий",
        "description": "",
        "cardChip": "Guide",
        "guideKey": "Guide_7",
        "numPage": 8
    },
    {
        "imageSrc": "https://i.imgur.com/892vhef.jpeg",
        "title": "10 мифов о похудении",
        "description": "",
        "cardChip": "Guide",
        "guideKey": "Guide_8",
        "numPage": 21
    },
    {
        "imageSrc": "https://i.imgur.com/892vhef.jpeg",
        "title": "10 мифов о похудении 2.0",
        "description": "",
        "cardChip": "Guide",
        "guideKey": "Guide_9",
        "numPage": 13
    },
    {
        "imageSrc": "https://i.imgur.com/892vhef.jpeg",
        "title": "Алкоголь и похудение",
        "description": "",
        "cardChip": "Guide",
        "guideKey": "Guide_10",
        "numPage": 22
    },
    {
        "imageSrc": "https://i.imgur.com/892vhef.jpeg",
        "title": "7 лайфхаков для похудения",
        "description": "",
        "cardChip": "Guide",
        "guideKey": "Guide_11",
        "numPage": 10
    }
]

const App = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        isHomePage ? (

                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/item" element={<ItemCoursePromo />} />
                </Routes>

        ) : (
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/item" element={<ItemCoursePromo />} />
                </Routes>
        )
    );
};

export default App;
