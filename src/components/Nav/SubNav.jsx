import React from 'react'
import { subNavData } from '../../utils/data/home/subNavData'
import OnHoverComponent from './OnHoverComponent'

const SubNav = () => {
    return (
        <>

            <div className='xl:flex gap-10 items-center p-3 border-b-2 border-gray-300 lg:text-xl text-md hidden'>
                {subNavData?.map((item, index) => (
                    <div key={index} className='hidden lg:block hover:duration-200 hover:text-violet-500 cursor-pointer'>
                        <OnHoverComponent title={item.title} data={{
                            type: item.title, data: {
                                description: 'Get your team access to over 25,000 top Udemy courses, anytime, anywhere.',
                                button: 'Try Udemy Business'
                            }
                        }} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default SubNav
