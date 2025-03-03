import React from 'react';

const LikeSection = () => {
    return (
      <div className='bg-gray-200 py-10'>
          <div className='lg:w-[1200px] mx-auto'>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-5 '>
                <div className='flex items-center'>
                    <img className='md:w-[100px] w-[100px] bg-gray-200 mx-4' src="https://i.ibb.co.com/LXV7Pmr7/Screenshot-2025-03-04-000251.png" alt="" />
                    <h1 className='font-oswald md:text-3xl '>Natural Formula</h1>
                </div>

                <div className='flex items-center'>
                    <img className='md:w-[100px]  w-[100px] mx-4' src="https://i.ibb.co.com/LXV7Pmr7/Screenshot-2025-03-04-000251.png" alt="" />
                    <h1 className='font-oswald md:text-3xl '>Plant Ingredients</h1>
                </div>

                <div className='flex items-center'>
                    <img className='md:w-[100px]  w-[100px] mx-4' src="https://i.ibb.co.com/LXV7Pmr7/Screenshot-2025-03-04-000251.png" alt="" />
                    <h1 className='font-oswald md:text-3xl '>Non-GMO</h1>
                </div>

                <div className='flex items-center'>
                    <img className='md:w-[100px]  w-[100px] mx-4' src="https://i.ibb.co.com/LXV7Pmr7/Screenshot-2025-03-04-000251.png" alt="" />
                    <h1 className='font-oswald md:text-3xl '>Easy To Swallow</h1>
                </div>

                <div className='flex items-center'>
                    <img className='md:w-[100px]  w-[100px] mx-4' src="https://i.ibb.co.com/LXV7Pmr7/Screenshot-2025-03-04-000251.png" alt="" />
                    <h1 className='font-oswald md:text-3xl '>No Stimulants</h1>
                </div>

                <div className='flex items-center'>
                    <img className='md:w-[100px]  w-[100px] mx-4' src="https://i.ibb.co.com/LXV7Pmr7/Screenshot-2025-03-04-000251.png" alt="" />
                    <h1 className='font-oswald md:text-3xl '>Non-Habit Forming</h1>
                </div>
            </div>
        </div>
      </div>
    );
};

export default LikeSection;