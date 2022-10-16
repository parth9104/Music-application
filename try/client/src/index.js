import React from "react";
import ReactDOM from "react-dom";

import "./index.css"
import App from "./App";
import { root } from "postcss";
 
/*What is the ReactDOM render?
The ReactDOM. render() function takes two arguments, 
HTML code and an HTML element. The purpose of the function
 is to display the specified HTML code inside the specified HTML element. */ 
/*What is the strict mode in React?
StrictMode is a tool for highlighting potential problems in 
an application. Like Fragment , StrictMode does not render 
any visible UI. 
.render function will helper to render a react app 
*/
root.render(
   <React.StrictMode>
    <App/>
    </React.StrictMode>
 ,document.getElementById('root'))