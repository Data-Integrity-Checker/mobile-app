import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
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
  

const MissingDataAlerts = props => {

  const classes = useStyles();
   
  const alerts = props.data.map(alert => {

      let difference = (new Date(alert.end) - new Date(alert.start)).toString() + " seconds lost";
      let id = "ID: " + alert._id;

      return (
          <div className={classes.container}>
              <List className={classes.root}>

                  <ListItem>
                      <ListItemText primary={id} secondary={moment(alert.start).format('MM/DD, hh:MM:ss')} />
                      <ListItemText primary={difference} />
                      <Button variant="contained" className={classes.button}>Investigate</Button>
                  </ListItem>

                  <Divider component="li" />

              </List>
          </div>
      );
  })

  return alerts;
};

export default MissingDataAlerts;