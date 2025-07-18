import React, { useState, useContext } from 'react'
import MainImage from '../../Components/MainImage'
import OnebhkCard from '../../Components/OnebhkCard'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../../Components/context/Authcontext"
import Onebhkcarddata from '../../api/onebhk.json'
const Onebhk = () => {
  const [cart, setCart] = useState([])
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const handleAddToCart = (item) => {
    if (!currentUser) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate("/Login");
      }, 3000);

      return;
    }
    setCart(prev => [...prev, item]);
    console.log(`✅ Added to Cart: ${item.title} (₹${item.amount})`);

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <>
      <div className="">
        <MainImage
          mimage="1 bhk.png"
          imgalt="Home image"
          dmtext="1 Bhk"
          ddestext=""
        />
        {showPopup && (
          <div className={`fixed top-5 right-5 text-lg px-4 py-2 rounded-xl shadow-lg z-50 animate-bounce ${currentUser ? 'bg-green-500' : 'bg-red-500'
            } text-white`}>
            {currentUser ? "Item added successfully ✅" : "Firstly login to add items in your Cart ❌"}
          </div>
        )}
      </div>
      {/* card component  */}

      <div className="bg-gray-200  p-9 m-3">

        <h1 className=' text-3xl font-bold text-center p-2'>Avaliable One BHK Room </h1>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3">
          {Onebhkcarddata.map((item) => (
            <OnebhkCard key={item.id} {...item} onAddToCart={handleAddToCart} />
          ))}

        </div>
      </div>

      <div className="w-full h-full px-[7vw] py-[5vw] bg-white text-black">
        <div className="w-full h-full md:h-[35vw] flex flex-col md:flex-row gap-8 md:gap-[5vw]">
          <div className="w-full h-80 md:h-full relative">
            <div className="absolute w-[80%] h-[80%] rounded-2xl top-0 right-0 overflow-hidden hover:z-40 duration-1000 hover:rounded-[3vw] cursor-pointer">
              <img
                className="w-full h-full object-cover object-center hover:scale-110 duration-1000"
                src="https://images.unsplash.com/photo-1595330449916-e7c3e1962bd3?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="absolute w-[50%] rounded-2xl h-[55%] left-0 bottom-0 overflow-hidden duration-1000 hover:rounded-[3vw] cursor-pointer">
              <img
                className="w-full h-full object-cover object-center hover:scale-110 duration-1000"
                src="https://5.imimg.com/data5/SELLER/Default/2024/2/394282998/KY/GS/QR/181580407/residential-building-flat-1000x1000.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="w-full h-full flex flex-col gap-[2vw]">
            <div>
              <h1 className="text-xl md:text-[2vw] font-bold md:leading-[2.5vw]">
                Services We Provide
              </h1>
              <hr className=" w-16 h-1 md:w-[6vw] md:h-[0.2vw] bg-amber-500 border-none rounded-full" />
            </div>

            <div className="w-full h-full flex flex-col gap-4 md:gap-[1vw]">
              <div className="w-full h-full flex gap-2 md:gap-[1.5vw] items-center">
                <div className="w-8 h-8 md:w-[4vw] md:h-[4vw] rounded-full overflow-hidden">
                  <img className="w-fll h-full object-cover object-center" src="/images/SolutionWeProvide/I1.png" alt="" />
                </div>
                <div>
                  <p className="text-sm md:text-[1.5vw]">Verified Listings</p>
                </div>
              </div>

              <div className="w-full h-full flex gap-[1.5vw] items-center">
                <div className="w-8 h-8 md:w-[4vw] md:h-[4vw] rounded-full overflow-hidden">
                  <img className="w-fll h-full object-cover object-center" src="/images/SolutionWeProvide/I2.png" alt="" />
                </div>
                <div>
                  <p className="text-sm md:text-[1.5vw]">
                    Location-Based Search
                  </p>
                </div>
              </div>
              <div className="w-full h-full flex gap-[1.5vw] items-center">
                <div className="w-8 h-8 md:w-[4vw] md:h-[4vw] rounded-full overflow-hidden">
                  <img className="w-fll h-full object-cover object-center" src="/images/SolutionWeProvide/I3.png" alt="" />
                </div>
                <div>
                  <p className="text-sm md:text-[1.5vw]">
                    Budget Filter Options
                  </p>
                </div>
              </div>
              <div className="w-full h-full flex gap-[1.5vw] items-center">
                <div className="w-8 h-8 md:w-[4vw] md:h-[4vw] rounded-full overflow-hidden">
                  <img className="w-fll h-full object-cover object-center" src="/images/SolutionWeProvide/I4.png" alt="" />
                </div>
                <div>
                  <p className="text-sm md:text-[1.5vw]">
                    Room Type Selection
                  </p>
                </div>
              </div>
              <div className="w-full h-full flex gap-[1.5vw] items-center">
                <div className="w-8 h-8 md:w-[4vw] md:h-[4vw] rounded-full overflow-hidden">
                  <img className="w-fll h-full object-cover object-center" src="/images/SolutionWeProvide/I5.png" alt="" />
                </div>
                <div>
                  <p className="text-sm md:text-[1.5vw]">Secure Booking System</p>
                </div>
              </div>
              <div className="w-full h-full flex gap-[1.5vw] items-center">
                <div className="w-8 h-8 md:w-[4vw] md:h-[4vw] rounded-full overflow-hidden">
                  <img className="w-fll h-full object-cover object-center" src="/images/SolutionWeProvide/I6.png" alt="" />
                </div>
                <div>
                  <p className="text-sm md:text-[1.5vw]">Support & Dispute Resolution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Onebhk