import React from 'react';

const Bonuses = () => {
    return (
        <div className='bg-gradient-to-r from-blue-800 via-blue-400 to-blue-900 my-3 mt-12 py-8'>
            {/* Title Section */}
            <div className='font-oswald text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4'>
                <h1 className='text-white'>
                    Order <span className='text-yellow-200'>6 Bottles</span> or <span className='text-yellow-200'>3 Bottles</span>
                </h1>
                <h2 className='text-white mt-2'>
                    and get <span className='underline decoration-yellow-300'>2 FREE Bonuses!</span>
                </h2>
            </div>

            {/* Bonuses Section */}
            <div className='flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-6 mt-12 px-4'>
                {/* BONUS #1 */}
                <div className='font-oswald text-center max-w-[500px]'>
                    <div className='md:hidden'>
                        <h1 className='text-purple-300 font-semibold text-2xl'>BONUS #1</h1>
                        <h2 className='text-white font-semibold text-xl'>1-Day Kickstart Detox</h2>
                        <h3 className='text-yellow-300 font-semibold text-xl'>100% FREE</h3>
                    </div>
                    <img
                        src="https://i.ibb.co/RG4dSFrY/Screenshot-2025-03-02-230147.png"
                        alt="Bonus 1"
                        className='mx-auto mb-4 w-full max-w-[350px] md:max-w-[400px]'
                    />
                    <div className='hidden md:block'>
                        <h1 className='text-purple-300 font-semibold text-3xl'>BONUS #1</h1>
                        <h2 className='text-white font-semibold text-2xl'>1-Day Kickstart Detox</h2>
                        <h3 className='text-yellow-300 font-semibold text-2xl'>100% FREE</h3>
                    </div>
                    <p className='text-white mt-4 text-base sm:text-lg md:text-xl text-center md:text-left'>
                        Detox, Cleanse and flush your organs to aid absorption and Kickstart your Mitolyn journey with 20 bizarre 15-second detox tea recipes, using everyday ingredients from your kitchen.
                    </p>
                </div>

                {/* BONUS #2 */}
                <div className='font-oswald text-center max-w-[500px]'>
                    <div className='md:hidden'>
                        <h1 className='text-purple-300 font-semibold text-2xl'>BONUS #2</h1>
                        <h2 className='text-white font-semibold text-xl'>Renew You</h2>
                        <h3 className='text-yellow-300 font-semibold text-xl'>100% FREE</h3>
                    </div>
                    <img
                        src="https://i.ibb.co/99Hymr4B/Screenshot-2025-03-02-230204.png"
                        alt="Bonus 2"
                        className='mx-auto mb-4 w-full max-w-[350px] md:max-w-[400px]'
                    />
                    <div className='hidden md:block'>
                        <h1 className='text-purple-300 font-semibold text-3xl'>BONUS #2</h1>
                        <h2 className='text-white font-semibold text-2xl'>Renew You</h2>
                        <h3 className='text-yellow-300 font-semibold text-2xl'>100% FREE</h3>
                    </div>
                    <p className='text-white mt-4 text-base sm:text-lg md:text-xl text-center md:text-left'>
                        With your brand-new fast-tracked body comes a new mindset. Discover simple methods you can do right now to instantly relieve stress and calm your mind, boost confidence and reduce anxiety.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Bonuses;