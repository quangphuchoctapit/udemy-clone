import React from 'react'
import { subNavData } from '../../utils/data/home/subNavData'

const SubNav = () => {
    return (
        <div className='lg:flex gap-10 items-center p-3 border-b-2 border-gray-300 lg:text-xl text-md hidden'>
            {subNavData?.map((item, index) => (
                <div key={index} className='hover:duration-200 hover:text-violet-500 cursor-pointer'>{item.title}</div>
            ))}
        </div>
    )
}

export default SubNav
