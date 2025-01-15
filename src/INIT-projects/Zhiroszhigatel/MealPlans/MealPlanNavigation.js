import React, {useEffect, useState} from 'react';
import {AppRoot, Caption, Cell, List, Section, Title} from "@telegram-apps/telegram-ui";
import '@telegram-apps/telegram-ui/dist/styles.css';
import INITDivider from "../../CustomComponents/Dividers/Divider";
import INITBackButton from "../../../Hooks/BackButton";
import fetchUserMealPlan from "../../CustomComponents/UserSession/fetchUserMealPlan";
import fetchUserMealPlanDays from "../../CustomComponents/UserSession/fetchUserMealPlanDays";
import INITBanner from "../../CustomComponents/Banner/Banner";


const MealPlanNavigation = () => {
    const [mealPlans, setMealPlans] = useState([]);
    const [mealPlanDays, setMealPlanDays] = useState([]);
    const [error, setError] = useState(null);

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

           <INITBanner />
           <INITDivider color='transparent' thickness="10%"/>

           <INITBanner />
           <INITDivider color='transparent' thickness="10%"/>

           <INITBanner />
           <INITDivider color='transparent' thickness="10%"/>

           <INITBanner />
           <INITDivider color='transparent' thickness="10%"/>

           <INITBanner />
           <INITDivider color='transparent' thickness="10%"/>
       </AppRoot>
    );
};

export default MealPlanNavigation;