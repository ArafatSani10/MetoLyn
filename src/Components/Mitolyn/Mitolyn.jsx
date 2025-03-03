import React from 'react';

const Mitolyn = () => {
    return (
        <div className='bg-gradient-to-r from-blue-800 via-blue-400 to-blue-900 h-auto py-4'>
            {/* Section 1: Heading and Image */}
            <div className='text-center font-oswald text-white mt-12 px-4'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl'>That's Why We Created...</h1>
                <img 
                    className='w-full max-w-[800px] mx-auto mt-8 rounded-lg shadow-lg' 
                    src="https://i.ibb.co.com/7t7r0c29/download-2.png" 
                    alt="Mitolyn" 
                />
            </div>

            {/* Section 2: Content with Image and Text */}
            <div className='container mx-auto px-4 lg:px-0 mt-6 lg:mt-6'>
                <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-center lg:space-x-12'>
                    {/* Image */}
                    <img 
                        className='w-full max-w-[500px] lg:max-w-[600px] rounded-lg shadow-lg mb-8 lg:mb-0' 
                        src="https://i.ibb.co.com/1YrNZc60/download-3.png" 
                        alt="Mitolyn Benefits" 
                    />

                    {/* Text Content */}
                    <div className='w-full lg:w-[45%] text-start md:text-center lg:text-left space-y-6 lg:space-y-10'>
                        <h1 className='font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white'>
                            Mitolyn is unlike <span className='font-bold'>anything</span> <br className='hidden sm:block' /> 
                            You've ever tried or <br className='hidden sm:block' /> 
                            experienced in your life <br className='hidden sm:block' /> 
                            before
                        </h1>

                        <h1 className='font-oswald text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
                            It is one of the <span className='font-bold'>only products in the <br className='hidden sm:block' /> world</span> with a proprietary blend of <span className='text-yellow-300'>6 <br className='hidden sm:block' /> exotic nutrients and plants</span> designed to <br className='hidden sm:block' /> support healthy mitochondria levels!
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mitolyn;