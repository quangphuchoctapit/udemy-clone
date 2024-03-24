import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className=' w-full py-10  bg-gradient-to-tr from-green-200 to-violet-200'>
            <div className="p-5 border max-w-screen-lg mx-auto min-h-[20rem] items-center flex flex-col gap-6 shadow-2xl bg-white text-black font-semibold">
                <h3 className='text-3xl font-bold'>404 Not Found</h3>
                <div className="w-96 h-96">
                    <div className="image" style={{ backgroundImage: `url('././public/image/404notfound.jpg')`, backgroundSize: '100%' }}></div>
                </div>
                <p className='text-xl'>We can’t find the page you’re looking for</p>
                <p className='text-lg'>Visit our <Link to='/support' className='underline text-violet-500'>support page</Link> for further assistance.</p>
            </div>
        </div>
    )
}

export default NotFoundPage
