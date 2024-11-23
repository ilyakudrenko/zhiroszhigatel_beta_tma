import React from 'react';
import {AppRoot, Button, Input, Section} from "@telegram-apps/telegram-ui";
import {useNavigate} from "react-router-dom";
import INITDivider from "../../CustomComponents/Dividers/Divider";
// import tg from "https://telegram.org/js/telegram-web-app.js?56";



const Profile = () => {
    const navigate = useNavigate();
    const tg = window.Telegram.WebApp;

    return (
        <AppRoot>

            <div>
                <Button
                    mode="plain"
                    size="s"
                    onClick={() => navigate("/")}
                >
                    Назад
                </Button>
            </div>
            <span>{tg.initDataUnsafe}</span>
        </AppRoot>
    );
};

export default Profile;