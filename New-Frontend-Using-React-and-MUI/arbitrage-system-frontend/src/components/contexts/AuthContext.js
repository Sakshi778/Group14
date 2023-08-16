import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogIn =() => {
    setIsLoggedIn(true);
  }

  const handleLogOut =() => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  }

  return (
    <AuthContext.Provider value={{ username, setUsername, password, setPassword, isLoggedIn, handleLogIn, handleLogOut, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
