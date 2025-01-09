import React, { useState } from "react";
import axios from "axios";

const TestConnection = () => {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);
    const testConnection = async () => {
        try{
            const response = await axios.get('',
                {
                withCredentials: true
                }
            );
                setStatus(response.data.message);
                setError(null);
                // .then(response => console.log(response.data))
                // .catch(error => console.error("Fetch error:", error));
        }catch(error){
            setError(error.message);
            setStatus(null);
        }


    };

    return (
        <div style={{padding: "20px", textAlign: "center"}}>
            <h1>Database Connection Test V2 </h1>
            <h1>DO NOT CLICK WILL RECREATE TABLES IN DATABASE </h1>
            <button
                onClick={testConnection}
                style={{padding: "10px 20px", cursor: "pointer"}}
            >
                Test Connection
            </button>
            {/* Сообщение об успешной связи */}
            {status && <p style={{color: "green"}}>{status}</p>}
            {/* Сообщение об ошибке */}
            {error && <p style={{color: "red"}}>{error}</p>}
        </div>
    );
};

export default TestConnection;