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
import CoursesRoute from './Routes/CoursesRoute';
import MyLearningRoutes from './Routes/MyLearningRoutes';
import ProfileRoute from './Routes/ProfileRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<RootLayout />} path='/'>
        <Route path='/' element={<Home />} />

        {/* profile */}
        {ProfileRoute()}

        {/* my learning */}
        {MyLearningRoutes()}


        {/* courses */}
        {CoursesRoute()}

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
