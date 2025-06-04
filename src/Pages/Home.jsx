import React from 'react'
import MainImage from '../Components/MainImage'
import Imagetext from '../Components/Imagetext'
import Session from "../Components/Section"
import Slider from '../Components/Slider'
function Home() {
  return (
    <>
      <div className="">
        <MainImage
          mimage="https://images.unsplash.com/photo-1614846384571-1e31322ed3a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imgalt="Home image"
          dmtext="Welcome to Roomzy – Your Home Finder App"
          ddestext="Discover your dream house, cozy PGs, or single rooms with ease. Roomzy helps you find the perfect space tailored to your needs – anytime, anywhere."
        />

        <div className="m-1 rounded-2xl">
          <Imagetext
            imagesrc="https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2UlMjBleHRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D"
            imagealt="cardimage"
            title="Why You Can Trust Roomzy"
            description="At Roomzy, we value your comfort and peace of mind. Every listing is verified for authenticity, and we partner only with trusted owners and PG providers. With transparent pricing, real-time support, and a growing community of happy renters, we’re committed to helping you find your perfect space without the stress."
            butt="Let Watch" />
        </div>
      </div>


      <div className="md:w-full  relative px-5 py-15 bg-gray-200 h-220 md:h-130">

        <Session
          title="Your Smart Path to the Perfect Living Space"
          para1=" At Roomzy, we believe finding your ideal room or PG should be simple, fast, and stress-free.That why we've built a smart platform that puts real-time listings verified, properties and personalized search filters at your fingertips."
          para2="From students seeking budget-friendly PGs to professionals needing private flats,Roomzy delivers options that are accurate,affordable,and tailored to your lifestyle."
          para3="No brokers no hidden fees just a clean, user-first experience designed to save you time and help you move in with confidence."
          img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPqVNW23aVOw9dibaR83JxmSCUleKibRFY8A&s"
          img2="https://edwardgeorgelondon.com/wp-content/uploads/2024/10/Striking-modern-house-exterior-blending-white-stucco-glass-metal-and-wood-with-clean-lines-and-contrasting-textures.webp"
          img3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz7SApy4GvNGXRzHtkexsbap-gdwHsn_Tccg&s"
        />
      </div>

      <div className="">
        <Slider/>
      </div>



    </>
  )
}

export default Home