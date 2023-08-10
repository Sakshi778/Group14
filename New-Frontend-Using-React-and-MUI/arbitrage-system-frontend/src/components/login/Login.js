import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Change import
import { Paper, TextField, Button, Typography } from '@mui/material';
import {AuthContext} from '../contexts/AuthContext';
import './Login.css'; // Import the CSS file


const Login = () => {
  // const { username, password, setUsername, setPassword } = useContext(AuthContext);
  // const navigate = useNavigate(); // Use useNavigate

  const handleUsernameChange = (event) => {
    // setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    // setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your authentication logic here
    // const isAuthenticated = true; // Example: You need to set this based on actual authentication state

    // if (isAuthenticated) {
    //   navigate('/'); // Navigate to home page
    // }
  };

  return (
    <Paper elevation={3} className="login-container">
      <Typography variant="h5" className="login-title">
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          className="login-input"
          label="Username"
          variant="outlined"
          fullWidth
          // value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          className="login-input"
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          // value={password}
          onChange={handlePasswordChange}
        />
        <Button className="login-button" type="submit" variant="contained" color="primary">
          Log in
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
