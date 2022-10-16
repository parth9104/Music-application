import React from 'react'
/* Routes navigate the user to specific browser
like here we have login to home and vice-versa*/
import {Route,Routes} from 'react-router-dom'
import {Home,Login} from './components'
const App = () => {
  return (
    <div className='w-screen h-screen bg-primary flex justify-center items-center'>
       <Routes>
          <Route path='/Login' element ={<Login/>}/>
          <Route path='/*' element={<Home/>}/>
       </Routes>
    </div>
     
    )
}

export default App