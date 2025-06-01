import React from 'react'

const Imagetext = ({imagesrc, imagealt , title , description ,butt ,resverse = false}) => {
  return (
    <div className={`${resverse ? "md:flex-row-reverse":""} md:relative flex flex-col md:flex-row  w-full h-full md:p-2.5 rounded-2xl bg-gray-200 shadow-2xl overflow-hidden`}>
        <div className="w-100 md:w-[50%] ">
        <img src={imagesrc} alt={imagealt} className='w-full rounded-2xl text-center active:scale-95 cursor-pointer overflow-hidden'/>
        </div>
        <div className="w-full h-115 md:w-[63%] md:h-68 md:absolute -translate-y-2.5 md:top-15 md:left-130  bg-gray-100 rounded-3xl shadow-2xl">
            <h1 className='text-2xl md:text-4xl text-black p-2'>{title}</h1>
            <div className="w-50 h-1 bg-green-400 rounded-2xl mx-3"></div>
            <p className='text-xl  text-black text-justify py-3 px-3' >{description}</p>
            <div className="px-3">
            <button className='text-xl md:text-2xl font-semibold bg-gray-50 text-black text-justify p-2  border-red-500 border-3 rounded-2xl hover:bg-red-500 hover:text-white translate-0 delay-50 cursor-pointer cur'> {butt} </button>
            </div>        
        </div>



    </div>
  )
}

export default Imagetext