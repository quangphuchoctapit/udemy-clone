import React from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";


const SliderMain = ({ data, setData }) => {

    return (
        <div className="w-full h-96 relative">
            <div onClick={() => { setData('prev') }} className="absolute hover:opacity-65 hover:duration-200 mx-3 cursor-pointer left-0 top-1/2 transform -translate-y-1/2 rounded-full flex items-center justify-center bg-black text-white w-12 h-12">
                <MdArrowBackIosNew />
            </div>
            <div onClick={() => { setData('forw') }} className="absolute hover:opacity-65 hover:duration-200 mx-3 cursor-pointer right-0 top-1/2 transform -translate-y-1/2 rounded-full flex items-center justify-center bg-black text-white w-12 h-12">
                <MdArrowForwardIos />
            </div>
            <div className='w-full h-full bg-[#a5e2d0] flex px-20 justify-between items-center'>
                <div className='p-8 max-w-96 flex flex-col gap-3 bg-white'>
                    <h3 className='text-4xl max-sm:text-lg font-serifDisplay font-bold'>{data.title}</h3>
                    <p className='text-lg max-sm:text-xs'>{data.description}</p>
                </div>
                <div className="flex-1 max-md:hidden h-full flex items-center">
                    <div className="w-full h-72">
                        <div style={{ backgroundImage: `url('${data.image}')`, backgroundSize: '100%' }} className='w-full h-full object-cover bg-center bg-no-repeat'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderMain
