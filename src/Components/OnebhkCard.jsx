import React from 'react';
import { MdShoppingCart } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoStarHalfOutline } from "react-icons/io5";
import { FaBed } from "react-icons/fa6";
import { FaBath } from "react-icons/fa";
import { FaRulerCombined } from "react-icons/fa6";
const OnebhkCard = ({ img, imgalt, title, rating, bedcount, bathcount, Squarefit, description, amount, onAddToCart }) => {
  return (
    <div className="p-1 bg-gray-50 w-[102%] h-130 shadow-xl rounded-2xl delay-150 hover:scale-103 hover:shadow-inner hover:shadow-indigo-500 duration-500 active:scale-105 active:shadow-indigo-400">

      <img src={img} alt={imgalt} className="w-full h-60 object-cover rounded-t-2xl" />

      <h2 className="mt-2.5 px-5 text-[27px] font-bold text-gray-800">
        {title}
      </h2>
      <div className="flex text-center">
        <FaLocationDot className=" text-[25px] font-semibold my-3 mx-2" />
        <p className=" text-[19px] text-justify px-0 py-2 text-gray-700">
          {description}
        </p>
      </div>
      <div className="w-83 h-0 mx-1 border-1 text-gray-400"></div>


      <div className="flex gap-8 text-center mt-3">
        <div className="flex flex-col">
          <IoStarHalfOutline className='text-2xl text-amber-400 ml-6' />
          <span className="mt-1 ml-2.5 font-semibold text-gray-800 text-[16px]">{rating}</span>
        </div>
        {/* </span>
        </h3> */}
        <div className="flex flex-col">
          <FaBed className='text-2xl text-blue-500 ml-4.5' />
          <span className="mt-1 ml-2.5 font-semibold text-gray-800 text-[16px]">{bedcount}</span>
        </div>
        <div className="flex flex-col">
          <FaBath className='text-2xl text-green-500 ml-5' />
          <span className='mt-1 ml-5 font-semibold text-gray-800 text-[16px]'> {bathcount}</span>
        </div>
        <div className="flex flex-col">
          <FaRulerCombined className='text-2xl text-purple-600 ml-4' />
          <span className='mt-1 ml-1 font-semibold text-gray-800 text-[16px]'> {Squarefit}</span>
        </div>
      </div>

      <div className="w-83 h-0 mx-1 mt-3 border-1 text-gray-400"></div>

      {
        amount && (
          <div className="flex mt-2 justify-between items-center px-4">
            <div className="ml-3">
              <span className="text-gray-600 text-lg font-semibold">Price</span>
              <div className="flex flex-col text-[25px] font-bold">{amount}</div>
            </div>


            <button
              onClick={() => {
                console.log("Add to cart clicked:", title);
                if (onAddToCart) {
                  onAddToCart({ img, imgalt, title, rating, description, amount });
                }
              }}
              className="bg-blue-600 text-white px-5 py-3.5 rounded-xl text-2xl cursor-pointer hover:bg-blue-700 duration-200 active:bg-blue-800 active:scale-105"
            >
              <MdShoppingCart />
            </button>
          </div>
        )}  
        </div>
  )
}

export default OnebhkCard;
