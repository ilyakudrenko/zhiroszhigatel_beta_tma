import React, {useEffect, useState} from 'react';
import {AppRoot, Badge, Banner, Button, Section} from "@telegram-apps/telegram-ui";
import '@telegram-apps/telegram-ui/dist/styles.css';
import INITDivider from "../../CustomComponents/Dividers/Divider";
import INITBackButton from "../../../Hooks/BackButton";
import fetchUserMealPlan from "../../CustomComponents/UserSession/fetchUserMealPlan";
import fetchUserMealPlanDays from "../../CustomComponents/UserSession/fetchUserMealPlanDays";
import {useNavigate} from "react-router-dom";

const roundedCellStyle = {
    borderRadius: '16px',
    overflow: 'hidden', // Ensures rounded corners display properly
    backgroundColor: 'var(--tgui--secondary_bg_color)',
};

const handleClick = () => {
    alert("Button clicked!");
};

const MealPlanNavigation = () => {
    const [mealPlans, setMealPlans] = useState([]);
    const [mealPlanDays, setMealPlanDays] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    INITBackButton();

    useEffect(() => {
        const loadMealPlans = async () => {
            try {
                const data = await fetchUserMealPlan();
                const data_days = await fetchUserMealPlanDays();
                console.log(data);
                console.log(data_days);
                setMealPlans(data);
                setMealPlanDays(data_days);
            } catch (err) {
                setError("Failed to fetch meal plans. Please try again.");
            }
        };

        loadMealPlans();
    }, []);

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
                                src="https://www.nasa.gov/wp-content/uploads/2023/10/streams.jpg?resize=1536,864"
                                style={{width: '150%'}}/>}
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
                                src="https://www.nasa.gov/wp-content/uploads/2023/10/streams.jpg?resize=1536,864"
                                style={{width: '150%'}}/>}
               //callout="Urgent notification"
               description="Видео рецепты моих вкусняш, на которых я похудел на 30 кг"
               header="Кулинарный урок вкусняшек"
               // onCloseIcon={function noRefCheck(){}}
               type="section"
               style={roundedCellStyle}
           >
               <React.Fragment key=".0">
                   <Button size="s" onClick={handleClick}>
                       Перейти
                   </Button>
               </React.Fragment>
           </Banner>
           <INITDivider color='transparent' thickness="10%"/>

           {/*БОНУС Знания о питании*/}
           <Banner
               background={<img alt="Nasa streams"
                                src="https://www.nasa.gov/wp-content/uploads/2023/10/streams.jpg?resize=1536,864"
                                style={{width: '150%'}}/>}
               callout={<Badge type={"number"}>бонус</Badge>}
               description="Рекомендованная литература про питание"
               header="Знания о питании"
               // onCloseIcon={function noRefCheck(){}}
               type="section"
               style={roundedCellStyle}
           >
               <React.Fragment key=".0">
                   <Button size="s" onClick={handleClick}>
                       Перейти
                   </Button>
               </React.Fragment>
           </Banner>
           <INITDivider color='transparent' thickness="10%"/>

           {/*Мои приборы для простого и вкусного похудения*/}
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
                   <Button size="s" onClick={handleClick}>
                       Перейти
                   </Button>
               </React.Fragment>
           </Banner>
           <INITDivider color='transparent' thickness="10%"/>

           {/*Сборник рецептов перекусов*/}
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
                   <Button size="s" onClick={handleClick}>
                       Перейти
                   </Button>
               </React.Fragment>
           </Banner>
           <INITDivider color='transparent' thickness="10%"/>
       </AppRoot>
    );
};

export default MealPlanNavigation;