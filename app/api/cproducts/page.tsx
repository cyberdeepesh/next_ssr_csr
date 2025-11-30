'use client';
import React, { useEffect, useState } from 'react';

const page = () => {
    let [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch('https://dummyjson.com/products')
            const json = await res.json()
            setData(json['products'])
        })()
    },[])

    return (
        <>
            <h1 className="text-3xl font-bold mb-8 text-center">Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
                {data.map((item, index) => (
                    <div 
                        key={index}
                        className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <img 
                            src={item.thumbnail}
                            alt={item.title}
                            className="h-48 w-full object-cover"
                        />

                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{item.title}</h2>
                            <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                                {item.description}
                            </p>

                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-xl font-bold text-green-600">
                                    ${item.price}
                                </span>

                                <button className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 text-sm">
                                    Buy
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
export default page;
