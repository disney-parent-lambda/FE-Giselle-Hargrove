import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import SnackBar from '@material-ui/core/SnackBar';
import SnackBarContent from '@material-ui/core/SnackBarContent';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '45%',
    margin: '10% auto'
  },
  button: {
    width: '35%',
    margin: '15px auto'
  }
}));

export default function CreateRequest() {
  const classes = useStyles();
  const [rides, setRides] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [open, setOpen] = useState(false);

  const [values, setValues] = useState({
    location: '',
    kids: 0,
    time: ''
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // axios.post('https://disneyparents.herokuapp.com/tickets/postticket', values).then(response => {
    //   console.log(response);
    // });
    setValues({
      location: '',
      kids: 0,
      time: ''
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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

    <form className={classes.container} onSubmit={event => onSubmit(event)}>
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

      <Button
        type='submit'
        className={classes.button}
        variant='outlined'>
        Create New Request
      </Button>
      <SnackBar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}>
        <span>Request Created Successfully</span>
      </SnackBar>
    </form>
  );
};
