import React, { useState } from "react";
import "./App.css";
import "./login.css";


const LoginPage = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login validation here
    if (username === "yourusername" && password === "yourpassword") {
      handleLogin();
      setLoginError(false);
    }
    else{
      setLoginError(true);
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="login-container">
      <div className="login-page">
        <div class="topbar">
          <span ><a class="menu-item" href="#top">Home</a></span>
          <span ><a class="menu-item" href="#abtbse">   About BSE & NSE</a></span>
          
        </div>
        <div id="content">
          
          <div className="emp"></div>
          
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Bombay_Stock_Exchange_logo.svg/1280px-Bombay_Stock_Exchange_logo.svg.png" alt="bse" className="bseimg"/><br/>
          <img src="data:image/png;base64,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" alt="nse" className="nseimg"/><br/>
          <p><span id="arb">Arbitrage</span><br/>Recommendation<br/>System</p>
          
        </div>
        
        <div id="abtbse">
          <h2>About BSE</h2>
          <p >The Bombay Stock Exchange (BSE) is one of India's oldest and largest stock exchanges.<br/> It provides a regulated marketplace for trading stocks and other financial instruments,<br/> helping companies raise capital and offering investors opportunities to participate in the Indian economy. <br/>The BSE operates electronically and is known for its benchmark index, the Sensex, which tracks the<br/> performance of the top 30 stocks on the exchange.</p>
        </div>
        <div id="abtnse">
          <h2>About NSE</h2>
          <p >The National Stock Exchange (NSE) is a major stock exchange in India. Established in 1992,<br/> it provides a platform for trading various financial instruments. The NSE is known for its<br/> benchmark index, the Nifty 50, which tracks the performance of 50 actively traded stocks. <br/>It plays a key role in facilitating capital raising and fostering investor participation in the Indian market.</p>
        </div>
        <div className="form">
          <h1 className="lp">Login Page</h1>
          <div className="error-container">
            {loginError && (
              <p className="error-message">Invalid username or password</p>
            )}
            {!loginError && <div className="empty-element" ></div>}
          </div>
          <form onSubmit={handleSubmit}>
            <label >
                      <input className="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              <br/>
              
              <input className="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button className="btnn" type="submit">Login</button>
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
