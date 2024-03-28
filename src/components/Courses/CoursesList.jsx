import React from 'react'

const CoursesList = () => {
    return (
        <div className="border-b-2 pb-3 flex gap-2">
            <div className="basis-1/3 h-56">
                <div className="w-full  image bg-orange-300"></div>
            </div>
            <div className="flex-1 flex gap-3 justify-between">
                <div className="flex flex-col basis-4/5">
                    <h3 className='text-lg font-bold leading-5 '>An Entire MBA in 1 Course:Award Winning Business School Prof</h3>
                    <h5 className='font-light leading-5 '>** #1 Best Selling Business Course! ** Everything You Need to Know About Business from Start-up to IPO</h5>
                    <div className="flex text-gray-400 text-sm">
                        <span>Tommy Teo</span>
                        <span>1.4M students</span>
                        <span>#1 best selling business & Finance Prof.</span>
                    </div>
                    <div className="flex">
                        <span className='font-bold text-lg'>4.6</span>
                        <span>stars</span>
                        <span>All Levels</span>
                    </div>
                    <div className="">tag</div>
                </div>
                <div className="flex basis-1/5 w-full items-end flex-col gap-2">
                    <h3 className='font-bold text-lg'>$199</h3>
                    <h3 className='text-gray-500 text-sm'>$200</h3>
                </div>
            </div>
        </div>
    )
}

export default CoursesList
