import Link from "next/link"
export default function CheckOutForm() {
    return (<div className="bg-blue-100 w-full h-[80vh]">
        <div >
            <h1 className="text-center font-bold pt-5 text-3xl">Enter Your Details</h1></div>
        <div className="flex justify-center">
            <div className="border-2 border-gray-300 w-[70%] h-[60vh]">

                <form className="flex flex-col gap-5 items-center mt-28" >
                    <input type="text" placeholder="Enter Your Name" className="w-72 px-4 py-2 rounded-lg text-sm" />
                    <input type="email" placeholder="Enter Your Email" className="w-72 px-4 py-2 rounded-lg text-sm" />
                    <input type="number" placeholder="Enter Your Card Number" className="w-72 px-4 py-2 rounded-lg text-sm" />
                    <input type="text" placeholder="Enter Your Address" className="w-72 px-4 py-2 rounded-lg text-sm" />

                    <Link href="./thank-you"><button className="bg-blue-800 text-white text-sm p-5 rounded-lg mt-10">Place Your Order</button></Link>

                </form>





            </div>









        </div>




    </div>





    )
}