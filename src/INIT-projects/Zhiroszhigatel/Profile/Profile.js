import React, { useEffect, useState } from 'react';
import { AppRoot, Button, Section, Cell } from "@telegram-apps/telegram-ui";
import { useNavigate } from "react-router-dom";
import INITDivider from "../../CustomComponents/Dividers/Divider";

const roundedCellStyle = {
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: 'var(--tgui--secondary_bg_color)',
};

const Profile = () => {
    const navigate = useNavigate();
    const [purchasedItems, setPurchasedItems] = useState([]);

    useEffect(() => {
        // Load purchased items from localStorage
        const items = JSON.parse(localStorage.getItem("purchasedItems")) || [];
        setPurchasedItems(items);
    }, []);

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

            <INITDivider color="transparent" thickness="10%" />

            <Section
                style={roundedCellStyle}
                header="Ваши приобретенные элементы"
            >
                {purchasedItems.length === 0 ? (
                    <Cell multiline subhead="Нет приобретенных элементов">
                        Вы еще ничего не приобрели.
                    </Cell>
                ) : (
                    purchasedItems.map((item, index) => (
                        <Cell key={index} multiline subhead={item.title}>
                            {item.title} добавлен в библиотеку
                        </Cell>
                    ))
                )}
            </Section>
        </AppRoot>
    );
};

export default Profile;
