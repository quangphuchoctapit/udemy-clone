import React from 'react'
import { Link } from 'react-router-dom'

const Archived = () => {
    return (
        <div className='w-full gap-3 flex flex-col items-center'>
            <h3 className='text-3xl font-bold'>Focus on only the courses that matter to you.</h3>
            <p className='text-xl font-bold'><Link to='/my-learning/all-courses' className='text-violet-500 underline font-bold'>Go to the All Courses</Link> tab to archive.</p>

        </div>
    )
}

export default Archived
