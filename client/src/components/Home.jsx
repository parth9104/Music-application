/*JSX file
JSX stands for JavaScript XML. It is simply a syntax
 extension of JavaScript. It allows us to directly write 
 HTML in React (within JavaScript code). It is easy to 
 create a template using JSX in React, but it is not a
  simple template language instead it comes with the 
  full power of JavaScript */
  import React from 'react'
import { Header } from '.';
  
  const Home = () => {
    return <div className="w-full h-auto flex flex-col items-center justify-center">
      <Header/>
    </div>;
    
  }
  
  export default Home