import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { subNavData } from '../../utils/data/home/subNavData';
import { MdArrowForwardIos } from "react-icons/md";
import { limitWords } from '../../utils/functions/limitWords.js'

const leftSideDataHoverItem = [
    ...subNavData.map(item => item.title), 'Categories'
]

const OnHoverComponent = ({ title, data }) => {

    const handleGetDataSubNav = (title) => {
        return subNavData?.filter(item => item.title === title)[0]
    }

    const [contentSubNav, setContentSubNav] = useState()
    useEffect(() => {
        if (subNavData.some(item => item.title === data?.type)) {
            setContentSubNav(handleGetDataSubNav(data?.type));
        }
    }, [data]);

    const handleData = () => {
        switch (data?.type) {
            case 'Categories':
                const [isHovered, setIsHovered] = useState(false);
                const [currentHoveredCategory, setCurrentHoveredCategory] = useState(null);

                const handleMouseEnter = (item) => {
                    setIsHovered(true);
                    setCurrentHoveredCategory(item);
                };

                const handleMouseLeave = () => {
                    setIsHovered(false);
                };
                return (
                    <div className='group relative flex flex-row'>
                        {/* First div */}
                        <div className='bg-white group-hover:relative w-full border-2 shadow-2xl p-3 font-bold text-2xl flex flex-col gap-3 items-center'>
                            <div className="min-h-screen w-full py-4 px-3 flex flex-col gap-6">
                                {data?.data?.map(item => (
                                    <Link to={`${item.link}`}
                                        onMouseEnter={() => handleMouseEnter(item)}
                                        // onMouseLeave={handleMouseLeave}
                                        className={`w-full flex hover:duration-200 hover:text-violet-500 hover:relative justify-between items-center `}
                                        key={item.id}
                                    >
                                        {item.title}
                                        <MdArrowForwardIos size={15} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                        {/* Second div */}
                        <div className={`min-h-screen group-hover:sticky right-0 -mr-[27rem] min-w-[26rem]`}>
                            <div className='bg-white group-hover:relative w-full border-2 shadow-2xl p-3 font-bold text-2xl flex flex-col gap-3 items-center'>
                                <div className="min-h-screen w-full py-4 px-3 flex flex-col gap-6">
                                    {currentHoveredCategory?.commonTopics?.map(topic => (
                                        <a href={`${topic.link}`}
                                            // onMouseEnter={() => handleMouseEnter(topic)}
                                            // onMouseLeave={handleMouseLeave}
                                            className='w-full flex hover:duration-200 hover:text-violet-500 hover:relative justify-between items-center'
                                            key={topic.id}
                                        >
                                            {topic.title}
                                            <MdArrowForwardIos size={15} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'Skillsprint Business':
                return (
                    <div className='bg-white w-full border-2 shadow-2xl p-3 font-bold text-2xl flex flex-col gap-3 items-center'>
                        <p>{data?.data?.description}</p>
                        <button className='w-full  px-4 py-3 bg-black text-white hover:duration-200 hover:bg-gray-700'>
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
                            <div className="flex flex-col w-full gap-3">
                                <p className='text-lg font-semibold'>{limitWords(`The Complete React Native + Hooks Course`, 3)}</p>
                                <div className="flex items-center w-full">
                                    <div className="flex-1 bg-violet-600 h-3"></div>
                                    <div style={{ width: `${(1 - (data?.data[0]?.progress || 0)) * 100}%` }} className="h-3 bg-gray-500"></div>
                                </div>
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
            case 'Development':
            case 'Business':
            case 'Finance & Accounting':
            case 'IT & Software':
            case 'Office Productivity':
            case 'Personal Development':
            case 'Design':
            case 'Music':
                return (
                    <>
                        <div className="absolute w-full h-8 "></div>
                        <div className="w-screen">
                            <div className="fixed inset-x-0 transform mt-5 bg-black px-8 py-3">
                                <div className="flex items-center text-[15px] font-semibold text-white justify-center gap-8">
                                    {contentSubNav?.content?.map(item => (
                                        <div className='hover:duration-200 hover:text-violet-300 ' key={item?.id}>{item?.title}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                );
            default:
                return null; // Return null for unknown types or handle them as needed
        }
    };

    const handleTitle = () => {
        switch (data?.type) {
            case 'Notifications':
                return <Link to='/notifications'>
                    {title}
                </Link>
            case 'Cart':
                return <Link to='/cart'>
                    {title}
                </Link>
            case 'Wishlist':
                return <Link to='/my-learning/wishlist'>
                    {title}
                </Link>
            case 'My learning':
                return <Link to='/my-learning/all-courses'>
                    {title}
                </Link>
            default:
                return title
        }
    }

    return (
        <div className='relative group'>
            <div className='hover:text-violet-500 cursor-pointer'>
                {handleTitle()}
            </div>
            <div className={!leftSideDataHoverItem.includes(data?.type) ? "absolute overflow-hidden z-10 w-96 mt-1  right-0 hidden group-hover:block" : "absolute z-10 w-96 mt-1 left-0 hidden group-hover:block"}>
                <div className={!subNavData.some(item => item.title === data?.type) ? "w-full h-14 bg-transparent mt-[-10px]" : "w-screen relative mt-[-10px] bg-transparent"}></div>
                {handleData()}
            </div>
        </div>

    );
};

export default OnHoverComponent;
