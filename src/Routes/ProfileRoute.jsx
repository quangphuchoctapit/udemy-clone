import React from 'react'
import { Route } from 'react-router-dom'
import ProfileLayout from '../Layout/ProfileLayout'
import ProfileEditAccount from '../components/Profile/ProfileEditAccount'
import ProfilePhoto from '../components/Profile/ProfilePhoto'
import Profile from '../components/Profile/Profile'

const ProfileRoute = () => {
    return (
        <Route path='/profile' element={<ProfileLayout />}>
            <Route exact path='/profile' element={<Profile />} />
            <Route path='/profile/edit-account' element={<ProfileEditAccount />} />
            <Route path='/profile/photo' element={<ProfilePhoto />} />
        </Route>
    )
}

export default ProfileRoute
