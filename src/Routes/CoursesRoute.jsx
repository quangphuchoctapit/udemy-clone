import React from 'react';
import { Route } from 'react-router-dom';
import MyLearning from '../Layout/MyLearning';
import { navCategoriesData } from '../utils/data/home/navCategoriesData';
import Courses from '../Layout/Courses';
import CoursesPage from '../components/Courses/CoursesPage';

const CoursesRoute = () => {
    const validUrls = [
        ...navCategoriesData.map(item => item.link),
        ...navCategoriesData
            .map(item => item.commonTopics?.map(topic => topic?.link))
            .flat()
            .filter(Boolean) // Remove any undefined or null values
    ];

    return (
        <>
            <Route path='/courses' element={<Courses />}>

                {validUrls.map((item, index) => (
                    <Route key={index} path={`${item}`} element={<CoursesPage />} />
                ))}
            </Route>
        </>
    );
};

export default CoursesRoute;
