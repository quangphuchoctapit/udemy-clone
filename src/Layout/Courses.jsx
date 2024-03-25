import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { navCategoriesData } from '../utils/data/home/navCategoriesData';

const Courses = () => {
    const [title, setTitle] = useState('')
    const [currentSelectTypeCourses, setCurrentSelectTypeCourses] = useState('Most popular')

    const validUrls = [
        ...navCategoriesData.map(item => item.link),
        ...navCategoriesData
            .map(item => item.commonTopics?.map(topic => topic?.link))
            .flat()
            .filter(Boolean) // Remove any undefined or null values
    ];
    const findTitleByLink = (data, targetLink) => {
        let foundTitle = null;

        // Traverse the outer layer of the array
        data.some(outerItem => {
            // Check if the outer item has a link property matching the targetLink
            if (outerItem.link === targetLink) {
                // If found, set the foundTitle and exit the loop
                foundTitle = outerItem.title;
                return true;
            } else {
                // If not found, traverse the inner layer of the array (commonTopics)
                return outerItem.commonTopics?.some(innerItem => {
                    // Check if the inner item has a link property matching the targetLink
                    if (innerItem.link === targetLink) {
                        // If found, set the foundTitle and exit both loops
                        foundTitle = innerItem.title;
                        return true; // Exit the inner loop
                    }
                });
            }
        });

        return foundTitle;
    };
    useEffect(() => {
        if (validUrls.includes(location.pathname)) {
            const title = findTitleByLink(navCategoriesData, location.pathname);
            setTitle(title)
        }
    })

    const handleSetCurrentSelectTypeCourses = (type) => {
        switch (type) {
            case 'Most popular':
                setCurrentSelectTypeCourses('Most popular')
                break
            case 'New':
                setCurrentSelectTypeCourses('New')
                break
            default:
                setCurrentSelectTypeCourses('Most popular')
                break
        }
    }

    const handleActiveSelectTypeCourses = (type) => {
        switch (currentSelectTypeCourses) {
            case 'Most popular':
                return type === 'Most popular' ? 'absolute bottom-[-0.8rem] left-0 w-full h-2 bg-black transition-opacity duration-300' : null;
            case 'New':
                return type === 'New' ? 'absolute bottom-[-0.8rem] left-0 w-full h-2 bg-black transition-opacity duration-300' : null;
            default:
                return null;
        }
    };


    return (
        <>
            <div className='w-full min-h-96 flex flex-col px-3 gap-8'>
                <h3 className='font-serifDisplay font-bold text-3xl'>{title} Courses</h3>
                <h4 className='text-2xl font-bold'>Courses to get you started</h4>
                <div className='text-xl font-semibold flex items-center'>
                    <div className="px-3 relative group cursor-pointer hover:duration-200 hover:text-gray-600" onClick={() => handleSetCurrentSelectTypeCourses('Most popular')}>
                        Most popular
                        <div className={handleActiveSelectTypeCourses('Most popular')}></div>
                    </div>
                    <div className="px-3 relative group cursor-pointer hover:duration-200 hover:text-gray-600" onClick={() => handleSetCurrentSelectTypeCourses('New')}>
                        New
                        <div className={handleActiveSelectTypeCourses('New')}></div>
                    </div>
                </div>
                <Outlet data={{ title }} />
            </div>
        </>
    )
}

export default Courses
