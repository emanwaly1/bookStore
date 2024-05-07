import React from 'react'
import { BsInfoCircle } from 'react-icons/bs';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { AiOutlineEdit } from 'react-icons/ai';
const BookModel = ({book,onClose}) => {
    return (
        <div className='fixed bg-black-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify items-center ' onClick={onClose}>
            <div
            onClick={(event)=>
            event.stopPropagation()}
            className='w-[600px] max-w-full h-[400px] bg-white-rounded-x1 p-4 flex flex-col relative'
            
        >
              <AiOutlineEdit className='absolute right-6 top-6 text-3x1 text-red-600 cursor-pointer' onClick={onClose}/>  
            </div>


        </div>
    )
}

export default BookModel
