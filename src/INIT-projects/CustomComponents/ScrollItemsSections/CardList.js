import React from 'react';
import '@telegram-apps/telegram-ui/dist/styles.css';
import {CardChip} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";
import {CardCell} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";
import {Button, Card, Modal, Placeholder, Text} from "@telegram-apps/telegram-ui";
import INITItemCoursePromo from "../../Zhiroszhigatel/ItemCourse/ItemCoursePromo";
import INITGuide_1 from "../../Zhiroszhigatel/CustomGuides/Guide_1/Guide1";

const modal_back_color = {
    backgroundColor: "var(--tgui--background)",
};

/**
 * Component representing a single card item.
 * This card displays an image, a chip label, and a description.
 *
 * @param {string} cardChip - The label displayed at the top of the card (e.g., "Hot Place").
 * @param {string} imageSrc - The URL of the image to display in the card.
 * @param {string} title - The main title displayed on the card (e.g., location name).
 * @param {string} description - Additional information displayed below the title (e.g., subtitle or country name).
 */
const INITCardItem = ({ cardChip, imageSrc, title, description }) => (
    <Modal
        style={{
            backgroundColor: "darkred",
        }}
        trigger={
            <Card style={{ flexShrink: 0, minWidth: '254px' }} type="ambient">
                <CardChip readOnly>{cardChip}</CardChip>
                <img
                    alt={title}
                    src={imageSrc}
                    style={{
                        display: 'block',
                        height: 308,
                        objectFit: 'cover',
                        width: 254
                    }}
                />
                <CardCell readOnly subtitle={description}>{title}</CardCell>
            </Card>
        }
    >
        <INITGuide_1  />
        {/*<INITItemCoursePromo  />*/}
    </Modal>
);

/**
 * Component for displaying a list of card items horizontally.
 * This component receives an array of card data and renders each as a card.
 *
 * @param {Array} items - Array of objects, where each object contains:
 *   - cardChip: Label text displayed on the card's chip (e.g., "Hot Place")
 *   - imageSrc: URL of the image to display in the card
 *   - title: Main title of the card
 *   - description: Subtitle or additional information for the card
 */
const INITCardsList = ({ items = [] }) => {
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    overflowX: 'scroll',
                    gap: '16px',
                    whiteSpace: 'nowrap',
                    background: 'transparent',
                }}
            >
                {items.map((item, i) => (
                    <INITCardItem
                        key={i}
                        cardChip={item.cardChip}
                        imageSrc={item.imageSrc}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default INITCardsList;