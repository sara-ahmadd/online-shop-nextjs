"use client";
import React, { createContext, useState, useContext } from "react";

type ThemeContext = {
  theme: boolean;
  handleTheme: () => void;
};
const initContext: ThemeContext = {
  theme: false,
  handleTheme: () => {},
};

export const themeContext = createContext(initContext);

export default function ThemeContext({children} : {children : React.ReactNode}){
  const ThemeContext = useContext(themeContext);
  const [color, setColor] = useState(false);
  const handleTheme = () => {
    setColor(!color);
  };
  return(
    <themeContext.Provider value={{ theme:color , handleTheme }}>
      {children}
    </themeContext.Provider>
  )
}
