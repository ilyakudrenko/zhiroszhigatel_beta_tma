import {useEffect, useState} from "react";
import fetchUserTrainingPlan from "../../CustomComponents/UserSession/fetchUserTrainingPlan";
import fetchUserTrainingPlanWorkouts from "../../CustomComponents/UserSession/fetchUserTrainingPlanWorkouts";
import fetchUserExercises from "../../CustomComponents/UserSession/fetchUserEcercises";
import fetchUserExercisesReps from "../../CustomComponents/UserSession/fetchUserExercisesReps";
import {AppRoot, Button, Caption, Cell, List, Section, Spinner, Title} from "@telegram-apps/telegram-ui";
import INITBackButton from "../../../Hooks/BackButton";



const TrainingPlanTesting = ({ trainingPlanId }) => {
    const [trainingPlans, setTrainingPlans] = useState([]);
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

                // Fetch training plan details
                const plans = await fetchUserTrainingPlan();
                setTrainingPlans(plans);

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
                {
                    filteredExercises.map((exercise, index) => (
                        <Section
                            key={index}
                            header="TEST TEST TEST"
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


//
//
//     <List>
        // {/* Training Plan Header */}
        // <Title level="2" weight="bold" style={{marginBottom: "10px"}}>
        // {trainingPlans[0]?.title || "Training Plan"}
        // </Title>
        // <Caption style={{marginBottom: "20px"}}>
        // {trainingPlans[0]?.description || "No additional information."}
        // </Caption>
//
//     {/* Current Workout */}
//     {currentWorkout && (
//         <Section header={`Workout: ${currentWorkout.trainingPlanWorkout_name}`}>
//             <Caption>{currentWorkout.trainingPlanWorkout_description}</Caption>
//             <Title level="3" weight="bold" style={{ marginTop: "10px" }}>
//                 Exercises
//             </Title>
//
//             {/* Exercises */}
//             {filteredExercises.map((exercise, index) => (
//                 <Section
//                     key={index}
//                     header={exercise.exerciseName || "Exercise"}
//                 >
//                     <Cell>
//                         <b>Muscle Group:</b> {exercise.exerciseMuscle_group || "N/A"}
//                     </Cell>
//                     <Cell>
//                         <b>Video Links:</b>
//                         <a
//                             href={exercise.exerciseURL_youtube}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             YouTube
//                         </a>{" "}
//                         |{" "}
//                         <a
//                             href={exercise.exerciseURL_google}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             Google Drive
//                         </a>
//                     </Cell>
//
//                     {/* Repetitions */}
//                     <Title level="4" weight="bold" style={{ marginTop: "10px" }}>
//                         Repetitions
//                     </Title>
//                     <List>
//                         {reps
//                             .filter((rep) => rep.repExercise_id === exercise.exerciseId)
//                             .map((rep, repIndex) => (
//                                 <Cell key={repIndex}>
//                                     Week {rep.repWeek_number}: {rep.repRepetitions}
//                                 </Cell>
//                             ))}
//                     </List>
//                 </Section>
//             ))}
//         </Section>
//     )}
//
//     {/* Workout Navigation */}
//     <div
//         style={{
//             display: "flex",
//             justifyContent: "center",
//             marginTop: "20px",
//         }}
//     >
//         <Button
//             mode="filled"
//             disabled={currentWorkoutIndex === 0}
//             onClick={handlePreviousWorkout}
//             style={{ marginRight: "10px" }}
//         >
//             Previous
//         </Button>
//         <Button
//             mode="filled"
//             disabled={currentWorkoutIndex === workouts.length - 1}
//             onClick={handleNextWorkout}
//         >
//             Next
//         </Button>
//     </div>
// </List>