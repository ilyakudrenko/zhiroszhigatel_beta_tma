import React, {useEffect, useState} from 'react';
import {AppRoot, Badge, Banner, Button, Modal, Section} from "@telegram-apps/telegram-ui";
import '@telegram-apps/telegram-ui/dist/styles.css';
import INITDivider from "../../CustomComponents/Dividers/Divider";
import INITBackButton from "../../../Hooks/BackButton";
import fetchUserMealPlanJWT from "../../CustomComponents/userSessionJWT/fetchUserMealPlanJWT";
import fetchUserMealPlanDays from "../../CustomComponents/UserSession/fetchUserMealPlanDays";
import {useNavigate} from "react-router-dom";
import {
    ModalHeader
} from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
import {ModalClose} from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalClose/ModalClose";
import {Icon28Close} from "@telegram-apps/telegram-ui/dist/icons/28/close";
import INITBonus from "./MealsCategories/Bonus";
import INITCookingTools from "./MealsCategories/CookingTools";
import INITRecipes from "./MealsCategories/Recipes";

import cookinglesosnImg from "../MealPlans/Images/cookingles.png";
import rationsbannerImg from "../MealPlans/Images/rationsbanner.png";
import zopbonusImg from "../MealPlans/Images/zopbonus.png";
import snackImg from "../TrainingPlans/CardImages/snack.jpg";
import cookingtoolsImg from "../TrainingPlans/CardImages/cookingtoolsimage.jpg";
import useUserSession from "../../CustomComponents/userSessionJWT/sessionJWT";


const roundedCellStyle = {
    borderRadius: '16px',
    overflow: 'hidden', // Ensures rounded corners display properly
    backgroundColor: 'black',
};

const handleClick = () => {
    alert("Button clicked!");
};

const MealPlanNavigation = () => {
    const { userSession, loading: sessionLoading } = useUserSession(); // JWT Session
    const [mealPlans, setMealPlans] = useState([]);
    const [mealPlanDays, setMealPlanDays] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    INITBackButton();

    useEffect(() => {
        const loadMealPlans = async () => {
            if(sessionLoading){
                console.log("🔷Waiting for session load🔷");
                return;
            }
            if(!userSession || !userSession.token){
                console.error("❌ No valid session found, aborting fetch.");
                setError("User not authenticated");
                return;
            }
            try {
                const data = await fetchUserMealPlanJWT(userSession.token);
                const data_days = await fetchUserMealPlanDays(userSession.token);
                console.log(data);
                console.log(data_days);
                setMealPlans(data);
                setMealPlanDays(data_days);
            } catch (err) {
                setError("Failed to fetch meal plans. Please try again.");
            }
        };

        loadMealPlans();
    }, [userSession, sessionLoading]);

    if(error){
        return (
            <AppRoot>
                <Section>
                    <p style={{color: "red", textAlign: "center"}}>
                        {error}
                    </p>
                </Section>
            </AppRoot>
        );
    }

    return (
       <AppRoot>
           {/*Рационы*/}
           <Banner
               background={<img alt="Nasa streams"
                                src={rationsbannerImg}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover" // Ensures the image fills the available space
                                }}
                            />}
               //callout="Urgent notification"
               description= {mealPlans[0]?.mealPlan_title || "Meal Plan"}
               header="Ваш Рацион"
               // onCloseIcon={function noRefCheck(){}}
               type="section"
               style={roundedCellStyle}
           >
               <React.Fragment key=".0">
                   <Button size="s" onClick={() => navigate("/rations")}>
                       Перейти
                   </Button>
               </React.Fragment>
           </Banner>
           <INITDivider color='transparent' thickness="10%"/>

           {/*Кулинарный урок вкусняшек*/}
           <Banner
               background={<img alt="Nasa streams"
                                src={cookinglesosnImg}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover" // Ensures the image fills the available space
                                }}
                            />}
               //callout="Urgent notification"
               description="Видео рецепты моих вкусняш, на которых я похудел на 30 кг"
               header="Кулинарный урок вкусняшек"
               // onCloseIcon={function noRefCheck(){}}
               type="section"
               style={roundedCellStyle}
           >
               <React.Fragment key=".0">
                   <Button size="s" onClick={() => navigate("/cookingLesson")}>
                       Перейти
                   </Button>
               </React.Fragment>
           </Banner>
           <INITDivider color='transparent' thickness="10%"/>

           {/*БОНУС Знания о питании*/}
           <Modal
               header={<ModalHeader
                   after={<ModalClose><Icon28Close style={{color: 'var(--tgui--plain_foreground)'}}/></ModalClose>}>Знания о питании</ModalHeader>}
               trigger={
                   <Banner
                       background={<img alt="Nasa streams"
                                        src={zopbonusImg}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover" // Ensures the image fills the available space
                                        }}
                                    />}
                       callout={<Badge type={"number"}>бонус</Badge>}
                       description="Рекомендованная литература про питание"
                       header="Знания о питании"
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
               <INITBonus />
           </Modal>
           <INITDivider color='transparent' thickness="10%"/>

           {/*Мои приборы для простого и вкусного похудения*/}
           <Modal
               header={<ModalHeader
                   after={<ModalClose><Icon28Close style={{color: 'var(--tgui--plain_foreground)'}}/></ModalClose>}>Мои приборы для простого и вкусного похудения</ModalHeader>}
               trigger={
                   <Banner
                       background={<img alt="Nasa streams"
                                        src={cookingtoolsImg}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover" // Ensures the image fills the available space
                                        }}
                                    />}
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
                                        src={snackImg}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover" // Ensures the image fills the available space
                                        }}
                                    />}
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

export default MealPlanNavigation;