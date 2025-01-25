import React from 'react';
import { Caption, Cell, Image, List, Section, Title } from "@telegram-apps/telegram-ui";
import INITDivider from "../../CustomComponents/Dividers/Divider";
import imageSrc from "../TrainingPlans/CardImages/training1.jpg";

const TrainingPlanPromo = ({ trainingPlan }) => {
    return (
        <List>
            <Image
                src={trainingPlan.imageSrc || imageSrc} // Use provided image or a default one
                style={{
                    width: '100%',
                    height: '40vh',
                    objectFit: 'cover',
                    borderRadius: '0px'
                }}
            />

            {/* Заголовок */}
            <Title level="1" weight="bold" style={{ margin: '16px 16px 8px' }}>
                {trainingPlan.title}
            </Title>

            <INITDivider color='transparent' thickness="10%" />

            <Caption
                caps
                level="1"
                weight="3"
                style={{ margin: '5%' }}
            >
                ЧТО ВХОДИТ
            </Caption>
            <Section>
                {trainingPlan.description.split("\n").map((desc, index) => (
                    <Cell
                        key={index}
                        multiline
                        subhead={`Шаг ${index + 1}`}
                    >
                        {desc}
                    </Cell>
                ))}
            </Section>
        </List>
    );
};

export default TrainingPlanPromo;