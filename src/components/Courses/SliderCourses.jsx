import React from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";


const SliderCourses = ({ data, setData }) => {

    return (
        <div className="w-full relative flex">
            <div onClick={() => { setData('prev') }} className="absolute hover:opacity-65 hover:duration-200 mx-3 cursor-pointer left-0 top-1/2 transform -translate-y-1/2 rounded-full flex items-center justify-center bg-black text-white w-12 h-12">
                <MdArrowBackIosNew />
            </div>
            <div onClick={() => { setData('forw') }} className="absolute hover:opacity-65 hover:duration-200 mx-3 cursor-pointer right-0 top-1/2 transform -translate-y-1/2 rounded-full flex items-center justify-center bg-black text-white w-12 h-12">
                <MdArrowForwardIos />
            </div>
            <div className='w-full border gap-4 flex p-4 items-center'>
                <div className="w-[28rem] h-72">
                    <div className="image bg-red-400" style={{ backgroundImage: `url('${data?.image}')`, backgroundSize: '100%' }}></div>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                    <div className="flex-1 flex gap-3 flex-col">
                        <h4 className='text-2xl font-bold leading-6'>{data?.title}</h4>
                        <p className='text-lg leading-5'>{data?.description}</p>
                        <p className='text-sm text-gray-500'>{data?.author}</p>
                        <div className='flex items-center gap-3'>
                            <p className='text-green-600 text-sm'>Updated <span className='text-green-700 font-bold'>{data?.lastUpdated}</span></p>
                            <p className='text-sm text-gray-500'>{data?.totalHours} total hours</p>
                            <p className='text-sm text-gray-500'>{data?.lectures} lectures</p>
                            <p className='text-sm text-gray-500'>{data?.levels}</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <p>{data?.star}</p>
                            <p className='text-sm text-gray-500'>{data?.totalHours} stars</p>
                            <p className='text-sm text-gray-500'>({data?.totalReviews})</p>
                            <p className='text-sm text-gray-500'>{data?.tag}</p>
                        </div>
                    </div>
                    <h3 className='text-2xl font-bold'>{data?.price}VND</h3>

                </div>
            </div>
        </div>
    )
}

export default SliderCourses
