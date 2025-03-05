import React from 'react';
import './styles.css'; // Ensure your CSS file is properly linked
import { BsCart4 } from 'react-icons/bs';
import { MdDone } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MitolynCard = () => {
    return (
        <div className="font-oswald">
            {/* Header Section */}
            <div className="text-center bg-orange-600 text-white p-8">
                <h1 className="text-2xl md:text-4xl font-bold">Claim Your Discounted Mitolyn</h1>
                <span className="block mt-2 text-2xl md:text-4xl font-bold">Below For Huge Saving</span>
            </div>

            {/* Cards Section */}
            <div className="bg-gray-200 p-1">
                <div className="lg:w-[1200px] mx-auto px-4 mt-6 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* BASIC Plan */}
                        <Link to='/detailsThree'>
                            <div className="card-scale">
                                <img className='block max-sm:hidden' src="https://i.ibb.co.com/XftLvZDY/Screenshot-2025-03-05-165124.png" alt="" />
                                <img className='hidden max-sm:block' src="https://i.ibb.co.com/60vCSbWR/Screenshot-2025-03-05-165629.png" alt="" />
                            </div>
                        </Link>

                        {/* MOST POPULAR Plan */}
                        <Link to='/detailsTwo'>
                            <div className="card-scale">
                                <img className='block max-sm:hidden' src="https://i.ibb.co.com/Kcq7RpBR/Screenshot-2025-03-05-165025.png" alt="" />
                                <img className='hidden max-sm:block' src="https://i.ibb.co.com/hRBrQhws/Screenshot-2025-03-05-165314.png" alt="" />
                            </div>
                        </Link>

                        {/* BUNDLE Plan */}
                        <Link to='/details'>
                            <div className="card-scale">
                                <img className='block max-sm:hidden' src="https://i.ibb.co.com/23Yccjry/Screenshot-2025-03-05-164802.png" alt="" />
                                <img className='hidden max-sm:block' src="https://i.ibb.co.com/Lzh849Mk/Screenshot-2025-03-05-165433.png" alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MitolynCard;