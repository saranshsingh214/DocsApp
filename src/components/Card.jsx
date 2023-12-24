import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function Card({data}) {
  return (
    <div className='flex-shrink-0 relative w-60 h-72 rounded-[35px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden'>
        <FaRegFileAlt />

        <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>

        <div className="footer absolute bottom-0 left-0 w-full">
            <div className='flex items-center justify-between px-8 mb-3 py-4'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 rounded-full bg-zinc-600 flex items-center justify-center'>
                    {data.close ? <IoClose /> : <HiOutlineDownload size=".8em" color='#fff'/>}
                    
                </span>
            </div>
            {data.tag.isOpen && (
                <div className={`tag w-full py-4 ${data.tag.tagColor} flex items-center justify-center`}>
                <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>
            )}
        </div>
    </div>
  )
}

export default Card
