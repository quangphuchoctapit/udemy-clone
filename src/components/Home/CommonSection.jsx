import React from 'react'

const CommonSection = ({ data }) => {
    const handleLoadTag = (tag) => {
        switch (tag) {
            case 'Bestseller':
                return <div className='p-2 max-sm:p-1 max-sm:text-xs bg-yellow-200  text-black flex font-semibold'>{tag}</div>
            case 'Highest Rated':
                return <div className='p-2 max-sm:p-1 max-sm:text-xs bg-orange-200  text-black flex font-semibold'>{tag}</div>
        }
    }
    return (
        <div className="home-section-container">
            <h2 className='text-4xl max-sm:text-xl font-serifDisplay font-extrabold'>{data.title}</h2>
            <div className="grid grid-cols-5 max-lg:grid-cols-2 gap-3">
                {data?.data?.map((data, index) =>
                    <div key={index} className='flex flex-col'>
                        <div className="w-full h-40 max-sm:h-20">
                            <div className="image" style={{ backgroundImage: `url('${data?.image}')` }}></div>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <div className="flex-1 flex flex-col gap-2 max-sm:gap-1">
                                <h4 className='text-xl max-sm:text-sm font-bold'>{data?.title}</h4>
                                <p className='text-sm max-sm:text-xs text-gray-500'>{data?.author}</p>
                                <div className="flex gap-2 max-sm:gap-1 items-center ">
                                    <span className='font-bold max-sm:text-sm'>{data?.star}</span>
                                    <div className="max-sm:text-xs">4 Stars</div>
                                    <span className='max-sm:text-xs'>({data?.viewer})</span>
                                </div>
                            </div>
                            <p className='font-bold text-lg max-sm:text-sm'><span>{data?.price}</span>VND</p>
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
