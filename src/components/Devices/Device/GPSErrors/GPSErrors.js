import React, { useState, useEffect } from 'react';
import GPSErrorsAlerts from './GPSErrorsAlerts';
import GPSErrorsMap from './GPSErrorsMap';
import Map from '../Map/Map';
  
function GPSErrors({match}) {

    useEffect(() => {
        fetchData();
    }, []);

    const [data, setData] = useState([
        {
            updates: [{
                updates: [{}],
                deviceId: ""
            }],
        }
    ]);

    const fetchData = async () => {
        const fetchData = await fetch(
            `http://localhost:3000/alerts/gps_errors/${match.params.id}`
        );

        const info = await fetchData.json();
        setData(info);
    };

    console.log(data);

    const alerts = data.map(alert => {

        //console.log(alert.updates[0]);

        return(
            <div key={alert._id}>
                <Map id={match.params.id}/>

                <h5>Alerts</h5>
                <GPSErrorsAlerts data={alert}/>
                <GPSErrorsMap id={alert.deviceId} updates={alert.updates}/>
            </div>
        );
    })

    return (
        <div>
            <h3>GPS Erros: {data.length}</h3>
            {alerts}
        </div>
    );
};

export default GPSErrors;