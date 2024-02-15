import React, { useState } from 'react'

const Filter = () => {

const [dropDown, setDropDown] = useState(false)

  return (
    <div className='flex justify-between px-4 items-center h-16 relative'>

    <div className='text-2xl font-bold'>
        <p>Students</p>
        </div>

        <div className="flex items-center justify-center p-4 flex-col" 
      /*  onMouseEnter={() => setDropDown((prev) => !prev)}
        onMouseLeave={() => setDropDown((prev) => !prev)}
         */
         >
  <button id="dropdownDefault"
  onClick={() => setDropDown((prev) => !prev)}
    className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
    type="">
    Filter by category
    <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>

  {/* Dropdown menu */}

  <div id="dropdown" className={`z-10 ${!dropDown ? "hidden" : ""} absolute top-12 w-56 p-3 rounded-lg shadow bg-gray-700`}>
    <h6 className="mb-3 text-sm font-medium text-white">
      Category
    </h6>
    <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
      <li className="flex items-center">
        <input id="apple" type="checkbox" value="" readOnly checked
          className="w-4 h-4 rounded text-primary-600 focus:ring-primary-600 ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500" />

        <label htmlFor="apple" className="ml-2 text-sm font-medium text-gray-100">
          Students
        </label>
      </li>

      <li className="flex items-center">
        <input id="UI" type="checkbox" value=""
          className="w-4 h-4 rounded text-primary-600 focus:ring-primary-600 ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500" />

        <label htmlFor="UI" className="ml-2 text-sm font-medium text-gray-100">
          UI/UX
        </label>
      </li>

      <li className="flex items-center">
        <input id="dell" type="checkbox" value=""
          className="w-4 h-4  rounded text-primary-600 focus:ring-primary-600 ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500" />

        <label htmlFor="dell" className="ml-2 text-sm font-medium text-gray-100">
          Fullstack
        </label>
      </li>

      <li className="flex items-center">
        <input id="Mobile" type="checkbox" value=""
          className="w-4 h-4  rounded text-primary-600  focus:ring-primary-600 ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500" />

        <label htmlFor="Mobile" className="ml-2 text-sm font-medium text-gray-100">
          Mobile App
        </label>
      </li>

    </ul>
  </div>
</div>
    </div>
  )
}

export default Filter