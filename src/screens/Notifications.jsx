import React from 'react'

const Notifications = () => {
    return (
        <div className='min-h-screen w-full flex flex-col gap-16 py-16'>
            <div className="mx-3 w-full">
                <h2 className='text-3xl font-serifDisplay font-bold'>Notifications</h2>
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex gap-8 border-b-2 p-3">
                    <div className="w-24 h-24">
                        <div className="image rounded-full bg-black"></div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4>Username replied to the question: Endless captcha signup</h4>
                        <p className='text-gray-500'>4 days ago</p>
                    </div>
                </div>
                <div className="flex gap-8 border-b-2 p-3">
                    <div className="w-24 h-24">
                        <div className="image rounded-full bg-black"></div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4>Username replied to the question: Endless captcha signup</h4>
                        <p className='text-gray-500'>4 days ago</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notifications
