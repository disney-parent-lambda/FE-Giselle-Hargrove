import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1)
  }
}));


export default function Login() {
  const [creds, setCreds] = useState({username: '', password: ''});
  const classes = useStyles();

  const handleChange = name => event => {
    setCreds({...creds, [name]: event.target.value });
  }

  const handleSubmit = e => {
    console.log(e)
    axios.post('https://disneyparents.herokuapp.com/login',
    `grant_type=password&username=${creds.username}&password=${creds.password}`,
    {
      headers: {
        // btoa is converting our client id/client secret into base64
        Authorization: `Basic ${window.btoa('lambda-client:lambda-secret')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(res => {
      console.log(res)
        /*localStorage.setItem('token', res.data.access_token);*/
        /*this.props.history.push('/users');*/
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
          name="email"
          margin="normal"
          variant="outlined"
          onChange={handleChange('username')}
        />
        <TextField
          className={classes.textField}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          onChange={handleChange('password')}
        />
      <button variant="outlined" color="primary" className={classes.button}>Log In</button>
      </form>
    </div>
  );
};
