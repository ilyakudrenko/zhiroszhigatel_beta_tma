import React, {useEffect, useState} from 'react';
// import {AppRoot, Button, Input, Section, Text} from "@telegram-apps/telegram-ui";
import {useNavigate} from "react-router-dom";
// import INITDivider from "../../CustomComponents/Dividers/Divider";
// import tg from "https://telegram.org/js/telegram-web-app.js?56";



const Profile = () => {
    const navigate = useNavigate();
    const tg = window.Telegram.WebApp;
    return (
        <div>
            <span>
                {tg.initDataUnsafe?.user?.first_name}
            </span>
        </div>
        // <AppRoot>
        //
        //     <div>
        //         <Button
        //             mode="plain"
        //             size="s"
        //             onClick={() => navigate("/")}
        //         >
        //             Назад
        //         </Button>
        //     </div>
        //     {/*<div>*/}
        //     {/*    <Text>*/}
        //     {/*        {window.Telegram.WebApp.initDataUnsafe?.user?.username}*/}
        //     {/*    </Text>*/}
        //     {/*</div>*/}
        // </AppRoot>
    );
};

export default Profile;