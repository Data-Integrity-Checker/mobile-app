import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MissingDataAlerts from './MissingDataAlerts';
  
function MissingData({match}) {

    useEffect(() => {
        fetchData();
    }, []);

    const [data, setData] = useState([
        {
            updates: [],
        }
    ]);

    const [sortType, setSortType] = useState({
        type: "alert_time"
    });

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        setAnchorEl(null);
    };

    const handleAlertTimeSort = (event) => {
        setSortType("alert_time");
        mySort();
        setAnchorEl(null);
    };

    const handleTimeLost = (event) => {
        setSortType("time_lost");
        mySort();
        setAnchorEl(null);
    };

    const mySort = () => {
        let tempdata = [...data]

        tempdata.sort((a, b) => {

            let aTime;
            let bTime;

            if(sortType == "time_lost"){
                aTime = new Date(a.end) - new Date(a.start);
                bTime = new Date(b.end) - new Date(b.start);
            }else{
                aTime = new Date(a.start);
                bTime = new Date(b.start);
            }
            
            if (aTime < bTime) return 1;
            if (bTime < aTime) return -1;

            return 0;
        })

        setData(tempdata);
    }

    const fetchData = async () => {
        const fetchData = await fetch(
            `http://localhost:3000/devices/alertType/missing_data/${match.params.id}`
        );

        const info = await fetchData.json();
        setData(info);
    };

    return (
        <div>
            <h3>Missing Data: {data.length}</h3>

            Sort: 
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Alert Time
            </Button>

            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
                <MenuItem onClick={handleAlertTimeSort} id="alert_time">Alert Time</MenuItem>
                <MenuItem onClick={handleTimeLost} id ="time_lost">Time Lost</MenuItem>
            </Menu>

            <MissingDataAlerts data={data} />
        </div>
    );
};

export default MissingData;