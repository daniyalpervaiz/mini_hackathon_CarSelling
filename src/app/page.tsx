import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (<div>

    <div className="w-full flex justify-center ">
      <fieldset className="text-center border-2 border-gray-300 h-80 w-[70%]">

        <legend > <h2 className=" text-center text-gray-600 text-3xl ">Sell Your Car on PakWheels and Get the Best Price</h2></legend>
        <div className="flex justify-center gap-44 mt-10 leading-9 ">

          <div className="text-start"><h1 className="font-bold text-blue-800">Post your Ad on PakWheels</h1>
            <p>Post your Ad for Free in 3 Easy Steps</p>
            <p>Get Genuine offers from Verified Buyers</p>
            <p>Sell your car Fast at the Best Price</p>
            <button className="bg-red-700 text-white px-9 py-2 rounded-xl mt-5 ">Post Your Ad</button>
          </div>

          <div className="text-gray-700 text-3xl mt-14">OR</div>

          <div className="text-start"><h1 className="font-bold text-blue-800">Try PakWheels Sell It For Me</h1>
            <p>Dedicated Sales Expert to Sell your Car</p>
            <p>We Bargain for you and share the Best Offer</p>
            <p>We ensure Safe & Secure Transaction</p>
            <button className="bg-blue-500 text-white px-6 py-2  rounded-xl mt-5">Register Your Car </button>
          </div>
        </div>
      </fieldset></div><br />

    <div className="bg-gray-200">
      <div className="bg-gray-200 w-full flex justify-center">

        <div className="flex w-[70%] mt-6">

          < div className=" text-gray-700 font-bold w-[30%] ">Features New Cars</div>
          <div className="text-blue-600 text-xs w-full text-end ">View All New Cars</div>


        </div>


      </div>


      <div className="flex bg-gray-200 w-full justify-center mb-2">
        <div className="flex w-[70%] gap-10 mt-5">
          <div className="text-gray-700">Popular</div>
          <div className="text-gray-700">Upcoming</div>
          <div className="text-gray-700">Newly Launched</div>
        </div>
      </div>
      <div className="border-b-2 border-b-gray-300 mb-6 flex w-[70%] ml-60"></div>


      <div className="flex bg-gray-200 w-full justify-center h-72">

        <div className="flex gap-10 w-[70%]">
          <Link href="./toyota-corolla"> <div className="bg-white h-60 w-64"><img src="./toyota.jpg" alt="carpic" height={60} width={300} /> <h2 className="text-blue-900 font-bold text-center text-sm">Toyota Corolla</h2><p className="text-green-500 text-xs text-center">PKR 59.7 - 75.5 lacs</p></div></Link>
          <Link href="./suzuki-alto"><div className="bg-white h-60 w-64" ><img src="./alto.png" alt="carpic" height={60} width={300} /> <h2 className="text-blue-900 font-bold text-center text-sm">Suzuki Alto</h2><p className="text-green-500 text-xs text-center">PKR 23.3 - 30.5 lacs</p></div></Link>
          <Link href="./honda-city"> <div className="bg-white h-60 w-64"><img src="./honda.jpg" alt="carpic" height={60} width={300} /> <h2 className="text-blue-900 font-bold text-center text-sm">Honda City</h2><p className="text-green-500 text-xs text-center">PKR 46.5 - 58.5 lacs</p></div></Link>
          <Link href="honda-civic"> <div className="bg-white h-60 w-64"><img src="./civic.jpg" alt="carpic" height={60} width={300} /> <h2 className="text-blue-900 font-bold text-center text-sm">Honda Civic</h2><p className="text-green-500 text-xs text-center">PKR 86.6 - 99.0 lacs</p></div></Link>

        </div>
      </div>
    </div>
  </div>
  )
}
