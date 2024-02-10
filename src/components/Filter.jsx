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
    class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    type="">
    Filter by category
    <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>

  {/* Dropdown menu */}

  <div id="dropdown" class={`z-10 ${!dropDown ? "hidden" : ""} absolute top-12 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700`}>
    <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">
      Category
    </h6>
    <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
      <li class="flex items-center">
        <input id="apple" type="checkbox" value="" readOnly checked
          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label htmlFor="apple" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          Students
        </label>
      </li>

      <li className="flex items-center">
        <input id="UI" type="checkbox" value=""
          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label htmlFor="UI" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          UI/UX
        </label>
      </li>

      <li className="flex items-center">
        <input id="dell" type="checkbox" value=""
          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label htmlFor="dell" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          Fullstack
        </label>
      </li>

      <li className="flex items-center">
        <input id="Mobile" type="checkbox" value=""
          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label htmlFor="Mobile" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
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