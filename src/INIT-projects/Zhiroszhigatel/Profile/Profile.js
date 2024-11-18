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

            <video
                width="100%"
                controls=true
                poster="https://via.placeholder.com/640x360.png" // Отображается до начала воспроизведения
                style={{borderRadius: '10px'}} // Пример кастомизации стилей
            >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
                Ваш браузер не поддерживает видео.
            </video>

            {/*<div>*/}
            {/*    <Button*/}
            {/*        mode="plain"*/}
            {/*        size="s"*/}
            {/*        onClick={() => navigate("/")}*/}
            {/*    >*/}
            {/*        Назад*/}
            {/*    </Button>*/}
            {/*</div>*/}

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