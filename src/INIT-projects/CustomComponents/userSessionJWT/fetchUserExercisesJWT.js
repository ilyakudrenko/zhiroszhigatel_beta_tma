import axios from 'axios';

const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;


const fetchUserExercises = async (workoutId) => {
    try {
        // console.log(workoutId);
        const response = await axios.get(`${BACKEND_PUBLIC_URL}/trainings/exercises`, {
            params: {workoutId}
        });

        const exercisesData = response.data.map((exercise) => ({
            exerciseId: exercise.id,
            exerciseWorkout_id: exercise.workout_id,
            exerciseName: exercise.name,
            exerciseURL_youtube: exercise.url_youtube,
            exerciseURL_google: exercise.url_google,
            exerciseMuscle_group: exercise.muscle_group,
        }));

        return exercisesData;
    } catch (error) {
        console.error('Failed to fetch user experiences:', error);
        throw error;
    }

}

export default fetchUserExercises;