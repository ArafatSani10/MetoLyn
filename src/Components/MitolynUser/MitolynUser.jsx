import React from 'react';

const MitolynUser = () => {
    return (
        <div className='mt-12 mx-auto px-4 lg:w-[1200px] '>
            <div className='font-oswald text-center font-bold text-4xl'>
                <h1 className='text-3xl max-sm:text-4xl md:text-5xl'>Real Mitolyn Users.</h1>
                <h2 className='text-3xl max-sm:text-4xl md:text-5xl'>Real <span className='underline decoration-black'>Life-Changing Results.</span></h2>
            </div>
            <div className='mt-3'>
                <img className='max-sm:hidden block mx-auto w-[1200px]' src="https://i.ibb.co/849dvpwT/Screenshot-2025-03-04-011756.png" alt="Desktop version" />
                <img className='hidden max-sm:block w-full' src="https://i.ibb.co/1fyM0GSk/Screenshot-2025-03-04-011944.png" alt="Mobile version" />
            </div>
            <div className='font-oswald'>
                {/* First User */}
                <div className='max-sm:p-5 max-sm:space-y-7 md:flex md:items-center flex-col md:flex-row items-center justify-start'>
                    <img className='max-sm:w-[100px]  sm:w-48 max-sm:mb-10 -mt-10' src="https://i.ibb.co/d44bPywX/Screenshot-2025-03-04-012826.png" alt="Peggy" />
                    <div className="flex flex-col md:mx-6 space-y-2">
                        <h1 className='max-sm:text-xl text-purple-300 text-3xl font-bold'>Peggy is 35 Ibs lighter...</h1>
                        <div className="rating flex">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 stars" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 stars" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 stars" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 stars" defaultChecked />
                            <h1 className='text-red-400 max-sm:text-sm'>Verified Purchase</h1>
                        </div>
                        <div className='flex max-sm:text-lg md:text-2xl -mx-2'>
                            <img className='w-[50px] h-[30px]' src="https://i.ibb.co/FLJ2Km1L/Screenshot-2025-03-04-020556.png" alt="icon" />
                            <h1>
                                I always felt self-conscious about my appearance, especially in social situations. Since trying Mitolyn, I've lost 35 pounds, and for the first time in years, I actually enjoy looking in the mirror. It's incredible how this change has boosted my confidence and made me feel like myself again!
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='p-5 mx-5 max-sm:mx-2 md:mx-12'>
                    <div className='flex items-center'>
                        <img className='max-sm:mb-10' src="https://i.ibb.co/27FR64SN/Screenshot-2025-03-04-021704.png" alt="Peggy B." />
                        <div>
                            <h1><span className='font-bold text-xl max-sm:text-sm'>Peggy B.</span> - Rexton, MI</h1>
                            <h2 className='max-sm:text-sm text-2xl text-purple-300'>
                                Purchased Mitolyn 6 bottles Package
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Second User */}
                <div className='max-sm:p-5 md:flex md:items-center flex-col md:flex-row items-center justify-start'>
                    <img className='max-sm:w-[100px] sm:w-48 -mt-20' src="https://i.ibb.co/rK0jMTbk/Screenshot-2025-03-04-023621.png" alt="Russel" />
                    <div className="flex flex-col md:mx-6 space-y-2">
                        <h1 className='max-sm:text-xl text-3xl text-purple-300 font-bold'>Russel has torched 29 Ibs...</h1>
                        <div className="rating flex">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 stars" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 stars" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 stars" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 stars" defaultChecked />
                            <h1 className='text-red-400 max-sm:text-sm'>Verified Purchase</h1>
                        </div>
                        <div className='flex max-sm:text-lg md:text-2xl -mx-2'>
                            <img className='w-[50px] h-[30px] ' src="https://i.ibb.co/FLJ2Km1L/Screenshot-2025-03-04-020556.png" alt="icon" />
                            <h1>
                                No matter what I tried, my weight just wouldn't budge, especially around my belly. Mitolyn kick-started my metabolism and finally helped me shed 29 stubborn pounds. I feel lighter and more energetic, and my clothes are fitting so much better now — it's a huge relief.
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='p-5 mx-5 max-sm:mx-2 md:mx-12'>
                    <div className='flex items-center'>
                        <img className='max-sm:mb-10' src="https://i.ibb.co/XZFv6zNx/Screenshot-2025-03-04-024129.png" alt="Russel L." />
                        <div>
                            <h1><span className='font-bold text-xl max-sm:text-sm '>Russel L.</span> - Macon, GA</h1>
                            <h2 className='max-sm:text-sm text-2xl text-purple-300'>
                                Purchased Mitolyn 3 bottles Package
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Third User */}
                <div className='max-sm:p-5 md:flex md:items-center flex-col md:flex-row items-center justify-start'>
                    <img className='max-sm:w-[100px] sm:w-48 -mt-20' src="https://i.ibb.co/NgCMzPfK/Screenshot-2025-03-04-024610.png" alt="Connie" />
                    <div className="flex flex-col md:mx-6 space-y-2">
                        <h1 className='max-sm:text-xl text-3xl text-purple-300 font-bold'>Connie's dropped 40 Ibs...</h1>
                        <div className="rating flex">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 stars" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 stars" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 stars" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 stars" defaultChecked />
                            <h1 className='text-red-400 max-sm:text-sm'>Verified Purchase</h1>
                        </div>
                        <div className='flex max-sm:text-lg md:text-2xl -mx-2'>
                            <img className='w-[50px] h-[30px]' src="https://i.ibb.co/FLJ2Km1L/Screenshot-2025-03-04-020556.png" alt="icon" />
                            <h1>
                                Being overweight made even basic activities exhausting. I could hardly play with my kids without feeling out of breath. After using Mitolyn, I've dropped 40 pounds, and I can keep up with my kids without feeling exhausted all the time. I have my energy and freedom back!
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='p-5 mx-5 max-sm:mx-2 md:mx-28'>
                    <div className='flex items-center'>
                        <img src="https://i.ibb.co/27FR64SN/Screenshot-2025-03-04-021704.png" alt="Connie A." />
                        <div>
                            <h1><span className='font-bold text-xl max-sm:text-sm'>Connie A.</span> - Montclair, NJ</h1>
                            <h2 className='max-sm:text-sm text-2xl text-purple-300'>
                                Purchased Mitolyn 6 bottles Package
                            </h2>
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <img className='max-sm:hidden block mx-auto w-full' src="https://i.ibb.co/bgBgPbwR/Screenshot-2025-03-04-025721.png" alt="Desktop version" />
                    <img className='hidden max-sm:block mx-auto w-full' src="https://i.ibb.co/spCh527b/Screenshot-2025-03-04-025819.png" alt="Mobile version" />
                </div>
            </div>
        </div>
    );
};

export default MitolynUser;
