import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ThemeContextProvider from "./Context/ThemeContext";

ReactDOM.render(
  <BrowserRouter>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
