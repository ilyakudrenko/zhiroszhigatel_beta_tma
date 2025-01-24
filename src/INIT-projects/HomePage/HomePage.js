import '@telegram-apps/telegram-ui/dist/styles.css';
import {
    AppRoot,
    Caption,
    Cell,
    Section, Spinner,
} from '@telegram-apps/telegram-ui';
import React, {useEffect, useState} from "react";
import {Icon24ChevronRight} from "@telegram-apps/telegram-ui/dist/icons/24/chevron_right";
import {HorizontalScroll} from "@telegram-apps/telegram-ui/dist/components/Service/HorizontalScroll/HorizontalScroll";
import INITCardsList from "../CustomComponents/ScrollItemsSections/CardList";
import INITDivider from "../CustomComponents/Dividers/Divider";
import INITMessageBadgeIcon from "../CustomComponents/Icons/MessageBadgeIcon";
import INITProfileIcon from "../CustomComponents/Icons/ProfileIcon";
import guidesData from "../Zhiroszhigatel/CustomGuides/Guides_JSON/Guides.json";
import mealsData from "../Zhiroszhigatel/MealPlans/MealPlans.json"
import {useNavigate} from "react-router-dom";
import INITBanner from "../CustomComponents/Banner/Banner";
// import {startSession} from "../CustomComponents/UserSession/session";
import fetchAllGuides from "../CustomComponents/UserSession/fetchAllGuides";
import TestConnection from "../Zhiroszhigatel/TestPages/testPage";
import {initializeUserSession} from "../CustomComponents/UserSession/session";
import fetchUserMealPlan from "../CustomComponents/UserSession/fetchUserMealPlan";
import fetchAllTrainingPlans from "../CustomComponents/UserSession/fetchAllTrainingPlans";

const roundedCellStyle = {
    borderRadius: '16px',
    overflow: 'hidden', // Ensures rounded corners display properly
    backgroundColor: 'var(--tgui--secondary_bg_color)',
};

const handleClickHaptic = (effect = 'light') =>{
    window.Telegram.WebApp.HapticFeedback.impactOccurred(effect);
}

const handleClick = () => {
    alert("Button clicked!");
};

const HomePage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [freeGuides, setFreeGuides] = useState(null);
    const [mealPlan, setMealPlan] = useState(null);
    const [trainingPlans, setTrainingPlans] = useState([]);


    useEffect(() => {
        const initialize = async () => {
            try {
                // await startSession(); // Start the session
                await initializeUserSession();
                const guides = await fetchAllGuides();
                setFreeGuides(guides);

                // Fetch user's meal plan
                const userMealPlan = await fetchUserMealPlan();
                setMealPlan(userMealPlan?.[0]);

                // Fetch training plans
                const plans = await fetchAllTrainingPlans();
                setTrainingPlans(plans);

                setLoading(false);   // End loading after session starts

            } catch (err) {
                setError("Failed to initialize session.");
            }
        };

        initialize();
    }, []);

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
                    <div style={{ textAlign: "center" }}>
                        <Spinner size="l" />
                        {" "}
                        <br />
                    </div>
                </div>
            </AppRoot>
        );


    if (error) {
        return <AppRoot style={{ color: "red" }}>{error}</AppRoot>;
    }


    return (
        <AppRoot
            style={{
                backgroundColor: 'var(--tgui--secondary_bg_color)'
            }}
        >
            {/*<INITHelp />*/}
                <Section
                >
                    <Cell
                        after={<Icon24ChevronRight/>}
                        before={<INITProfileIcon/>}
                        onClick={() => {
                            handleClickHaptic('light');
                            navigate("/profile")}}
                    >
                        Профиль
                    </Cell>
                    <Cell
                        after={<Icon24ChevronRight/>}
                        before={<INITMessageBadgeIcon color="white"/>}
                        onClick={() => {
                            handleClickHaptic('light');
                            navigate("/support")}}
                    >
                        Задать вопрос
                    </Cell>
                </Section>

            {/*Some banner for sales*/}
            <INITDivider color='transparent' thickness="10%"/>

            <INITBanner />

            {/*Free Guides*/}

            <INITDivider color='transparent' thickness="10%"/>
                <Caption
                    caps
                    level="1"
                    weight="3"
                    style={{margin: '5%'}}
                >
                    Гайды
                </Caption>
                <HorizontalScroll
                    onClick={() =>
                        handleClickHaptic('light')
                    }
                >
                    <INITCardsList items={freeGuides}/>
                </HorizontalScroll>

            {/*Mealplans*/}

            <INITDivider color='transparent' thickness="10%"/>
                <Caption
                    caps
                    level="1"
                    weight="3"
                    style={{margin: '5%'}}
                >
                    Питание
                </Caption>
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

            {/*Training Plans*/}
            <INITDivider color='transparent' thickness="10%"/>
                <Caption
                    caps
                    level="1"
                    weight="3"
                    style={{margin: '5%'}}
                >
                    Тренировочные планы
                </Caption>
                <HorizontalScroll
                    onClick={() =>
                        handleClickHaptic('light')
                        }
                >
                    <INITCardsList
                        items={trainingPlans} // Массив тренировочных планов
                        navigateToTrainingPlan={() => navigate('/mealnavigation')} // Логика редиректа
                    />
                </HorizontalScroll>
        </AppRoot>
    );
};

export default HomePage;
