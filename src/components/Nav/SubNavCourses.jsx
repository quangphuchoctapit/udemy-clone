import React, { useEffect, useState } from 'react'
import { subNavData } from '../../utils/data/home/subNavData'
import OnHoverComponent from './OnHoverComponent'
import { Link, useLocation } from 'react-router-dom'

const SubNavCourses = () => {
    const location = useLocation()
    const validUrl = subNavData?.map(item => item.link)
    const [tags, setTags] = useState([])
    useEffect(() => {
        if (validUrl.includes(location.pathname)) {
            const title = subNavData?.filter(item => item?.link === location.pathname)[0]?.content?.map(item => item?.title);
            const link = subNavData?.filter(item => item?.link === location.pathname)[0]?.content?.map(item => item?.link);

            const titlesAndLinks = title.map((titleItem, index) => ({
                title: titleItem,
                link: link[index]
            }));

            setTags(titlesAndLinks);
        }
    }, [location])

    return (
        <>
            <div className='xl:flex gap-10 items-center p-3 border-b-2 border-gray-300 lg:text-xl text-md hidden'>
                {tags?.map((item, index) => (
                    <div key={index} className='hidden lg:block hover:duration-200 hover:text-violet-500 cursor-pointer'>
                        <a href={item?.link}>{item?.title}</a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SubNavCourses
