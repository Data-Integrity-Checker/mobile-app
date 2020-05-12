import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Alert from './Alert/Alert';

function Alerts() {

    useEffect(() => {
        fetchAlerts("all");
    }, []);

    const [alerts, setAlerts] = useState([]);

    const fetchAlerts = async (type) => {
        const fetchAlerts = await fetch(
            `http://localhost:3000/alerts/${type}`
        );

        const alerts = await fetchAlerts.json();
        setAlerts(alerts);
        setAnchorEl(null);
    };

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        setAnchorEl(null);
    };

    const allAlerts = alerts.map(alert => {
        return(
            
                <Alert
                    alert = {alert}
                    key = {alert._id}
                />
        );
    })

    return (
        <div>
            <h1>Alerts</h1>
            Sort by:
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                All
            </Button>

            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
                <MenuItem onClick={() => {fetchAlerts("all")}}>All Alerts</MenuItem>
                <MenuItem onClick={() => {fetchAlerts("battery")}}>Battery Alerts</MenuItem>
                <MenuItem onClick={() => {fetchAlerts("missing_data")}}>Missing Data Alerts</MenuItem>
                <MenuItem onClick={() => {fetchAlerts("duplicate_data")}}>Duplicate Data Alerts</MenuItem>
                <MenuItem onClick={() => {fetchAlerts("gps_errors")}}>GPS Error Alerts</MenuItem>
            </Menu>
            {allAlerts}
        </div>
    );
};

export default Alerts;