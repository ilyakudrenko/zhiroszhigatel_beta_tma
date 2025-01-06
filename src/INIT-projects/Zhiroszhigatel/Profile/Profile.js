import React, { useEffect, useState } from "react";
import {
    AppRoot,
    Avatar,
    Blockquote,
    Button,
    ButtonCell,
    Caption,
    Cell, Input,
    List,
    Section, Tappable
} from "@telegram-apps/telegram-ui";
import INITBackButton from "../../../Hooks/BackButton";
import { Spinner } from "@telegram-apps/telegram-ui";
import {getSession} from "../../CustomComponents/UserSession/session";
import INITDivider from "../../CustomComponents/Dividers/Divider";
import fetchUserLibrary from "../../CustomComponents/UserSession/fetchUserLibrary";
import {HorizontalScroll} from "@telegram-apps/telegram-ui/dist/components/Service/HorizontalScroll/HorizontalScroll";
import INITCardsList from "../../CustomComponents/ScrollItemsSections/CardList";
import {useNavigate} from "react-router-dom";
import {Icon28AddCircle} from "@telegram-apps/telegram-ui/dist/icons/28/add_circle";
import {Icon32ProfileColoredSquare} from "@telegram-apps/telegram-ui/dist/icons/32/profile_colored_square";
import {Icon24Close} from "@telegram-apps/telegram-ui/dist/icons/24/close";

const handleClickHaptic = (effect = 'light') =>{
    window.Telegram.WebApp.HapticFeedback.impactOccurred(effect);
}

const Profile = () => {
    const navigate = useNavigate();
    const [userSession, setUserSession] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userLibrary, setUserLibrary] = useState([]); // State for user's guides


    INITBackButton(); // Back button for the profile

    useEffect(() => {

            try {
                // Retrieve session data
                const session = getSession();
                setUserSession(session);
                const fetchData = async () => {
                    const library = await fetchUserLibrary();
                    setUserLibrary(library);
                };
                fetchData();
                setLoading(false);
            } catch (err) {
                console.error("Failed to retrieve user session:", err);
                setError("Failed to initialize session.");
                setLoading(false);
            }

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
        return (
            <AppRoot>
                <div style={{ color: "red" }}>{error}</div>
            </AppRoot>
        );
    }

    return (
        <AppRoot>
            <Section header="Калькулятор калорий">
                <List
                    style={{
                        width: 400,
                        maxWidth: '100%',
                        margin: 'auto',
                        background: 'var(--tgui--secondary_bg_color)'
                    }}
                >
                    <Input
                        header="Обычный ввод"
                        placeholder="Введите значение"
                    />
                    <Input
                        status="error"
                        header="Ошибка"
                        placeholder="Ошибка в значении"
                    />
                    <Input
                        status="focused"
                        header="Фокус"
                        placeholder="Сфокусированное поле ввода"
                    />
                    <Input
                        disabled
                        header="Отключено"
                        placeholder="Поле отключено"
                    />
                    <Input
                        status="focused"
                        header="Очистить меня"
                        placeholder="Напишите и очистите"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        after={
                            <Tappable
                                Component="div"
                                style={{ display: 'flex' }}
                                onClick={clearInput}
                            >
                                <Icon24Close />
                            </Tappable>
                        }
                    />
                </List>
                <Button
                    mode="filled"
                    size="m"
                    stretched
                    style={{
                        display: 'block', // Makes the button behave like a block-level element
                        margin: '20px auto', // Centers the block element horizontally.
                    }}
                >
                    Рассчитать
                </Button>
            </Section>
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
                            src={userSession.photo_url_tg}
                        />
                    }
                    //description="Description"
                    //subhead={userSession.id_db}
                    subtitle={userSession.username_db}
                    //titleBadge={<Badge type="dot" />}
                >
                    {userSession.first_name_tg} {userSession.last_name_tg}
                </Cell>
            </Section>
            <INITDivider color='transparent' thickness="10%"/>
            <Section>
                <Cell
                    before={<Icon32ProfileColoredSquare />}
                    subtitle="Manage ads and payment settings"
                >
                    My Ads
                </Cell>
                <ButtonCell before={<Icon28AddCircle />} onClick={() => navigate("/calculator")}>
                    Create Ad
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

            <INITDivider color="transparent" thickness="10%"/>
        </AppRoot>
    );
};

export default Profile;