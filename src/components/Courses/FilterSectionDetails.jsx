import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";


const FilterSectionDetails = ({ data }) => {
    return (
        <>
            <div onClick={() => data?.handleToggleShowMore(data?.type)} className="p-3 cursor-pointer flex border-t-2 w-full justify-between items-center">
                <h4 className='font-bold text-2xl'>{data?.title}</h4>
                <FaChevronDown />
            </div>
            {data?.isShowMore && (
                <div className={`flex flex-col gap-3 ${data.isShowMore ? 'animate-slideUp' : 'animate-slideDown'} duration-500`}>
                    {data?.content?.map((item, index) => (
                        <div key={index} className="flex gap-3 items-center">
                            <input type="checkbox" name="" id={item?.title} />
                            <label htmlFor={item?.title}>{item?.title}</label>
                            <span className='text-gray-500'>({item?.totalVideos})</span>
                        </div>
                    ))}
                </div>
            )}


        </>
    )
}

export default FilterSectionDetails
