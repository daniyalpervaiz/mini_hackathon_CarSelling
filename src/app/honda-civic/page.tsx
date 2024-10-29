import Link from "next/link"
export default function HondaCivic() {
    return (<div>
        <div className="w-full bg-blue-200 h-[80vh] flex justify-center">

            <div className="w-[60%] ">
                <h1 className="text-black font-bold text-4xl text-center mb-4 underline">Honda Civic 2024 price in Pakistan,images,Reviews & Specs</h1>
                <div className="flex  items-center flex-col ">
                    <div className="w-56 h-40  ">
                        <img src="./hondacivicdetail.jpg" alt="" /></div>

                    <div className="flex gap-3">
                        <button className="bg-white border-2 w-36 h-12 rounded-2xl text-xs border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white">Book a test drive</button>
                        <button className="bg-white border-2 w-36 h-12 rounded-2xl text-xs  border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white">Request Bank Finance</button>
                        <button className="bg-white border-2 w-36 h-12 rounded-2xl text-xs  border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white">Visit Place</button>
                        <button className="bg-white border-2 w-36 h-12 rounded-2xl text-xs  border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white">Car Inpection</button></div>


                    <div className="mt-4"><h2>Vehicle Description</h2></div><br />


                    <div className="flex gap-10  text-xs ">

                        <div><b>Numbers of Doors </b>4</div>
                        <div><b>Engine</b> 1800cc</div>
                        <div><b>Condition</b> 9.5/10 </div>
                        <div><b>Driven</b> 9000 KM </div>
                        <div><b>Suspension</b> Soft Suspension</div></div>


                    <div className="flex gap-20 leading-10 text-xs">
                        <div><b>Avg</b> 15 Km ltr</div>
                        <div><b>Transmission</b> Automatic </div>
                        <div><b>Fuel Type</b> High Octane</div></div><br /><br />

                    <h1 className="text-green-500 text-3xl">PKR 80,00,000</h1><br /><br />


                    <Link href="./checkout-form">   <div>
                        <button className="w-32 h-10 rounded-xl bg-blue-900 text-xs text-white">Make Payment</button>

                    </div></Link>


                </div>

            </div>

        </div>

    </div>
    )
}