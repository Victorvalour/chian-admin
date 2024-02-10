import React from 'react'
import Homepage from './pages/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Homepage />}  />
          
    
      </Routes>
   
  
    
       
    </BrowserRouter>
  )
}

export default App