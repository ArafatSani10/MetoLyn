import React from 'react';

const FreeShipping = () => {
    return (
        <div className='bg-red-500'>
            <div className='max-w-[1200px] mx-auto flex flex-col items-center justify-evenly p-2 lg:flex-row'>
                <img 
                    className='w-[150px] md:w-[220px] mb-4 lg:mb-0' 
                    src="https://i.ibb.co.com/Cppn8C0g/Screenshot-2025-03-03-143749.png" 
                    alt="" 
                />
                <div className='font-oswald text-white text-center lg:text-left'>
                    <h1 className='text-2xl md:text-4xl'>
                        Every <span className='underline decoration-yellow-300'>6 Bottle</span> Order Gets <span className='underline decoration-yellow-300'>Free Shipping</span> Too!
                    </h1>
                    <p className='text-[20px] md:text-2xl'>
                        *96% of customers Order 6 Bottles <span className='text-yellow-300'>(Our Recommended Option)</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FreeShipping;