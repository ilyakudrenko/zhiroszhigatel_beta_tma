import React, {useEffect, useState} from 'react';
import {AppRoot, Avatar, Cell, Section} from "@telegram-apps/telegram-ui";
import {useNavigate} from "react-router-dom";
import INITDivider from "../../CustomComponents/Dividers/Divider";
import {useTelegram} from "../../../Hooks/UseTelegram";
import INITBackButton from "../../../Hooks/BackButton";


import axios from "axios";


const Profile = () => {
    const navigate = useNavigate();
    // const tg = window.Telegram.WebApp;
    const {tg, user, onBackButton} = useTelegram();

    const [purchasedItems, setPurchasedItems] = useState([]);

    useEffect(() => {
        // Load purchased items from localStorage
        const items = JSON.parse(localStorage.getItem("purchasedItems")) || [];
        setPurchasedItems(items);
    }, []);

    INITBackButton();

    return (

        <AppRoot>
            <Section>
                <Cell
                    //after={<Badge type="number">99</Badge>}
                    before={
                        <Avatar
                            size={48}
                            src={user?.photo_url}
                        />
                    }
                    //description="Description"
                    subhead={user?.id}
                    subtitle={user?.username}
                    //titleBadge={<Badge type="dot" />}
                >
                    {user?.first_name} {user?.last_name}
                </Cell>
            </Section>

            <INITDivider color="transparent" thickness="10%"/>
        </AppRoot>
    );
};

export default Profile;