import React, { useState } from 'react';

const Test = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`group relative flex flex-row ${isHovered ? 'relative flex flex-row' : ''}`}>
            {/* Item 2 */}
            <div
                className="bg-green-500 min-h-[300px] flex border-2 border-red-500 hover:bg-green-700 px-4 py-2 text-white cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                Item 2
            </div>
            {/* Second div */}
            <div className={`right-0 inset-y-0 w-24 h-24 bg-violet-500 ${isHovered ? 'block' : 'hidden'}`}></div>
        </div>
    );
};

export default Test;
