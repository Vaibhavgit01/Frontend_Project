import React from 'react'
import MainImage from '../../Components/MainImage'
function Twobhk() {
  return (
    <>
      <div className="">
        <MainImage
          mimage="2 bhk1.png"
          imgalt="Home image"
          dmtext="2 Bhk"
          ddestext=""
        />
      </div>

      {/* card Component add here */}
      <div className="flex justify-center items-center w-full h-50 p-5 ">
        <h1 className='text-4xl bg-black text-white p-5 rounded-2xl'>We working on this page</h1>
      </div>
      <div className="w-full h-full px-[7vw] py-[5vw] bg-white text-black">
        <div className="w-full h-full md:h-[35vw] flex flex-col md:flex-row gap-8 md:gap-[5vw]">
          <div className="w-full h-80 md:h-full relative">
            <div className="absolute w-[80%] h-[80%] rounded-2xl top-0 right-0 overflow-hidden hover:z-40 duration-1000 hover:rounded-[3vw] cursor-pointer">
              <img
                className="w-full h-full object-cover object-center hover:scale-110 duration-1000"
                src="/images/SolutionWeProvide/Laptop.png"
                alt=""
              />
            </div>
            <div className="absolute w-[50%] rounded-2xl h-[55%] left-0 bottom-0 overflow-hidden duration-1000 hover:rounded-[3vw] cursor-pointer">
              <img
                className="w-full h-full object-cover object-center hover:scale-110 duration-1000"
                src="/images/NewsStories/Operator.png"
                alt=""
              />
            </div>
          </div>

          <div className="w-full h-full flex flex-col gap-[2vw]">
            <div>
              <h1 className="text-xl md:text-[2vw] font-bold md:leading-[2.5vw]">
                Solution We Provide
              </h1>
              <hr className=" w-16 h-1 md:w-[6vw] md:h-[0.2vw] bg-amber-500 border-none rounded-full" />
            </div>

            <div className="w-full h-full flex flex-col gap-4 md:gap-[1vw]">
              <div className="w-full h-full flex gap-2 md:gap-[1.5vw] items-center">
                <div className="w-8 h-8 md:w-[4vw] md:h-[4vw] rounded-full overflow-hidden">
                  <img className="w-fll h-full object-cover object-center" src="/images/SolutionWeProvide/I1.png" alt="" />
                </div>
                <div>
                  <p className="text-sm md:text-[1.5vw]">Customized Solutions</p>
                </div>
              </div>

              <div className="w-full h-full flex gap-[1.5vw] items-center">
                <div className="w-8 h-8 md:w-[4vw] md:h-[4vw] rounded-full overflow-hidden">
                  <img className="w-fll h-full object-cover object-center" src="/images/SolutionWeProvide/I2.png" alt="" />
                </div>
                <div>
                  <p className="text-sm md:text-[1.5vw]">
                    Distributed Control Systems
                  </p>
                </div>
              </div>
              <div className="w-full h-full flex gap-[1.5vw] items-center">
                <div className="w-8 h-8 md:w-[4vw] md:h-[4vw] rounded-full overflow-hidden">
                  <img className="w-fll h-full object-cover object-center" src="/images/SolutionWeProvide/I3.png" alt="" />
                </div>
                <div>
                  <p className="text-sm md:text-[1.5vw]">
                    Supervisory control and Data Aquisition
                  </p>
                </div>
              </div>
              <div className="w-full h-full flex gap-[1.5vw] items-center">
                <div className="w-8 h-8 md:w-[4vw] md:h-[4vw] rounded-full overflow-hidden">
                  <img className="w-fll h-full object-cover object-center" src="/images/SolutionWeProvide/I4.png" alt="" />
                </div>
                <div>
                  <p className="text-sm md:text-[1.5vw]">
                    Energy Saving Solution
                  </p>
                </div>
              </div>
              <div className="w-full h-full flex gap-[1.5vw] items-center">
                <div className="w-8 h-8 md:w-[4vw] md:h-[4vw] rounded-full overflow-hidden">
                  <img className="w-fll h-full object-cover object-center" src="/images/SolutionWeProvide/I5.png" alt="" />
                </div>
                <div>
                  <p className="text-sm md:text-[1.5vw]">Switchgear Solution</p>
                </div>
              </div>
              <div className="w-full h-full flex gap-[1.5vw] items-center">
                <div className="w-8 h-8 md:w-[4vw] md:h-[4vw] rounded-full overflow-hidden">
                  <img className="w-fll h-full object-cover object-center" src="/images/SolutionWeProvide/I6.png" alt="" />
                </div>
                <div>
                  <p className="text-sm md:text-[1.5vw]">Turnkey Solution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Twobhk