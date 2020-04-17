import React from 'react';
import Device from '../Device/Device';
import './Devices.css'


const allDevices = props => {

    let devices = null;

    if(props.devices){
        devices = (
        <div className="devices_container">
            {props.devices.map(device => {
                return <Device 
                    device = {device}
                    key = {device._id}
                />
            })}
        </div>
        )
    }else{
        return <h3>No Devices</h3>
    }

    return devices ;
}

export default allDevices;