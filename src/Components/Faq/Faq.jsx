import React, { useState } from 'react';

const Faq = () => {
    const [open, setOpen] = useState(null); // Track which answer is open

    // Function to toggle answers
    const toggleAnswer = (index) => {
        // Toggle the visibility of the answer (close if it's already open)
        setOpen(open === index ? null : index);
    };

    return (
       <div id='faq' className='bg-gradient-to-r from-blue-800 via-blue-400 to-blue-900 py-12'>
            <h1 className='font-oswald font-bold text-center md:text-4xl text-2xl text-white'>
                Frequently Asked Questions
            </h1>
            <div className='lg:w-[1200px] mx-auto mt-8 font-oswald md:text-4xl space-y-2 max-sm:p-4 md:p-5'>
                {/* First Question */}
                <div className="mb-4">
                    <div
                        className="collapse-title font-semibold text-3xl max-sm:text-[17px] cursor-pointer text-black bg-white border-2 border-blue-800 p-4 rounded-xl"
                        onClick={() => toggleAnswer(1)} // Toggle the answer for this question
                    >
                        Is Mitolyn right for me?
                    </div>
                    {/* Answer for the first question with animation */}
                    <div
                        className={`text-xl max-sm:text-sm text-white mt-2 overflow-hidden transition-all duration-500 ease-in-out ${open === 1 ? 'max-h-[500px]' : 'max-h-0'}`}
                    >
                        Do you have deep stubborn fatt stores that no diet or exercise seems to remove.? Then the answer is Yes Mitolyn is right for you.Mitolyn has changed the lives of thounsands of women and men and from 18 to 80 and is designed to rapidly  liquify fat in even the worst cases.
                    </div>
                </div>

                {/* Second Question */}
                <div className="mb-4">
                    <div
                        className="collapse-title font-semibold text-3xl max-sm:text-[17px] cursor-pointer text-black bg-white border-2 border-blue-800 p-4 rounded-xl"
                        onClick={() => toggleAnswer(2)} // Toggle the answer for this question
                    >
                        Is Mitolyn safe?
                    </div>
                    {/* Answer for the second question with animation */}
                    <div
                        className={`text-xl max-sm:text-sm text-white mt-2 overflow-hidden transition-all duration-500 ease-in-out ${open === 2 ? 'max-h-[500px]' : 'max-h-0'}`}
                    >
                        Mitolyn is a natural proprietary formula manufactured in the USA at our registered and GMP certified facility using state of the art, prescision engineered machinery and under the strictest and most sterile standars.Each ingredients is 100% plan-based,soyo-free,non-GMO,and put through additional third-party inspections and quality control to ensure hight purity and potency.As always we advise you to showa bottle of this to your doctor before you take it,just to be safe.
                    </div>
                </div>

                {/* Third Question */}
                <div className="mb-4">
                    <div
                        className="collapse-title font-semibold text-3xl max-sm:text-[17px] cursor-pointer text-black bg-white border-2 border-blue-800 p-4 rounded-xl"
                        onClick={() => toggleAnswer(3)} // Toggle the answer for this question
                    >
                        How Many Bottles should i orders?
                    </div>
                    {/* Answer for the third question with animation */}
                    <div
                        className={`text-xl max-sm:text-sm text-white mt-2 overflow-hidden transition-all duration-500 ease-in-out ${open === 3 ? 'max-h-[500px]' : 'max-h-0'}`}
                    >
                       if you're over 35 years old or carry excess weight,we Recommended you take Mitolyn for at least 3 to 6 months so it has enough time to work throughout your entire body to support healthy mitochondria levels,reach your desired weight,and lock it in for years into the future.Every 3 bottles package of Mitolyn comes with the 2 bonus books absolutley free.Or make the smart decision and get the heavily Discounted 6 bottles package,whice comes with the 2 bonus books absolutely free along with free Shipping as well.
                    </div>
                </div>

                {/* fouth question */}
                <div className="mb-4">
                    <div
                        className="collapse-title font-semibold text-3xl max-sm:text-[17px] cursor-pointer text-black bg-white border-2 border-blue-800 p-4 rounded-xl"
                        onClick={() => toggleAnswer(4)} // Toggle the answer for this question
                    >
                        Whats the best way to take Mitolyn?
                    </div>
                    {/* Answer for the third question with animation */}
                    <div
                        className={`text-xl max-sm:text-sm text-white mt-2 overflow-hidden transition-all duration-500 ease-in-out ${open === 4 ? 'max-h-[500px]' : 'max-h-0'}`}
                    >
                       Take one capsule of mitolyn with a big glass of cold water everyday.its bespoke proprietary blend of natural ingredients will get to work dissolving fat for you even when  sleeping.
                    </div>
                </div>

                {/* five question */}
                <div className="mb-4">
                    <div
                        className="collapse-title font-semibold text-3xl max-sm:text-[17px] cursor-pointer text-black bg-white border-2 border-blue-800 p-4 rounded-xl"
                        onClick={() => toggleAnswer(5)} // Toggle the answer for this question
                    >
                       is this a one time payments?
                    </div>
                    {/* Answer for the third question with animation */}
                    <div
                        className={`text-xl max-sm:text-sm text-white mt-2 overflow-hidden transition-all duration-500 ease-in-out ${open === 5 ? 'max-h-[500px]' : 'max-h-0'}`}
                    >
                       Yes your order is today is a one-time payment with no-auto-ship,subscriptions or hidden charges.
                    </div>
                </div>

                 {/* six question */}
                 <div className="mb-4">
                    <div
                        className="collapse-title font-semibold text-3xl max-sm:text-[17px] cursor-pointer text-black bg-white border-2 border-blue-800 p-4 rounded-xl"
                        onClick={() => toggleAnswer(6)} // Toggle the answer for this question
                    >
                       What if Mitolyn doesn't work for me?
                    </div>
                    {/* Answer for the third question with animation */}
                    <div
                        className={`text-xl max-sm:text-sm text-white mt-2 overflow-hidden transition-all duration-500 ease-in-out ${open === 6 ? 'max-h-[500px]' : 'max-h-0'}`}
                    >
                      Every single bottle of mitolyn comes with our personal 90-day 100% money back guarantee.if for any reason you're unsatisfied with our results, just return all bottle (even if empty) for a full,no Questions asked refund.
                    </div>
                </div>

                {/* seven question */}
                <div className="mb-4">
                    <div
                        className="collapse-title font-semibold text-3xl max-sm:text-[17px] cursor-pointer text-black bg-white border-2 border-blue-800 p-4 rounded-xl"
                        onClick={() => toggleAnswer(7)} // Toggle the answer for this question
                    >
                       What do i do now?
                    </div>
                    {/* Answer for the third question with animation */}
                    <div
                        className={`text-xl max-sm:text-sm text-white mt-2 overflow-hidden transition-all duration-500 ease-in-out ${open === 7 ? 'max-h-[500px]' : 'max-h-0'}`}
                    >
                      This is fun part.Click on one of the package below.Enter your order details on our secure checkout page. After you've finished we'll get your Mitolyn shipped out to you straight away. Order 3 bottles and get the 2 free bounus books plus free shipping as well.
                    </div>
                </div>
            </div>
       </div>
    );
};

export default Faq;
