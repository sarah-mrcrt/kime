import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const AuthDataContext = createContext();

function AuthDataProvider(props) {
    const initialAuthData = {};
    const [authData, setAuthData] = useState(initialAuthData);

    const setData = () => {

      let currentAuthData = JSON.parse(sessionStorage.getItem('authData'));

      if (currentAuthData) {
        setAuthData(currentAuthData);

        console.log('setting authData: ');
        console.log(currentAuthData);
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