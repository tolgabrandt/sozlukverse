import { createContext, useReducer } from "react";
import { authReducer } from "../reducers/auth-reducer";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(authReducer, { isAuthenticated: true });

  const data = {
    state,
    dispatch,
  };
  return <AuthContext.Provider value={data}> {children} </AuthContext.Provider>;
};
