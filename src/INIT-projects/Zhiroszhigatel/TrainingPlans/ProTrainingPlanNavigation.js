import React from 'react';
import {useNavigate} from "react-router-dom";
import INITBackButton from "../../../Hooks/BackButton";
import {AppRoot, Badge, Banner, Button, Modal} from "@telegram-apps/telegram-ui";
import {
    ModalHeader
} from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
import {ModalClose} from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalClose/ModalClose";
import {Icon28Close} from "@telegram-apps/telegram-ui/dist/icons/28/close";
import INITBonus from "../MealPlans/MealsCategories/Bonus";
import INITDivider from "../../CustomComponents/Dividers/Divider";
import INITCookingTools from "../MealPlans/MealsCategories/CookingTools";
import INITRecipes from "../MealPlans/MealsCategories/Recipes";
import INITHormones from "./TrainingCategories/Hormones";

const roundedCellStyle = {
    borderRadius: '16px',
    overflow: 'hidden', // Ensures rounded corners display properly
    backgroundColor: 'var(--tgui--secondary_bg_color)',
};

const ProTrainingPlanNavigation = () => {

    const navigate = useNavigate();

    INITBackButton();

    return (
        <AppRoot>
            <div>
                Продвинутый уровень
            </div>

            <INITDivider color='transparent' thickness="10%"/>

            {/*Урок из тренажерного зала*/}
            <Banner
                background={<img alt="Nasa streams"
                                 src="https://www.nasa.gov/wp-content/uploads/2023/10/streams.jpg?resize=1536,864"
                                 style={{width: '150%'}}/>}
                description="Как делать надо, как делать не надо."
                header="Урок из тренажерного зала"
                // onCloseIcon={function noRefCheck(){}}
                type="section"
                style={roundedCellStyle}
            >
                <React.Fragment key=".0">
                    <Button size="s" onClick={() => navigate("/basictrainingprogram")}>
                        Перейти
                    </Button>
                </React.Fragment>
            </Banner>
            <INITDivider color='transparent' thickness="10%"/>

            {/*Продвинутый план тренировок*/}
            <Banner
                background={<img alt="Nasa streams"
                                 src="https://www.nasa.gov/wp-content/uploads/2023/10/streams.jpg?resize=1536,864"
                                 style={{width: '150%'}}/>}
                description="4 раза в неделю, для продвинутого уровня"
                header="Программа тренировок FULL BODY"
                // onCloseIcon={function noRefCheck(){}}
                type="section"
                style={roundedCellStyle}
            >
                <React.Fragment key=".0">
                    <Button size="s" onClick={() => navigate("/basictrainingprogram")}>
                        Перейти
                    </Button>
                </React.Fragment>
            </Banner>
            <INITDivider color='transparent' thickness="10%"/>

            {/*БОНУС Гормоны виноваты в ожирении*/}
            <Modal
                header={<ModalHeader
                    after={<ModalClose><Icon28Close style={{color: 'var(--tgui--plain_foreground)'}}/></ModalClose>}>Знания о питании</ModalHeader>}
                trigger={
                    <Banner
                        background={<img alt="Nasa streams"
                                         src="https://www.nasa.gov/wp-content/uploads/2023/10/streams.jpg?resize=1536,864"
                                         style={{width: '150%'}}/>}
                        callout={<Badge type={"number"}>бонус</Badge>}
                        description="Врач эндокринолог поясняет, как гормоны связанный с ожирением, нужно ли сдавать анализы и какие"
                        header="Гормоны виноваты в ожирении"
                        // onCloseIcon={function noRefCheck(){}}
                        type="section"
                        style={roundedCellStyle}
                    >
                        <React.Fragment key=".0">
                            <Button size="s">
                                Перейти
                            </Button>
                        </React.Fragment>
                    </Banner>
                }
            >
                <INITHormones />
            </Modal>
            <INITDivider color='transparent' thickness="10%"/>

            {/*Мои приборы для простого и вкусного похудения*/}
            <Modal
                header={<ModalHeader
                    after={<ModalClose><Icon28Close style={{color: 'var(--tgui--plain_foreground)'}}/></ModalClose>}>Мои приборы для простого и вкусного похудения</ModalHeader>}
                trigger={
                    <Banner
                        background={<img alt="Nasa streams"
                                         src="https://www.nasa.gov/wp-content/uploads/2023/10/streams.jpg?resize=1536,864"
                                         style={{width: '150%'}}/>}
                        //callout="Urgent notification"
                        //description=""
                        header="Мои приборы для простого и вкусного похудения"
                        // onCloseIcon={function noRefCheck(){}}
                        type="section"
                        style={roundedCellStyle}
                    >
                        <React.Fragment key=".0">
                            <Button size="s">
                                Перейти
                            </Button>
                        </React.Fragment>
                    </Banner>
                }
            >
                <INITCookingTools />
            </Modal>

            <INITDivider color='transparent' thickness="10%"/>

            {/*Сборник рецептов перекусов*/}
            <Modal
                header={<ModalHeader
                    after={<ModalClose><Icon28Close style={{color: 'var(--tgui--plain_foreground)'}}/></ModalClose>}>Сборник рецептов перекусов</ModalHeader>}
                trigger={
                    <Banner
                        background={<img alt="Nasa streams"
                                         src="https://www.nasa.gov/wp-content/uploads/2023/10/streams.jpg?resize=1536,864"
                                         style={{width: '150%'}}/>}
                        //callout="Urgent notification"
                        //description=""
                        header="Сборник рецептов перекусов"
                        // onCloseIcon={function noRefCheck(){}}
                        type="section"
                        style={roundedCellStyle}
                    >
                        <React.Fragment key=".0">
                            <Button size="s">
                                Перейти
                            </Button>
                        </React.Fragment>
                    </Banner>
                }
            >
                <INITRecipes />
            </Modal>
            <INITDivider color='transparent' thickness="10%"/>
        </AppRoot>
    );
};

export default ProTrainingPlanNavigation;