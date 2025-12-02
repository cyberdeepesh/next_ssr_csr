'use client';

import React, { useEffect, useState, use } from 'react';

const Page = ({ params }) => {

    const { id } = use(params);   // FIX: unwrap params using use()

    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            const json = await res.json();
            setData(json);
        })();
    }, [id]);

    if (!data) return <p className="text-center mt-10">Loading...</p>;

    return (
        <>
            <h1 className="text-3xl font-bold mb-8 text-center">Product Details</h1>

            <div className="max-w-lg mx-auto bg-white shadow-md rounded-xl overflow-hidden">
                <img 
                    src={data.thumbnail}
                    alt={data.title}
                    className="h-64 w-full object-cover"
                />

                <div className="p-4">
                    <h2 className="text-xl font-semibold">{data.title}</h2>
                    <p className="text-gray-600 text-sm mt-2">
                        {data.description}
                    </p>

                    <div className="mt-4 flex justify-between items-center">
                        <span className="text-2xl font-bold text-green-600">
                            ${data.price}
                        </span>

                        <button className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700">
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
