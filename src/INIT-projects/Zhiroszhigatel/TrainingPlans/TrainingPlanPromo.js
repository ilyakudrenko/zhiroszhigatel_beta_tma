import React from 'react';
import { Caption, Cell, Image, List, Section, Title } from "@telegram-apps/telegram-ui";
import INITDivider from "../../CustomComponents/Dividers/Divider";
import imageSrc from "../TrainingPlans/CardImages/training3.jpg";
import INITTrainingBuyButton from "./TrainingCategories/TrainingBuyButton";

const TrainingPlanPromo = ({ trainingPlan }) => {
    return (
        <List>
            <Image
                src={imageSrc} // Используем изображение из данных
                style={{
                    width: '100%',
                    height: '40vh',
                    objectFit: 'cover',
                    borderRadius: '0px',
                }}
            />

            <Title level="1" weight="bold" style={{ margin: '16px 16px 8px' }}>
                {trainingPlan.title}
            </Title>

            <INITDivider color="transparent" thickness="10%" />

            {trainingPlan.description.split("\n").map((desc, index) => (
                <Caption
                    key={index}
                    level="1"
                    weight="3"
                    style={{ margin: '5%' }}
                    multiline
                >
                    {desc}
                </Caption>
            ))}

            <Section>
                {Array.isArray(trainingPlan.fullDescription) ? (
                    trainingPlan.fullDescription.map((desc, index) => (
                        <Cell key={index} multiline>
                            <b>{desc.header}</b>: {desc.info}
                        </Cell>
                    ))
                ) : (
                    <Cell multiline>Описание не найдено</Cell>
                )}
            </Section>

            <INITTrainingBuyButton title={trainingPlan.title} trainingId={trainingPlan.trainingPlanId} />
        </List>
    );
};

export default TrainingPlanPromo;