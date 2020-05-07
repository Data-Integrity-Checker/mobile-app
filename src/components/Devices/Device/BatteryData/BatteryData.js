import React, { useState, useEffect } from 'react';
import Map from '../Map/Map';
import Battery from './BatteryChar';
//import Alerts from './DeviceAlerts/DeviceAlerts';
  
function DeviceDetails({match}) {

    useEffect(() => {
        fetchDetails();
    }, []);

    const [details, setDetails] = useState({
        location : {
            coordinates: {}
        },
        battery_history: [{}]
    });

    const fetchDetails = async () => {
        const fetchDetails = await fetch(
            `http://localhost:3000/devices/${match.params.id}`
        );

        const info = await fetchDetails.json();
        setDetails(info);
    };

    return (
        <div>
            <h1>ID: {details._id}</h1>
            <h3>Battery: {details.battery*100}%</h3>
            <hr/>
            <Map coordinates={details.location.coordinates}/>
            <Battery 
                battery_history={details.battery_history} 
                battery={details.battery}
            />
            <h5>Alerts</h5>
        </div>
    );
};

export default DeviceDetails;



