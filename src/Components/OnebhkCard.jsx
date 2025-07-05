import React from 'react';
import { MdShoppingCart } from "react-icons/md";

const OnebhkCard = ({ img, imgalt, title, rating, description, amount, onAddToCart }) => {
  return (
    <div className="p-3 bg-gray-700 w-full shadow-xl rounded-2xl delay-150 hover:scale-103 hover:shadow-inner hover:shadow-indigo-500 duration-500 active:scale-105 active:shadow-indigo-400">
      
      <img src={img} alt={imgalt} className="w-full h-60 object-cover rounded-xl" />
      
      <h2 className="mt-2.5 px-2 text-2xl font-semibold text-white">
        <span className="text-white">Name :</span> {title}
      </h2>

      <h3 className="flex text-xl text-yellow-400 p-2 font-semibold">
        Rating : 
        <span className={
          rating >= 8.5 
          ? "bg-[#e12b6a] text-[#fff] rounded-[10px] px-3 py-0.5 ml-[1.2rem] text-xl" 
          : "bg-cyan-100 text-blue-600 rounded-[10px] px-3 py-0.5 ml-[1.2rem] text-xl"
        }>
          {rating}
        </span>
      </h3>

      <p className="text-xl text-justify px-2 py-1.5 text-white">
        <span className="text-white text-xl font-semibold">Available In :</span> {description}
      </p>

      {amount && (
        <p className="text-white bg-black w-40 text-xl text-center rounded-xl py-1.5">
          <span className="text-white font-semibold text-xl">Price :</span> ₹{amount}
        </p>
      )}

      <div className="flex justify-end mt-3.5">
        <button
          onClick={() => {
            console.log("Add to cart clicked:", title);
            if (onAddToCart) {
              onAddToCart({ img, imgalt, title, rating, description, amount });
            }
          }}
          className="bg-blue-600 text-white px-4 py-2.5 rounded-xl text-2xl cursor-pointer hover:bg-blue-700 duration-200 active:bg-blue-800 active:scale-105"
        >
          <MdShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default OnebhkCard;
