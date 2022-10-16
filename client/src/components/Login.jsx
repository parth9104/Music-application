/*JSX file
JSX stands for JavaScript XML. It is simply a syntax
 extension of JavaScript. It allows us to directly write 
 HTML in React (within JavaScript code). It is easy to 
 create a template using JSX in React, but it is not a
  simple template language instead it comes with the 
  full power of JavaScript */ 
  
  /* 
 element inset - 0 means top left right bottom == 0
 p-4 padding 
 gap -> between 2 elements
 */
/* async function -> function will wait till pop-op appear*/
 /* word wrap -> alt+z(windows)*/
 /* once the user login then navigate will use for navigate back to home page */ 
 import React from 'react'
  import {app} from '../config/firebase.config'
  import { getAuth,GoogleAuthProvider } from 'firebase/auth'
  import {FcGoogle} from 'react-icons/fc'
  import { useNavigate } from 'react-router-dom'
  const Login = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
    /*const navigate = useNavigate();*/
    const loginWithGoogle = async () => {
        console.log('hii');
    }
    return (
      <div className='relative w-screen h-screen'>
        <div className='absolute inset-0 bg-darkOverlay flex items-center p-4 justify-center'>
            <div className='w-full md:w-375 p-4 bg-lightOverlay shadow-2xl rounded-md backdrop-blur-md flex flex-col items-center justify-center'>
               <div className='flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-card hover:shadow-md duration-100 ease-in-out transition-all'
               onClick={loginWithGoogle}>
                <FcGoogle className='text-xl'/>
                  Sign in with Google
                </div> 
                
            </div>
        </div>
      </div>
    )
  }
  
  export default Login