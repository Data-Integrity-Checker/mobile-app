import React from 'react';
import './Device.css';
import {Link} from 'react-router-dom'

const device = props => {
    return(
        <Link to={`/device/${props.device._id}`}>
        <div className='device'>
            <div className="row">
                <div>{props.device._id}</div>
            </div>
            <div className="row">
                <div>Battery: {props.device.performance * 100}%</div>
                <div>Missing Data Erros: {props.device.missing_data_errors}</div>
            </div>

            <div className="row">
                <div>Duplicate Data: {props.device.duplicate_data}</div>
                <div>GPS Erros: {props.device.gps_errors}</div>
            </div>
            <div className="row">
                <div>{props.device.last_update}</div>
            </div>
        </div>
        </Link>
    );
}

export default device;