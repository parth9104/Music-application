
import React, { useEffect, useState } from 'react'
/* Routes navigate the user to specific browser
like here we have login to home and vice-versa*/
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Home, Login } from './components'
import { app } from './config/firebase.config'
import { getAuth } from 'firebase/auth'
import {AnimatePresence}from 'framer-motion' //for animation and customization
import { validateUser } from './api'


const App = () => {

   const firebaseAuth = getAuth(app);
   const navigate = useNavigate()     // coming from react router dom

   const [auth, setAuth] = useState(false || window.localStorage.getItem("auth") === "true")
   useEffect(() => {
      firebaseAuth.onAuthStateChanged((userCred) => {
         if (userCred) {
            userCred.getIdToken().then((token) => {
               //  console.log(token);
               validateUser(token).then((data)=>{
                  console.log(data)
                })  
            });
         }
         else{
           setAuth(false);
           window.localStorage.setItem("auth","false");
           navigate("/login") 
         }
      })
   }, [])

   return (
      <AnimatePresence exitBeforeEnter>
      <div className="h-auto min-w-[680px] bg-primary flex justify-center items-center">
         <Routes>
            <Route path='/Login' element={<Login setAuth={setAuth}/>} />
            <Route path='/*' element={<Home />} />
         </Routes>
      </div>
      </AnimatePresence>

   )
}

export default App