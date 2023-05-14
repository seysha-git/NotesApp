import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({handleSearchText}) => {

  return (
    <div className='flex items-center mb-4 pl-2 gap-3 bg-[#dce3ee] rounded-lg'>
        <MdSearch className='' size={"1.3em"}></MdSearch>
        <input
        type='text'
        placeholder='type to search'
        className='outline-none border-none rounded-md bg-[#dce3ee] focus:outline-none'
        onChange={(e) => handleSearchText(e.target.value)}
        >
        </input>
    </div>
  )
}

export default Search