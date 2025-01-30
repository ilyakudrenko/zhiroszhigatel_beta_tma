import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import INITBackButton from "../../../Hooks/BackButton";
import {AppRoot, Badge, Banner, Button, Modal} from "@telegram-apps/telegram-ui";
import INITDivider from "../../CustomComponents/Dividers/Divider";
import {
    ModalHeader
} from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
import {ModalClose} from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalClose/ModalClose";
import {Icon28Close} from "@telegram-apps/telegram-ui/dist/icons/28/close";
import INITBonus from "../MealPlans/MealsCategories/Bonus";
import INITCookingTools from "../MealPlans/MealsCategories/CookingTools";
import INITRecipes from "../MealPlans/MealsCategories/Recipes";
import INITHormones from "./TrainingCategories/Hormones";
import fetchUserTrainingPlan from "../../CustomComponents/UserSession/fetchUserTrainingPlan";

const roundedCellStyle = {
    borderRadius: '16px',
    overflow: 'hidden', // Ensures rounded corners display properly
    backgroundColor: 'var(--tgui--secondary_bg_color)',
};

const TrainingPlanNavigation = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const training_id = location.state?.training_id;

    const [userTrainingPlans, setUserTrainingPlans] = useState([]);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userPlans = await fetchUserTrainingPlan();
                setUserTrainingPlans(userPlans);

                // Проверяем, есть ли у пользователя выбранный план
                const matchedPlan = userPlans.find(plan => plan.trainingPlanId === training_id);
                setSelectedPlan(matchedPlan);
            } catch (error) {
                console.error("Ошибка загрузки тренировочных планов:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [training_id]);

    if (loading) return <p>Загрузка...</p>;

    if (!selectedPlan) {
        return (
            <AppRoot>
                <p>Выбранный план не найден. Возможно, его нужно приобрести.</p>
                <Button onClick={() => navigate("/home")}>Вернуться назад</Button>
            </AppRoot>
        );
    }

    INITBackButton();

    return (
        <AppRoot>
            <div>
                Navigation Page
            </div>

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
                    <Button size="s" onClick={() => navigate("/gymlessons")}>
                        Перейти
                    </Button>
                </React.Fragment>
            </Banner>
            <INITDivider color='transparent' thickness="10%"/>


            {/* План тренировок */}
            <Banner
                background={<img alt="Nasa streams"
                                 src="https://www.nasa.gov/wp-content/uploads/2023/10/streams.jpg?resize=1536,864"
                                 style={{width: '150%'}}/>}
                description={selectedPlan.description}
                header="selectedPlan.title"
                type="section"
                style={roundedCellStyle}
            >
                <React.Fragment key=".0">
                    <Button size="s" onClick={() => navigate(`/trainingprogram/${training_id}`)}>
                        Перейти
                    </Button>
                </React.Fragment>
            </Banner>
            <INITDivider color='transparent' thickness="10%"/>

            {/*БОНУС Гормоны виноваты в ожирении*/}
            <Modal
                header={<ModalHeader
                    after={<ModalClose><Icon28Close style={{color: 'var(--tgui--plain_foreground)'}}/></ModalClose>}>БОНУС Гормоны виноваты в ожирении</ModalHeader>}
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

export default TrainingPlanNavigation;