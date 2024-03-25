import React from 'react'

const Cart = () => {
    return (
        <div className='min-h-[24rem] w-full flex flex-col gap-16 py-16 px-3'>
            <div className="">
                <h2 className='text-3xl font-serifDisplay font-bold'>Shopping Cart</h2>
            </div>
            <div className='flex w-full flex-col gap-3'>
                <h4 className='text-lg font-bold'>0 Courses in Cart</h4>
                <div className="w-full items-center p-16 border-2 border-gray-400 min-h-96 flex flex-col gap-12">
                    <div className="w-72 h-72">
                        <div className="image" style={{ backgroundImage: `url('././public/image/empty-cart.jpg')`, backgroundSize: '100%' }}></div>
                    </div>
                    <p className='text-gray-600'>Your cart is empty. Keep shopping to find a course!</p>
                    <button className='p-3 bg-violet-600 text-white hover:duration-200 hover:bg-violet-800'>Keep Shopping</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
