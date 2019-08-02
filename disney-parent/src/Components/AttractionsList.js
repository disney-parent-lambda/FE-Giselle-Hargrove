import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  card: {
    height: 100,
    width: 300,
    margin: '20px'
  }
});

export default function AttractionsList() {
  const [switches, setSwitch] = useState({
    attractions: true,
    restaurants: false
  });
  const [restaurantData, setRestaurantData] = useState([]);
  const [attractionData, setAttractionData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios.get('https://disneyparents.herokuapp.com/attractions/attractions').then(response => {
      setAttractionData(response.data);
    });
  }, [switches]);

  const handleChange = name => event => {
    setSwitch({...switches, [name]: event.target.checked });
  };

  const attractionList = attractionData.map((ride, index) => {
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

  if(!attractionData.length) return <h1>Loading...</h1>

  return (
    <Box>
      Attractions: <Switch checked={switches.attractions} onChange={handleChange('attractions')} value='attractions'/>
      Restraurants: <Switch checked={switches.restaurants} onChange={handleChange('restaurants')} value='restaurants' />
      <Grid container className={classes.root} justify="center" spacing={2}>
        {attractionList}
      </Grid>
    </Box>
  );
};
