import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoot, Modal} from "@telegram-apps/telegram-ui";
import {
    ModalHeader
} from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
import {ModalClose} from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalClose/ModalClose";
import { Icon28Close } from "@telegram-apps/telegram-ui/dist/icons/28/close";
import INITGuideTemplate from "../../Zhiroszhigatel/CustomGuides/GuideTemplate";
import INITBackButton from "../../../Hooks/BackButton";


const AllGuides = () => {
    INITBackButton();
    const location = useLocation();
    const guides = location.state?.guides || [];

    const [selectedGuide, setSelectedGuide] = useState(null);

    if (!guides.length) {
        return <p>No guides available.</p>;
    }

    return (
        <AppRoot>
            {selectedGuide && (
                <Modal
                    isOpen={!!selectedGuide}
                    onClose={() => setSelectedGuide(null)}
                    style={{ backgroundColor: "var(--tgui--secondary_bg_color)" }}
                    header={
                        <ModalHeader after={
                            <ModalClose>
                                <Icon28Close style={{ color: 'var(--tgui--plain_foreground)' }} />
                            </ModalClose>
                        }>
                            {selectedGuide.title}
                        </ModalHeader>
                    }
                    trigger={
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                            gap: "16px",
                            padding: "16px",
                        }}>
                            {guides.map((guide, index) => (
                                <div
                                    key={index}
                                    style={{
                                        backgroundColor: "#222",
                                        borderRadius: "10px",
                                        padding: "10px",
                                        textAlign: "center",
                                        color: "white",
                                        cursor: "pointer"
                                    }}
                                    onClick={() => setSelectedGuide(guide)}
                                >
                                    <img
                                        src={guide.imageSrc}
                                        alt={guide.title}
                                        style={{width: "100%", borderRadius: "8px"}}
                                    />
                                    <p>{guide.title}</p>
                                </div>
                            ))}
                        </div>
                    }
                >
                    <INITGuideTemplate
                        guideKey={selectedGuide.guideKey}
                        totalPages={selectedGuide.numPage}
                        title={selectedGuide.title}
                        guideId={selectedGuide.guide_id_db}
                    />
                </Modal>
            )}
        </AppRoot>
    );
};

export default AllGuides;