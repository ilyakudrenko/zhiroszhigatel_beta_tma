import React, {useEffect, useState} from 'react';
import {AppRoot, Avatar, Cell, Section} from "@telegram-apps/telegram-ui";
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

            {/*<div>*/}
            {/*    <Text>*/}
            {/*        {user?.first_name}*/}
            {/*    </Text>*/}
            {/*</div>*/}
        </AppRoot>
    );
};

export default Profile;