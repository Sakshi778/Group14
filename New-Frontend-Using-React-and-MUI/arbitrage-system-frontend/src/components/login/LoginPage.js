import React,{ useState } from 'react';
import { Typography } from '@mui/material';

import LoginCard from './LoginCard';
import './LoginPage.css';
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const handleLogin = (event) => {
     event.preventDefault();
      if (username === "sakshi" && password === "123456") {
        handleLogin();
        setLoginError(false);
      }
      else{
        setLoginError(true);
        setUsername("");
        setPassword("");
      }
     console.log(`Username: ${username}, Password: ${password}`);
  };

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

<div className="content">
  <div className="form">

  <div style={{
    flex:1,
  }}></div>
          <LoginCard/>

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