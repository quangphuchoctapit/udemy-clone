import React from 'react'
import { IoMdStopwatch } from "react-icons/io";

const AllCourses = () => {
    return (
        <>
            <div className="p-4 border-2 items-center flex gap-4 lg:mx-40 mx-0">
                <div className='flex items-start'><IoMdStopwatch /></div>
                <div className='flex flex-col gap-4'>
                    <h3 className='font-semibold text-lg'>Schedule learning time</h3>
                    <p>Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach their goals. Set time aside to learn and get reminders using your learning scheduler.</p>
                    <div className="w-full flex items-center gap-4">
                        <button className='p-4 bg-black text-white text-lg font-bold hover:duration-200 hover:bg-gray-700'>Get Started</button>
                        <button className='p-4 bg-transparent text-black text-lg font-bold hover:duration-200 hover:text-violet-400'>Dismiss</button>
                    </div>
                </div>
            </div>
            <div className="px-3 w-full grid grid-cols-3 gap-4">
                <div className="p-3 w-full hover:duration-200 flex flex-col gap-3  hover:bg-gray-200">
                    <div className="w-full h-48">
                        <div className="image bg-gray-500" ></div>
                    </div>
                    <h5 className='font-bold text-lg'>The Complete React Native + Hooks Course</h5>
                    <p className='text-gray-500'>Stephen Grider</p>
                    <div className="h-2 w-full bg-black"></div>
                    <div className="flex justify-between">
                        <p>30% complete</p>
                        <div className="flex flex-col gap-2">
                            <div className="">stars</div>
                            <p>Leave a rating</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllCourses
