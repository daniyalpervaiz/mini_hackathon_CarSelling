import Image from "next/image"
export default function Navbar() {
    return (<header className="bg-black w-full flex justify-center">
        <div className=" w-[90%] flex flex-col ">
            <div className="flex bg-black text-white h-6 items-center text-xs">

                <div className=" flex w-[20%] items-center">
                    <img src="./mob-icon.jpg" alt="mobile-icon" width={40} height={5} />
                    <div>DownloadAppviaSMS</div>

                </div>
                <div className="flex justify-end gap-3 w-full mr-10">
                    <div>Urdu</div>
                    <div>|</div>
                    <div>Sign Up</div>
                    <div>|</div>
                    <div>Sign In</div>



                </div>

            </div>

            <nav className="flex bg-black w-full h-20">


                <div className="items-center mt-4 w-[20%] ml-10"><img src="./pw-logo.png" alt="" width={150} height={50} />
                </div>


                <div className="flex text-white items-center justify-around w-full">
                    <div>UsedCars</div>
                    <div>NewCars</div>
                    <div>Bikes</div>
                    <div>AutoStore</div>
                    <div>Videos</div>
                    <div>Forum</div>
                    <div>Blog</div>
                    <div>More</div>
                    <button className="bg-red-900 p-3 rounded-2xl font-bold px-6">Post An Ad</button>
                </div>

            </nav></div>
    </header>)
}
