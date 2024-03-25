import React, { useState } from 'react'
import { useNavigation, Link } from 'react-router-dom'
import { FaPencilAlt } from "react-icons/fa";

const ProfilePhoto = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            {/* profile details */}
            <div className="basis-4/5">
                <div className="w-full flex items-center flex-col justify-center gap-3 py-4 border-b-2">
                    <h3 className='font-bold text-3xl'>Photo</h3>
                    <h4 className='text-xl'>Add a nice photo of yourself for your profile.</h4>
                </div>
                <div className="mt-3 px-40 max-lg:px-3 flex items-center flex-col justify-center gap-3 py-4 border-b-2">
                    <div className='font-bold text-xl flex justify-start w-full'>
                        <h3 className='text-start w-full'>Image Preview:</h3>
                    </div>
                    <div className="w-full flex items-center justify-center border bg-white p-4">
                        <div className="w-64 h-64">
                            <div className="image" style={{ backgroundImage: `url('././public/image/logo/logo.png')`, backgroundSize: '100%' }}>
                                {selectedImage && (
                                    <img src={selectedImage} alt="Selected" className="w-full h-full object-cover" />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='font-bold text-xl flex flex-col items-start gap-3 justify-start w-full'>
                        <h3 className='text-start w-full'>Add / Change Image:</h3>
                        <div className="flex w-full items-center border-2">
                            <label htmlFor="image" className="w-full p-3 cursor-pointer">

                                <span className="text-lg font-bold text-gray-700">Select Image</span>
                            </label>
                            <input
                                type="file"
                                id="image"
                                className="hidden"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>
                    <div className="w-full flex justify-start mb-16 mt-8 ">
                        <button className='py-6 px-8 max-lg:py-2 max-lg:px-3 max-lg:text-lg text-xl bg-black text-white font-bold'>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePhoto
