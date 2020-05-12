import React from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom'
import './Device.css';

const device = props => {

    return(
        <div className='device'>
            
            <div>ID: {props.device._id}</div>
        
            <Link to={`/battery/${props.device._id}`}>
                <div className="black">Battery: {props.device.battery * 100}%</div>
            </Link>

            <Link to={`/missing_data/${props.device._id}`}>
                <div className="black">Missing Data Errors: {props.device.missing_data.length}</div>
            </Link>

            <Link to={`/duplicate_data/${props.device._id}`}>
                <div className="black">Duplicate Data: {props.device.duplicate_data.length}</div>
            </Link>

            <Link to={`/gps_errors/${props.device._id}`}>
                <div className="black">GPS Errors: {props.device.gps_errors.length}</div>
            </Link>

            <hr/>

            <div>Last Updated</div>
            <Moment>{props.device.last_update}</Moment>
            
        </div>
    );
}

export default device;