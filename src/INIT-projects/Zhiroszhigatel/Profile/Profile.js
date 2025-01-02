// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { AppRoot } from "@telegram-apps/telegram-ui";
//
// const Profile = () => {
//     // const [userData, setUserData] = useState(null); // Данные пользователя
//     // const [loading, setLoading] = useState(true);  // Флаг загрузки
//     // const [error, setError] = useState(null);      // Флаг ошибки
//     //
//     // useEffect(() => {
//     //     // Получение username из Telegram
//     //     const username = window.Telegram.WebApp?.initDataUnsafe?.user?.username;
//     //
//     //     if (!username) {
//     //         setError("Username not provided by Telegram.");
//     //         setLoading(false);
//     //         return;
//     //     }
//     //
//     //     // Запрос на сервер для проверки/создания пользователя
//     //     const fetchUser = async () => {
//     //         try {
//     //             const response = await axios.post("http://localhost:3300/login", { username });
//     //             setUserData(response.data); // Сохраняем данные пользователя
//     //         } catch (err) {
//     //             console.error("Error fetching user data:", err);
//     //             setError("Failed to fetch user data.");
//     //         } finally {
//     //             setLoading(false); // Завершаем загрузку
//     //         }
//     //     };
//     //
//     //     fetchUser();
//     // }, []);
//     //
//     // // Отображение в зависимости от состояния
//     // if (loading) return <div>Loading...</div>;
//     // if (error) return <div>{error}</div>;
//
//     const fetchUserData = async () => {
//         try {
//             const response = await axios.post('http://localhost:3300/login', {
//                 username: 'test_user_001', // Подставьте значение username
//             });
//             console.log('User data:', response.data);
//         } catch (error) {
//             console.error('Failed to fetch user data:', error);
//         }
//     };
//
//     fetchUserData();
//     return (
//         <AppRoot>
//             <h1>Profile Page</h1>
//             {/*<div>*/}
//             {/*    <strong>Username: </strong>*/}
//             {/*    {userData.username}*/}
//             {/*</div>*/}
//             {/*<div>*/}
//             {/*    <strong>ID: </strong>*/}
//             {/*    {userData.id}*/}
//             {/*</div>*/}
//             {/*<div>*/}
//             {/*    <strong>Registration Date: </strong>*/}
//             {/*    {new Date(userData.registration_date).toLocaleString()}*/}
//             {/*</div>*/}
//             {/*<div>*/}
//             {/*    <strong>Last Login: </strong>*/}
//             {/*    {new Date(userData.last_login).toLocaleString()}*/}
//             {/*</div>*/}
//         </AppRoot>
//     );
// };
//
// export default Profile;




//TEST 2 <<<<<<< - - -- -- - - ------ -- - -- -- - -->>>>>>
import React, { useEffect, useState } from "react";
import axios from "axios";
import INITBackButton from "../../../Hooks/BackButton";
import {Spinner} from "@telegram-apps/telegram-ui";

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    INITBackButton();//back button profile

    useEffect(() => {
        const username = window.Telegram.WebApp?.initDataUnsafe?.user?.username;

        if (!username) {
            setError("Username not provided by Telegram.");
            setLoading(false);
            return;
        }

        axios.post("https://init-railway-backend-production.up.railway.app/users/login", {username})
            .then((response) => {
                setUserData(response.data); // Сохраняем данные пользователя
                console.log("User data fetched:", response.data);
            })
            .catch((err) => {
                console.error("Failed to fetch user data:", err);
                setError("Failed to fetch user data.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) return <div style={{border: '1px dashed #9747FF', borderRadius: '5px', padding: '20px', width: '400px'}}><Spinner size="l"/>{' '}<br/></div>;
    if (error) return <div style={{color: "red"}}>{error}</div>;

    return (
        <div>
            <h1>Welcome to your Profile!</h1>
            {userData && (
                <>
                    <p><strong>Username:</strong> {userData.username}</p>
                    <p><strong>ID:</strong> {userData.id}</p>
                    {/*<p><strong>Registration Date:</strong> {new Date(userData.registration_date).toLocaleString()}</p>*/}
                    {/*<p><strong>Last Login:</strong> {new Date(userData.last_login).toLocaleString()}</p>*/}
                </>
            )}
        </div>
    );
};

export default Profile;