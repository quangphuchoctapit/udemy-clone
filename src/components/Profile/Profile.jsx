import React from 'react'
import { useNavigation, Link } from 'react-router-dom'

const Profile = () => {
    const match = useNavigation()
    console.log(match)
    return (
        <>
            {/* profile details */}
            <div className="basis-4/5">
                <div className="w-full flex items-center flex-col justify-center gap-3 py-4 border-b-2">
                    <h3 className='font-bold text-3xl'>Public Profile</h3>
                    <h4 className='text-xl'>Public Profile</h4>
                </div>
                <div className="w-full flex justify-center gap-8 py-4 flex-col px-40 max-lg:px-3">
                    <h4 className='font-bold text-xl mb-[-1.5rem]'>Basics:</h4>
                    <input type="text" className='input-profile' />
                    <input type="text" className='input-profile' />
                    <input type="text" placeholder='Headline' className='input-profile' />
                    <p className='mt-[-0.5rem] text-gray-400'>Add a professional headline like, "Instructor at Skillsprint" or "Architect."</p>
                    <input type="text" className='input-profile' />
                    <div className="w-full h-[1px]  bg-gray-400"></div>
                    <h4 className='font-bold text-xl mb-[-1.5rem]'>Links:</h4>
                    <input type="text" placeholder='Website (http(s)://...)' className='input-profile' />

                    {/* twitter link */}
                    <div className="w-full flex flex-col">
                        <div className="w-full flex">
                            <div className="flex max-lg:hidden justify-center items-center px-4 py-2 border-r-0 bg-gray-100 border border-gray-800">http://twitter.com/</div>
                            <input type="text" placeholder='Twitter Profile' className='input-profile flex-1' />
                        </div>
                        <p className='mt-1 text-gray-400'>Add your Twitter username (e.g. johnsmith).</p>
                    </div>

                    {/* facebook link */}
                    <div className="w-full flex flex-col">
                        <div className="w-full flex">
                            <div className="flex max-lg:hidden justify-center items-center px-4 py-2 border-r-0 bg-gray-100 border border-gray-800">http://www.facebook.com/</div>
                            <input type="text" placeholder='Facebook Profile' className='input-profile flex-1' />
                        </div>
                        <p className='mt-1 text-gray-400'>Input your Facebook username (e.g. johnsmith).</p>
                    </div>

                    {/* LinkedIn link */}
                    <div className="w-full flex flex-col">
                        <div className="w-full flex">
                            <div className="flex max-lg:hidden justify-center items-center px-4 py-2 border-r-0 bg-gray-100 border border-gray-800">http://www.linkedin.com/</div>
                            <input type="text" placeholder='LinkedIn Profile' className='input-profile flex-1' />
                        </div>
                        <p className='mt-1 text-gray-400'>Input your LinkedIn resource id (e.g. in/johnsmith).</p>
                    </div>

                    {/* youtube link */}
                    <div className="w-full flex flex-col">
                        <div className="w-full flex">
                            <div className="flex max-lg:hidden justify-center items-center px-4 py-2 border-r-0 bg-gray-100 border border-gray-800">http://www.youtube.com/</div>
                            <input type="text" placeholder='Youtube Profile' className='input-profile flex-1' />
                        </div>
                        <p className='mt-1 text-gray-400'>Input your Youtube username (e.g. johnsmith).
                        </p>
                    </div>
                </div>
                <div className="w-full mb-16 mt-8 flex max-lg:px-3 px-40">
                    <button className='py-6 px-8 max-lg:py-2 max-lg:px-3 max-lg:text-lg text-xl bg-black text-white font-bold'>Save</button>
                </div>
            </div>
        </>
    )
}

export default Profile
