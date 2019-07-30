import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
  const classes = useStyles();

  const onSubmit = event => {
    console.log(event)
  }

  return (
    <div className="form-container" onSubmit={onSubmit}>
      <form className={classes.container} autoComplete="off">
        <TextField
          className={classes.textField}
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          className={classes.textField}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
      </form>
      <Button variant="outlined" color="primary" className={classes.button}>Log In</Button>
    </div>
  );
};
