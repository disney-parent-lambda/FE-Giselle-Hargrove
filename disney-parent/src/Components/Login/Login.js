import React, { useEffect } from 'react';
import axios from 'axios';

const Login = () => {
  let url = "https://disneyparents.herokuapp.com/";

  useEffect(() => {
    // uncomment after api 
    // axios.get('https://touringplans.com/magic-kingdom/attractions.json').then((response) => {
    //   console.log(response);;
    // });
  }, [])

  return (
    <div>Login Component</div>
  );
};

export default Login;
