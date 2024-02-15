import React, { useEffect, useState } from 'react'
import { Avatar } from '@material-tailwind/react'
import image from '../assets/blank-image.png'
import { useParams, useNavigate } from 'react-router-dom'
import { db } from '../firebase'
import { collection, doc, getDoc, serverTimestamp } from 'firebase/firestore'

const StudentInfo = () => {
const {id} = useParams()
const navigate = useNavigate()

const [studentData, setStudentData] = useState({})
const [date, setDate] = useState("")
useEffect(() => {
    id && getSingleUser();
}, [id])

const getSingleUser = async () => {
  const  docRef = doc(db, "students", id);
   // console.log(docRef)
    const snapshot = await getDoc(docRef);
    
    if(snapshot.exists()) {
       setStudentData({...snapshot.data() })
      } 
  }
//getSingleUser()
useEffect(() => {
  if(studentData.timestamp) {
    const ts = (studentData.timestamp.seconds+studentData.timestamp.nanoseconds/1000000000)*1000;

    const tsDate = new Date(ts)
    setDate(tsDate.toUTCString());
  }
}, [studentData])
console.log(date)


  return (

    <div className='sm:px-8'>
      <div className='flex justify-between pr-5 items-center'>
        <Avatar
        src={image}
        alt="avatar"
        
        className="p-0.5 w-16 h-16"
      /> 
      <div onClick={() => navigate(`/homepage`)}>
        <p> &lt; Home</p>
      </div>

      </div>
    <div className="px-4 sm:px-0">
      <h3 className="text-base font-semibold leading-7 text-gray-900">Student Information</h3>
      <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and status.</p>
    </div>
    <div className="mt-6 border-t border-gray-100">
      <dl className="divide-y divide-gray-100">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{studentData.name}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Course Applied</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{studentData.course}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{studentData.emailAddress}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Phone Number</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{studentData.phoneNumber}</dd>
        </div>

        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Date of Birth</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{date}</dd>
        </div>

        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Registration Date</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{date}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Passport Photograph</dt>
          <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">

              <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                <div className="flex w-0 flex-1 items-center">
                  <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clipRule="evenodd" />
                  </svg>
                  <div className="ml-4 flex min-w-0 flex-1 gap-2">
                    <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                    <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                </div>
              </li>
             
            </ul>
          </dd>
        </div>
      </dl>
    </div>
    <div className='flex justify-end px-5'>
    <button onClick={() => navigate(`/edit/${id}`)}
     className='bg-sky-800 px-5 h-10 rounded-lg active:scale-90 hover:bg-orange-400 self-end text-white'>Edit info</button>
    </div>
  </div>
  
  )
}
export default StudentInfo