import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    button: {
        background: '#FF0000',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    container: {
        color: 'black',
        align: "ceter"
    }
}));

const SubheaderDividers = (props) => {

    const classes = useStyles();

    const alertInvestigate = async () => {
        await fetch(
            `http://localhost:3000/alerts/investigate/${props.data._id}`
        );
    };

    return (

        <div className={classes.container}>
            <List className={classes.root}>

                <Divider component="li" />

                <h5>Alert ID: {props.alert._id}</h5>

                <ListItem>
                    <ListItemText primary={props.alert.name} secondary={moment(props.alert.timestamp).format('dddd, mm dS, h:MM:ss')} />
                    <ListItemText primary="Device ID" secondary={props.alert.deviceId} />
                    <Button onClick={alertInvestigate} variant="contained" className={classes.button}>Dismiss</Button>
                </ListItem>
                
            </List>
        </div>
    );
}

export default SubheaderDividers;

