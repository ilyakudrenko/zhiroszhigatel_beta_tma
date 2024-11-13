import React from 'react';
import {AppRoot,Button} from "@telegram-apps/telegram-ui";
import {useNavigate} from "react-router-dom";

const Support = () => {
    const navigate = useNavigate();

    return (
        <AppRoot>
            <Button
                mode="plain"
                size="s"
                onClick={() => navigate("/")}
            >
                Back
            </Button>
            Support page!
        </AppRoot>
    );
};

export default Support;