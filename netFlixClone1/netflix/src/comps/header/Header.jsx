import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";


function Header() {
  return (
    <div className='bg-black flex justify-between
    items-center text-sm sm:text-xl 
    h-[50px] w-[100%] text-white '>


            <img 
            className='h-[100%] ml-[5px]  sm:ml-[10px] hover:cursor-pointer'
            src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" alt="" />

            <div
            className='flex justify-around text-sm
             items-center'>
              

                <Link className='m-0.5 sm:ml-7 md:ml-7'>TV </Link>
                <Link className='m-0.5 sm:ml-7 md:ml-7'>Sports</Link>
                <Link className='m-0.5 sm:ml-7 md:ml-7'>Movies</Link>
                <Link className='m-0.5 sm:ml-7 md:ml-7'>Recent</Link>



            </div>

            <CiSearch className='hover:cursor-pointer 
            mr-[5px] sm:mr-[10px] '/>





    </div>
  )
}

export default Header