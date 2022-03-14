import React, { useState, createContext } from "react";
import {
  checkAuthState,
  loginRequest,
  registerRequest,
  logOut,
} from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [user, setUser] = useState(false);
  const [error, setError] = useState(false);

  const onAuthStateChanged = () => {
    const callback = (u) => {
      if (u) {
        setUser(u);
        setCheckingAuth(false);
      } else {
        setCheckingAuth(false);
      }
    };
    const onError = (e) => {
      console.log(e);
      setCheckingAuth(false);
    };
    checkAuthState(callback, onError);
  };
  onAuthStateChanged();

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((authenticatedUser) => {
        setIsLoading(false);
        setUser(authenticatedUser);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email, password, password1) => {
    if (password !== password1) {
      setError("Error: Passwords do not match");
    } else {
      setIsLoading(true);
      registerRequest(email, password)
        .then((authenticatedUser) => {
          setIsLoading(false);
          setUser(authenticatedUser);
        })
        .catch((e) => {
          setIsLoading(false);
          setError(e.toString());
        });
    }
  };

  const onLogOut = () => {
    logOut().then(() => {
      setUser(null);
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        checkingAuth,
        onLogOut,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
