import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import moment from 'moment'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  }
}));

const SubheaderDividers = (props) => {

    console.log(props);

    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem>
                <ListItemText primary={props.alert.name} secondary={moment(props.alert.timestamp).format('dddd, mm dS, h:MM:ss')} />
                <ListItemText primary="Update ids"/>
                <Button variant="contained">Dismiss</Button>
            </ListItem>
            <Divider component="li" />
        </List>
    );
}

export default SubheaderDividers;

