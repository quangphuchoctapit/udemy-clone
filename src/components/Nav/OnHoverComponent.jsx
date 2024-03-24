import React from 'react';
import { Link } from 'react-router-dom';

const OnHoverComponent = ({ title, data }) => {
    const handleData = () => {
        switch (data?.type) {
            case 'Skillsprint Business':
                return (
                    <div className='bg-white w-full border-2 shadow-2xl p-3 font-bold text-2xl flex flex-col gap-3 items-center'>
                        <p>{data?.data?.description}</p>
                        <button className='w-full h-16 px-4 py-2 bg-black text-white hover:duration-200 hover:bg-gray-700'>
                            {data?.data?.button}
                        </button>
                    </div>
                );
            case 'Teach on Skillsprint':
                return (
                    <div className='bg-white w-full border-2 shadow-2xl p-3 font-bold text-2xl flex flex-col gap-3 items-center'>
                        <p>{data?.data?.description}</p>
                        <button className='w-full h-16 px-4 py-2 bg-black text-white hover:duration-200 hover:bg-gray-700'>
                            {data?.data?.button}
                        </button>
                    </div>
                );
            case 'My learning':
                return (
                    <div className='bg-white w-full border-2 shadow-2xl font-bold text-2xl flex flex-col gap-3 items-center'>
                        <div className="flex flex-row gap-3 items-center border-b-2 p-3 w-full">
                            <div className="w-24 h-24">
                                <div className="object-cover bg-no-repeat bg-center w-full h-full" style={{ backgroundImage: `url('${data?.data[0]?.image}')`, backgroundSize: '150%' }}></div>
                            </div>
                            <div className="flex flex-col">
                                <p className='text-lg font-semibold'></p>
                                <div className="">progress bar</div>
                            </div>
                        </div>

                        <div className="p-3">
                            <button className='w-full h-16 px-4 py-2 bg-black text-white hover:duration-200 hover:bg-gray-700'>
                                {data?.data[0]?.button}
                            </button>
                        </div>
                    </div>
                );
            case 'Notifications':
                return (
                    <div className='bg-white w-full border-2 shadow-2xl font-bold text-2xl flex p-4 flex-col gap-5 items-center'>
                        <div className="flex items-center justify-between w-full">
                            <h3 className='text-2xl font-bold text-black'>Notifications</h3>
                            <Link to='/profile/notifications' className='text-lg font-semiboldld text-violet-500'>Settings</Link>
                        </div>
                        <div className="flex flex-1 w-full gap-3 justify-start">
                            <div className=" w-24 h-24">
                                <div className="image rounded-full bg-black"></div>
                            </div>
                            <div className="flex-1 flex flex-col">
                                <h4 className='text-lg font-bold leading-5'>Username replied to the question: Endless captcha loop</h4>
                                <p className='text-gray-400 text-sm'>3 days ago</p>
                            </div>
                        </div>
                        <div className="flex border-t-2 justify-between items-center p-4 w-full">
                            <h3 className='text-xl text-violet-500 font-bold'>Mark all as read</h3>
                            <button className='border-2 border-black bg-white text-black p-4 text-xl'>See All</button>
                        </div>
                    </div>
                );
            case 'Cart':
                return (
                    <div className='bg-white w-full border-2 shadow-2xl font-bold text-2xl flex p-4 flex-col gap-5 items-center'>
                        <h3 className='text-xl text-gray-400 font-bold'>Your Cart is empty.</h3>
                        <button className='border-2 border-black bg-white text-black p-4 text-xl'>Keep Shopping</button>
                    </div>
                );
            case 'Wishlist':
                return (
                    <div className='bg-white w-full border-2 shadow-2xl font-bold text-2xl flex p-4 flex-col gap-5 items-center'>
                        <h3 className='text-xl text-gray-400 font-bold'>Your Wishlist is empty.</h3>
                        <button className='border-2 border-black bg-white text-black p-4 text-xl'>Explore Courses</button>
                    </div>
                );
            default:
                return null; // Return null for unknown types or handle them as needed
        }
    };

    return (
        <div className='relative group'>
            <div className='hover:text-violet-500 cursor-pointer duration-200'>
                {title}
            </div>
            <div className={data?.type !== 'Categories' ? "absolute z-10 w-96 mt-1  right-0 hidden group-hover:block" : "absolute z-10 w-96 mt-1 left-0 hidden group-hover:block"}>
                <div className="w-full h-16 bg-transparent"></div>
                {handleData()}
            </div>
        </div>

    );
};

export default OnHoverComponent;
