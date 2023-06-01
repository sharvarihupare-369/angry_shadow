import React from "react";
// import './App.css'

export const Button = ({ children, colorScheme = "defaultColor", size }) => {
  return <button className={`${colorScheme} ${size}`}>{children}</button>;
};
