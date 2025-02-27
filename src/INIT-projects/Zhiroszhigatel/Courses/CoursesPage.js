import React, {useEffect, useState} from "react";
import '@telegram-apps/telegram-ui/dist/styles.css';
import {AppRoot, Avatar, Blockquote, Button, Caption, Cell, Section, Spinner} from "@telegram-apps/telegram-ui";
import INITBackButton from "../../../Hooks/BackButton";
import INITDivider from "../../CustomComponents/Dividers/Divider";
import fetchUserLibrary from "../../CustomComponents/userSessionJWT/fetchUserLibraryJWT";
import {HorizontalScroll} from "@telegram-apps/telegram-ui/dist/components/Service/HorizontalScroll/HorizontalScroll";
import INITCardsList from "../../CustomComponents/ScrollItemsSections/CardList";
import {useNavigate} from "react-router-dom";
import useUserSession from "../../CustomComponents/userSessionJWT/sessionJWT";
import mealsData from "../MealPlans/MealPlans.json";
import fetchUserMealPlanJWT from "../../CustomComponents/userSessionJWT/fetchUserMealPlanJWT";
import fetchUserTrainingPlanJWT from "../../CustomComponents/userSessionJWT/fetchUserTrainingPlanJWT";

const handleClickHaptic = (effect = 'light') => {
    window.Telegram.WebApp.HapticFeedback.impactOccurred(effect);
};

const CoursesPage = () => {
    const {userSession, loading: sessionLoading} = useUserSession();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userLibrary, setUserLibrary] = useState([]); // State for user's guides
    const [mealPlan, setMealPlan] = useState(null); // State for user's meal plan
    const [userTrainingPlans, setUserTrainingPlans] = useState([]); // State for user's training plans


    INITBackButton(); // Back button for the profile

    useEffect(() => {
        if (sessionLoading) {
            console.log("🔷 Waiting for session to load...");
            return;
        }

        console.log("🔹 Checking userSessionJWT:", userSession); // Debugging log

        if (!userSession || !userSession.token) {
            console.error("❌ No valid session found, aborting fetch.");
            setError("User not authenticated");
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            try {
                console.log("✅ Fetching user library with token:", userSession.token);
                const library = await fetchUserLibrary(userSession.token);
                setUserLibrary(library);

                const mealPlanData = await fetchUserMealPlanJWT(userSession.token); // Fetch user meal plan
                setMealPlan(mealPlanData?.[0]); // Assuming it returns an array, use the first meal plan

                const trainingPlans = await fetchUserTrainingPlanJWT(userSession.token); // Fetch user training plans
                setUserTrainingPlans(trainingPlans);
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
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "50vh",
                    }}
                >
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
            {/* Meal Plan Section */}
            <INITDivider color="transparent" thickness="10%"/>

            {/*<Caption*/}
            {/*    caps*/}
            {/*    level="1"*/}
            {/*    weight="3"*/}
            {/*    style={{margin: '5%'}}*/}
            {/*>*/}
            {/*    Ваш план питания*/}
            {/*</Caption>*/}

            {/*<INITDivider color="transparent" thickness="10%" />*/}


            {mealPlan ? (
                <HorizontalScroll
                    onClick={() =>
                        handleClickHaptic('light')
                    }
                >
                    <INITCardsList
                        items={mealsData}
                        userOwnedMealPlan={!!mealPlan} // Pass ownership status
                        navigateToMealPlan={() => navigate('/mealnavigation')} // Pass redirection function
                    />
                </HorizontalScroll>
            ) : (
                <div>
                    <Blockquote type="text">
                        <p>В вашей библиотеке пока нету плана питания.</p>
                        <p>Вы можете добавить их из главного меню.</p>
                        <Button
                            mode="filled"
                            size="s"
                            onClick={() => navigate("/")}
                        >
                            в главное меню
                        </Button>
                    </Blockquote>
                </div>
            )}

            <INITDivider color="transparent" thickness="10%"/>

            {/* Training Plans Section */}

            {userTrainingPlans.length > 0 ? (
                <HorizontalScroll>
                    <INITCardsList
                        items={userTrainingPlans}
                        userOwnedTrainingPlans={userTrainingPlans} // Pass training plans
                    />
                </HorizontalScroll>
            ) : (
                <div>
                    <Blockquote type="text">
                        <p>В вашей библиотеке пока нету тренировок.</p>
                        <p>Вы можете добавить их из главного меню.</p>
                        <Button mode="filled" size="s" onClick={() => navigate("/")}>
                            в главное меню
                        </Button>
                    </Blockquote>
                </div>
            )}

            <INITDivider color="transparent" thickness="10%"/>
        </AppRoot>
    );
};

export default CoursesPage;