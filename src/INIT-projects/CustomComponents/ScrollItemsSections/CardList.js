import React from 'react';
import '@telegram-apps/telegram-ui/dist/styles.css';
import {CardChip} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";
import {CardCell} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";
import {Card} from "@telegram-apps/telegram-ui";


const INITCardItem = ({cardChip, imageSrc, title, description}) => (
    <Card style={{ flexShrink: 0, minWidth: '254px' }}>
        <React.Fragment key=".0">
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
            <CardCell
                readOnly
                subtitle={description}
            >
                {title}
            </CardCell>
        </React.Fragment>
    </Card>
);


const INITCardsList = ({ items }) => (
    <div style={{display: 'flex', overflowX: 'scroll', gap: '16px', whiteSpace: 'nowrap' background: 'transparent'}}>
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
        );

export default INITCardsList;