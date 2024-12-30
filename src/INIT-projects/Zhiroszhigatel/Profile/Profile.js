import React, { useEffect, useState } from "react";
import { AppRoot, Avatar, Cell, Section } from "@telegram-apps/telegram-ui";
import { useNavigate } from "react-router-dom";
import INITDivider from "../../CustomComponents/Dividers/Divider";
import { useTelegram } from "../../../Hooks/UseTelegram";
import INITBackButton from "../../../Hooks/BackButton";

import axios from "axios";

const Profile = () => {
    const {user} = useTelegram();
    return (
        <AppRoot>
            <h1>Profile Page</h1>
            <div>
                <strong>Username:</strong>
                {user?.username || 'username not provided'}
            </div>
        </AppRoot>
    );
};

export default Profile;