import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialState = {
  darkTheme: false,
};

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
