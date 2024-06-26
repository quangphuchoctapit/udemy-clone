import React, { useEffect, useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import SearchBarNav from './SearchBarNav.jsx';
import OnHoverComponent from './OnHoverComponent.jsx';
import SubNav from './SubNav.jsx';
import { Link } from 'react-router-dom';
import { useMatch, useLocation } from 'react-router-dom';
import { navCategoriesData } from '../../utils/data/home/navCategoriesData.js'
import SubNavCourses from './SubNavCourses.jsx';

const Nav = () => {
    const location = useLocation()
    const [isHomeRoute, setIsHomeRoute] = useState(false)
    const [isShowSubNavCourses, setIsShowSubNavCourses] = useState(false)
    const [isShowSubNav, setIsShowSubNav] = useState(false)
    useEffect(() => {
        if (location.pathname === '/') {
            setIsHomeRoute(true)
            setIsShowSubNav(true)
            setIsShowSubNavCourses(false)
        } else if (location.pathname.includes('/courses')) {
            setIsHomeRoute(false)
            setIsShowSubNav(false)
            setIsShowSubNavCourses(true)
        } else {
            setIsHomeRoute(false)
            setIsShowSubNav(false)
            setIsShowSubNavCourses(false)
        }
    }, [location])

    const [imageLogo, setImageLogo] = useState('')
    useEffect(() => {
        setImageLogo('/image/logo/logo.png')
    }, [isHomeRoute])
    return (
        <>
            {/* main nav */}
            <div className={isHomeRoute ? 'w-full p-3 border-b-2 border-gray-300 relative inset-0 flex max-md:justify-between gap-6 items-center text-xl' : 'w-full p-3 border-b-2 shadow-lg border-gray-300 relative inset-0 flex gap-6 max-md:justify-between items-center text-xl'}>
                <div className="max-md:block hidden">burger</div>
                {/* logo */}
                <Link to='/' className='w-48 h-32 cursor-pointer '>
                    <div style={{ backgroundImage: `url('${imageLogo}')`, backgroundSize: '100%' }} className='image'></div>
                </Link>

                {/* Categories */}
                <div className='hidden xl:block hover:duration-200 cursor-pointer'>
                    <OnHoverComponent title='Categories' data={{
                        type: 'Categories', data: navCategoriesData
                    }} />
                </div>

                {/* Search */}
                <div className='hidden lg:block'>
                    <SearchBarNav />
                </div>

                <div className="flex items-center gap-8 ">
                    {/* Skillsprint Business */}
                    <div className='hidden lg:block   cursor-pointer'>
                        <OnHoverComponent title='Skillsprint Business' data={{
                            type: 'Skillsprint Business', data: {
                                description: 'Get your team access to over 25,000 top Udemy courses, anytime, anywhere.',
                                button: 'Try Udemy Business'
                            }
                        }} />
                    </div>

                    {/* Teach on Skillsprint */}
                    <div className='hidden lg:block   cursor-pointer'>
                        <OnHoverComponent title='Teach on Skillsprint' data={{
                            type: 'Teach on Skillsprint', data: {
                                description: 'Turn what you know into an opportunity and reach millions around the world.',
                                button: 'Learn more'
                            }
                        }} />
                    </div>

                    {/* My learning */}
                    <div className='hidden xl:block   cursor-pointer'>
                        <OnHoverComponent title='My learning' data={{
                            type: 'My learning', data: [{
                                id: 1, image: `././public/image/courses/react-native-stephen.jpg`,
                                title: 'The Complete React Native + Hooks Course',
                                author: 'Stephen Grider',
                                progress: 0.3,
                                link: '',
                                button: 'Go to my learning'
                            }]
                        }} />
                    </div>
                </div>

                <div className='flex items-center max-md:hidden flex-1 gap-8 justify-end'>
                    {/* Wishlist */}
                    <div className='hidden xl:block   cursor-pointer'>
                        <OnHoverComponent title={<FaRegHeart className='' size={30} />} data={{
                            type: 'Wishlist', data: [{
                                id: 1, image: `././public/image/courses/react-native-stephen.jpg`,
                                title: 'The Complete React Native + Hooks Course',
                                author: 'Stephen Grider',
                                progress: 0.3,
                                link: '',
                                button: 'Go to my learning'
                            }]
                        }} />
                    </div>

                    {/* Cart */}
                    <div className='hidden md:block   cursor-pointer'>
                        <OnHoverComponent title={<FiShoppingCart className='' size={30} />} data={{
                            type: 'Cart', data: [{
                                id: 1, image: `././public/image/courses/react-native-stephen.jpg`,
                                title: 'The Complete React Native + Hooks Course',
                                author: 'Stephen Grider',
                                progress: 0.3,
                                link: '',
                                button: 'Go to my learning'
                            }]
                        }} />
                    </div>

                    {/* Notification */}
                    <div className='hidden xl:block   cursor-pointer'>
                        <OnHoverComponent title={<GoBell className='' size={30} />} data={{
                            type: 'Notifications', data: [{
                                id: 1, image: `././public/image/courses/react-native-stephen.jpg`,
                                title: 'The Complete React Native + Hooks Course',
                                author: 'Stephen Grider',
                                progress: 0.3,
                                link: '',
                                button: 'Go to my learning'
                            }]
                        }} />
                    </div>

                    {/* profile */}
                    <Link to='/profile' className='w-12 hidden md:block h-12'>
                        <div className='cursor-pointer w-full h-full object-cover bg-center bg-no-repeat bg-black rounded-full'></div>
                    </Link>
                </div>
                {/* profile --- small device */}
                <Link to='/profile' className='max-md:block hidden min-w-10 h-10'>
                    <div className='image bg-black rounded-full'></div>
                </Link>
            </div>
            {/* subnav */}
            {isShowSubNav &&
                <SubNav />
            }
            {isShowSubNavCourses &&
                <SubNavCourses />
            }
        </>
    )
}

export default Nav
