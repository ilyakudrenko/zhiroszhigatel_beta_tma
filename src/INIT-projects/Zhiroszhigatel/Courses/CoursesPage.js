import React, {useEffect, useState} from "react";
import '@telegram-apps/telegram-ui/dist/styles.css';
import {AppRoot, Spinner, Caption} from "@telegram-apps/telegram-ui";
import {HorizontalScroll} from "@telegram-apps/telegram-ui/dist/components/Service/HorizontalScroll/HorizontalScroll";
import INITBackButton from "../../../Hooks/BackButton";
import INITDivider from "../../CustomComponents/Dividers/Divider";
import fetchUserLibrary from "../../CustomComponents/userSessionJWT/fetchUserLibraryJWT";
import {useNavigate} from "react-router-dom";
import useUserSession from "../../CustomComponents/userSessionJWT/sessionJWT";
import mealsData from "../MealPlans/MealPlans.json";
import fetchUserMealPlanJWT from "../../CustomComponents/userSessionJWT/fetchUserMealPlanJWT";
import fetchUserTrainingPlanJWT from "../../CustomComponents/userSessionJWT/fetchUserTrainingPlanJWT";
import fetchAllTrainingPlansJWT from "../../CustomComponents/userSessionJWT/fetchAllTrainingPlansJWT";
import INITCardsList from "../../CustomComponents/ScrollItemsSections/CardList";

const CoursesPage = () => {
    const {userSession, loading: sessionLoading} = useUserSession();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [mealPlan, setMealPlan] = useState(null);
    const [userTrainingPlans, setUserTrainingPlans] = useState([]);
    const [trainingPlans, setTrainingPlans] = useState([]);

    INITBackButton();

    useEffect(() => {
        if (sessionLoading) {
            console.log("🔷 Waiting for session to load...");
            return;
        }

        if (!userSession || !userSession.token) {
            console.error("❌ No valid session found, aborting fetch.");
            setError("User not authenticated");
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            try {
                const mealPlanData = await fetchUserMealPlanJWT(userSession.token);
                setMealPlan(mealPlanData?.[0]);

                const trainingPlansData = await fetchAllTrainingPlansJWT();
                setTrainingPlans(trainingPlansData);

                const userTrainings = await fetchUserTrainingPlanJWT(userSession.token);
                setUserTrainingPlans(userTrainings || []);
            } catch (err) {
                console.error("❌ Failed to retrieve data:", err);
                setError("Failed to initialize session or fetch data.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [userSession, sessionLoading]);

    if (loading)
        return (
            <AppRoot>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "50vh"}}>
                    <Spinner size="l"/>
                </div>
            </AppRoot>
        );

    if (error) {
        return (
            <AppRoot>
                <div style={{color: "red"}}>{error}</div>
            </AppRoot>
        );
    }

    return (
        <AppRoot>
            <Caption caps level="1" weight="3" style={{margin: '5%'}}>Питание</Caption>
            <HorizontalScroll>
                <INITCardsList
                    items={mealsData}
                    userOwnedMealPlan={!!mealPlan}
                    navigateToMealPlan={() => navigate('/mealnavigation')}
                />
            </HorizontalScroll>
            <INITDivider color='transparent' thickness="10%"/>
            <Caption caps level="1" weight="3" style={{margin: '5%'}}>Тренировочные планы</Caption>
            <HorizontalScroll>
                <INITCardsList
                    items={trainingPlans}
                    userOwnedTrainingPlans={userTrainingPlans}
                />
            </HorizontalScroll>
        </AppRoot>
    );
};

export default CoursesPage;
