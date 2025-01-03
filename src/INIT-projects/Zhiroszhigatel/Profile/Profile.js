import React, { useEffect, useState } from "react";
import { AppRoot } from "@telegram-apps/telegram-ui";
import INITBackButton from "../../../Hooks/BackButton";
import { Spinner } from "@telegram-apps/telegram-ui";
import {getSession} from "../../CustomComponents/UserSession/session";

const Profile = () => {
    const [userSession, setUserSession] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    INITBackButton(); // Back button for the profile

    useEffect(() => {
        try {
            // Retrieve session data
            const session = getSession();
            setUserSession(session);
            setLoading(false);
        } catch (err) {
            console.error("Failed to retrieve user session:", err);
            setError("Failed to initialize session.");
            setLoading(false);
        }
    }, []);

    if (loading) {
        return (
            <AppRoot>
                <div
                    style={{
                        border: "1px dashed #9747FF",
                        borderRadius: "5px",
                        padding: "20px",
                        width: "400px",
                    }}
                >
                    <Spinner size="l" />
                    {" "}
                    <br />
                </div>
            </AppRoot>
        );
    }

    if (error) {
        return (
            <AppRoot>
                <div style={{ color: "red" }}>{error}</div>
            </AppRoot>
        );
    }

    return (
        <AppRoot>
            <div>
                <h1>Welcome to your Profile!</h1>
                {userSession && (
                    <>
                        <p><strong>ID (DB):</strong> {userSession.id_db}</p>
                        <p><strong>Username (DB):</strong> {userSession.username_db}</p>
                        <p><strong>Registration Date (DB):</strong> {userSession.registration_date_db}</p>
                        <p><strong>Last Login (DB):</strong> {userSession.last_login_db}</p>
                        <p><strong>Photo URL (TG):</strong> <a href={userSession.photo_url_tg} target="_blank" rel="noopener noreferrer">View Photo</a></p>
                        <p><strong>First Name (TG):</strong> {userSession.first_name_tg}</p>
                        <p><strong>Last Name (TG):</strong> {userSession.last_name_tg}</p>
                        <p><strong>Is Bot (TG):</strong> {userSession.is_bot_tg ? "Yes" : "No"}</p>
                        <p><strong>Session Started At:</strong> {userSession.time_started_db}</p>
                    </>
                )}
            </div>
        </AppRoot>
    );
};

export default Profile;