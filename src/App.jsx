import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import NotFound from './Pages/NotFound'
import Navbhar from './compenents/Navbhar'

export default function App () {
  
  return (
    <>
    
    <BrowserRouter>
    <Navbhar />
      <Routes>
        
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/*' element={<NotFound></NotFound>}></Route> 
      </Routes>

    
    </BrowserRouter>
    
    
    </>
  )
}


