import React from 'react';
import '@telegram-apps/telegram-ui/dist/styles.css';
import {CardChip} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";
import {CardCell} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";
import {Card, Modal,} from "@telegram-apps/telegram-ui";
import INITGuideTemplate from "../../Zhiroszhigatel/CustomGuides/GuideTemplate";
import {ModalHeader} from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";


/**
 * INITCardItem Component
 *
 * This component represents a single card item that opens a modal when clicked.
 * Each card displays an image, title, description, and a chip label. Upon clicking,
 * a modal with additional guide content opens.
 *
 * @param {string} imageSrc - The URL of the image to display in the card.
 * @param {string} title - The main title displayed on the card.
 * @param {string} description - Additional information displayed below the title.
 * @param {string} cardChip - A label displayed at the top of the card.
 * @param {string} guideKey - A unique key to identify the guide.
 * @param {number} numPage - The total number of pages for the guide in the modal.
 *
 * @returns {JSX.Element} A card component that opens a modal with guide details when clicked.
 */
const INITCardItem = ({ imageSrc, title, description, cardChip, guideKey, numPage }) => (
    <Modal
        header={<ModalHeader>{title}</ModalHeader>}
        style={{
            backgroundColor: 'var(--tgui--secondary_bg_color)',
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
        <INITGuideTemplate
            guideKey={guideKey}
            totalPages={numPage}
            />

    </Modal>
);

/**
 * INITCardsList Component
 *
 * This component renders a list of INITCardItem components horizontally.
 * It takes an array of guide data as props and maps each item to an INITCardItem.
 *
 * @param {Array} items - An array of objects, each representing a guide. Each object contains:
 *   - imageSrc {string}: URL of the image to display in the card
 *   - title {string}: Main title of the card
 *   - description {string}: Subtitle or additional information for the card
 *   - cardChip {string}: Label text displayed on the card's chip
 *   - guideKey {string}: Unique key to identify the guide
 *   - numPage {number}: Total number of pages in the guide
 *
 * @returns {JSX.Element} A horizontally scrollable list of cards.
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
                        imageSrc={item.imageSrc}
                        title={item.title}
                        description={item.description}
                        cardChip={item.cardChip}
                        guideKey={item.guideKey}
                        numPage={item.numPage}
                    />
                ))}
            </div>
        </div>
    );
};

export default INITCardsList;