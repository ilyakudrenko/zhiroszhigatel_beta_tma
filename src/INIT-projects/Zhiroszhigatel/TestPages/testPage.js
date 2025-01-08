import React, { useState } from "react";
import axios from "axios";

const TestConnection = () => {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);
    const testConnection = async () => {
            axios.get('https://init-railway-backend-v2-production.up.railway.app/test-db', {
                withCredentials: true
            })
                .then(response => console.log(response.data))
                .catch(error => console.error("Fetch error:", error));

    };

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Database Connection Test V2</h1>
            <button onClick={testConnection} style={{ padding: "10px 20px", cursor: "pointer" }}>
                Test Connection
            </button>
        </div>
    );
};

export default TestConnection;