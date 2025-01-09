import React, { useState } from "react";
import axios from "axios";

const TestConnection = () => {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);
    const testConnection = async () => {
        try{
            const response = await axios.get('https://init-railway-backend-v2-production.up.railway.app/setup/setup-tables',
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
            <h1>Database Connection Test V2</h1>
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