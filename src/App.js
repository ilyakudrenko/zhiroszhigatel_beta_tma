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
import ProTrainingPlanNavigation from "./INIT-projects/Zhiroszhigatel/TrainingPlans/ProTrainingPlanNavigation";
import TrainingProgram from "./INIT-projects/Zhiroszhigatel/TrainingPlans/TrainingCategories/TrainingProgram";

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
                    <Route path="/rations" element={<MealPlanTasting />} />
                    <Route path="/mealnavigation" element={<MealPlanNavigation />} />
                    <Route path="/cookingLesson" element={<CookingLesson />} />
                    {/*<Route path="/rations" element={<RationsDays />} />*/}
                    {/*test*/}
                    <Route path="/test" element={<INITCookingTools />} />

                    {/*Training Plans.*/}
                    <Route path="/trainingnavigation" element={<TrainingPlanNavigation />} />
                    <Route path="/protrainingnavigation" element={<ProTrainingPlanNavigation />} />
                    <Route path="/basictrainingprogram" element={<TrainingProgram />} />


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
                    <Route path="/rations" element={<MealPlanTasting />} />
                    <Route path="/mealnavigation" element={<MealPlanNavigation />} />
                    <Route path="/cookingLesson" element={<CookingLesson />} />
                    {/*<Route path="/rations" element={<RationsDays />} />*/}
                    {/*test*/}
                    <Route path="/test" element={<INITCookingTools />} />

                    {/*Training Plans.*/}
                    <Route path="/trainingnavigation" element={<TrainingPlanNavigation />} />
                    <Route path="/protrainingnavigation" element={<ProTrainingPlanNavigation />} />
                    <Route path="/basictrainingprogram" element={<TrainingProgram />} />

                </Routes>
        )
    );
};

export default App;
