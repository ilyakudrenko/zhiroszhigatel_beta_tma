import React, {useEffect, useState} from 'react';
import {AppRoot, Button, Input, Section, Text} from "@telegram-apps/telegram-ui";
import {useNavigate} from "react-router-dom";
import INITDivider from "../../CustomComponents/Dividers/Divider";
import {useTelegram} from "../../../Hooks/UseTelegram";
// import tg from "https://telegram.org/js/telegram-web-app.js?56";



const Profile = () => {
    const navigate = useNavigate();
    // const tg = window.Telegram.WebApp;
    const {tg, user, onBackButton} = useTelegram()

    useEffect(() => {
        tg.ready();
    }, [])

    return (

        <AppRoot>

            <div>
                {/*<Button*/}
                {/*    mode="plain"*/}
                {/*    size="s"*/}
                {/*    onClick={() => navigate("/")}*/}
                {/*>*/}
                {/*    Назад*/}
                {/*</Button>*/}
                <Button onClick={onBackButton}>Назад</Button>
            </div>
            <div>
                <Text>
                    {user?.first_name}
                </Text>
            </div>
        </AppRoot>
    );
};

export default Profile;