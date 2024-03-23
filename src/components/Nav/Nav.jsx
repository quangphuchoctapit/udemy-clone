import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import SearchBarNav from './SearchBarNav.jsx';
import OnHoverComponent from './OnHoverComponent.jsx';
import SubNav from './SubNav.jsx';

const Nav = () => {
    return (
        <>
            {/* main nav */}
            <div className='w-full p-3 border-b-2 border-gray-300 relative inset-0 flex gap-6 items-center text-xl'>
                {/* logo */}
                <div className='w-48 h-32 hover:duration-200 hover:text-violet-500 cursor-pointer '>
                    <div style={{ backgroundImage: `url('././public/image/logo/logo.png')` }} className='image'></div>
                </div>

                {/* Categories */}
                <OnHoverComponent title={'Categories'} />

                {/* Search */}
                <SearchBarNav />

                <div className="flex items-center gap-8 ">
                    {/* Categories */}
                    <div className='hover:duration-200 hover:text-violet-500 cursor-pointer'>
                        <OnHoverComponent title='Skillsprint Business' data={{
                            type: 'Skillsprint Business', data: {
                                description: 'Get your team access to over 25,000 top Udemy courses, anytime, anywhere.',
                                button: 'Try Udemy Business'
                            }
                        }} />
                    </div>

                    {/* Teach on Skillsprint */}
                    <div className='hover:duration-200 hover:text-violet-500 cursor-pointer'>
                        <OnHoverComponent title='Teach on Skillsprint' data={{
                            type: 'Teach on Skillsprint', data: {
                                description: 'Turn what you know into an opportunity and reach millions around the world.',
                                button: 'Learn more'
                            }
                        }} />
                    </div>

                    {/* My learning */}
                    <div className='hover:duration-200 hover:text-violet-500 cursor-pointer'>
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

                <div className='flex items-center flex-1 gap-8 justify-end'>
                    {/* Wishlist */}
                    <div><FaRegHeart className='hover:duration-200 hover:text-violet-500 cursor-pointer' size={30} /></div>

                    {/* Cart */}
                    <div><FiShoppingCart className='hover:duration-200 hover:text-violet-500 cursor-pointer' size={30} /></div>

                    {/* Notification */}
                    <div><GoBell className='hover:duration-200 hover:text-violet-500 cursor-pointer' size={30} /></div>

                    {/* profile */}
                    <div className='w-12 h-12'>
                        <div className='cursor-pointer w-full h-full object-cover bg-center bg-no-repeat bg-black rounded-full'></div>
                    </div>
                </div>
            </div>
            {/* subnav */}
            <SubNav />
        </>
    )
}

export default Nav
