import React from 'react'

const Footer = () => {
    return (
        <div className='w-full border-2 bg-black text-white relative inset-0 bottom-0 flex flex-col gap-6 text-xl'>
            <div className="px-6 py-3 border-b-2 border-gray-600 flex justify-between items-center">
                <div className="flex flex-col gap-4 flex-1">
                    <h4 className='text-2xl font-bold'>Teach the world online</h4>
                    <p>Create an online video course, reach students across the globe, and earn money</p>
                </div>
                <button className='p-3 border-2 border-white font-bold'>Teach on Skillsprint</button>
            </div>
            <div className="px-6 py-3 border-b-2 border-gray-600 flex items-center">
                <div className="flex flex-col gap-4 flex-1">
                    Top companies choose Udemy Business to build in-demand career skills.
                </div>
                <div className='p-3 flex-1 grid grid-cols-4 gap-3  font-bold'>
                    <div className='w-32 h-32'>
                        <div className="image" style={{ backgroundImage: `url('././public/image/logo/logo-brand.png')`, backgroundSize: '100%' }}></div>
                    </div>
                    <div className='w-32 h-32'>
                        <div className="image" style={{ backgroundImage: `url('././public/image/logo/logo-brand.png')`, backgroundSize: '100%' }}></div>
                    </div>
                    <div className='w-32 h-32'>
                        <div className="image" style={{ backgroundImage: `url('././public/image/logo/logo-brand.png')`, backgroundSize: '100%' }}></div>
                    </div>
                    <div className='w-32 h-32'>
                        <div className="image" style={{ backgroundImage: `url('././public/image/logo/logo-brand.png')`, backgroundSize: '100%' }}></div>
                    </div>
                </div>
            </div>
            <div className="px-6 py-3 border-gray-600 grid grid-cols-5">
                <div className="flex flex-col gap-2 text-sm">
                    <p>Skillsprint Business</p>
                    <p>Teach on Skillsprint</p>
                    <p>Get the app</p>
                    <p>About us</p>
                    <p>Contact us</p>
                </div>
                <div className="flex flex-col gap-2 text-sm">
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>Help and Support</p>
                    <p>Affiliate</p>
                    <p>Investors</p>
                </div>
                <div className="flex flex-col gap-2 text-sm">
                    <p>Terms</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Settings</p>
                    <p>Sitemap</p>
                    <p>Accessibility statement</p>
                </div>
                <div className="col-span-2 flex justify-end items-start">
                    <button className='border-white border-2 p-3'>English</button>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className='w-48 h-32 hover:duration-200 hover:text-violet-500 cursor-pointer '>
                    <div style={{ backgroundImage: `url('././public/image/logo/logo.png')` }} className='image'></div>
                </div>
                <div className="mr-20">2024, Skillsprint, Tommy Le</div>
            </div>
        </div>
    )
}

export default Footer
