import React from 'react';
import {ModalHeader} from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
import {ModalClose} from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalClose/ModalClose";
import {Icon28Close} from "@telegram-apps/telegram-ui/dist/icons/28/close";
import {IconButton, Modal, Placeholder} from "@telegram-apps/telegram-ui";
import {Icon20QuestionMark} from "@telegram-apps/telegram-ui/dist/icons/20/question_mark";

const INITHelp = () => {
    return (
        <Modal
            header={<ModalHeader after={<ModalClose><Icon28Close
                style={{color: 'var(--tgui--plain_foreground)'}}/></ModalClose>}></ModalHeader>}
            style={{
                backgroundColor: 'var(--tgui--secondary_bg_color)',
            }}
            trigger={
                <IconButton
                    mode="plain"
                    size="l"
                >
                    <Icon20QuestionMark/>
                </IconButton>
            }
        >
            <div className="HIJtihMA8FHczS02iWF5">
                <Placeholder
                    description="Вам ну жнаупомошь с новым ботом?"
                    header="Help"
                >
                    <img
                        alt="Telegram sticker"
                        src="https://xelene.me/telegram.gif"
                        style={{ display: 'block', width: '144px', height: '144px' }}
                    />
                </Placeholder>
            </div>

        </Modal>
    );
};

export default INITHelp;