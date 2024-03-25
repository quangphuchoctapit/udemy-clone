import React, { useEffect, useState } from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { Link } from 'react-router-dom'

const RectangleTopics = ({ data }) => {
    const [currentShowData, setCurrentShowData] = useState([])
    useEffect(() => {
        if (data?.length > 10) {
            setCurrentShowData(data?.slice(0, 10))
        }
    }, [data])


    ///////////////////////////////// slider main
    // const handleChangePageRectangle = (type) => {
    //     switch (type) {
    //         case 'prev':
    //             if (sliderMain.id === 1) {
    //                 return
    //             }
    //             setCurrentShowData(dataSliderMain.find(slide => slide.id === sliderMain.id - 1))
    //             break
    //         case 'forw':
    //             if (sliderMain.id === dataSliderMain.length) {
    //                 return
    //             }
    //             setCurrentShowData(dataSliderMain.find(slide => slide.id === sliderMain.id + 1))
    //             break
    //         default:
    //             setCurrentShowData(dataSliderMain[0])
    //             break
    //     }
    // }
    /////////////////////////////////

    return (
        <div className='w-full grid grid-cols-2 gmd:grid-cols-3 gap-3 lg:grid-cols-5 relative'>
            <div onClick={() => { setData('prev') }} className="absolute hover:opacity-65 hover:duration-200 mx-3 cursor-pointer left-0 top-1/2 transform -translate-y-1/2 rounded-full flex items-center justify-center bg-black text-white w-12 h-12">
                <MdArrowBackIosNew />
            </div>
            <div onClick={() => { setData('forw') }} className="absolute hover:opacity-65 hover:duration-200 mx-3 cursor-pointer right-0 top-1/2 transform -translate-y-1/2 rounded-full flex items-center justify-center bg-black text-white w-12 h-12">
                <MdArrowForwardIos />
            </div>
            {currentShowData?.map(item =>
                <Link key={item.id} to={item.link} className='flex hover:duration-200 hover:bg-gray-100 justify-center min-h-16 items-center px-3 font-bold border-2'>
                    {item?.title}
                </Link>
            )}
        </div>
    )
}

export default RectangleTopics
