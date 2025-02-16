import {useEffect, useState} from "react";
import fetchUserTrainingPlanJWT from "../../CustomComponents/userSessionJWT/fetchUserTrainingPlanJWT";
import fetchUserTrainingPlanWorkoutsJWT from "../../CustomComponents/userSessionJWT/fetchUserTrainingPlanWorkoutsJWT";
import fetchUserExercises from "../../CustomComponents/UserSession/fetchUserEcercises";
import fetchUserExercisesReps from "../../CustomComponents/UserSession/fetchUserExercisesReps";
import {AppRoot, Button, Caption, Cell, List, Section, Spinner, Title} from "@telegram-apps/telegram-ui";
import INITBackButton from "../../../Hooks/BackButton";
import {useLocation} from "react-router-dom";



const TrainingPlanTesting = ({}) => {
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
            try {
                setLoading(true);

                // Fetch training plan details
                const plans = await fetchUserTrainingPlanJWT();
                setTrainingPlans(plans);

                // Fetch workouts for the selected training plan
                const fetchedWorkouts = await fetchUserTrainingPlanWorkoutsJWT(
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
                <Title>
                    {currentWorkout.name}
                </Title>
                {
                    filteredExercises.map((exercise, index) => (
                        <Section
                            key={index}
                            header={index}
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
                                <a
                                    href={exercise.exerciseURL_youtube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    YouTube
                                </a>{" "}
                                |{" "}
                                <a
                                    href={exercise.exerciseURL_google}
                                    target="_blank"
                                    rel="noopener noreferrer"
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
                        style={{ marginRight: "10px" }}
                    >
                        Previous
                    </Button>
                    <Button
                        mode="filled"
                        disabled={currentWorkoutIndex === workouts.length - 1}
                        onClick={handleNextWorkout}
                    >
                        Next
                    </Button>
                </div>
            </List>
        </AppRoot>
);
};

export default TrainingPlanTesting;
