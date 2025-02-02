import Link from 'next/link'
import React from 'react'

const Featuredcar = () => {
    return (
        <div className='lg:mb-60'>
            <div className="bg-gray-200 md:w-full">
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
                <div className="border-b-2 border-b-gray-300 mb-6 flex w-[70%] mx-auto "></div>


                <div className="flex bg-gray-200 w-full justify-center h-full">

                    <div className="flex flex-col md:flex-row gap-10 md:w-[70%] md:mx-auto">
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

export default Featuredcar
