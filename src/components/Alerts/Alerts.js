import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import Alert from './Alert/Alert';

  
function Alerts() {

    useEffect(() => {
        fetchAlerts();
    }, []);

    const [alerts, setAlerts] = useState([]);

    const fetchAlerts = async () => {
        const fetchAlerts = await fetch(
            `http://localhost:3000/alerts/all`
        );

        const alerts = await fetchAlerts.json();
        setAlerts(alerts);
    };

    return (
        <div>
            <h1>Alerts</h1>
            {alerts.map(alert => {
                return(
                        <Link to={`/device/${alert.deviceId}`}>
                            <Alert
                                alert = {alert}
                                key = {alert._id}
                            />
                        </Link>
                );
            })}
        </div>
    );
};

export default Alerts;