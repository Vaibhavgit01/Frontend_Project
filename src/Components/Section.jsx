import React from 'react'

const Section = ({ title, para1, para2, para3, img1, img2, img3, reverse = false }) => {
  return (
    // <div className={`md:w-full  relative px-5 py-15 bg-gray-300 h-230 md:h-100 `}>
      <div className="w-full md:w-[50%]">
        <h1 className='text-[22px] md:text-3xl md:text-justify font-semibold md:font-bold pb-4'>{title}</h1>
        <div className="w-50 h-1.5 bg-red-800 rounded-2xl"></div>
        <p className='text-[18px] md:text-xl text-justify pt-3'>
          {para1}
        </p>
        <p className='text-[18px] md:text-xl text-justify'>

          {para2}
        </p>
        <p className='text-[18px] md:text-xl text-justify'>

          {para3}
        </p>
      {/* </div> */}



      <div className=" md:w-[50%] md:flex ">
        <img src={img1}
          alt="home1 image"
          className='w-52 h-40  md:w-65 md:h-50 absolute bottom-45 left-4 sm:top:10 md:bottom-62 md:left-[60%] rounded-xl hover:z-50 hover:scale-102 cursor-pointer duration-1000' />
        <img src={img2}
          alt="home2"
          className='w-45 h-40 sm:w-41 sm:h-40 md:w-60 md:h-50 absolute bottom-35 right-2 sm:top:10 sm:right-1 md:bottom-49 md:right-34 rounded-xl hover:z-50 hover:scale-102 cursor-pointer duration-1000 overflow-hidden' />
        <img src={img3}
          alt="home3"
          className='w-45 h-40 sm:w-43 sm:h-40 md:w-60 md:h-50 absolute bottom-2 left-1/5 sm:bottom-5  sm:right-20 md:top-70 md:left-[63%]  rounded-xl hover:z-50 hover:scale-102 cursor-pointer duration-1000' />
      </div>
    </div>
    // </div>
  )
}

export default Section