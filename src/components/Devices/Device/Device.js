import React from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom'
import './Device.css';

const device = props => {

    return(
        <div className='device'>
            
            <div>ID:{props.device._id}</div>
        
            <Link to={`/batteryData/${props.device._id}`}>
                <div>Battery: {props.device.battery * 100}%</div>
            </Link>

            <Link to={`/missingData/${props.device._id}`}>
                <div>Missing Data Erros: {props.device.missing_data.length}</div>
            </Link>

            <Link to={`/duplicateData/${props.device._id}`}>
                <div>Duplicate Data: {props.device.duplicate_data.length}</div>
            </Link>

            <Link to={`/gpsData/${props.device._id}`}>
                <div>GPS Erros: {props.device.gps_errors}</div>
            </Link>

            <hr/>

            <div>Last Updated</div>
            <Moment>{props.device.last_update}</Moment>
            
        </div>
    );
}

export default device;