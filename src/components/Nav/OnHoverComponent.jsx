import React from 'react';

const OnHoverComponent = ({ title, data }) => {
    const handleData = () => {
        switch (data?.type) {
            case 'Skillsprint Business':
                return (
                    <div className='bg-white w-full border-2 border-black p-3 font-bold text-2xl flex flex-col gap-3 items-center'>
                        <p>{data?.data?.description}</p>
                        <button className='w-full h-16 px-4 py-2 bg-black text-white hover:duration-200 hover:bg-gray-700'>
                            {data?.data?.button}
                        </button>
                    </div>
                );
            case 'Teach on Skillsprint':
                return (
                    <div className='bg-white w-full border-2 border-black p-3 font-bold text-2xl flex flex-col gap-3 items-center'>
                        <p>{data?.data?.description}</p>
                        <button className='w-full h-16 px-4 py-2 bg-black text-white hover:duration-200 hover:bg-gray-700'>
                            {data?.data?.button}
                        </button>
                    </div>
                );
            case 'My learning':
                return (
                    <div className='bg-white w-full border-2 border-black font-bold text-2xl flex flex-col gap-3 items-center'>
                        <div className="flex flex-row gap-3 items-center border-b-2 p-3 w-full">
                            <div className="w-24 h-24">
                                <div className="object-cover bg-no-repeat bg-center w-full h-full" style={{ backgroundImage: `url('${data?.data[0]?.image}')`, backgroundSize: '150%' }}></div>
                            </div>
                            <div className="flex flex-col">
                                <p className='text-lg font-semibold'></p>
                                <div className="">progress bar</div>
                            </div>
                        </div>

                        <div className="p-3">
                            <button className='w-full h-16 px-4 py-2 bg-black text-white hover:duration-200 hover:bg-gray-700'>
                                {data?.data[0]?.button}
                            </button>
                        </div>
                    </div>
                );
            default:
                return null; // Return null for unknown types or handle them as needed
        }
    };

    return (
        <div className='group hover:relative hover:duration-200'>
            <div className='group-hover:text-violet-500 cursor-pointer'>
                {title}
            </div>
            <div className={data?.type !== 'Categories' ? "absolute  z-10 w-96 mt-16 right-0 bg-black opacity-0 group-hover:opacity-100" : "absolute z-10  w-96 mt-16 bg-black opacity-0 group-hover:opacity-100"}>
                {handleData()}
            </div>
        </div>
    );
};

export default OnHoverComponent;
