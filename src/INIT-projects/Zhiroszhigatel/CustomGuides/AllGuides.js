import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoot, Modal } from "@telegram-apps/telegram-ui";
import {
    ModalHeader
} from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
import { ModalClose } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalClose/ModalClose";
import { Icon28Close } from "@telegram-apps/telegram-ui/dist/icons/28/close";
import INITGuideTemplate from "../../Zhiroszhigatel/CustomGuides/GuideTemplate";
import INITBackButton from "../../../Hooks/BackButton";

const AllGuides = () => {
    INITBackButton();
    const location = useLocation();
    const guides = location.state?.guides || [];

    if (!guides.length) {
        return <p>No guides available.</p>;
    }

    return (
        <AppRoot>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                gap: "16px",
                padding: "16px",
            }}>
                {guides.map((guide, index) => (
                    <Modal
                        key={index}
                        header={
                            <ModalHeader after={
                                <ModalClose>
                                    <Icon28Close style={{ color: 'var(--tgui--plain_foreground)' }} />
                                </ModalClose>
                            }>
                                {guide.title}
                            </ModalHeader>
                        }
                        style={{ backgroundColor: 'var(--tgui--secondary_bg_color)' }}
                        trigger={
                            <div
                                style={{
                                    backgroundColor: "transparent",
                                    borderRadius: "10px",
                                    padding: "10px",
                                    textAlign: "left",
                                    color: "white",
                                    cursor: "pointer"
                                }}
                            >
                                <img
                                    src={guide.imageSrc}
                                    alt={guide.title}
                                    style={{ width: "100%", borderRadius: "8px" }}
                                />
                                <p>{guide.title}</p>
                            </div>
                        }
                    >
                        <INITGuideTemplate
                            guideKey={guide.guideKey}
                            totalPages={guide.numPage}
                            title={guide.title}
                            guideId={guide.guide_id_db}
                        />
                    </Modal>
                ))}
            </div>
        </AppRoot>
    );
};

export default AllGuides;