import React from 'react';

const Banner = () => {
    return (
        <div className='w-full max-sm:h-[550px] mx-auto bg-gradient-to-r from-blue-800 via-blue-400 to-blue-900 py-20 opacity-85 overflow-hidden'>
            <div className='flex flex-col  items-center justify-center md:flex-row'>
                {/* Banner Image */}
                <img
                    src="https://i.ibb.co/jvW8z8wr/download-1.png"
                    alt="Metabolic Power"
                    className='opacity-90 mb-10 md:mb-0 max-sm:w-[130px] mx-auto md:mx-0'
                />

                {/* Banner Text */}
                <div className='text-center md:text-left -mb-40  opacity-95 md:mt-0 md:ml-28'>
                    <h1 className='text-5xl sm:text-5xl md:text-[60px] lg:text-[75px] font-bold text-white font-oswald'>
                        Unlock Your
                    </h1>
                    <span className='text-5xl sm:text-5xl md:text-[60px] lg:text-[75px] font-bold text-white font-oswald'>
                        Metabolic Power
                    </span>

                    <p className='text-white font-oswald mt-3 text-lg sm:text-2xl md:text-3xl'>
                        Burn More Calories & Feel Great With Mitolyn.
                    </p>
                </div>
            </div>

            {/* People and Star Section - Aligned to the left */}
            <div className='w-full max-sm:hidden   mt-12  flex lg:mx-72'>
                <img className='w-[400px]' src="https://i.ibb.co/PsCVN3Z0/download-4.png" alt="People and Star" />
            </div>
        </div>
    );
};

export default Banner;
