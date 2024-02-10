import React, { useEffect, useState } from 'react'
import { db } from "../firebase"
import { collection, onSnapshot } from 'firebase/firestore';


const StudentsTable = () => {

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



  return (
    <div className='bg-slate-100 h-screen px-5 pt-4'>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
        {
            students && students.map((student) => 
        <tbody className=''>

            <tr 
            key={student.id}
            className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-orange-500">
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
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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
    <button className='bg-orange-600 px-5 h-10 rounded-lg active:scale-90 hover:bg-orange-400'>Add Student</button>
</div>

    </div>
  )
}

export default StudentsTable