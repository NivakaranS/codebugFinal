import React from "react";
import Image from "next/image";
import Arrow from '../images/rightArrow2.png'

const Contact = () => {
    return(
        <div className="min-h-[120vh] pb-[40px]  bg-yellow-700 flex items-center justify-center">
        
            <div className="lg:w-4/5  w-[100%] h-[100%] flex md:flex-col flex-col  lg:flex-row  px-10  ">
                <div className="lg:w-[40%] max-w-[1400px] w-[100%] py-10 flex flex-col items-center">
                    <div className="sm:w-[100%] w-[90%]">
                    <p className=" text-2xl sm:text-3xl text-white">Contact Us</p>
                    <p className=" text-4xl sm:text-5xl text-white w-[90%]">Let&apos;s Talk About <span className="text-yellow-400">Your Next Project</span></p>
                    <p className=" text-[16px] sm:text-lg text-yellow-200 mt-4 w-[90%]">
                        We&apos;d love to hear from you! Whether it&apos;s a project 
                        inquiry, feedback, or just a friendly hello, don&apos;t hesitate 
                        to reach out: Let&apos;s create something amazing together!
                    </p>
                    </div>
                </div>
                <div className="lg:w-[60%] w-[100%] md:mb-[0px] mb- flex flex-col space-y-3  items-center">
                    <div className="flex flex-col sm:w-[100%] w-[90%]  space-y-3 sm:space-y-0 sm:flex-row sm:space-x-3">
                        <div>
                            <div className="flex flex-row items-center mx-[25px] sm:mx-[0px] w-[100%]">
                                    <p className=" text-[15px] sm:text-[17px] text-yellow-200 mb-1">Your Name*</p>
                            </div>
                            <div className="flex flex-row items-center justify-center w-[100%]">
                                    <input type="text" className="w-[90%] sm:w-[300px] w-[100%] bg-gray-100 px-3.5 py-2.5 text-black outline-2 ring-1 ring-color-black ring-gray-700 focus:outline-none rounded-md focus:ring-black duration-500 hover:ring-orange-300"/>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-row items-center mx-[25px] sm:mx-[0px] w-[100%]">
                                    <p className=" text-[15px] sm:text-[17px] text-yellow-200 mb-1">Email*</p>
                            </div>
                            <div className="flex flex-row items-center justify-center w-[100%]">
                                    <input type="text" className="w-[90%] sm:w-[300px] w-[100%] bg-gray-100 px-3.5 py-2.5 text-black outline-2 ring-1 ring-color-black ring-gray-700 focus:outline-none rounded-md focus:ring-black duration-500 hover:ring-orange-300"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:w-[100%] w-[90%] space-y-3 sm:space-y-0 sm:flex-row sm:space-x-3">
                            <div>
                            <div className="flex flex-row items-center mx-[25px] sm:mx-[0px] w-[100%]">
                                    <p className=" text-[15px] sm:text-[17px] text-yellow-200 mb-1">Phone*</p>
                            </div>
                            <div className="flex flex-row items-center justify-center w-[100%]">
                                    <input type="text" className="w-[90%] sm:w-[300px] w-[100%] bg-gray-100 px-3.5 py-2.5 text-black outline-2 ring-1 ring-color-black ring-gray-700 focus:outline-none rounded-md focus:ring-black duration-500 hover:ring-orange-300"/>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-row items-center mx-[25px] sm:mx-[0px] w-[100%]">
                                    <p className=" text-[15px] sm:text-[17px] text-yellow-200 mb-1">Project type</p>
                            </div>
                            <div className="flex flex-row items-center justify-center w-[100%]">
                                    <input type="text" className="w-[90%] sm:w-[300px] w-[100%] bg-gray-100 px-3.5 py-2.5 text-black outline-2 ring-1 ring-color-black ring-gray-700 focus:outline-none rounded-md focus:ring-black duration-500 hover:ring-orange-300"/>
                            </div>
                        </div>
                        
                            
                        
                    </div>
                    <div className="flex flex-col sm:w-[100%]  w-[90%]  ml-[9%] sm:ml-[0%]  space-y-3 sm:space-y-0 sm:flex-row sm:space-x-3">
                            <div className="sm:w-[100%] w-[80%]  ">
                            <p className="text-[15px] sm:text-[17px] text-yellow-200 mb-1">Your Message*</p>
                            <textarea type="text" className="  sm:w-[610px]  w-[113%] resize-none h-[200px] bg-gray-200 px-3.5 py-2.5 text-black outline-2 ring-1 ring-color-black ring-gray-700 focus:outline-none rounded-md focus:ring-black duration-500 hover:ring-orange-300"/>
                    </div>
                        

                    </div>
                    
                    

                    <div  className="reveal4 bg-[#D98032] flex flex-row items-center justify-center ring-[#BF532C] ring-1 text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020]  py-1 sm:py-1.5 cursor-pointer hover:bg-[#D98032] group">
                                        <p className="2xl:text-[23px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[17px]">
                                            Submit
                                          </p>
                                          <Image src={Arrow} alt="arrow" className="ml-2 h-[20px] sm:h-[25px] w-fit transition-transform duration-300 group-hover:translate-x-2"/>
                                        </div>
        
                </div>
            </div>
        </div>
    )
}

export default Contact