import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchBasicTrainingProgram from "../../../CustomComponents/UserSession/fetchBasicTrainingProgram"


const TrainingProgram = () => {

    const { userId, trainingId } = useParams(); // Получение userId и trainingId из URL
    const [trainingData, setTrainingData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchBasicTrainingProgram(userId, trainingId);
                setTrainingData(data);
                setLoading(false);
            } catch (err) {
                setError('Ошибка загрузки данных');
                setLoading(false);
            }
        };

        fetchData();
    }, [userId, trainingId]);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Базовый План Тренировок</h1>
            {trainingData?.workouts.map((workout) => (
                <div key={workout.id}>
                    <h2>{workout.name}</h2>
                    <p>{workout.description}</p>
                    <ul>
                        {workout.exercises.map((exercise) => (
                            <li key={exercise.id}>
                                <h3>{exercise.name}</h3>
                                <p>Подходов: {exercise.sets}</p>
                                <p>Повторений: {exercise.reps}</p>
                                <p>{exercise.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default TrainingProgram;