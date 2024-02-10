import { React, useState } from 'react'
import { useCycle, motion } from 'framer-motion'
import ChianLogo from '../assets/chianpng.png'
import NavModal from './NavModal'
import More from '../assets/expandMore.svg'
import Less from '../assets/expandLess.svg'
import { Link } from 'react-router-dom'
import batches from '../assets/Batches'
import studentCategory from '../assets/StudentCategory'

const Navbar = () => {
    const [mobileNav, toggleMobileNav] = useCycle(false, true);
    const [showModal, setShowModal] = useState(false)
    const popModal = () => {
        toggleMobileNav()

       !showModal ? setShowModal(true) : setShowModal(false)
    }

    const [studentsCategory, setStudentsCategory] = useState(false)

    const [batchesOpen, setBatchesOpen] = useState(false)
  return (
    
    <div className='w-full px-2'>
                <div className='flex justify-between items-center w-full  h-20 lg:h-24'>
                    <Link to='/'>
        <img src={ChianLogo} alt="chian tech hub logo" className='w-20 md:w-32 xl:w-40 bg-white rounded-lg py-1 px-1'/>
        </Link>

<div className='hidden text-black space-x-1 text-md md:flex xl:text-xl xl:mr-28  xl:space-x-3 2xl:space-x-5'>

    <Link to='/'>
    <p className='px-2 py-3 rounded-md hover:scale-110 hover:bg-slate-400 active:scale-90 cursor-pointer'>Home  </p>
    </Link>

    <div className='relative flex flex-col rounded-md '
     onMouseEnter={() => setStudentsCategory((prev) => !prev)}
     onMouseLeave={() => setStudentsCategory((prev) => !prev)}
    >
       <div className='flex hover:scale-110 hover:drop-shadow-bigShadow active:scale-90 px-2 py-3  cursor-pointer'
       >
        <p className=''
        
        >Students</p>
        <img src={!studentsCategory? More : Less} alt="" />
        </div>
        {studentsCategory && <div className='absolute bg-slate-300 bg-opacity-80 w-fit mt-12 z-10 -left-12 rounded-md overflow-hidden'>
            {studentCategory.map((item, index) => (
            <Link to={`/courses/${item.category}`}> 
            <div className='whitespace-nowrap h-9 px-6 py-7 hover:bg-slate-900 hover:text-white flex items-center active:scale-90'>
<p>{item.category}</p>
             </div>
             </Link>
             ))}
            </div>}
        <div>

        </div>
         </div>
    <p className='px-2 py-3 rounded-md hover:scale-110 hover:bg-slate-400 active:scale-90 cursor-pointer'>Time Table</p>
    <div className='relative flex flex-col rounded-md '
     onMouseEnter={() => setBatchesOpen((prev) => !prev)}
     onMouseLeave={() => setBatchesOpen((prev) => !prev)}
    >
       <div className='flex hover:scale-110 hover:drop-shadow-bigShadow active:scale-90 px-2 py-3  cursor-pointer'
       >
        <p className=''
        
        >Batches</p>
        <img src={!batchesOpen? More : Less} alt="" />
        </div>
        {batchesOpen && <div className='absolute bg-slate-300 bg-opacity-80 w-fit mt-12 z-10 -left-12 rounded-md overflow-hidden'>
            {batches.map((item, index) => (
            <Link to={`/courses/${item.batch}`}> 
            <div className='whitespace-nowrap h-9 px-6 py-7 hover:bg-slate-900 hover:text-white flex items-center active:scale-90'>
<p>{item.batch}</p>
             </div>
             </Link>
             ))}
            </div>}
        <div>

        </div>
         </div>
    <p className='px-2 py-3 rounded-md hover:scale-110 hover:bg-slate-400 active:scale-90 cursor-pointer'>Mail </p>
    <p></p>
</div>

        <motion.button 
        animate={mobileNav ? "open" : "closed"}
        onClick= {popModal}
        className="flex flex-col space-y-1.5 mr-3 bg-[#0043a7] w-fit h-fit py-2 rounded-lg px-2 md:hidden"
        >
            <motion.span variants={{
                closed: { rotate:0, y: 0},
                open: { rotate:45, y:8},
            }} 
            className="w-8 h-[2px] bg-white  block rounded-sm"></motion.span>
            <motion.span variants={{
                closed: { opacity: 1},
                open: { opacity: 0},
            }} 
            className="w-8 h-[2px] bg-white  block rounded-sm"></motion.span>
            <motion.span  variants={{
                closed: { rotate: 0, y:0},
                open: { rotate: -45, y:-8},
            }} 
             className="w-8 h-[2px] bg-white  block rounded-sm"></motion.span>
        </motion.button>
        </div>
        <NavModal isVisible={showModal} onClose={() => {setShowModal(false) 
        toggleMobileNav()} }/>
    </div>
  )
}

export default Navbar