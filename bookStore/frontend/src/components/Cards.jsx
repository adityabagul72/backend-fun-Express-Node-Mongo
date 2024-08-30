import React from 'react';

function Cards({ item }) {
    return (
        <div className="mt-9 mb-3 bg-white">
            <div className="card w-96 shadow-xl hover:duration-500 hover:scale-105">
                <figure>
                    <img
                        className=" object-fit object-cover w-80 h-64 rounded-md "
                        src={item.image}
                        alt={item.name}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{"$" + item.price}</div>
                        <div className="cursor-pointer p-2 badge badge-outline hover:bg-pink-500 hover:text-white">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
