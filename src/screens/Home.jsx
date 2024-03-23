import React, { useEffect, useState } from 'react'
import { dataSliderMain } from '../utils/data/home/sliderData';
import SliderMain from '../components/Home/SliderMain';
import { Link } from 'react-router-dom';
import CommonSection from '../components/Home/CommonSection';


const Home = () => {
    ///////////////////////////////// slider main
    const defaultSliderMain = { id: 0, title: '', description: '', image: '' }
    const [sliderMain, setSliderMain] = useState(defaultSliderMain)
    useEffect(() => {
        setSliderMain(dataSliderMain[0])
    }, [])
    const handleChangeSliderMain = (type) => {
        switch (type) {
            case 'prev':
                if (sliderMain.id === 1) {
                    return
                }
                setSliderMain(dataSliderMain.find(slide => slide.id === sliderMain.id - 1))
                break
            case 'forw':
                if (sliderMain.id === dataSliderMain.length) {
                    return
                }
                setSliderMain(dataSliderMain.find(slide => slide.id === sliderMain.id + 1))
                break
            default:
                setSliderMain(dataSliderMain[0])
                break
        }
    }
    /////////////////////////////////




    return (
        <>
            <div className='flex flex-col gap-12 my-16'>
                {/* slider main */}
                <SliderMain data={sliderMain} setData={handleChangeSliderMain} />

                {/* start learning section */}
                <div className='home-section-container'>
                    <div className="flex justify-between items-center">
                        <h2 className='text-4xl font-extrabold'>Let's start learning, <span>Tommy</span></h2>
                        <Link to='/my-learning' className='underline font-bold text-violet-500'>My learning</Link>
                    </div>
                    <div className="flex flex-wrap gap-3 ">
                        <div className='basis-1/3 cursor-pointer border flex gap-3 hover:duration-200 hover:bg-opacity-70 hover:scale-[101%]'>
                            <div className="flex ">
                                <div className="w-56 h-40">
                                    <div className="image" style={{ backgroundImage: `url('././public/image/courses/react-native-stephen.jpg')`, backgroundSize: '150%' }}></div>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col gap-3">
                                <h4 className='font-semibold text-gray-600'>The complete React Native + Hook</h4>
                                <p className='flex-1 font-bold text-lg'>133. It Works!</p>
                                <div className='flex gap-2'>
                                    <p className='font-semibold text-gray-600'>Lecture</p>
                                    <p>1m left</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Training undefined or more people */}
                <div className='mx-3 bg-black text-white p-4 flex justify-between items-center'>
                    <div className=''>
                        <p className='text-lg font-bold'>Training undefined or more people?   <span className='text-base font-normal'>Get your team access to Udemy's top 25,000+ courses</span></p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <button className='p-3 text-black bg-white font-semibold'>Get Udemy Business</button>
                        <button className='p-3 text-white border-2 border-white bg-black font-semibold'>Dismiss</button>

                    </div>
                </div>

                {/* what to learn next */}
                <div className="home-section-container">
                    <h2 className='text-4xl font-extrabold'>What to learn next</h2>
                    <h3 className='text-3xl font-bold'>Our top pick for you</h3>
                    <div className='border p-3 flex gap-12 items-center cursor-pointer hover:scale-[101%] hover:duration-300 hover:bg-gray-100'>
                        <div className="w-[36rem] h-72">
                            <div className="image" style={{ backgroundImage: `url('././public/image/courses/react-native-stephen.jpg')` }}></div>
                        </div>
                        <div className="h-full flex flex-col gap-3 flex-1">
                            <h3 className='text-3xl font-bold'>React Native: Advanced Concepts</h3>
                            <div className='flex flex-col gap-3 flex-1'>
                                <p>Master the advanced topics of React Native: Animations, Maps, Notifications, Navigation and More!</p>
                                <p>By Stephen Grider</p>
                                <div className="flex gap-2 items-center text-gray-600 text-sm">
                                    <div className="">Updated <span className='font-semibold'>March 2024</span></div>
                                    <div className="">Total <span>16.5 hours</span></div>
                                    <div className=""><span>151</span> lectures</div>
                                    <div className="">Intermediate</div>
                                </div>
                                <div className="flex gap-2 items-center ">
                                    <span className='text-lg font-bold'>4.2</span>
                                    <div className="">5 Stars</div>
                                    <span>(5,581)</span>
                                </div>
                            </div>
                            <div className="font-bold text-xl">1,499,000VND</div>

                        </div>
                    </div>
                </div>

                {/* Because you viewed... */}
                <CommonSection data={{
                    title: `Because you viewed "Complete React Native Bootcamp (with Hooks)”`,
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
                    ]
                }} />

                {/* Recommended for you */}
                <CommonSection data={{
                    title: `Recommended for you`,
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
                    ]
                }} />

                {/* Learners are viewing */}
                <CommonSection data={{
                    title: `Learners are viewing`,
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
                    ]
                }} />


                {/* Popular for Web Developers */}
                <CommonSection data={{
                    title: `Popular for Web Developers`,
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
                    ]
                }} />

                {/* Short and sweet courses for you */}
                <CommonSection data={{
                    title: `Short and sweet courses for you`,
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
                    ]
                }} />
            </div>
        </>
    )
}

export default Home
