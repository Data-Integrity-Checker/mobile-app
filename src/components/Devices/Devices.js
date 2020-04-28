import React from 'react';
import Grid from '@material-ui/core/Grid';
import Device from './Device/Device';
import './Devices.css'

const allDevices = props => {

    let devices = null;

    if(props.devices){
        devices = (
        <div>
            <h1>Devices</h1>

            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center">

                {props.devices.map(device => {
                    return <Device 
                        device = {device}
                        key = {device._id}
                    />
                })}
                
            </Grid>
        </div>
        )

    }else{
        return <h2>No Devices</h2>
    }

    return devices ;
}

export default allDevices;