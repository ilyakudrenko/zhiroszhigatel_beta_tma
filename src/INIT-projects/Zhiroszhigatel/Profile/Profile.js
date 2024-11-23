import React, {useEffect, useState} from 'react';
import {AppRoot, Button, Input, Section, Text} from "@telegram-apps/telegram-ui";
import {useNavigate} from "react-router-dom";
import INITDivider from "../../CustomComponents/Dividers/Divider";
import {useTelegram} from "../../../Hooks/UseTelegram";
import INITBackButton from "../../../Hooks/BackButton";



const Profile = () => {
    const navigate = useNavigate();
    // const tg = window.Telegram.WebApp;
    const {tg, user, onBackButton} = useTelegram();

    INITBackButton();

    return (

        <AppRoot>
            <div>
                <Text>
                    {user?.first_name}
                </Text>
            </div>
        </AppRoot>
    );
};

export default Profile;