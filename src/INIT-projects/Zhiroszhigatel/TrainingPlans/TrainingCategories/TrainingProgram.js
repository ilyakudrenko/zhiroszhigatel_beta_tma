import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import INITBackButton from "../../../../Hooks/BackButton";
import fetchUserTrainingPlanJWT from "../../../CustomComponents/userSessionJWT/fetchUserTrainingPlanJWT";
import fetchUserTrainingPlanWorkoutsJWT from "../../../CustomComponents/userSessionJWT/fetchUserTrainingPlanWorkoutsJWT";
import fetchUserExercises from "../../../CustomComponents/userSessionJWT/fetchUserExercisesJWT";
import fetchUserExercisesReps from "../../../CustomComponents/userSessionJWT/fetchUserExercisesRepsJWT";
import {AppRoot, Button, Cell, Image, List, Section, Spinner, Title} from "@telegram-apps/telegram-ui";

import workoutImg from "../CardImages/workoutimage.jpg";
import useUserSession from "../../../CustomComponents/userSessionJWT/sessionJWT";

const TrainingProgram = () => {
    const { userSession, loading: sessionLoading } = useUserSession(); // JWT Session
    const [trainingPlans, setTrainingPlans] = useState([]);
    const [workouts, setWorkouts] = useState([]);
    const [currentWorkoutIndex, setCurrentWorkoutIndex] = useState(0);
    const [exercises, setExercises] = useState([]);
    const [reps, setReps] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const trainingPlanId = location.state?.trainingPlanId;


    INITBackButton();

    useEffect(() => {
        const fetchData = async () => {
            console.log("📌 Старт загрузки данных...");

            if(sessionLoading){
                console.log("🔷Waiting for session load🔷");
                return;
            }
            if(!userSession || !userSession.token){
                console.error("❌ No valid session found, aborting fetch.");
                // setError("User not authenticated");
                setLoading(false);
                return;
            }

            if (!trainingPlanId) {
                console.error("❌ Ошибка: ID тренировочного плана не найден.");
                setError("ID тренировочного плана отсутствует.");
                setLoading(false);
                return;
            }
            console.log(`✅ Загружаем тренировки для trainingPlanId: ${trainingPlanId}`);

            try {
                setLoading(true);

                // Fetch training plan details
                const plans = await fetchUserTrainingPlanJWT(userSession.token);
                setTrainingPlans(plans);

                // Fetch workouts for the selected training plan
                const fetchedWorkouts = await fetchUserTrainingPlanWorkoutsJWT( userSession.token,
                    trainingPlanId
                );
                setWorkouts(fetchedWorkouts);

                // Fetch exercises for each workout
                const fetchedExercises = await Promise.all(
                    fetchedWorkouts.map((workout) =>
                        fetchUserExercises(workout.trainingPlanWorkout_id)
                    )
                );
                setExercises(fetchedExercises.flat());

                // Fetch repetitions for all exercises
                const fetchedReps = await Promise.all(
                    fetchedExercises.flat().map((exercise) =>
                        fetchUserExercisesReps(exercise.exerciseId)
                    )
                );
                setReps(fetchedReps.flat());
                setLoading(false);
            } catch (error) {
                console.error("Error fetching training plan data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [trainingPlanId]);

    const handleNextWorkout = () => {
        if (currentWorkoutIndex < workouts.length - 1) {
            setCurrentWorkoutIndex(currentWorkoutIndex + 1);
        }
    };

    const handlePreviousWorkout = () => {
        if (currentWorkoutIndex > 0) {
            setCurrentWorkoutIndex(currentWorkoutIndex - 1);
        }
    };

    if (loading) {
        return (
            <AppRoot>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "50vh",
                    }}
                >
                    <Spinner size="l" />
                </div>
            </AppRoot>
        );
    }

    const currentWorkout = workouts[currentWorkoutIndex];
    const filteredExercises = exercises.filter(
        (exercise) => exercise.exerciseWorkout_id === currentWorkout?.trainingPlanWorkout_id
    );

    return (
        <AppRoot>
            <List>

                <Image
                    src= {workoutImg}
                    style={{
                        width: '100%',
                        height: '40vh',
                        objectFit: 'cover',
                        borderRadius: '8px'
                    }}
                />

                <Title>
                    {currentWorkout.trainingPlanWorkout_name ? currentWorkout.trainingPlanWorkout_name : "Название не найдено"}
                </Title>
                {
                    filteredExercises.map((exercise, index) => (
                        <Section
                            key={index}
                            // header={index}
                        >
                            <Cell
                                multiline
                                subhead="Упражнение"
                            >
                                {exercise.exerciseName || "Не указано"}
                            </Cell>
                            <Cell
                                multiline
                                subhead="Подходы * Повторения по неделям"
                            >
                            <span>
                                {reps
                                    .filter((rep) => rep.repExercise_id === exercise.exerciseId)
                                    .map((rep, repIndex) => (
                                        <span key={repIndex}>
                                            {rep.repRepetitions} |
                                        </span>
                                    ))}
                            </span>
                            </Cell>
                            <Cell
                                multiline
                                subhead="Применение. Мышцы."
                            >
                                {exercise.exerciseMuscle_group || "Не указано"}
                            </Cell>
                            <Cell
                                multiline
                                subhead="Видео уроки"
                            >

                                {/*<iframe width="996" height="616" src="https://www.youtube.com/embed/UOICjnwypmk"*/}
                                {/*        title="жим штанги лежа на наклонной скамье" frameBorder="0"*/}
                                {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
                                {/*        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>*/}

                                <div style={{textAlign: "center"}}>
                                    <iframe
                                        width="95%"
                                        height="215"
                                        src="https://www.youtube.com/embed/UOICjnwypmk"
                                        style={{
                                            border: "none",
                                            borderRadius: 16,
                                            padding: 5,
                                        }}
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>

                                {/*<a*/}
                                {/*    href={exercise.exerciseURL_youtube}*/}
                                {/*    target="_blank"*/}
                                {/*    rel="noopener noreferrer"*/}
                                {/*>*/}
                                {/*    YouTube*/}
                                {/*</a>*/}

                                <br/>

                                <a
                                    href={exercise.exerciseURL_google}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: '#82caff',
                                        textDecoration: 'underline',
                                        textDecorationColor: '#82caff'
                                    }}
                                >
                                    Google Drive
                                </a>
                            </Cell>
                        </Section>
                    ))}
                <div
                    style={{
                        position: "fixed",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        paddingBottom: "20px",
                        zIndex: 1000,
                    }}
                >
                    <Button
                        mode="filled"
                        disabled={currentWorkoutIndex === 0}
                        onClick={handlePreviousWorkout}
                        style={{marginRight: "10px" }}
                    >
                        ←
                    </Button>
                    <Button
                        mode="filled"
                        disabled={currentWorkoutIndex === workouts.length - 1}
                        onClick={handleNextWorkout}
                    >
                        →
                    </Button>
                </div>
            </List>
        </AppRoot>
    );
};

export default TrainingProgram;