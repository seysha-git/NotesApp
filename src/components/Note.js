import React from 'react'
import {MdDeleteForever} from 'react-icons/md'

const Note = ({text, id, date, handleDeleteNote}) => {
  return (
    <div className='bg-[#fef68a] rounded-lg p-1 min-h-[170px] flex gap-5 flex-col justify-between whitespace-pre-wrap'>
        <span>{text}</span>
        <div className='flex items-center gap-3 justify-between'>
            <small>{date}</small>
            <MdDeleteForever onClick={() => handleDeleteNote(id)} className='cursor-pointer ease-in-out duration-300 hover:mb-2' size={'2em'}/>
        </div>
    </div>
  )
}

export default Note