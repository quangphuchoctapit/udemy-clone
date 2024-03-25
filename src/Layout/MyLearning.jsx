import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const MyLearning = () => {
    const location = useLocation();
    const lastPathSegment = location.pathname.match(/[^/]+$/)[0];
    const handleActiveLink = (url) => {
        const currentPath = location.pathname || ''; // Add a null check or default value
        switch (url) {
            case 'all-courses':
            case 'my-list':
            case 'wishlist':
            case 'archived':
                return url === lastPathSegment ? 'absolute bottom-[-0.8rem] left-0 w-full h-2 bg-white' : 'absolute bottom-[-0.8rem] left-0 w-full h-2 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300';
            default:
                return 'absolute bottom-[-0.8rem] left-0 w-full h-2 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300';
        }
    }
    return (
        <div className='w-full min-h-[24rem]'>
            <div className="w-full bg-black px-8 flex flex-col text-white">
                <h3 className="flex-1 py-12 flex font-serifDisplay font-bold text-3xl items-center">My Learning</h3>
                <div className="pb-3 text-lg max-md:text-xs flex items-center">
                    <Link to='/my-learning/all-courses' className='px-3 relative group'>
                        All Courses
                        <div className={handleActiveLink('all-courses')}></div>
                    </Link>
                    <Link to='/my-learning/my-list' className='px-3 relative group'>
                        My List
                        <div className={handleActiveLink('my-list')}></div>

                    </Link>
                    <Link to='/my-learning/wishlist' className='px-3 relative group'>
                        Wishlist
                        <div className={handleActiveLink('wishlist')}></div>

                    </Link>
                    <Link to='/my-learning/archived' className='px-3 relative group'>
                        Archived
                        <div className={handleActiveLink('archived')}></div>

                    </Link>
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-12 py-16">
                <Outlet />
            </div>
        </div>
    );
};

export default MyLearning;
