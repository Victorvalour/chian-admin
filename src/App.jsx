import React from 'react'
import Homepage from './pages/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import "react-loading-skeleton/dist/skeleton.css"
import StudentInfo from './pages/StudentInfo'
import EditStudentInfo from './pages/EditStudentInfo'
import LoginPage from './pages/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthContextProvider } from './context/AuthContext'

const App = () => {
  return (
    <BrowserRouter>
    <AuthContextProvider>
    <ScrollToTop />
      <Routes>
        <Route path='/homepage' element={
        <ProtectedRoute>
          <Homepage />
          </ProtectedRoute>}  />
        <Route path='/student/:id' element={<ProtectedRoute> <StudentInfo /> </ProtectedRoute>}/>
        <Route path='/edit/:editid' element={<ProtectedRoute> <EditStudentInfo /> </ProtectedRoute>}/>


        <Route path='/' element={<LoginPage />}/>
      </Routes>
   
      </AuthContextProvider>
    
       
    </BrowserRouter>
  )
}

export default App