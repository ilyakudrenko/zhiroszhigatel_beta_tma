import '@telegram-apps/telegram-ui/dist/styles.css';
import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import HomePage from "./INIT-projects/HomePage/HomePage";
import ItemCoursePromo from "./INIT-projects/Zhiroszhigatel/ItemCourse/ItemCoursePromo";


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
