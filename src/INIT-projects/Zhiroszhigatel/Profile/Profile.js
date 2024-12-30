import React, { useEffect, useState } from "react";
import { AppRoot, Avatar, Cell, Section } from "@telegram-apps/telegram-ui";
import { useNavigate } from "react-router-dom";
import INITDivider from "../../CustomComponents/Dividers/Divider";
import { useTelegram } from "../../../Hooks/UseTelegram";
import INITBackButton from "../../../Hooks/BackButton";

import axios from "axios";

const Profile = () => {
    const navigate = useNavigate();
    const { tg, user, onBackButton } = useTelegram();

    const [purchasedItems, setPurchasedItems] = useState([]);
    const [userData, setUserData] = useState(null); // State for storing user data from the server
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        // Fetch user data from the server when the component mounts
        const fetchUserData = async () => {
            try {
                const response = await axios.post("http://localhost:3306/login", {
                    username: user?.username, // Send the username from the Telegram hook
                });
                setUserData(response.data); // Store the user data in state
                setLoading(false);
            } catch (err) {
                console.error("Error fetching user data:", err);
                setError("Failed to load user data.");
                setLoading(false);
            }
        };

        if (user?.username) {
            fetchUserData();
        } else {
            setError("No username provided.");
            setLoading(false);
        }
    }, [user?.username]);

    useEffect(() => {
        // Load purchased items from localStorage
        const items = JSON.parse(localStorage.getItem("purchasedItems")) || [];
        setPurchasedItems(items);
    }, []);

    INITBackButton();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <AppRoot>
            <Section>
                <Cell
                    before={
                        <Avatar
                            size={48}
                            src={user?.photo_url}
                        />
                    }
                    subhead={userData?.id}
                    subtitle={userData?.username}
                >
                    {user?.first_name} {user?.last_name}
                </Cell>
            </Section>

            <INITDivider color="transparent" thickness="10%" />

            <Section>
                <h3>Purchased Items</h3>
                {purchasedItems.length > 0 ? (
                    purchasedItems.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))
                ) : (
                    <div>No purchased items.</div>
                )}
            </Section>
        </AppRoot>
    );
};

export default Profile;