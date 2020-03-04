import Devices from '../models/Device';
import moment from 'moment';

export const index = (req, res, next) => {
    Devices.find();
};