import React from 'react';

const Mitolyn = () => {
    return (
        <div className='bg-gradient-to-r from-blue-800 via-blue-400 to-blue-900 h-auto'>
            {/* Section 1: Heading and Image */}
            <div className='text-center font-oswald text-white mt-12 px-4'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl'>That's Why We Created...</h1>
                <img 
                    className='w-full max-w-[800px] mx-auto mt-8' 
                    src="https://i.ibb.co.com/7t7r0c29/download-2.png" 
                    alt="Mitolyn" 
                />
            </div>

            {/* Section 2: Content with Image and Text */}
            <div className='lg:w-[1200px] mx-auto  lg:px-0 mt-4 '>
                <div className='flex flex-col lg:flex-row items-center justify-evenly lg:space-x-12'>
                    {/* Image */}
                    <img 
                        className='w-full max-w-[400px] lg:max-w-[500px]  lg:mb-0' 
                        src="https://i.ibb.co.com/1YrNZc60/download-3.png" 
                        alt="Mitolyn Benefits" 
                    />

                    {/* Text Content */}
                    <div className='text-start lg:text-left space-y-8 lg:space-y-10'>
                        <h1 className='font-oswald text-2xl md:text-3xl lg:text-4xl text-white'>
                            Mitolyn is unlike <span className='font-bold'>anything</span> <br /> 
                            You've ever tried or <br /> 
                            experienced in your life <br /> 
                            before
                        </h1>

                        <h1 className='font-oswald text-white text-xl md:text-2xl lg:text-3xl'>
                            It is one of the <span className='font-bold'>only products in the <br /> world</span> with a proprietary blend of <span className='text-yellow-300'>6 <br /> exotic nutrients and plants</span> designed to <br /> support healthy mitochondria levels!
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mitolyn;