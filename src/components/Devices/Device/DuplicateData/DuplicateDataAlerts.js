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
  

const DuplicateDataAlerts = props => {

  const classes = useStyles();

    const alertInvestigate = async () => {
        await fetch(
            `http://localhost:3000/alerts/investigate/${props.data._id}`
        );
    };
   
  const alerts = props.data.map(alert => {

      return (
          <div className={classes.container}>
              <List className={classes.root}>

                  <ListItem>
                      <ListItemText primary={"ID: " + alert._id} />
                      <ListItemText primary={moment(alert.start).format('MM/DD, hh:MM:ss')}  />
                      <Button onClick={alertInvestigate} variant="contained" className={classes.button}>Investigate</Button>
                  </ListItem>

                  <Divider component="li" />

              </List>
          </div>
      );
  })

  return alerts;
};

export default DuplicateDataAlerts;