import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { navCategoriesData } from '../../utils/data/home/navCategoriesData';
import CommonSection from '../Home/CommonSection';
import SliderCourses from './SliderCourses';
import { dataSliderMain } from '../../utils/data/home/sliderData';
import { dataSliderCourses } from '../../utils/data/courses/sliderDataCourses';
import RectangleTopics from '../RectangleTopics';
import { rectangleData } from '../../utils/data/rectangleData'

const CoursesPage = () => {
    ///////////////////////////////// slider main
    const defaultSliderMain = { id: 0, title: '', description: '', image: '', author: '', stars: 0, tag: '', price: 0, lastUpdated: 'March 2024', totalHours: 0, lectures: 0, levels: '', totalReviews: 0 }
    const [sliderMain, setSliderMain] = useState(defaultSliderMain)
    useEffect(() => {
        setSliderMain(dataSliderCourses[0])
    }, [])
    const handleChangeSliderMain = (type) => {
        switch (type) {
            case 'prev':
                if (sliderMain.id === 1) {
                    return
                }
                setSliderMain(dataSliderCourses.find(slide => slide.id === sliderMain.id - 1))
                break
            case 'forw':
                if (sliderMain.id === dataSliderCourses.length) {
                    return
                }
                setSliderMain(dataSliderCourses.find(slide => slide.id === sliderMain.id + 1))
                break
            default:
                setSliderMain(dataSliderCourses[0])
                break
        }
    }
    /////////////////////////////////


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
        <>
            <CommonSection data={{
                title: ``,
                data: [
                    {
                        id: 1,
                        image: `././public/image/courses/react-native-stephen.jpg`,
                        author: 'Tommy Le',
                        star: 4.2,
                        viewer: '6,969',
                        price: '1,399,000',
                        tag: ''
                    },
                    {
                        id: 2,
                        image: `././public/image/courses/react-native-stephen.jpg`,
                        author: 'Tommy Le',
                        star: 4.2,
                        viewer: '6,969',
                        price: '1,399,000',
                        tag: 'Highest Rated'
                    },
                    {
                        id: 3,
                        image: `././public/image/courses/react-native-stephen.jpg`,
                        author: 'Tommy Le',
                        star: 4.2,
                        viewer: '6,969',
                        price: '1,399,000',
                        tag: 'Bestseller'
                    },
                    {
                        id: 4,
                        image: `././public/image/courses/react-native-stephen.jpg`,
                        author: 'Tommy Le',
                        star: 4.2,
                        viewer: '6,969',
                        price: '1,399,000',
                        tag: 'Bestseller'
                    },
                    {
                        id: 5,
                        image: `././public/image/courses/react-native-stephen.jpg`,
                        author: 'Tommy Le',
                        star: 4.2,
                        viewer: '6,969',
                        price: '1,399,000',
                        tag: 'Bestseller'
                    }
                ]
            }} />
            <h3 className='font-bold text-3xl'>Featured courses</h3>
            <SliderCourses data={sliderMain} setData={handleChangeSliderMain} />
            <RectangleTopics data={rectangleData} />
        </>
    )
}

export default CoursesPage
