import React from 'react';
import { MdDone } from 'react-icons/md';

const FetchMitolynCard = ({ mitolyn }) => {
    const { productName, productImage, description, titles } = mitolyn;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
            {/* Product Image */}
            {productImage && (
                <img 
                    src={productImage} 
                    alt={productName} 
                    className="w-full h-32 md:h-52 lg:h-64 object-cover rounded-lg" 
                />
            )}

            {/* Product Name */}
            <h2 className="text-lg md:text-3xl font-semibold text-center mt-4">{productName}</h2>

            {/* Product Description */}
            {description && <p className="text-start max-sm:text-[10px] font-poppins italic text-gray-600 mt-2">{description}</p>}

            {/* Titles and Corresponding Descriptions */}
            <div className="mt-4 text-start -mx-7 space-y-1">
                {titles && titles.length > 0 && titles.map((title, index) => (
                    <div key={index} className="mt-4">
                        <div className='flex items-center'>
                            <MdDone className='border-2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-600 text-white mx-2' />
                            <h3
                                className={`text-[12px] md:text-xl ${index === 0 ? 'font-bold underline decoration-yellow-300 ' : ''} text-gray-600`}
                            >
                                {title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FetchMitolynCard;