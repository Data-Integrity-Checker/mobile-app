import React, { useState, useEffect } from 'react';
import Alert from './Alert/Alert';
  
function Alerts() {

    useEffect(() => {
        fetchAlerts();
    }, []);

    const [alerts, setAlerts] = useState([]);

    const fetchAlerts = async () => {
        const fetchAlerts = await fetch(
            `http://localhost:3000/devices/allAlerts`
        );

        const alerts = await fetchAlerts.json();
        setAlerts(alerts);
    };

    return (
        <div>
            <h1>Alerts</h1>
            {alerts.map(alert => {
                return <Alert
                    alert = {alert}
                    key = {alert._id}
                />
            })}
        </div>
    );
};

export default Alerts;