import React from 'react'

const SubNav = () => {
    return (
        <div className='flex gap-10 items-center p-3 border-b-2 border-gray-300 text-xl'>
            {/* development */}
            <div className='hover:duration-200 hover:text-violet-500 cursor-pointer'>Development</div>

            {/* Business */}
            <div className='hover:duration-200 hover:text-violet-500 cursor-pointer'>Business</div>

            {/* Finance & Accounting */}
            <div className='hover:duration-200 hover:text-violet-500 cursor-pointer'>Finance & Accounting</div>

            {/* IT & Software  */}
            <div className='hover:duration-200 hover:text-violet-500 cursor-pointer'>IT & Software</div>

            {/* Office Productivity */}
            <div className='hover:duration-200 hover:text-violet-500 cursor-pointer'>Office Productivity</div>

            {/* Personal Development */}
            <div className='hover:duration-200 hover:text-violet-500 cursor-pointer'>Personal Development</div>

            {/* Design */}
            <div className='hover:duration-200 hover:text-violet-500 cursor-pointer'>Design</div>

            {/* Marketing */}
            <div className='hover:duration-200 hover:text-violet-500 cursor-pointer'>Marketing</div>

            {/* Health & Fitness */}
            <div className='hover:duration-200 hover:text-violet-500 cursor-pointer'>Health & Fitness</div>

            {/* Music */}
            <div className='hover:duration-200 hover:text-violet-500 cursor-pointer'>Music</div>
        </div>
    )
}

export default SubNav
