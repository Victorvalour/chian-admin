import React, { useEffect, useState } from 'react'
import { Avatar } from '@material-tailwind/react'
import image from '../assets/blank-image.png'
import { useParams, useNavigate } from 'react-router-dom'
import { db } from '../firebase'
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { Input } from "@material-tailwind/react";
import CourseNames from '../assets/CourseNames.json'
import Select from 'react-dropdown-select'


const EditStudentInfo = () => {

  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  const [course, setCourse] = useState("")
    const courseName = CourseNames.map(({name, id}) => {
        return {value: id, label: name}
    })

const {editid} = useParams()

const [studentData, setStudentData] = useState({})
const [date, setDate] = useState("") 
useEffect(() => {
    editid && getSingleUser();
}, [editid])

const getSingleUser = async () => {

  const  docRef = doc(db, "students", editid);
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

const handleChange = (e) => {
setStudentData({ ...studentData, [e.target.name]: e.target.value })

};

const handleSubmit = async (e) => {
  e.preventDefault();

  
    try {
      await updateDoc(doc(db, "students", editid), {
        ...studentData,
        timestamp: serverTimestamp(),
      })
    } catch (error) {
      console.log(error)
    }
   
 navigate(`/student/${editid}`)

}


  return (

    <div className='sm:px-8'>
      <div className='flex justify-between items-center pr-5'>    
            <Avatar 
        src={image}
        alt="avatar"
        
        className="p-0.5 w-16 h-16"
      />
      <div 
      onClick={() => navigate(`/`)}
      className='hover:text-blue-700'>
        <p>&lt; Home</p>
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
          <Input variant="outlined"
           placeholder={studentData.name}
            value={studentData.name} 
            name='name'
          onChange={handleChange}
          autoFocus/>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Course Applied</dt>
          <Input 
                              className='pl-2 h-12 rounded-md text-lg mb-2 bg-white'
                              name='course'
                              placeholder={studentData.course}
                              value={studentData.course}
                              options={courseName}
                              onChange={handleChange}
                              >
                              </Input>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
          <Input variant="outlined" 
        
           placeholder={studentData.emailAddress}
           value={studentData.emailAddress}
           name='emailAddress'
           onChange={handleChange}
          />
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Phone Number</dt>
          <Input variant="outlined" 
           onChange={handleChange}
           value={studentData.phoneNumber}
           placeholder={studentData.phoneNumber}
          name='phoneNumber'
          />
        </div>

        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Date of Birth</dt>
          <Input variant="outlined" placeholder="Outlined"/>
        </div>

        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Registration Date</dt>
          <div variant="outlined" label="Outlined" placeholder="Outlined">
            {date}
            
          </div>
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
    <button
    onClick={handleSubmit}
    className='bg-sky-800 px-5 h-10 rounded-lg active:scale-90 hover:bg-orange-400 self-end text-white'>Submit</button>
    </div>
  </div>
  
  )
}
export default EditStudentInfo