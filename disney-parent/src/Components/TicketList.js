import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  card: {
    width: 300,
    margin: '20px'
  }
});


export default function TicketList() {
  const [tickets, setTickets] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios.get('https://disneyparents.herokuapp.com/tickets/tickets').then(response => {
      console.log(response.data);
      setTickets(response.data);
    }).catch(err => {
      console.dir(err);
    })
  }, []);

  const ticketList = tickets.map(ticket => {
    return (
      <Card
        className={classes.card}
        key={ticket.ticketid}>
        <CardHeader
          title={ticket.attractions.attraction}
          subheader={ticket.time}>

        </CardHeader>
        <CardContent>
          <Typography component='h4'>
            # of kids: {ticket.kidCount}
          </Typography>
        </CardContent>

      </Card>
    );
  });


  return (
    <Box>
      <Grid container className={classes.root} justify="center" spacing={2}>
        {ticketList}
      </Grid>
    </Box>
  );
};
