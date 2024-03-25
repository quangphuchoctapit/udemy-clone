import React from 'react'
import { Link } from 'react-router-dom'

const MyList = () => {
    return (
        <div className='w-full gap-3 flex flex-col items-center'>
            <h3 className='text-3xl font-bold'>Organize and access your courses faster!</h3>
            <p className='text-xl font-bold'><Link to='/my-learning/all-courses' className='text-violet-500 underline font-bold'>Go to the All Courses tab</Link> to create a list.</p>

        </div>
    )
}

export default MyList
