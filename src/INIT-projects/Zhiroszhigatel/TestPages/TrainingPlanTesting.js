import {useEffect, useState} from "react";
import INITBackButton from "../../../Hooks/BackButton";
import fetchUserTrainingPlan from "../../CustomComponents/UserSession/fetchUserTrainingPlan";
import fetchUserTrainingPlanWorkouts from "../../CustomComponents/UserSession/fetchUserTrainingPlanWorkouts";
import fetchUserExercises from "../../CustomComponents/UserSession/fetchUserEcercises";
import fetchUserExercisesReps from "../../CustomComponents/UserSession/fetchUserExercisesReps";
import {AppRoot, Button, Caption, Cell, List, Section, Spinner, Title} from "@telegram-apps/telegram-ui";



const TrainingPlanTesting = ({ trainingPlanId }) => {
    const [workouts, setWorkouts] = useState([]);
    const [currentWorkoutIndex, setCurrentWorkoutIndex] = useState(0);
    const [exercises, setExercises] = useState([]);
    const [reps, setReps] = useState([]);
    const [loading, setLoading] = useState(true);

    INITBackButton();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                // Fetch workouts for the selected training plan
                const fetchedWorkouts = await fetchUserTrainingPlanWorkouts(
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
                <div style={{ textAlign: "center", padding: "20px" }}>
                    <Text>Loading...</Text>
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
            <div style={{ padding: "15px" }}>
                <Title level="2" weight="bold">
                    {currentWorkout?.trainingPlanWorkout_name || "Workout"}
                </Title>
                <Caption>{currentWorkout?.trainingPlanWorkout_description}</Caption>

                {/* Exercises Section */}
                {filteredExercises.map((exercise, index) => (
                    <Section key={index} style={{ marginTop: "20px" }}>
                        <Title level="3" weight="bold">
                            Упражнение
                        </Title>
                        <Text>{exercise.exerciseName}</Text>

                        <Text weight="medium" style={{ marginTop: "10px" }}>
                            Подходы * Повторения по неделям
                        </Text>
                        <Text>
                            {reps
                                .filter((rep) => rep.repExercise_id === exercise.exerciseId)
                                .map((rep) => rep.repRepetitions)
                                .join(" | ")}
                        </Text>

                        <Text weight="medium" style={{ marginTop: "10px" }}>
                            Применение. Мышцы.
                        </Text>
                        <Text>{exercise.exerciseMuscle_group || "N/A"}</Text>

                        <Text weight="medium" style={{ marginTop: "10px" }}>
                            Видео уроки.
                        </Text>
                        <div>
                            <a
                                href={exercise.exerciseURL_youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: "block", marginBottom: "5px" }}
                            >
                                Ссылка на урок (YouTube)
                            </a>
                            <a
                                href={exercise.exerciseURL_google}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ссылка на урок (Google Drive)
                            </a>
                        </div>
                    </Section>
                ))}

                {/* Navigation Buttons */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "20px",
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
            </div>
        </AppRoot>
    );
};

export default TrainingPlanTesting;