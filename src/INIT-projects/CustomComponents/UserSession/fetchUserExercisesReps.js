import axios from 'axios';

const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;

const fetchUserExercises = async ( exerciseId ) =>{

    try{
        console.log(exerciseId);
        const response = await axios.get(`${BACKEND_PUBLIC_URL}/trainings/reps`, {
            params: { exerciseId },
        });

        const reps = response.data.map((rep) => ({
            repId: rep.id,
            repExercise_id: rep.exercise_id,
            repWeek_number: rep.week_number,
            repRepetitions: rep.repetitions,
        }));

        return reps;
    } catch (error) {
        console.error('Failed to fetch user experiences:', error);
        throw error;
    }
}

export default fetchUserExercises;