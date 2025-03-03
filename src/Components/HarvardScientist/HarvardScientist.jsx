import React from 'react';

const HarvardScientist = () => {
    return (
        <div className='mt-5 my-5 px-4'>
            <div className='max-w-[1200px] mx-auto'>
                {/* Heading Section */}
                <div>
                    <h1 className='text-purple-300 font-montserrat text-3xl md:text-5xl font-bold text-center lg:text-left'>
                        March 2025 - New Scientific Discovery
                    </h1>
                </div>

                {/* Main Title Section */}
                <div className='font-oswald font-bold mt-5 text-center lg:text-left'>
                    <h1 className='text-4xl md:text-6xl'>
                        Harvard Scientists Discover Shocking <span className='underline decoration-yellow-300'>New</span>{' '}
                        <br className='hidden lg:block' /> {/* Break line only on larger screens */}
                        <span className='underline decoration-yellow-300'>Cause</span> Of Slow Metabolism...
                    </h1>
                    <p className='text-2xl md:text-4xl mt-5'>
                        And it's <span className='italic'>Not What You Think...</span>
                    </p>
                </div>

                {/* Description Section */}
                <div className='font-oswald text-xl md:text-[30px] mt-5 text-center lg:text-left'>
                    <h1>
                        <span className='font-bold'>Harvard Scientists</span> used cutting-edge microscopic techniques to
                        study 1,700 women and men, and found just one common factor in every overweight person:{' '}
                        <span className='font-bold'>Low mitochondria levels.</span> They also found one thing common in
                        every person who was slim, toned, and had smooth young skin:{' '}
                        <span className='font-bold'>High mitochondria levels.</span>
                    </h1>
                </div>

                {/* Image and Text Section */}
                <div className='flex flex-col lg:flex-row items-center gap-10 mt-12'>
                    <img
                        className='w-full lg:w-[500px]'
                        src="https://i.ibb.co.com/zT5CLfHC/Screenshot-2025-03-03-152016.png"
                        alt="Mitochondria Illustration"
                    />
                    <div className='space-y-6 lg:space-y-10 w-full lg:w-[50%]'>
                        <h1 className='font-oswald text-2xl md:text-3xl'>
                            That's because, like little engines, <span className='font-bold'>mitochondria</span> are tiny
                            parts found inside every cell in our body that make <span className='font-bold'>energy</span>{' '}
                            from the food we eat by burning fat stored in our body. This energy, called ATP, is what our
                            body needs to do everything—from moving our muscles, to our heart beating, to thinking.
                        </h1>
                        <h1 className='font-oswald text-2xl md:text-3xl'>
                            In short, mitochondria burn fat and fuel every part of our body to keep it running smoothly.
                            So the more mitochondria you have,{' '}
                            <span className='font-bold'>the more fat you burn!</span>
                        </h1>
                    </div>
                </div>

                {/* References Section */}
                <div className='mt-12 font-oswald text-lg md:text-lg'>
                    <h1 className='font-bold'>References:</h1>
                    <h1>
                        (a){' '}
                        <span>
                            Leukocyte mitochondrial DNA copy number, anthropometric indices, and weight change in US
                            women.
                        </span>
                        <p className='text-sm italic'>https://pubmed.ncbi.nlm.nih.gov/27367031</p>
                    </h1>

                    <h1>
                        (b){' '}
                        <span>
                            impired mitochondria Biogenesis in Adipose Tissue in Acquired Obesity.
                        </span>
                        <p className='text-sm italic'>https://pubmed.ncbi.nlm.nih.gov/25972572</p>
                    </h1>

                    <h1>
                        (c){' '}
                        <span>
                            Persistent low body weight in humans in associated with higher mitochondria activity in white adipose tissue.
                        </span>
                        <p className='text-sm italic'>https://pubmed.ncbi.nlm.nih.gov/31374571</p>
                    </h1>

                    <h1>
                        (d){' '}
                        <span>
                           Mitochondrial DNA copy number in peripheral blood is independently associated with visceral fat accumulation in healthy young adult
                        </span>
                        <p className='text-sm italic'>https://pubmed.ncbi.nlm.nih.gov/24707289</p>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default HarvardScientist;