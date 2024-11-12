import React from 'react';
import '@telegram-apps/telegram-ui/dist/styles.css';
import {CardChip} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";
import {CardCell} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";
import {Card, Modal,} from "@telegram-apps/telegram-ui";
import INITGuideTemplate from "../../Zhiroszhigatel/CustomGuides/GuideTemplate";

// const modal_back_color = {
//     backgroundColor: 'var(--tgui--secondary_bg_color)',
// };

// const getGuideComponent = (guideComponent, imageSrc, title) => {
//     switch (guideComponent) {
//         case 'INITGuide_1_PDF':
//             return <INITGuide_1_PDF imageSrc={imageSrc} title={title} />;
//         case 'INITGuide_2_PDF':
//             return <INITGuide_2_PDF imageSrc={imageSrc} title={title} />;
//         default:
//             return <p>No Guide Available</p>;
//     }
// };



const INITCardItem = ({ imageSrc, title, description, cardChip, guideKey, numPage }) => (
    <Modal
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
                        imageSrc={item.imageSrc}
                        title={item.title}
                        description={item.description}
                        cardChip={item.cardChip}
                        guideKey={guideKey}
                        numPage={numPage}
                    />
                ))}
            </div>
        </div>
    );
};

export default INITCardsList;