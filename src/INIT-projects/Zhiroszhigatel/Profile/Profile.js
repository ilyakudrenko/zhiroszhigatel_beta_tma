import React from 'react';
import {AppRoot, Button, Input, Section} from "@telegram-apps/telegram-ui";
import {useNavigate} from "react-router-dom";
import INITDivider from "../../CustomComponents/Dividers/Divider";


const roundedCellStyle = {
    borderRadius: '16px',
    overflow: 'hidden', // Ensures rounded corners display properly
    backgroundColor: 'var(--tgui--secondary_bg_color)',
};

const Profile = () => {
    const navigate = useNavigate();

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

            <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px"}}>
                <iframe
                    width="996"
                    height="560"
                    src="https://www.youtube.com/embed/POb02mjj2zE"
                    title="Юность в сапогах (Gachi Version) | Гачимучи ремикс"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{
                        borderRadius: "10px", // Optional: Add rounded corners
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", // Optional: Add shadow for better aesthetics
                    }}
                ></iframe>
            </div>

            {/*<video*/}
            {/*    width="100%"*/}
            {/*    controls={true}*/}
            {/*    poster="https://via.placeholder.com/640x360.png" // Отображается до начала воспроизведения*/}
            {/*    style={{borderRadius: '10px'}} // Пример кастомизации стилей*/}
            {/*>*/}
            {/*    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>*/}
            {/*    Ваш браузер не поддерживает видео. yf*/}
            {/*</video>*/}


            {/*<INITDivider color='transparent' thickness="10%"/>*/}

            {/*<Section*/}
            {/*    style={roundedCellStyle}*/}
            {/*    header="Login"*/}
            {/*>*/}
            {/*    <Input header="Name" placeholder="Введите имя"/>*/}
            {/*    <Input header="Email" placeholder="Введите email"/>*/}
            {/*    <Input header="Password" placeholder="Введите пароль"/>*/}
            {/*    /!*<Input status="error" header="Input" placeholder="I am error input, don't make my mistakes..." />*!/*/}
            {/*    /!*<Input status="focused" header="Input" placeholder="I am focused input, are u focused on me?" />*!/*/}
            {/*    /!*<Input disabled header="Input" placeholder="I am disabled input" />*!/*/}

            {/*</Section>*/}
        </AppRoot>
    );
};

export default Profile;