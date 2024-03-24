import React, { useEffect, useState } from 'react'
import { dataSliderMain } from '../utils/data/home/sliderData';
import SliderMain from '../components/Home/SliderMain';
import { Link } from 'react-router-dom';
import CommonSection from '../components/Home/CommonSection';
import { limitWords } from '../utils/data/home/functions/limitWords';


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
                        <h2 className='text-4xl max-sm:text-lg font-serifDisplay font-extrabold'>Let's start learning, <span>Tommy</span></h2>
                        <Link to='/my-learning' className='underline font-bold text-violet-500'>My learning</Link>
                    </div>
                    <div className="flex flex-wrap gap-3 ">
                        <div className='basis-1/3  max-md:flex-1 cursor-pointer border flex gap-3 hover:duration-200 hover:bg-opacity-70 hover:scale-[101%]'>
                            <div className="flex">
                                <div className="w-56 h-40 max-lg:w-40 max-lg:h-28">
                                    <div className="image" style={{ backgroundImage: `url('././public/image/courses/react-native-stephen.jpg')`, backgroundSize: '150%' }}></div>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col gap-3">
                                <h4 className='font-semibold text-gray-600 max-lg:text-xs max-sm:mt-3'>The complete React Native + Hook</h4>
                                <p className='flex-1 font-bold text-lg max-lg:text-sm'>133. It Works!</p>
                                <div className='flex gap-2  max-sm:mb-3'>
                                    <p className='font-semibold text-gray-600 max-lg:text-xs'>Lecture</p>
                                    <p className='max-lg:text-xs'>1m left</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Training undefined or more people */}
                <div className='mx-3 bg-black text-white p-4 flex justify-between items-center gap-3'>
                    <div className=''>
                        <p className='text-lg font-bold  max-sm:text-sm'>Training undefined or more people?   <span className='text-base max-sm:text-xs max-sm:hidden block font-normal'>Get your team access to Udemy's top 25,000+ courses</span></p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <button className='p-3 max-md:p-2 max-sm:p-2 max-sm:text-sm max-md:leading-4 text-black bg-white font-semibold h-auto min-h-[5rem]'>Get Udemy Business</button>
                        <button className='p-3 max-md:p-2 max-sm:p-2 max-sm:text-sm max-md:leading-4 text-white border-2 border-white bg-black font-semibold h-auto min-h-[5rem]'>Dismiss</button>
                    </div>

                </div>

                {/* what to learn next */}
                <div className="home-section-container">
                    <h2 className='text-4xl max-sm:text-xl font-serifDisplay font-extrabold'>What to learn next</h2>
                    <h3 className='max-sm:text-lg font-bold'>Our top pick for you</h3>
                    <div className='border p-3 flex gap-12 max-sm:gap-4 items-center cursor-pointer hover:scale-[101%] hover:duration-300 hover:bg-gray-100'>
                        <div className="w-[36rem] h-72 max-sm:w-32 max-sm:h-24">
                            <div className="image" style={{ backgroundImage: `url('././public/image/courses/react-native-stephen.jpg')`, backgroundSize: '150%' }}></div>
                        </div>
                        <div className="h-full flex flex-col gap-3 max-sm:gap-1 flex-1">
                            <h3 className='text-3xl max-sm:text-lg font-bold max-sm:leading-5'>{limitWords(`React Native: Advanced Concepts`, 3)}</h3>
                            <div className='flex flex-col gap-3 flex-1'>
                                <p className='max-sm:text-xs'>{limitWords(`Master the advanced topics of React Native: Animations, Maps, Notifications, Navigation and More!`, 5)}</p>
                                <p className='max-sm:text-xs'>By Stephen Grider</p>
                                <div className="flex max-lg:hidden gap-2 items-center text-gray-600 text-sm">
                                    <div className="max-sm:text-xs">Updated <span className='font-semibold'>March 2024</span></div>
                                    <div className="max-sm:text-xs">Total <span>16.5 hours</span></div>
                                    <div className="max-sm:text-xs"><span>151</span> lectures</div>
                                    <div className="max-sm:text-xs">Intermediate</div>
                                </div>
                                <div className="flex max-sm:text-sm gap-2 items-center ">
                                    <span className='text-lg max-sm:text-sm font-bold'>4.2</span>
                                    <div className="max-sm:hidden block">5 Stars</div>
                                    <span>(5,581)</span>
                                </div>
                            </div>
                            <div className="font-bold max-sm:text-sm text-xl">1,499,000VND</div>

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
