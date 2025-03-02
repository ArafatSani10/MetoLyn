import React from 'react';

const MoneyGuarantee = () => {
    return (
        <div className='mt-10 my-2 px-4 sm:px-6 md:px-10 lg:px-20'>
            <div className='font-semibold font-oswald text-slate-400'>
                <h1 className='md:text-5xl text-3xl max-sm:text-2xl text-center'>100% SATISFACTION</h1>
                <h2 className='md:text-5xl text-3xl max-sm:text-2xl text-center'>90-DAY MONEY BACK GUARANTEE</h2>
            </div>

            <div className='md:flex md:items-center max-sm:flex-col mt-5'>
                <img
                    className='md:w-[350px] max-sm:w-[200px] mx-auto mb-4 md:mb-0'
                    src="https://i.ibb.co.com/9kHGhJpV/Screenshot-2025-03-02-215117.png"
                    alt="Money-back guarantee"
                />
                <p className='font-oswald  max-sm:text-xl md:text-[30px]  max-sm:text-justify'>
                    Your order today is protected by my iron-clad 90-day 
                    <span className='font-bold'> 100% money-back guarantee.</span> 
                    If you are not astonished at how fast your deep stubborn fat stores 
                    <span className='font-bold'> melt</span> away into pure energy, or shocked as you admire your new 
                    <span className='font-bold'> toned, slim</span> body in the mirror, then at any time in the next 
                    <span className='font-bold'> 90 days</span> let us know and we'll refund every single penny of your 
                    investment. No questions asked.
                </p>
            </div>

            <div className='flex items-center justify-center'>
                <img className='md:w-[800px]' src="https://i.ibb.co.com/mrbMyhZt/Screenshot-2025-03-02-221039.png" alt="" />
            </div>
            <div className='text-center md:text-xl'>
             <p className='font-oswald'><span className='font-bold'>Mitolyn is proudly manufactured in the USA</span> with the finest of domestic and foreign ingredients.</p>
             </div>
        </div>
    );
};

export default MoneyGuarantee;
