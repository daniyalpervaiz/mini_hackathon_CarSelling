import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className="w-full flex justify-center ">
      <fieldset className="text-center border-2 border-gray-300 h-[450px] md:h-[450px] md:w-[80%] w-full  ">

        <legend > <h2 className="text-center text-gray-600 md:text-2xl text-[12px] ">Sell Your Car on PakWheels and Get the Best Price</h2></legend>
        <div className="flex justify-center md:gap-12 lg:gap-28 gap-8 mt-10 md:leading-7 lg:leading-9 leading-6 p-2">

          <div className="text-start"><h1 className="font-bold text-blue-800">Post your Ad on PakWheels</h1>
            <p className='text-[14px] lg:text-[20px] 2xl:text-[24px] '>Post your Ad for Free in 3 Easy Steps</p>
            <p className='text-[14px] lg:text-[20px] 2xl:text-[24px]  '>Get Genuine offers from Verified Buyers</p>
            <p className='text-[14px] lg:text-[20px] 2xl:text-[24px] '>Sell your car Fast at the Best Price</p>
            <button className="bg-red-700 text-white md:px-9 px-4 md:py-2 py-1 rounded-xl mt-5 ">Post Your Ad</button>
          </div>

          <div className="text-gray-700 md:text-3xl text-[20px] mt-14">OR</div>

          <div className="text-start"><h1 className="font-bold text-blue-800">Try PakWheels Sell It For Me</h1>
            <p className='text-[14px] lg:text-[20px] 2xl:text-[24px] '>Dedicated Sales Expert to Sell your Car</p>
            <p className='text-[14px] lg:text-[20px] 2xl:text-[24px] '>We Bargain for you and share the Best Offer</p>
            <p className='text-[14px] lg:text-[20px] 2xl:text-[24px] '>We ensure Safe & Secure Transaction</p>
            <button className="bg-blue-500 text-white px-3 md:px-6 md:py-2 py-1  rounded-xl mt-5 md:mt-12 lg:mt-4">Register Your Car </button>
          </div>
        </div>
      </fieldset></div><br />
      
    </div>
  )
}

export default Hero
