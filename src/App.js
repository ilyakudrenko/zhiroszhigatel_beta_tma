import '@telegram-apps/telegram-ui/dist/styles.css';
import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import HomePage from "./INIT-projects/HomePage/HomePage";
import ItemCoursePromo from "./INIT-projects/Zhiroszhigatel/ItemCourse/ItemCoursePromo";
import Support from "./INIT-projects/Zhiroszhigatel/Support/Support";


const App = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        isHomePage ? (

                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/item" element={<ItemCoursePromo />} />
                    <Route path="/support" element={<Support />} />
                </Routes>

        ) : (
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/item" element={<ItemCoursePromo />} />
                    <Route path="/support" element={<Support />} />
                </Routes>
        )
    );
};

export default App;
