import React, { useState, useEffect } from "react";
import INITBackButton from "../../../Hooks/BackButton";
import {AppRoot} from "@telegram-apps/telegram-ui";


const ColorTestPage = () => {
    INITBackButton();
    const [themeParams, setThemeParams] = useState({});

    useEffect(() => {
        if (window.Telegram && window.Telegram.WebApp) {
            setThemeParams(window.Telegram.WebApp.themeParams || {});
        }
    }, []);

    const themeKeys = [
        "bg_color",
        "accent_text_color",
        "button_color",
        "button_text_color",
        "hint_color",
        "link_color",
        "bottom_bar_bg_color",
        "destructive_text_color",
        "header_bg_color",
        "secondary_bg_color",
        "section_bg_color",
        "section_header_text_color",
        "section_separator_color",
        "subtitle_text_color",
        "text_color",
    ];

    return (
        <AppRoot>
            <div style={{ padding: "20px" }}>
                <h1 style={{ color: themeParams.text_color || "#000" }}>Telegram Theme Colors</h1>
                <div>
                    {themeKeys.map((key) => (
                        <div
                            key={key}
                            style={{
                                backgroundColor: themeParams[key] || "#ccc",
                                color: themeParams.text_color || "#000",
                                padding: "10px",
                                margin: "10px 0",
                                borderRadius: "8px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <span>{key}</span>
                            <span>{themeParams[key] || "Not defined"}</span>
                        </div>
                    ))}
                </div>
            </div>
        </AppRoot>
    );
};

export default ColorTestPage;