import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '45%',
    margin: '10% auto'
  }
}));

export default function CreateRequest() {
  const classes = useStyles();
  const [rides, setRides] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  const [values, setValues] = useState({
    location: '',
    kids: 0,
    time: ''
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  useEffect(() => {
    axios.get('https://disneyparents.herokuapp.com/attractions/attractions').then(response => {
      setRides(response.data);
      console.log(response.data);
    });
    axios.get('https://disneyparents.herokuapp.com/restaurants/restaurants').then(response => {
      setRestaurants(response.data)
    });
  }, []);

  return (

    <form className={classes.container}>
      <TextField
        select
        label="Select Location"
        value={values.location}
        helperText="Where do you want to meet?"
        onChange={handleChange('location')}
        SelectProps={{
          MenuProps: {
            className: 'select-input',
          },
        }}>

        {rides.map(ride => (
          <MenuItem key={ride.attractionid} value={ride.attraction}>
            {ride.attraction}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Kids"
        value={values.kids}
        helperText="How many kids do you have?"
        onChange={handleChange('kids')}>

        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4+</MenuItem>

      </TextField>

      {/*<Button variant='outlined'>Create New Request</Button>*/}
    </form>
  );
};
