import React, { useState, useEffect } from 'react';
import DuplicateDataAlerts from './DuplicateDataAlerts';
import Map from '../Map/Map';
import Moment from 'react-moment';
  
function DuplicateData({match}) {

    useEffect(() => {
        fetchData();
    }, []);

    const [data, setData] = useState([
        {
            updates: [{
            }],
        }
    ]);

    const [device, setDevice] = useState({
        first_update_time: null
    });

    const fetchData = async () => {
        const fetchData = await fetch(
            `http://localhost:3000/alerts/duplicate_data/${match.params.id}`
        );

        const fetchDevice = await fetch(
            `http://localhost:3000/devices/${match.params.id}`
        );

        const info = await fetchData.json();
        const deviceInfo = await fetchDevice.json();

        setData(info);
        setDevice(deviceInfo);
    };

    return (
        <div>
            <h3>Duplicate Data: {data.length} Since <Moment>{device.first_update_time}</Moment></h3>
            <Map id={match.params.id}/>
            <DuplicateDataAlerts data={data} />
            
        </div>
    );
};

export default DuplicateData;