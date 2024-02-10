import React from 'react'
import Navbar from '../components/Navbar'
import StudentsTable from '../components/StudentsTable'
import Filter from '../components/Filter'

const Homepage = () => {
  return (
    <div className=''>
        <Navbar />
        <Filter />
        <StudentsTable />

       </div>
  )
}

export default Homepage