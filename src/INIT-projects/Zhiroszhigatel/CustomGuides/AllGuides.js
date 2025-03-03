import React from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoot } from "@telegram-apps/telegram-ui";

const AllGuides = () => {
    const location = useLocation();
    const guides = location.state?.guides || []; // ✅ Get guides from HomePage

    if (!guides.length) {
        return <p>No guides available.</p>;
    }

    return (
        <AppRoot>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", // ✅ Grid structure
                gap: "16px",
                padding: "16px",
            }}>
                {guides.map((guide, index) => (
                    <div key={index} style={{
                        backgroundColor: "#222",
                        borderRadius: "10px",
                        padding: "10px",
                        textAlign: "center",
                        color: "white",
                    }}>
                        <img
                            src={guide.imageSrc}
                            alt={guide.title}
                            style={{ width: "100%", borderRadius: "8px" }}
                        />
                        <p>{guide.title}</p>
                    </div>
                ))}
            </div>
        </AppRoot>
    );
};

export default AllGuides;