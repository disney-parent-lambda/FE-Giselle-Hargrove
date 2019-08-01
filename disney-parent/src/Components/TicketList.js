import React, { useEffect, useState } from 'react';
import dummyData from '../data.js';
import axios from 'axios';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  card: {
    height: 100,
    width: 300,
    margin: '20px'
  }
})

export default function TicketList() {
  const [data, setData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios.get('https://disneyparents.herokuapp.com/attractions/attractions').then(response => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  const list = data.map((ride, index) => {
    return (
      <Card
        className={classes.card}
        key={ride.attractionid}>
        <CardContent>
          {ride.attraction}
        </CardContent>
        <CardActions>
          <Button size="small">See More</Button>
        </CardActions>
      </Card>
    );
  });

  return (
    <Box>
      <Grid container className={classes.root} justify="center" spacing={2}>
        {list}
      </Grid>
    </Box>
  );
};
