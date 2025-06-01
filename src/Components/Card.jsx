import React from 'react'

const Card = ({img, imgalt, title, description , amount}) => {
  return (
    <div className=" p-2 bg-white  w-[95%] shadow-2xl rounded-2xl hover:scale-103 hover:shadow-xl hover:shadow-amber-300 duration-300 active:scale-105 active:shadow-amber-200">
        <img src={img} alt={imgalt} className='w-full h-50 object-cover rounded-2xl'/>
        <h2 className='text-3xl text-center font-semibold'>{title}</h2>
        <p className='text-xl p-2'><span className='text-red-600'>Available In:</span> {description}</p>

        {amount &&(
            <p className='text-blue-50 mt-2'>₹ {amount}</p>
        )}
    </div>
  )
}

export default Card