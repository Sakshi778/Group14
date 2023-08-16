import React,{ useState, useContext, useEffect } from 'react';
import { Alert, Typography } from '@mui/material';
import {AuthContext} from '../contexts/AuthContext'


import LoginCard from './LoginCard';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const { username, setUsername, password, setPassword, isLoggedIn, handleLogIn, handleLogOut, setIsLoggedIn } = useContext(AuthContext);
    const [error, setError] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
      console.log('isLoggedIn:', isLoggedIn);
    }, [isLoggedIn]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Perform login validation here
            // Perform login validation here
            const userData = { username, password };
            console.log(userData);
    
            try {
              const response = await fetch(' http://localhost:8080/login/authenticate', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
              });
        
              if (response.ok) {
                // <Alert><strong>Stocks have been saved successfully!</strong></Alert>
                // handleLogin();
                console.log("Successfully logged in")
                setError(false);

                // handleLogIn();
                setUsername(userData.username);
                setPassword(userData.password);
                // handleLogIn();
                setIsLoggedIn(true);
                navigate('/home/home-page');
                console.log(isLoggedIn)
                console.log(username)
                console.log(password)
                
              } else{
                // <Alert severity="error">
                //   <AlertTitle>Wrong Credentials</AlertTitle>
                //   <strong>Error occured! Please try again!</strong>
                // </Alert>
                setError(true);
              }
            } catch (error) {
              console.error('Error:', error);
              setError(true);
            //   <Alert severity="error">
            //       <AlertTitle>Wrong Credentials</AlertTitle>
            //       <strong>Error occured! Please try again!</strong>
            //     </Alert>
            }
      };


  
//   const handleLogin = (event) => {
//      event.preventDefault();
//       if (username === "sakshi" && password === "123456") {
//         handleLogin();
//         setLoginError(false);
//       }
//       else{
//         setLoginError(true);
//         setUsername("");
//         setPassword("");
//       }
//      console.log(`Username: ${username}, Password: ${password}`);
//   };

  return (
<div className="login-container">
<div className="header">
<Typography variant='h4'
              style={{
                  textAlign: 'left',
                  marginBottom: 20,
                  color: 'black',
                  fontWeight: 'bold',
                  minWidth: '100px',
              }} gutterBottom><p><span id="arb">Arbitrage </span><br/>Recommendation System</p>
              </Typography>
</div>
{error && (
  <Alert severity="error" onClose={() => {setError(false)}}><strong>Invalid Credentials. Please Try again!</strong></Alert>
)}

<div className="content">
  <div className="form">

  <div style={{
    flex:1,
  }}></div>
          <LoginCard handleSubmit={handleSubmit}/>

  </div>

<div>
<Typography variant='h5'
            style={{
                textAlign: 'left',
                marginTop: 20,
                marginBottom: 20,
                color: 'black',
                fontWeight: 'bold',
                minWidth: '100px',
            }}>About BSE </Typography>
            <Typography variant='h6'
            style={{
                textAlign: 'left',
                marginTop: 20,
                marginBottom: 20,
                color: 'black',
                minWidth: '100px',
            }}>The Bombay Stock Exchange (BSE) is one of India's oldest and largest stock exchanges. It provides a regulated marketplace for trading stocks and other financial instruments, helping companies raise capital and offering investors opportunities to participate in the Indian economy. The BSE operates electronically and is known for its benchmark index, the Sensex, which tracks the performance of the top 30 stocks on the exchange.
     </Typography>
</div>
  
  <div>
  <Typography variant='h5'
            style={{
                textAlign: 'left',
                marginTop: 20,
                marginBottom: 20,
                color: 'black',
                fontWeight: 'bold',
                minWidth: '100px',
            }}>About NSE </Typography>
            <Typography variant='h6'
            style={{
                textAlign: 'left',
                marginTop: 20,
                marginBottom: 20,
                color: 'black',
                minWidth: '100px',
            }}>The National Stock Exchange (NSE) is a major stock exchange in India. Established in 1992, it provides a platform for trading various financial instruments. The NSE is known for its benchmark index, the Nifty 50, which tracks the performance of 50 actively traded stocks. It plays a key role in facilitating capital raising and fostering investor participation in the Indian market.
            </Typography>
  </div>

  <div>
  <Typography variant='h5'
            style={{
                textAlign: 'left',
                marginTop: 20,
                marginBottom: 20,
                color: 'black',
                fontWeight: 'bold',
                minWidth: '100px',
            }}>About Us </Typography>
            <Typography variant='h6'
            style={{
                textAlign: 'left',
                marginTop: 20,
                marginBottom: 20,
                color: 'black',
                minWidth: '100px',
            }}>This application is designed to identify and suggest arbitrage opportunities in financial markets where price disparities exist. The system gathers real-time or near-real-time data from various sources, and  continuously monitors the data for price discrepancies that could potentially indicate arbitrage opportunities. Using this application user can get stock data from NSE & BSE and can also view,save & delete recommended arbitrage opportunities.
            </Typography>
  </div>
 
</div>
</div>
  );
};
  
export default LoginPage