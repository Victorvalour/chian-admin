import React from 'react'
import Homepage from './pages/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import "react-loading-skeleton/dist/skeleton.css"
import StudentInfo from './pages/StudentInfo'
import EditStudentInfo from './pages/EditStudentInfo'

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Homepage />}  />
        <Route path='/student/:id' element={<StudentInfo />}/>
        <Route path='/edit/:editid' element={<EditStudentInfo />}/>
    
      </Routes>
   
  
    
       
    </BrowserRouter>
  )
}

export default App