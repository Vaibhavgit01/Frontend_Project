import React from 'react'
import Card from "../Components/Card"
import MainImage from '../Components/MainImage'
import cardsData from "../api/cardvalues"
import Dynamic_img from '../Components/Dynamic_img'
function About() {
  return (
    <>
      <div className="">
        <MainImage
          mimage="https://images.unsplash.com/photo-1594484208280-efa00f96fc21?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imgalt="Home image"
          dmtext="About Page"
          ddestext=""
        />
      </div>
      <div className="bg-gray-50  p-9 m-3">

        <h1 className='text-2xl text-center p-2'>Avaliable PG </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {cardsData.map((card) => (
            <Card key={card.id} {...card} />
          ))}

        </div>
        <div className="mt-6 flex justify-center"></div>
      </div>


      <Dynamic_img
        title="testing paart"
        subtitle="same as title testing phase"
        img1="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlfGVufDB8fDB8fHww"
        img1alt="house1image"
        img2="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvdXNlfGVufDB8fDB8fHww"
        img2alt="house2img"
        img3="https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGhvdXNlfGVufDB8fDB8fHww"
        img3alt="house3img"

      />


    </>
  )
}

export default About