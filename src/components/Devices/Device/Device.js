import React from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom'
import './Device.css';

const device = props => {

    return(
        <div className='device'>
            
            <Link to={`/device/${props.device._id}`}>
                <div>ID:{props.device._id}</div>
            </Link>
        
            <div>Battery: {props.device.battery * 100}%</div>

            <Link to={`/missingData/${props.device._id}`}>
                <div>Missing Data Erros: {props.device.missing_data.length}</div>
            </Link>

            <div>Duplicate Data: {props.device.duplicate_data.length}</div>
            <div>GPS Erros: {props.device.gps_errors}</div>
        
            <hr/>

            <div>Last Updated</div>
            <Moment>{props.device.last_update}</Moment>
            
        </div>
    );
}

export default device;