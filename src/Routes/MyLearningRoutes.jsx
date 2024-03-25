import React from 'react'
import MyLearning from '../Layout/MyLearning'
import Wishlist from '../components/MyLearning/Wishlist'
import AllCourses from '../components/MyLearning/AllCourses'
import MyList from '../components/MyLearning/MyList'
import Archived from '../components/MyLearning/Archived'
import { Route } from 'react-router-dom'


const MyLearningRoutes = () => {
    return (
        <Route path='/my-learning' element={<MyLearning />}>
            <Route path='/my-learning/wishlist' element={<Wishlist />} />
            <Route path='/my-learning/all-courses' element={<AllCourses />} />
            <Route path='/my-learning/my-list' element={<MyList />} />
            <Route path='/my-learning/archived' element={<Archived />} />
        </Route>
    )
}

export default MyLearningRoutes
