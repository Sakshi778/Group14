// if you by any chance want to access username or password access them from here for now they haven't been set person who is 
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthContext.Provider value={{ username, setUsername, password, setPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
