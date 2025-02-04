import '@telegram-apps/telegram-ui/dist/styles.css';
import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import HomePage from "./INIT-projects/HomePage/HomePage";
import ItemCoursePromo from "./INIT-projects/Zhiroszhigatel/ItemCourse/ItemCoursePromo";
import Support from "./INIT-projects/Zhiroszhigatel/Support/Support";
import Profile from "./INIT-projects/Zhiroszhigatel/Profile/Profile";
import HomePage_StablVersion from "./INIT-projects/HomePage/HomePage_StablVersion";
import Calculator from "./INIT-projects/Zhiroszhigatel/MealPlans/calculator/Calculator";
import TestPage from "./INIT-projects/Zhiroszhigatel/TestPages/testPage";
import TestConnection from "./INIT-projects/Zhiroszhigatel/TestPages/testPage";
import RationsDays from "./INIT-projects/Zhiroszhigatel/MealPlans/RationsDays";
import MealPlanTasting from "./INIT-projects/Zhiroszhigatel/TestPages/MealPlanTasting";
import MealPlanNavigation from "./INIT-projects/Zhiroszhigatel/MealPlans/MealPlanNavigation";
import CookingLesson from "./INIT-projects/Zhiroszhigatel/MealPlans/MealsCategories/CookingLesson";
import INITCookingTools from "./INIT-projects/Zhiroszhigatel/MealPlans/MealsCategories/CookingTools";
import TrainingPlanNavigation from "./INIT-projects/Zhiroszhigatel/TrainingPlans/TrainingPlanNavigation";
import TrainingProgram from "./INIT-projects/Zhiroszhigatel/TrainingPlans/TrainingCategories/TrainingProgram";
import TrainingPlanTest from "./INIT-projects/Zhiroszhigatel/TestPages/TrainingPlanTest";
import ColorTestPage from "./INIT-projects/Zhiroszhigatel/TestPages/colorTesting";
import GymLessons from "./INIT-projects/Zhiroszhigatel/TrainingPlans/TrainingCategories/GymLessons";
import TrainingPlanTesting from "./INIT-projects/Zhiroszhigatel/TestPages/TrainingPlanTesting";
import CookieTest from "./INIT-projects/Zhiroszhigatel/TestPages/cookieTest";

const App = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        isHomePage ? (
                <Routes>
                    {/*<Route path="/" element={<TestPage />} />*/}
                    {/*<Route path="/" element={<Calculator />} />*/}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/item" element={<ItemCoursePromo />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/calculator" element={<Calculator />} />


                    //Meal Plans.
                    <Route path="/rations" element={<RationsDays />} />
                    <Route path="/mealnavigation" element={<MealPlanNavigation />} />
                    <Route path="/cookingLesson" element={<CookingLesson />} />
                    {/*<Route path="/rations" element={<RationsDays />} />*/}
                    {/*test*/}
                    <Route path="/coocingtools" element={<INITCookingTools />} />

                    {/*Training Plans.*/}
                    <Route path="/trainingnavigation" element={<TrainingPlanNavigation />} />
                    <Route path="/trainingprogram" element={<TrainingProgram />} />
                    <Route path="/gymlessons" element={<GymLessons />} />


                    //Testing Page
                    {/*<Route path="/testingPage" element={<TrainingPlanTest />} />*/}

                </Routes>

        ) : (
                <Routes>
                    {/*<Route path="/" element={<TestPage />} />*/}
                    {/*<Route path="/" element={<Calculator />} />*/}
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/item" element={<ItemCoursePromo />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/calculator" element={<Calculator />} />

                    //Meal Plans.
                    <Route path="/rations" element={<RationsDays />} />
                    <Route path="/mealnavigation" element={<MealPlanNavigation />} />
                    <Route path="/cookingLesson" element={<CookingLesson />} />
                    {/*<Route path="/rations" element={<RationsDays />} />*/}
                    {/*test*/}
                    <Route path="/coocingtools" element={<INITCookingTools />} />
                    {/*<Route path="/rations" element={<MealPlanTasting />} />*/}

                    {/*Training Plans.*/}
                    <Route path="/trainingnavigation" element={<TrainingPlanNavigation />} />
                    <Route path="/trainingprogram" element={<TrainingProgram />} />
                    <Route path="/gymlessons" element={<GymLessons />} />


                    {/*<Route path="/testingPage" element={<TrainingPlanTest trainingPlanId='a0102070-d847-11ef-bfbf-a2aa7cf0e641' />} />*/}
                    {/*<Route path="/testingPage" element={<TrainingPlanTesting />} />*/}
                    <Route path="/testingPage" element={<CookieTest />} />
                </Routes>
        )
    );
};

export default App;
