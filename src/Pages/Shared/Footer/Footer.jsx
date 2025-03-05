import React from 'react';

const Footer = () => {
    return (
        <div className='container mx-auto bg-gradient-to-r mt-10 from-blue-800 via-blue-400 to-blue-900 px-4 sm:px-6 lg:px-8'>
            {/* Navigation Links */}
            <div className='font-oswald items-center justify-center gap-6 text-white sm:gap-10 md:gap-20 py-5 flex flex-wrap lg:w-[1200px] mx-auto'>
                <h1 className='text-sm sm:text-base md:text-lg hover:text-gray-200 cursor-pointer'>Get started</h1>
                <h1 className='text-sm sm:text-base md:text-lg hover:text-gray-200 cursor-pointer'>Support</h1>
                <h1 className='text-sm sm:text-base md:text-lg hover:text-gray-200 cursor-pointer'>Terms</h1>
                <h1 className='text-sm sm:text-base md:text-lg hover:text-gray-200 cursor-pointer'>Privacy</h1>
            </div>

            {/* Footer Text */}
            <div className='font-oswald text-white text-xs sm:text-sm md:text-base lg:w-[1200px] mx-auto pb-6'>
                <p>
                    Statements found on this website have not been evaluated by the Food and Drug Administration. 
                    Products on this website are not intended to diagnose, treat, cure, or prevent any disease. 
                    If you are pregnant, nursing, taking medication, consult your physician before using our products. 
                    ClickBank is a registered trademark of Click Sales Inc., a Delaware corporation located at 
                    1444 S. Entertainment Ave., Suite 410, Boise, ID 83709, USA, and used by permission. 
                    ClickBank's role as a retailer does not constitute an endorsement, approval, or review of these products 
                    or any claim, statement, or opinion used in the promotion of these products.
                </p>
            </div>
        </div>
    );
};

export default Footer;