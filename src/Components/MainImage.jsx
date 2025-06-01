import React from 'react'

const MainImage = ({mimage, imgalt ,dmtext, ddestext }) => {
  return (
    <div className="w-full h-full relative shadow-xl overflow-hidden p-2">
        <img src={mimage} alt={imgalt} className='w-full h-80 md:h-120 rounded-xl'/>
        <div className="flex justify-center">
        <div className="absolute top-20 md:top-40 text-center w-80 md:w-150 bg-[#ffffffc4] md:bg-[#ffffff4b] rounded-3xl">
        <h1 className='text-orange-600 md:text-red-600 text-2xl md:text-[40px] font-bold'>{dmtext}</h1>
        <p className='text-black md:text-2xl font-semibold text-justify p-3'>{ddestext}</p>
        </div>
        </div>
    </div>
  )
}

export default MainImage