'use client'
import React, {useContext} from "react";
import { FaMoon,FaSun } from "react-icons/fa";
import {themeContext} from './../context/Theme.tsx';

export default function ThemeBtn() {
  const {theme, handleTheme} = useContext(themeContext)
  return (
    <button className="border-2 rounded p-2" onClick={handleTheme}>
    {
      theme ? <FaSun /> : <FaMoon />
    }
    </button>
  );
}
