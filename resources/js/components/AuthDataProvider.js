import React, { createContext, useState, useEffect, useContext } from "react";

export const AuthDataContext = createContext();

function AuthDataProvider(props) {
    const initialAuthData = {};
    const [authData, setAuthData] = useState(initialAuthData);

    const setData = () => {
      let currentAuthData = localStorage.getItem('authData');

      if (currentAuthData) {
        currentAuthData = JSON.parse(currentAuthData);

        setAuthData(currentAuthData);
      }
    }
  
    useEffect(() => {
      setData();
    }, []);
  
    const onLogout = () => setAuthData(initialAuthData);
  
    const onLogin = () => setData();
  
    return <AuthDataContext.Provider value={{ authData, onLogin, onLogout, onRegister }} {...props} />;
  };
  
  export const useAuthDataContext = () => {
    return useContext(AuthDataContext);
  } 
  
  export default AuthDataProvider;