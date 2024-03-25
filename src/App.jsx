import React from 'react'
import {
  createBrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import Home from './screens/Home';
import Profile from './components/Profile/Profile';
import ProfileEditAccount from './components/Profile/ProfileEditAccount';
import Test from './screens/Test';
import NotFoundPage from './screens/404NotFound';
import RootLayout from './Layout/RootLayout';
import ProfileLayout from './Layout/ProfileLayout';
import ProfilePhoto from './components/Profile/ProfilePhoto';
import Notifications from './screens/Notifications';
import Cart from './screens/Cart';
import MyLearning from './Layout/MyLearning';
import Wishlist from './components/MyLearning/Wishlist';
import AllCourses from './components/MyLearning/AllCourses';
import MyList from './components/MyLearning/MyList';
import Archived from './components/MyLearning/Archived';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<RootLayout />} path='/'>
        <Route path='/' element={<Home />} />

        {/* profile */}
        <Route path='/profile' element={<ProfileLayout />}>
          <Route exact path='/profile' element={<Profile />} />
          <Route path='/profile/edit-account' element={<ProfileEditAccount />} />
          <Route path='/profile/photo' element={<ProfilePhoto />} />
        </Route>

        {/* my learning */}
        <Route path='/my-learning' element={<MyLearning />}>
          <Route path='/my-learning/wishlist' element={<Wishlist />} />
          <Route path='/my-learning/all-courses' element={<AllCourses />} />
          <Route path='/my-learning/my-list' element={<MyList />} />
          <Route path='/my-learning/archived' element={<Archived />} />
        </Route>

        <Route path='/notifications' element={<Notifications />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/test' element={<Test />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </>
  )
)

const App = () => {
  return (
    // <Router>

    // </Router>
    <RouterProvider router={router} />
  )
}

export default App
