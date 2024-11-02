import React from 'react';
import '@telegram-apps/telegram-ui/dist/styles.css';
import {CardChip} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";
import {CardCell} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";
import {Card, Modal, Placeholder} from "@telegram-apps/telegram-ui";

/**
 * Component representing a single card item.
 * This card displays an image, a chip label, and a description.
 *
 * @param {string} cardChip - The label displayed at the top of the card (e.g., "Hot Place").
 * @param {string} imageSrc - The URL of the image to display in the card.
 * @param {string} title - The main title displayed on the card (e.g., location name).
 * @param {string} description - Additional information displayed below the title (e.g., subtitle or country name).
 */
const INITCardItem = ({ cardChip, imageSrc, title, description }) => {
    // const navigate = useNavigate();

    // const handleClick = () => {
    //     navigate('/item');
    // };
    return (
        <Card style={{ flexShrink: 0, minWidth: '254px' }} type="ambient">
            <CardChip readOnly>
                {cardChip}
            </CardChip>
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
            <CardCell readOnly subtitle={description}>
                {title}
            </CardCell>
        </Card>
    );
};

const INITModalCardItem = ({ cardChip, imageSrc, title, description }) => {
    return(
      <Modal
        trigger={
          <INITCardItem
              cardChip={cardChip}
              imageSrc={imageSrc}
              title={title}
              description={description}
          />
        }
      >
          <Placeholder
              description={description}
              header={title}
          >
              <img
                  alt="Telegram sticker"
                  src="https://xelene.me/telegram.gif"
                  style={{
                      display: 'block',
                      height: '144px',
                      width: '144px'
                  }}
              />
          </Placeholder>
      </Modal>
    );
};

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
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [selectedItem, setSelectedItem] = useState(null);

    // const openModal = (item) => {
    //     setSelectedItem(item);
    //     setIsModalOpen(true);
    // };

    // const closeModal = () => {
    //     setIsModalOpen(false);
    //     setSelectedItem(null); // Reset selected item
    // };

    // const navigate = useNavigate();

    // const handleBuyClick = () => {
    //     closeModal(); // Close modal first
    //     navigate('/item'); // Then navigate to the item page
    // };

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
                    <INITModalCardItem
                        key={i}
                        cardChip={item.cardChip}
                        imageSrc={item.imageSrc}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>

            {/*{isModalOpen && (*/}
            {/*    <Modal open={isModalOpen} onClose={closeModal}>*/}
            {/*        /!* Custom Modal Header with Close Button *!/*/}
            {/*        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>*/}
            {/*            <h3 style={{ margin: 0 }}></h3>*/}
            {/*            <IconButton onClick={closeModal}>*/}
            {/*                <Icon28Close style={{ color: 'var(--tgui--plain_foreground)' }} />*/}
            {/*            </IconButton>*/}
            {/*        </div>*/}

            {/*        <Placeholder*/}
            {/*            description={selectedItem?.description}*/}
            {/*            header={selectedItem?.title}*/}
            {/*        >*/}
            {/*            <img*/}
            {/*                alt="Telegram sticker"*/}
            {/*                src="https://xelene.me/telegram.gif"*/}
            {/*                style={{*/}
            {/*                    display: 'block',*/}
            {/*                    height: '144px',*/}
            {/*                    width: '144px',*/}
            {/*                }}*/}
            {/*            />*/}
            {/*            <Button*/}
            {/*                mode="filled"*/}
            {/*                size="s"*/}
            {/*                stretched*/}
            {/*                onClick={handleBuyClick} // Ensure Buy button also closes modal*/}
            {/*            >*/}
            {/*                Buy*/}
            {/*            </Button>*/}
            {/*        </Placeholder>*/}
            {/*    </Modal>*/}
            {/*)}*/}
        </div>
    );
};

export default INITCardsList;