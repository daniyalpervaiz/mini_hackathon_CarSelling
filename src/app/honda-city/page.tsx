import Link from "next/link"
export default function HondaCity() {
    return (<div>
        <div className="w-full bg-blue-200 h-full 2xl:h-[80vh] flex justify-center">

            <div className="md:w-[60%] w-full ">
                <h1 className="text-black font-bold text-[18px] md:text-4xl text-center mb-4 underline">Honda City 2024 price in Pakistan,images,Reviews & Specs</h1>
                <div className="flex  items-center flex-col ">
                    <div className="w-56 h-40  ">
                        <img src="./hondacitydetail.avif" alt="" /></div>

                    <div className="flex gap-3">
                        <button className="bg-white border-2 w-[70px] md:w-36 h-12 rounded-2xl lg:text-[14px] text-[9px] md:text-xs border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white">Book a test drive</button>
                        <button className="bg-white border-2 w-[70px] md:w-36 h-12 rounded-2xl lg:text-[14px] text-[9px] md:text-xs  border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white">Request Bank Finance</button>
                        <button className="bg-white border-2 w-[70px] md:w-36 h-12 rounded-2xl lg:text-[14px] text-[9px] md:text-xs  border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white">Visit Place</button>
                        <button className="bg-white border-2 w-[70px] md:w-36 h-12 rounded-2xl lg:text-[14px] text-[9px] md:text-xs  border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white">Car Inpection</button></div>


                    <div className="mt-4"><h2>Vehicle Description</h2></div><br />


                    <div className="flex flex-col md:flex-row md:gap-10 text-xs ">

                        <div><b>Numbers of Doors </b>4</div>
                        <div><b>Engine</b> 1800cc</div>
                        <div><b>Condition</b> 7.5/10 </div>
                        <div><b>Driven</b> 8000 KM </div>
                        <div><b>Suspension</b> Soft Suspension</div></div>


                    <div className="flex flex-col md:flex-row md:gap-20 gap-0 md:leading-10 text-xs">
                        <div><b>Avg</b> 12 Km ltr</div>
                        <div><b>Transmission</b> Automatic </div>
                        <div><b>Fuel Type</b> High Octane</div></div><br /><br />

                    <h1 className="text-green-500 text-3xl">PKR 45,00,000</h1><br /><br />


                    <Link href="./checkout-form">    <div>
                        <button className="w-32 h-10 rounded-xl bg-blue-900 text-xs text-white">Make Payment</button>

                    </div></Link>







                </div>


            </div>

        </div>

    </div>
    )
}