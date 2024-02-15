import React, { useEffect, useState } from 'react'
import { db } from "../firebase"
import { collection, onSnapshot } from 'firebase/firestore';
import { Spinner, spinner } from "@material-tailwind/react";
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const StudentsTable = () => {

    const navigate = useNavigate()

const [students, setStudents] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(collection(db, "students"), (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
            list.push({id: doc.id, ...doc.data()});
        })
        setStudents(list);
        setLoading(false)
        console.log(list)
    }, 
    (error) => {
        console.log(error);
        }
    );
    return () => {
        unsub();
    }
}, [])

const handleNavigate = () => {
    navigate('/')
}

const handleEditClick = () => {
   
}
  return (
    
    <div className='bg-slate-100 h-screen px-5 pt-4'>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

      
    <table className="relative w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Student Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Course
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        
        {  loading &&
        <div className='flex justify-center items-center w-full'> <Skeleton className='h-[400px] w-screen' />
        </div> }

        {
            students && students.map((student) => 
        <tbody className=''
        key={student.id}>

            
         <tr 
            onClick={() => navigate(`/student/${student.id}`) }
            className=" bg-gray-900 border-b border-gray-700 hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                   {student.name}
                </th>
                <td className="px-6 py-4">
                   {student.course}
                </td>
                <td className="px-6 py-4">
                    {student.phoneNumber}
                </td>
                <td className="px-6 py-4">
                    {student.emailAddress}
                </td>
                <td className="px-6 py-4 z-10">
                   
                    <button 
                    onClick={(event) => {
                        event.stopPropagation(); 
                        navigate(`/edit/${student.id}`)
                    }}
                    
                    className="font-medium text-blue-600 hover:underline px-10 pt-5 z-10">Edit</button>
                    
                </td>
            </tr>
          
        
        { /*   <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Elon Musk
                </th>
                <td className="px-6 py-4">
                    Mobile App
                </td>
                <td className="px-6 py-4">
                    0812390392391
                </td>
                <td className="px-6 py-4">
                    elon@elon.com
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
         
        */}
            
        </tbody>
        )
    }
    </table> 
</div>

<div className='flex justify-end mt-4 mx-6'>
    <a
    href='https://chiantechhub.com/register'
    className='bg-orange-600 px-5 h-10 rounded-lg active:scale-90 hover:bg-orange-400 pt-2 font-semibold'>Add Student</a>
</div>

    </div>
  )
}

export default StudentsTable