import '@telegram-apps/telegram-ui/dist/styles.css';
import {AppRoot, Button, Caption, Cell, Section, Spinner,} from '@telegram-apps/telegram-ui';
import React, {useEffect, useState} from "react";
import {Icon24ChevronRight} from "@telegram-apps/telegram-ui/dist/icons/24/chevron_right";
import {HorizontalScroll} from "@telegram-apps/telegram-ui/dist/components/Service/HorizontalScroll/HorizontalScroll";
import INITCardsList from "../CustomComponents/ScrollItemsSections/CardList";
import INITDivider from "../CustomComponents/Dividers/Divider";
import INITMessageBadgeIcon from "../CustomComponents/Icons/MessageBadgeIcon";
import INITProfileIcon from "../CustomComponents/Icons/ProfileIcon";
import mealsData from "../Zhiroszhigatel/MealPlans/MealPlans.json"
import {useNavigate} from "react-router-dom";
import INITBanner from "../CustomComponents/Banner/Banner";
// import {startSession} from "../CustomComponents/UserSession/session";
import fetchUserMealPlanJWT from "../CustomComponents/userSessionJWT/fetchUserMealPlanJWT";
import fetchAllTrainingPlansJWT from "../CustomComponents/userSessionJWT/fetchAllTrainingPlansJWT";
import fetchUserTrainingPlanJWT from "../CustomComponents/userSessionJWT/fetchUserTrainingPlanJWT";
import useUserSession from "../CustomComponents/userSessionJWT/sessionJWT";
import fetchAllGuidesJWT from "../CustomComponents/userSessionJWT/fetchAllGuidesJWT";



const roundedCellStyle = {
    borderRadius: '16px',
    overflow: 'hidden', // Ensures rounded corners display properly
    backgroundColor: 'var(--tgui--secondary_bg_color)',
};

const handleClickHaptic = (effect = 'light') => {
    window.Telegram.WebApp.HapticFeedback.impactOccurred(effect);
}

const handleClick = () => {
    alert("Button clicked!");
};

const HomePage = () => {
    const {userSession, loading: sessionLoading} = useUserSession(); // JWT Session
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [freeGuides, setFreeGuides] = useState(null);
    const [mealPlan, setMealPlan] = useState(null);
    const [trainingPlans, setTrainingPlans] = useState([]);
    const [userTrainingPlans, setUserTrainingPlans] = useState([]); // Храним список всех купленных планов
    const [textColor, setTextColor] = useState("#FFFFFF");


    useEffect(() => {
        const initialize = async () => {
            if (sessionLoading) {
                console.log("🔷Waiting for session load🔷");
                return;
            }
            if (!userSession || !userSession.token) {
                console.error("❌ No valid session found, aborting fetch.");
                setError("User not authenticated");
                setLoading(false);
                return;
            }
            try {
                // await startSession(); // Start the session
                console.log("🔷Initializing🔷");
                console.log("🔷 Old session 🔷")


                console.log("🔷 JWT Token Available:", userSession.token);
                console.log("🔷JWT session info🔷", userSession);
                console.log("🔷JWT done🔷");


                const guides = await fetchAllGuidesJWT(userSession.token);
                setFreeGuides(guides || []);
                console.log("🔷Guides logged🔷", guides);
                // Fetch user's meal plan
                const userMealPlan = await fetchUserMealPlanJWT(userSession.token);
                setMealPlan(userMealPlan?.[0]);
                console.log("🔷MealPlan logged🔷", userMealPlan);
                // Fetch training plans
                const plans = await fetchAllTrainingPlansJWT();
                setTrainingPlans(plans);
                console.log("🔷Plans logged🔷", plans);

                // Получаем все планы тренировок пользователя
                const userTrainings = await fetchUserTrainingPlanJWT(userSession.token);
                setUserTrainingPlans(userTrainings || []); // Если нет данных, передаем пустой массив
                console.log("🔷UserTraining  logged🔷", userTrainings);
                setLoading(false);   // End loading after session starts
                console.log("🔷Loading ended🔷");
            } catch (err) {
                setError("Failed to initialize session.");
            }
        };

        if (!sessionLoading) {
            initialize();
        }


        if (window.Telegram?.WebApp?.themeParams?.text_color) {
            setTextColor(window.Telegram.WebApp.themeParams.text_color);
        }

    }, [sessionLoading, userSession]);

    if (loading)
        return (
            <AppRoot>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "50vh", // Full viewport height to center vertically
                    }}
                >
                    <div style={{textAlign: "center"}}>
                        <Spinner size="l"/>
                        {" "}
                        <br/>
                    </div>
                </div>
            </AppRoot>
        );


    if (error) {
        return <AppRoot style={{color: "red"}}>{error}</AppRoot>;
    }


    return (
        <AppRoot
            // style={{
            //     backgroundColor: 'var(--tgui--secondary_bg_color)',
            // }}
        >
            {/*<INITHelp />*/}
            {/*<p>Welcome {userSession.token}</p>*/}
            <Section
            >
                <Cell
                    after={<Icon24ChevronRight/>}
                    before={<INITProfileIcon color={textColor}/>}
                    onClick={() => {
                        handleClickHaptic('light');
                        navigate("/profile")
                    }}
                >
                    Профиль
                </Cell>
                <Cell
                    after={<Icon24ChevronRight/>}
                    before={<INITMessageBadgeIcon color={textColor}/>}
                    onClick={() => {
                        handleClickHaptic('light');
                        navigate("/support")
                    }}
                >
                    Задать вопрос
                </Cell>
                <Cell
                    after={<Icon24ChevronRight/>}
                    before={<INITMessageBadgeIcon color={textColor}/>}
                    onClick={() => {
                        handleClickHaptic('light');
                        navigate("/courses")
                    }}
                >
                    Курсы
                </Cell>
            </Section>

            <INITDivider color='transparent' thickness="10%"/>

            {/*Free Guides*/}
            <Caption
                caps
                level="1"
                weight="1"
                style={{
                    marginLeft: '5%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'  
                }}
                // after={
                //     <Button
                //         onClick={() =>
                //             navigate("/allguides")
                //         }
                //     >See All</Button>
                // }
            >
                <span>Бесплатные Гайды</span>
                <Button
                    onClick={() => navigate("/allguides", {state: {guides: freeGuides}})}
                    mode="plain"
                    size="s"
                >
                    Посмотреть Все
                </Button>
            </Caption>
            <HorizontalScroll
                onClick={() =>
                    handleClickHaptic('light')
                }
            >
                <INITCardsList items={freeGuides}/>
            </HorizontalScroll>

            <INITDivider color='transparent' thickness="10%"/>

            {/*Some banner for sales*/}
            <INITBanner
                imageSrc="https://raw.githubusercontent.com/ilyakudrenko/zhiroszhigatel_beta_tma/refs/heads/main/src/INIT-projects/HomePage/Images/expanded_more_to_left.jpeg"
                header="Поддержим доктора!!!"
                description="Первый участник реалити ТелоСтройки - педиатр из Красноярска!"
                infoLink="https://youtu.be/outo5bwayKI?si=P-8LeHDNGTjLq3RF"
            />
            <INITDivider color='transparent' thickness="10%"/>
            <INITBanner
                imageSrc="https://raw.githubusercontent.com/ilyakudrenko/zhiroszhigatel_beta_tma/refs/heads/main/src/INIT-projects/HomePage/Images/expanded_more_to_left.jpeg"
                header="Поддержим доктора!!!"
                description="Первый участник реалити ТелоСтройки - педиатр из Красноярска!"
                infoLink="https://youtu.be/outo5bwayKI?si=P-8LeHDNGTjLq3RF"
            />

            {/*Mealplans*/}

            {/*<INITDivider color='transparent' thickness="10%"/>*/}

            {/*<Caption*/}
            {/*    caps*/}
            {/*    level="1"*/}
            {/*    weight="3"*/}
            {/*    style={{margin: '5%'}}*/}
            {/*>*/}
            {/*    Питание*/}
            {/*</Caption>*/}
            {/*<HorizontalScroll*/}
            {/*    onClick={() =>*/}
            {/*        handleClickHaptic('light')*/}
            {/*    }*/}
            {/*>*/}
            {/*    <INITCardsList*/}
            {/*        items={mealsData}*/}
            {/*        userOwnedMealPlan={!!mealPlan} // Pass ownership status*/}
            {/*        navigateToMealPlan={() => navigate('/mealnavigation')} // Pass redirection function*/}
            {/*    />*/}
            {/*</HorizontalScroll>*/}

            {/*/!*Training Plans*!/*/}
            {/*<INITDivider color='transparent' thickness="10%"/>*/}
            {/*<Caption*/}
            {/*    caps*/}
            {/*    level="1"*/}
            {/*    weight="3"*/}
            {/*    style={{margin: '5%'}}*/}
            {/*>*/}
            {/*    Тренировочные планы*/}
            {/*</Caption>*/}
            {/*<HorizontalScroll*/}
            {/*    onClick={() =>*/}
            {/*        handleClickHaptic('light')*/}
            {/*    }*/}
            {/*>*/}
            {/*    <INITCardsList*/}
            {/*        items={trainingPlans} // Массив тренировочных планов*/}
            {/*        userOwnedTrainingPlans={userTrainingPlans} // Передаем массив купленных планов*/}
            {/*        // navigateToTrainingPlan={() => navigate('/mealnavigation')} // Логика редиректа*/}
            {/*    />*/}
            {/*</HorizontalScroll>*/}

            <INITDivider color='transparent' thickness="10%"/>

        </AppRoot>
    );
};

export default HomePage;
