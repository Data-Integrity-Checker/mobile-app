import React, { useState, useEffect } from 'react';
import DuplicateDataChar from './DuplicateDataChar';
  
function DuplicateData({match}) {

    useEffect(() => {
        fetchData();
    }, []);

    const [data, setData] = useState([
        {
            updates: [{
                
            }],
            start: ""
        }
    ]);

    const fetchData = async () => {
        const fetchData = await fetch(
            `http://localhost:3000/devices/alertType/duplicate_data/${match.params.id}`
        );

        const info = await fetchData.json();
        setData(info);
    };

    let hourMap = {};

    data.forEach( update => {

        console.log(new Date(update.start));

        let key = update.start;
        key = key.substring(5, 13);

        if(hourMap[key] === undefined)
            hourMap[key] = 1;
        else
            hourMap[key] += 1;
    })

    let hourArray = [];

    // for(let m of hourMap){
        
    // }

    //console.log(hourMap);

    return (
        <div>
            <h3>Duplicate Data: {data.length}</h3>
            <DuplicateDataChar data={hourArray}/>
        </div>
    );
};

export default DuplicateData;