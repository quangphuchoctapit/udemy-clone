import React from 'react'
import { useNavigation, Link } from 'react-router-dom'

import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'

const RootLayout = () => {
    return (
        <div className='w-full min-h-screen'>
            <div className="mx-10 my-5 border-2 h-full flex max-lg:flex-col">

                {/* profile left */}
                <div className="basis-1/5  flex flex-col border-r-2">
                    <div className="w-40 h-40 m-5 self-center">
                        <div className="image bg-black rounded-full"></div>
                    </div>
                    <h3 className='font-bold text-xl self-center'>Tommy Le</h3>

                    {/* profile nav */}
                    <div className="flex flex-col my-4">
                        <div className="nav-profile">
                            View public profile
                        </div>
                        <Link to='/profile' className="nav-profile">
                            Profile
                        </Link>
                        <Link to='/profile/photo' className="nav-profile">
                            Photo
                        </Link>
                        <Link to={`/profile/edit-account`} className="nav-profile">
                            Account Security
                        </Link>
                        <div className="nav-profile">
                            Supscription
                        </div>
                        <div className="nav-profile">
                            Payment Methods
                        </div>
                        <div className="nav-profile">
                            Privacy
                        </div>
                        <div className="nav-profile">
                            Notifications
                        </div>
                        <div className="nav-profile">
                            Log Out
                        </div>
                    </div>
                </div>

                {/* profile details */}
                <Outlet />
            </div>
        </div>
    )
}

export default RootLayout




