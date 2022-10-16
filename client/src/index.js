import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
// Rendering app
ReactDOM.render(
   <React.StrictMode>
      <Router>

         <App />
      </Router>
   </React.StrictMode>
   , document.getElementById('root'));