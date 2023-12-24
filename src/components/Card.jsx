import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";


function Card() {
  return (
    <div className='relative w-60 h-72 rounded-[35px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden'>
        <FaRegFileAlt />

        <p className='text-sm mt-5 font-semibold leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati.</p>

        <div className="footer absolute bottom-0 left-0 w-full">
            <div className='flex items-center justify-between px-8 mb-3 py-3'>
                <h5>.4mb</h5>
                <span className='w-7 h-7 rounded-full bg-zinc-600 flex items-center justify-center'>
                    <HiOutlineDownload size=".8em" color='#fff'/>
                </span>
            </div>
            <div className="tag w-full py-4 bg-green-600 flex items-center justify-center">
                <h3 className='text-sm font-semibold'>Download Now</h3>
            </div>
        </div>
    </div>
  )
}

export default Card
