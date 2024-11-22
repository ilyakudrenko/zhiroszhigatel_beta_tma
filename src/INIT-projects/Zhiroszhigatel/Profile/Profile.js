import React, { useEffect, useState } from 'react';
import { AppRoot, Button, Section, Cell, Image } from "@telegram-apps/telegram-ui";
import { useNavigate } from "react-router-dom";
import INITDivider from "../../CustomComponents/Dividers/Divider";

const roundedCellStyle = {
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: 'var(--tgui--secondary_bg_color)',
};

const Profile = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (window.Telegram && window.Telegram.WebApp) {
            const telegramUser = window.Telegram.WebApp.initDataUnsafe?.user;

            if (telegramUser) {
                const formattedUser = {
                    id: telegramUser.id,
                    username: telegramUser.username,
                    firstName: telegramUser.first_name,
                    lastName: telegramUser.last_name,
                    avatar: telegramUser.photo_url,
                };
                setUserData(formattedUser);
            } else {
                console.log("Telegram WebApp user data is missing.");
            }
        } else {
            console.error("Telegram WebApp is not available.");
        }
    }, []);

    return (
        <AppRoot>
            <div>
                <Button mode="plain" size="s" onClick={() => navigate("/")}>
                    Назад
                </Button>
            </div>

            <INITDivider color="transparent" thickness="10%" />

            <Section style={roundedCellStyle} header="Профиль пользователя">
                {userData ? (
                    <>
                        <Cell
                            before={<Image src={userData.avatar} style={{ borderRadius: '50%', width: '50px', height: '50px' }} />}
                            subhead="Имя пользователя"
                        >
                            {userData.firstName} {userData.lastName}
                        </Cell>
                        <Cell multiline subhead="Username">
                            @{userData.username}
                        </Cell>
                        <Cell multiline subhead="ID">
                            {userData.id}
                        </Cell>
                    </>
                ) : (
                    <Cell multiline>
                        <div style={{textAlign: 'center', marginTop: '20px'}}>
                            <p>Не удалось получить данные пользователя.</p>
                        </div>
                    </Cell>
                )}
            </Section>
        </AppRoot>
    );
};

export default Profile;
