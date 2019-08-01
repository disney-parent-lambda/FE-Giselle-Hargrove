import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: '45%',
    margin: '10% auto'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
    width: '35%',
    margin: '10px auto'
  }
}));


export default function Login() {
  const [creds, setCreds] = useState({username: '', password: ''});
  const classes = useStyles();

  const handleChange = event => {
    setCreds({...creds, [event.target.name]: event.target.value });
  }

  const handleSubmit = e => {
    axios.post('https://disneyparents.herokuapp.com/login',
    `grant_type=password&username=${creds.username}&password=${creds.password}`,
    {
      headers: {
        // btoa is converting our client id/client secret into base64
        Authorization: `Basic ${window.btoa('lambda-client:lambda-secret')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(res => {
        localStorage.setItem('token', res.data.access_token);
        creds.username = '';
        creds.password = '';
        window.location.href = '/home';
    }).catch(err => console.dir(err));
      e.preventDefault();
  };

  return (
    <div className="form-container">
      <form className={classes.container} autoComplete="off" onSubmit={event => handleSubmit(event)}>
        <TextField
          className={classes.textField}
          id="outlined-email-input"
          label="username"
          name="username"
          margin="normal"
          variant="outlined"
          onChange={event => handleChange(event)}
        />
        <TextField
          className={classes.textField}
          id="outlined-password-input"
          label="Password"
          name="password"
          type="password"
          margin="normal"
          variant="outlined"
          onChange={event => handleChange(event)}
        />
        <Button type="submit" variant="outlined" color="primary" className={classes.button}>Log In</Button>
        <Button href="/signup" className={classes.button} color="primary" variant="outlined">Sign Up</Button>
      </form>
    </div>
  );
};
