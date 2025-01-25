import React from 'react';
import { Caption, Cell, Image, List, Section, Title } from "@telegram-apps/telegram-ui";
import INITDivider from "../../CustomComponents/Dividers/Divider";
import imageSrc from "../TrainingPlans/CardImages/training3.jpg";
import INITTrainingBuyButton from "./TrainingCategories/TrainingBuyButton";

const TrainingPlanPromo = ({ trainingPlan }) => {

    const fullDescriptions = {
        "Базовый уровень": "Никита Игошев. Тренировочный план для новичков и тех кто много пропустил, без ограничений по здоровью",
        "Продвинутый уровень": "Никита Игошев. Тренировочный план для людей с хорошей подготовкой и без ограничений по здоровью"
    };

    // Get the full description based on the training plan title
    const fullDescription = fullDescriptions[trainingPlan.description] || "Описание не найдено";

    return (
        <List>
            <Image
                src={imageSrc} // Use provided image or a default one
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

            {trainingPlan.description.split("\n").map((desc, index) => (
                <Caption
                    key={index}
                    //caps
                    level="1"
                    weight="3"
                    style={{ margin: '5%' }}
                    multiline
                >
                    {desc}
                </Caption>
            ))}

            <Section>
                <Cell
                    multiline
                >
                    {fullDescription}
                </Cell>
            </Section>
            <INITTrainingBuyButton title={trainingPlan.title} trainingId={trainingPlan.trainingPlanId}/>
        </List>
    );
};

export default TrainingPlanPromo;