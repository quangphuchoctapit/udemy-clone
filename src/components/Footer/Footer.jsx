import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const [imageLogo, setImageLogo] = useState('')
    useEffect(() => {
        setImageLogo('/image/logo/logo.png')
    }, [window])
    return (
        <div className='w-full  bg-black text-white relative inset-0 bottom-0 flex flex-col gap-6 text-xl'>
            <div className="px-6 py-3 max-sm:flex-col max-sm:gap-3 border-b-2 border-gray-600 flex justify-between items-center">
                <div className="flex flex-col gap-4 flex-1">
                    <h4 className='text-2xl font-bold max-md:text-xl'>Teach the world online</h4>
                    <p className='max-md:text-sm'>Create an online video course, reach students across the globe, and earn money</p>
                </div>
                <button className='p-3 max-md:p-2 max-md:text-sm border-2 border-white font-bold hover:bg-gray-700'>Teach on Skillsprint</button>
            </div>
            <div className="px-6 py-3 border-b-2 border-gray-600 flex max-sm:flex-col max-sm:gap-3 items-center">
                <div className="flex 2xl:flex-row flex-col gap-4 flex-1 max-md:text-sm nax-2xl:leading-4 leading-4">
                    Top companies choose <span className='text-violet-500 font-bold'>Skillsprint Business</span> to build in-demand career skills.
                </div>
                <div className='max-md:grid max-sm:grid-cols-2 p-3 flex-1 grid grid-cols-4 gap-3  font-bold'>
                    <div className='w-32 h-32 max-lg:w-20 max-lg:h-20'>
                        <div className="image" style={{ backgroundImage: `url('././public/image/logo/logo-brand.png')`, backgroundSize: '100%' }}></div>
                    </div>
                    <div className='w-32 h-32 max-lg:w-20 max-lg:h-20'>
                        <div className="image" style={{ backgroundImage: `url('././public/image/logo/logo-brand.png')`, backgroundSize: '100%' }}></div>
                    </div>
                    <div className='w-32 h-32 max-lg:w-20 max-lg:h-20'>
                        <div className="image" style={{ backgroundImage: `url('././public/image/logo/logo-brand.png')`, backgroundSize: '100%' }}></div>
                    </div>
                    <div className='w-32 h-32 max-lg:w-20 max-lg:h-20'>
                        <div className="image" style={{ backgroundImage: `url('././public/image/logo/logo-brand.png')`, backgroundSize: '100%' }}></div>
                    </div>
                </div>
            </div>
            <div className="px-6 py-3 border-gray-600 grid grid-cols-5 max-lg:grid-cols-3 max-md:text-sm gap-3">
                <div className="flex flex-col gap-2 text-sm max-md:text-xs leading-4">
                    <p className='hover:duration-200 hover:text-violet-300 cursor-pointer'>Skillsprint Business</p>
                    <p className='hover:duration-200 hover:text-violet-300 cursor-pointer'>Teach on Skillsprint</p>
                    <p className='hover:duration-200 hover:text-violet-300 cursor-pointer'>Get the app</p>
                    <p className='hover:duration-200 hover:text-violet-300 cursor-pointer'>About us</p>
                    <p className='hover:duration-200 hover:text-violet-300 cursor-pointer'>Contact us</p>
                </div>
                <div className="flex flex-col gap-2 text-sm max-md:text-xs leading-4">
                    <p className='hover:duration-200 hover:text-violet-300 cursor-pointer'>Careers</p>
                    <p className='hover:duration-200 hover:text-violet-300 cursor-pointer'>Blog</p>
                    <p className='hover:duration-200 hover:text-violet-300 cursor-pointer'>Help and Support</p>
                    <p className='hover:duration-200 hover:text-violet-300 cursor-pointer'>Affiliate</p>
                    <p className='hover:duration-200 hover:text-violet-300 cursor-pointer'>Investors</p>
                </div>
                <div className="flex flex-col gap-2 text-sm max-md:text-xs leading-4">
                    <p className='hover:duration-200 hover:text-violet-300 cursor-pointer'>Terms</p>
                    <p className='hover:duration-200 hover:text-violet-300 cursor-pointer'>Privacy Policy</p>
                    <p className='hover:duration-200 hover:text-violet-300 cursor-pointer'>Cookie Settings</p>
                    <p className='hover:duration-200 hover:text-violet-300 cursor-pointer'>Sitemap</p>
                    <p className='hover:duration-200 hover:text-violet-300 cursor-pointer'>Accessibility statement</p>
                </div>
                <div className="max-lg:col-span-3 col-span-2 flex w-full max-lg:justify-start justify-end items-start">
                    <button className='border-white border-2 p-3'>English</button>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className='w-48 h-32 ml-20 max-md:ml-3 max-md:w-28 max-md:h-16 hover:duration-200 hover:text-violet-500 cursor-pointer '>
                    <Link to='/' style={{ backgroundImage: `url('${imageLogo}')`, backgroundSize: '100%' }} className='image'></Link>
                </div>
                <div className="mr-20 max-md:mr-3 max-md:text-xs">	&copy;2024, Skillsprint, Tommy Le</div>
            </div>
        </div>
    )
}

export default Footer
