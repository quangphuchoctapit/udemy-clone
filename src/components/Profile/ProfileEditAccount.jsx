import React from 'react'
import { useNavigation, Link } from 'react-router-dom'
import { FaPencilAlt } from "react-icons/fa";

const Profile = () => {
    const match = useNavigation()
    console.log(match)
    return (
        <>
            {/* profile details */}
            <div className="basis-4/5">
                <div className="w-full flex items-center flex-col justify-center gap-3 py-4 border-b-2">
                    <h3 className='font-bold text-3xl'>Account</h3>
                    <h4 className='text-xl'>Edit your account settings and change your password here.  </h4>
                </div>
                <div className="mt-3 px-40 max-lg:px-3 flex items-center flex-col justify-center gap-3 py-4 border-b-2">
                    <div className='font-bold text-xl flex justify-start w-full'>
                        <h3 className='text-start w-full'>Email:</h3>
                    </div>
                    <div className="w-full flex ">
                        <div className="basis-10/12 p-4 border-2 ">Your email address is tommyle1310@gmail.com</div>
                        <div className="basis-2/12 p-4 bg-gray-100 flex items-center justify-center"><FaPencilAlt /></div>
                    </div>

                </div>
                <div className="w-full flex justify-center gap-8 py-4 flex-col px-40 max-lg:px-3">
                    <h4 className='font-bold text-xl mb-[-1.5rem]'>Password:</h4>
                    <input type="text" placeholder='Enter current password' className='input-profile' />
                    <input type="text" placeholder='Enter new password' className='input-profile' />
                    <input type="text" placeholder='Re-type new password' className='input-profile' />
                </div>
                <div className="w-full mb-16 mt-8 flex max-lg:px-3 px-40">
                    <button className='py-6 px-8 max-lg:py-2 max-lg:px-3 max-lg:text-lg text-xl bg-black text-white font-bold'>Change Password</button>
                </div>
            </div>
        </>
    )
}

export default Profile
