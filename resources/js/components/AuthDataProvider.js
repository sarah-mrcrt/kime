import React, { createContext, useState, useEffect, useContext } from "react";
import LocalStorageManager from '../util/localStorage';

export const AuthDataContext = createContext();

function AuthDataProvider(props) {
    const initialAuthData = {};
    const [authData, setAuthData] = useState(initialAuthData);

    const setData = () => {
      let currentAuthData = sessionStorage.getItem('authData');

      if (currentAuthData) {
        setAuthData(currentAuthData);
      }
    }
  
    useEffect(() => {
      setData();
    }, []);
  
    const onLogout = () => setAuthData(initialAuthData);
  
    const onLogin = () => setData();

    return <AuthDataContext.Provider value={{ authData, onLogin, onLogout }} {...props} />;
  };
  
  export const useAuthDataContext = () => {
    return useContext(AuthDataContext);
  } 
  
  export default AuthDataProvider;