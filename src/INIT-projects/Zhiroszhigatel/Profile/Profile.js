import React from 'react';
import {AppRoot, Button, Input, Section} from "@telegram-apps/telegram-ui";
import {useNavigate} from "react-router-dom";
import {SectionHeader} from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader";


const roundedCellStyle = {
    borderRadius: '16px',
    overflow: 'hidden', // Ensures rounded corners display properly
    backgroundColor: 'var(--tgui--secondary_bg_color)',
};

const Profile = () => {
    const navigate = useNavigate();

    return (
        <AppRoot>
            <SectionHeader>
                <Button
                    mode="plain"
                    size="s"
                    onClick={() => navigate("/")}
                >
                    Назад
                </Button>
            </SectionHeader>

            <Section
                style={roundedCellStyle}
                header="Login"
            >
                <Input header="Name" placeholder="Введите имя" />
                <Input header="Email" placeholder="Введите email" />
                <Input header="Password" placeholder="Введите пароль" />
                {/*<Input status="error" header="Input" placeholder="I am error input, don't make my mistakes..." />*/}
                {/*<Input status="focused" header="Input" placeholder="I am focused input, are u focused on me?" />*/}
                {/*<Input disabled header="Input" placeholder="I am disabled input" />*/}

            </Section>
        </AppRoot>
    );
};

export default Profile;