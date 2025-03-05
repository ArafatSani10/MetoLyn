import React from 'react';
import './styles.css'; // Ensure your CSS file is properly linked
import { BsCart4 } from 'react-icons/bs';
import { MdDone } from 'react-icons/md';

const MitolynCard = () => {
    return (
        <div  className="font-oswald">
            <div className="text-center bg-orange-600 text-white  p-8">
                <h1 className="text-2xl md:text-4xl font-bold">Claim Your Discounted Mitolyn</h1>
                <span className="block mt-2 text-2xl md:text-4xl font-bold">Below For Huge Saving</span>
            </div>

            <div className='bg-gray-200 p-4'>
                <div className="lg:w-[1200px] mx-auto px-4 mt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                        {/* BASIC Plan */}
                        <div className="w-full max-sm:flex max-sm:items-center max-sm:justify-between ">
                            <div className="max-sm:flex-col w-full">
                                <div className="card bg-white border-2 border-gray-300 shadow-lg rounded-lg p-6 flex flex-col w-full">
                                    <h1 className="bg-gray-500 text-white text-xl text-center py-2 rounded-lg w-full">BASIC</h1>
                                    <div className="max-sm:flex w-full">
                                        <div className="text-center mt-6 max-sm:flex-col w-full">
                                            <h2 className="md:text-5xl max-sm:text-3xl font-bold text-gray-700">1 BOTTLE</h2>
                                            <p className="text-3xl max-sm:text-xl text-gray-500 mt-2">30 Day Supply</p>
                                            <div className="w-full flex justify-center">
                                                <img
                                                    className="md:w-[120px] max-sm:w-[90px] max-sm:scale-90 mt-6 scale-image"
                                                    src="https://i.ibb.co.com/HTpzWjcS/download-1.png"
                                                    alt="Bottle"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-center mt-6 max-sm:mt-12 w-full">
                                            <h3 className="text-[75px] max-sm:text-5xl font-bold text-gray-800">$59</h3>
                                            <button className="flex items-center mx-auto border-2 p-3 max-sm:p-1 bg-yellow-400 shadow-lg rounded-xl mt-4">
                                                <p className="text-2xl max-sm:text-xl max-sm:h-12 max-sm:w-20 mt-3 text-gray-700 mx-6">BUY NOW</p>
                                                <span className="md:w-12 md:h-12 max-sm:w-8 max-sm:h-8 rounded-full bg-blue-400 flex items-center justify-center">
                                                    <BsCart4 className="text-white" size={24} />
                                                </span>
                                            </button>
                                        </div>

                                        <div className="mt-2">
                                            <img src="https://i.ibb.co.com/FLF8KPp0/Screenshot-2025-03-05-142239.png" alt="" />
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* MOST POPULAR Plan */}
                        <div className="most-popular-card">
                            <div className="w-full max-sm:flex max-sm:items-center max-sm:justify-center">
                                <div className="max-sm:flex-col w-full">
                                    <div className="card border-2 border-gray-300 shadow-lg rounded-lg p-6 flex flex-col w-full bg-yellow-100">
                                        <h1 className="bg-purple-300 text-white text-xl text-center py-2 rounded-lg w-full">MOST POPULAR</h1>
                                        <div className="max-sm:flex max-sm:items-center max-sm:justify-between w-full">
                                            <div className="text-center mt-6 max-sm:flex-col w-full">
                                                <h2 className="md:text-5xl max-sm:text-[28px] font-bold text-gray-700">6 BOTTLES</h2>
                                                <p className="text-3xl max-sm:text-xl text-gray-500 mt-2">180 Day Supply</p>
                                                <div className="w-full flex justify-center">
                                                    <img
                                                        className="md:w-[300px] max-sm:w-[280px] max-sm:scale-90 mt-6 scale-image"
                                                        src="https://i.ibb.co.com/3yhYyFz0/download.png"
                                                        alt="Bottle"
                                                    />
                                                </div>
                                            </div>
                                            <div className="text-center mt-6 max-sm:mt-12 w-full">
                                                <h3 className="text-[75px] max-sm:text-4xl font-bold text-gray-800">$234</h3>
                                                <div className="flex items-center justify-center mt-3">
                                                    <span className="">
                                                        <MdDone className="w-8 h-8 border bg-blue-300 text-white rounded-full" size={20}></MdDone>
                                                    </span>
                                                    <h1 className="font-bold font-oswald md:text-3xl max-sm:text-sm">2 FREE BONUSES!</h1>
                                                </div>
                                                <div className="flex items-center justify-center mt-3">
                                                    <span className="">
                                                        <MdDone className="w-8 h-8 border bg-red-700 text-white rounded-full" size={20}></MdDone>
                                                    </span>
                                                    <h1 className="font-bold font-oswald md:text-3xl max-sm:text-sm"> FREE US SHIPPING!</h1>
                                                </div>
                                                <button className="flex items-center mx-auto border-2 p-3 max-sm:p-1 bg-yellow-400 shadow-lg rounded-xl mt-4">
                                                    <p className="text-2xl max-sm:text-[17px] max-sm:h-10 max-sm:w-16 mt-3 text-gray-700 mx-6">BUY NOW</p>
                                                    <span className="md:w-12 md:h-12 max-sm:w-8 max-sm:h-8 rounded-full bg-blue-400 flex items-center justify-center">
                                                        <BsCart4 className="text-white" size={24} />
                                                    </span>
                                                    {/* Hand pointer icon added next to cart */}
                                                    <span className="ml-2 flex items-center justify-center text-white text-xl animate-bounce">

                                                        <img className="w-10" src="https://i.ibb.co.com/0kxwF3t/download-5.png " alt="" />
                                                    </span>
                                                </button>

                                                <div className="mt-2">
                                                    <img className="mx-auto" src="https://i.ibb.co.com/FLF8KPp0/Screenshot-2025-03-05-142239.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* BUNDLE Plan */}
                        <div className="w-full max-sm:flex max-sm:items-center max-sm:justify-center">
                            <div className="max-sm:flex-col w-full">
                                <div className="card bg-white border-2 border-gray-300 shadow-lg rounded-lg p-6 flex flex-col w-full">
                                    <h1 className="bg-gray-500 text-white text-xl text-center py-2 rounded-lg w-full">BUNDLE</h1>
                                    <div className="max-sm:flex w-full">
                                        <div className="text-center max-sm:mt-20 mt-5 max-sm:flex-col w-full">
                                            <h2 className="md:text-5xl max-sm:text-[28px] font-bold text-gray-700">3 BOTTLES</h2>
                                            <p className="text-3xl max-sm:text-xl text-gray-500 mt-2">90 Day Supply</p>
                                            <div className="w-full flex justify-center">
                                                <img
                                                    className="md:w-[320px] max-sm:w-[220px] max-sm:scale-90 mt-6 scale-image"
                                                    src="https://i.ibb.co.com/k6V5yjGm/Screenshot-2025-03-02-142337.png"
                                                    alt="Bottle"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-center mt-6 max-sm:mt-12 w-full">
                                            <h3 className="text-[75px] max-sm:text-4xl font-bold text-gray-800">$147</h3>
                                            <div className="flex items-center justify-center mt-3">
                                                <span className="">
                                                    <MdDone className="w-8 h-8 border bg-blue-300 text-white rounded-full" size={20}></MdDone>
                                                </span>
                                                <h1 className="font-bold font-oswald md:text-3xl max-sm:text-sm">2 FREE BONUSES!</h1>
                                            </div>
                                            <button className="flex items-center mx-auto border-2 p-3 max-sm:p-1 bg-yellow-400 shadow-lg rounded-xl mt-4">
                                                <p className="text-2xl max-sm:text-[17px] max-sm:h-10 max-sm:w-16 mt-3 text-gray-700 mx-6">BUY NOW</p>
                                                <span className="md:w-12 md:h-12 max-sm:w-8 max-sm:h-8 rounded-full bg-blue-400 flex items-center justify-center">
                                                    <BsCart4 className="text-white" size={24} />
                                                </span>
                                            </button>

                                            <div className="mt-2">
                                                <img src="https://i.ibb.co.com/FLF8KPp0/Screenshot-2025-03-05-142239.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MitolynCard;
