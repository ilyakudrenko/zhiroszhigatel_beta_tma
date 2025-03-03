import React from 'react';
import {AppRoot} from "@telegram-apps/telegram-ui";
import INITCardsList from "../../CustomComponents/ScrollItemsSections/CardList";

const AllGuides = ({ guides = [] }) => {
    if (!Array.isArray(guides)) {
        console.error("❌ Expected an array for guides but received:", guides);
        return <AppRoot><p style={{ color: "red" }}>Error: Guides data is not available.</p></AppRoot>;
    }

    return (
        <AppRoot>
            <div style={styles.gridContainer}>
                {guides.map((guide, index) => (
                    <div key={index} style={styles.cardWrapper}>
                        <INITCardsList items={[guide]} />
                    </div>
                ))}
            </div>
        </AppRoot>
    );
};

const styles = {
    gridContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "12px",
        padding: "16px",
    },
    cardWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
};

export default AllGuides;