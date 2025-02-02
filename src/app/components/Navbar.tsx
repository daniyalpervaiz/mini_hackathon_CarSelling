import Image from "next/image"
export default function Navbar() {
    return (<header className="bg-black w-full flex justify-center">
        <div className=" w-full flex flex-col ">
            <div className="flex bg-black text-white h-6 items-center text-xs">

                <div className=" flex w-[20%] items-center">
                    <img src="./mob-icon.jpg" alt="mobile-icon" width={40} height={5} />
                    <div>DownloadAppviaSMS</div>

                </div>
                <div className="flex justify-end gap-0 md:gap-3 w-full mr-0 md:mr-10">
                    <div>Urdu</div>
                    <div>|</div>
                    <div>Sign Up</div>
                    <div>|</div>
                    <div>Sign In</div>



                </div>

            </div>

            <nav className="flex bg-black w-full h-20">


                <div className=" mt-6 md:mt-1 w-[20%]  md:ml-4"><img src="./pw-logo.png" alt="" width={150} height={50} className="w-[50px] md:w-[200px]" />
                </div>


                <div className="flex text-white items-center justify-around w-full">
                   <ul className="flex md:space-x-10 lg:space-x-28 lg:text-[18px] md:text-[10px] space-x-2 text-[6px]">
                    <li>UsedCars</li>
                    <li>NewCars</li>
                    <li>Bikes</li>
                    <li>AutoStore</li>
                    <li>Videos</li>
                    <li>Forum</li>
                    <li>Blog</li>
                    <li>More</li><br />
                    <button className="bg-red-900 md:p-2 p-1 rounded-2xl font-bold md:px-5 px-1 md:text-[10px] lg:text-[18px] text-[7px]">Post An Ad</button>
                    </ul> 
                </div>

            </nav></div>
    </header>)
}
