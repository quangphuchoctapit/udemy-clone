import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { navCategoriesData } from '../../utils/data/home/navCategoriesData';

const CoursesPage = () => {
    const location = useLocation()
    const [title, setTitle] = useState('')

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
    }, [location])
    return (
        <div>
            {title}
        </div>
    )
}

export default CoursesPage
