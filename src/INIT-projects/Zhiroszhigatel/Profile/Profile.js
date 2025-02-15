import React, { useEffect, useState } from "react";
import '@telegram-apps/telegram-ui/dist/styles.css';
import {
    AppRoot,
    Avatar,
    Blockquote,
    Button,
    ButtonCell,
    Caption,
    Cell,
    Section
} from "@telegram-apps/telegram-ui";
import INITBackButton from "../../../Hooks/BackButton";
import { Spinner } from "@telegram-apps/telegram-ui";
import {getSession} from "../../CustomComponents/UserSession/session";
import INITDivider from "../../CustomComponents/Dividers/Divider";
import fetchUserLibrary from "../../CustomComponents/userSessionJWT/fetchUserLibraryJWT";
import {HorizontalScroll} from "@telegram-apps/telegram-ui/dist/components/Service/HorizontalScroll/HorizontalScroll";
import INITCardsList from "../../CustomComponents/ScrollItemsSections/CardList";
import {useNavigate} from "react-router-dom";
import {Icon28AddCircle} from "@telegram-apps/telegram-ui/dist/icons/28/add_circle";
import {Icon32ProfileColoredSquare} from "@telegram-apps/telegram-ui/dist/icons/32/profile_colored_square";
import fetchUserMealPlan from "../../CustomComponents/UserSession/fetchUserMealPlan";
import mealsData from "../MealPlans/MealPlans.json";
import fetchUserTrainingPlan from "../../CustomComponents/UserSession/fetchUserTrainingPlan";
import useUserSession from "../../CustomComponents/userSessionJWT/sessionJWT";


const handleClickHaptic = (effect = 'light') =>{
    window.Telegram.WebApp.HapticFeedback.impactOccurred(effect);
}

const Profile = () => {
    const {userSessionJWT, loading: sessionLoading} = useUserSession();
    const navigate = useNavigate();
    const [userSession, setUserSession] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userLibrary, setUserLibrary] = useState([]); // State for user's guides
    const [mealPlan, setMealPlan] = useState(null); // State for user's meal plan
    const [userTrainingPlans, setUserTrainingPlans] = useState([]); // State for user's training plans



    INITBackButton(); // Back button for the profile

    useEffect(() => {
        if(sessionLoading){
            console.log("🔷 Waiting for session to load...");
            return;
        }
        console.log("🔹 Checking userSessionJWT:", userSessionJWT); // Debugging log
        if(!userSessionJWT || !userSessionJWT.token){
            console.error("❌ No valid session found, aborting fetch.");
            setError("User not authenticated");
            setLoading(false);
            return;
        }
        const fetchData = async () => {

            try {
                const session = getSession(); // Retrieve session data
                setUserSession(session);

                const library = await fetchUserLibrary(userSessionJWT.token); // Fetch user library
                setUserLibrary(library);

                const mealPlanData = await fetchUserMealPlan(); // Fetch user meal plan
                setMealPlan(mealPlanData?.[0]); // Assuming it returns an array, use the first meal plan

                const trainingPlans = await fetchUserTrainingPlan(); // Fetch user training plans
                setUserTrainingPlans(trainingPlans);
            } catch (err) {
                console.error("Failed to retrieve data:", err);
                setError("Failed to initialize session or fetch data.");
            } finally {
                setLoading(false);
            }
        };

        if(!sessionLoading){
            fetchData();
        }

    }, [userSessionJWT, sessionLoading]);

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
        return (
            <AppRoot>
                <div style={{ color: "red" }}>{error}</div>
            </AppRoot>
        );
    }

    return (
        <AppRoot>
            {/*<div>*/}
            {/*    <h1>Welcome to your Profile!</h1> // updated profile frontend goes here*/}
            {/*    {userSession && (*/}
            {/*        <>*/}
            {/*            <p><strong>ID (DB):</strong> {userSession.id_db}</p>*/}
            {/*            <p><strong>Username (DB):</strong> {userSession.username_db}</p>*/}
            {/*            <p><strong>Registration Date (DB):</strong> {userSession.registration_date_db}</p>*/}
            {/*            <p><strong>Last Login (DB):</strong> {userSession.last_login_db}</p>*/}
            {/*            <p><strong>Photo URL (TG):</strong> {userSession.photo_url_tg} </p>*/}
            {/*            <p><strong>First Name (TG):</strong> {userSession.first_name_tg}</p>*/}
            {/*            <p><strong>Last Name (TG):</strong> {userSession.last_name_tg}</p>*/}
            {/*            <p><strong>Is Bot (TG):</strong> {userSession.is_bot_tg ? "Yes" : "No"}</p>*/}
            {/*            <p><strong>Session Started At:</strong> {userSession.time_started_db}</p>*/}
            {/*        </>*/}
            {/*    )}*/}
            {/*</div>*/}
            <Section>
                <Cell
                    //after={<Badge type="number">99</Badge>}
                    before={
                        <Avatar
                            size={48}
                            src={userSession.photo_url}
                        />
                    }
                    //description="Description"
                    //subhead={userSession.id_db}
                    subtitle={userSession.username}
                    //titleBadge={<Badge type="dot" />}
                >
                    {userSession.first_name} {userSession.last_name}
                </Cell>
            </Section>
            <INITDivider color='transparent' thickness="10%"/>
            <Section>
                <Cell
                    before={<Icon32ProfileColoredSquare />}
                    subtitle="упрввление оплатой и подписками"
                >
                    Кошелек
                </Cell>
                <ButtonCell before={<Icon28AddCircle />} onClick={() => navigate("/testingPage")}>
                   Добавить способ оплаты
                </ButtonCell>
            </Section>
            <INITDivider color='transparent' thickness="10%"/>
            <Caption
                caps
                level="1"
                weight="3"
                style={{margin: '5%'}}
            >
                Ваша библиотека
            </Caption>

            <INITDivider color='transparent' thickness="10%"/>

            <HorizontalScroll
                onClick={() =>
                    handleClickHaptic('light')
                }
            >
                {userLibrary.length > 0 ? (
                    <INITCardsList items={userLibrary} />
                ) : (
                    <div>
                        <Blockquote type="text">
                            <p>В вашей библиотеке пока нету гайдов/курсов.</p>
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
            </HorizontalScroll>

            {/* Meal Plan Section */}
            <INITDivider color="transparent" thickness="10%" />

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

export default Profile;