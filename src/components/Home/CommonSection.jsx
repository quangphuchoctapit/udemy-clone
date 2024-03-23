import React from 'react'

const CommonSection = ({ data }) => {
    const handleLoadTag = (tag) => {
        switch (tag) {
            case 'Bestseller':
                return <div className='p-2 bg-yellow-200  text-black flex font-semibold'>{tag}</div>
            case 'Highest Rated':
                return <div className='p-2 bg-orange-200  text-black flex font-semibold'>{tag}</div>
        }
    }
    return (
        <div className="home-section-container">
            <h2 className='text-4xl font-extrabold'>{data.title}</h2>
            <div className="grid grid-cols-5 gap-3">
                {data?.data?.map(data =>
                    <div key={data?.data?.id} className='flex flex-col'>
                        <div className="w-full h-40">
                            <div className="image" style={{ backgroundImage: `url('${data?.image}')` }}></div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex-1 flex flex-col gap-2">
                                <h4 className='text-xl font-bold'>{data?.title}</h4>
                                <p className='text-sm text-gray-500'>{data?.author}</p>
                                <div className="flex gap-2 items-center ">
                                    <span className='font-bold'>{data?.star}</span>
                                    <div className="">4 Stars</div>
                                    <span>({data?.viewer})</span>
                                </div>
                            </div>
                            <p className='font-bold text-lg'><span>{data?.price}</span>VND</p>
                            {data?.tag &&
                                handleLoadTag(data?.tag)
                            }
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CommonSection
