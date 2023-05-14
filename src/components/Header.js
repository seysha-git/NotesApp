import React from 'react'

const Header = ({handleToggle}) => {
  return (
    <div className='flex items-center justify-between p-3'>
        <h1 className='font-bold text-3xl'>Header</h1>
        <button onClick={() => handleToggle((x) => !x)}className='bg-[#6a6ac3] rounded-md py-1 px-4 hover ease-in-out duration-300 hover:bg-slate-400 hover:text-white'>Toggle</button>
    </div>
  )
}

export default Header