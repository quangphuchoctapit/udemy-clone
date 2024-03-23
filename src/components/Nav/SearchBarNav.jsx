import React from 'react'
import { IoIosSearch } from "react-icons/io";


const SearchBarNav = () => {
    return (
        <div className='rounded-full border border-gray-800 bg-[#f7f9fa] px-3 py-2 flex items-center'>
            <IoIosSearch size={20} />
            <input placeholder='Search for anything' className=' cursor-pointer px-3 w-96 py-1 flex-1 bg-transparent outline-none' />
        </div>
    )
}

export default SearchBarNav
