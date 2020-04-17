import React, { useState, useEffect } from 'react';
  
function DeviceDetails({match}) {

    useEffect(() => {
        fetchDetails();
    }, []);

    const [details, setDetails] = useState({});

    const fetchDetails = async () => {
        const fetchDetails = await fetch(
            `http://localhost:3000/devices/${match.params.id}`
        );
        const info = await fetchDetails.json();
        setDetails(info);
        console.log(info);
    };

    let coordinates = details.location;
    console.log(coordinates);

    return (
        <div>
            <h2>{details._id}</h2>
        </div>
    );
};

export default DeviceDetails;



