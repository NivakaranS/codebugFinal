
import React from "react"
import Image from "next/image"
import Logo from "../images/codebugfinal7.png"
import Instagram from '../images/instagram.png'
import LinkedIn from '../images/linkedin.png'
import Phone from '../images/phone.png'
import Mail from '../images/mail3.png'
import { useRouter } from "next/navigation";

const Footer = () => {
    const router = useRouter()

    const handlePrivacyClick = () => {
        //router.push('../privacy')
      }

      const handleTermsClick = () => {
        //router.push('../terms&conditions')
      }
      
    return(
        <div>
            <footer className="bg-white text-black  flex flex-col w-[100vw]">
                
                <div className="sm:hidden lg:hidden xl:flex md:hidden lg:flex-row md:flex-row flex-col items-center justify-center text-[15px] lg:space-x-[90px] space-y-[10px]  md:space-x-[90px] py-9 ">
                    <div className="flex flex-col justify-center items-center md:w-[300px] w-[100vw] text-[13px] ">
                        <div>
                        <Image alt="arrow" src={Logo} height={60}/>
                        <p className="leading-[18px] mt-3 mb-2 md:w-[300px] w-[90vw]">Codebug is a dynamic and innovative software development company specializing in delivering high-quality, scalable, and user-centric digital 
                            solutions. Established to bridge the gap between cutting-edge technology and business needs, Codebug serves as a trusted partner 
                            for businesses of all sizes, from startups to enterprises.
                        </p>
                        <div className="flex flex-row space-x-1  items-center">
                            <Image alt="arrow" src={Mail} height={21} width={21} />
                            <p className="text-[15px] text-gray-700">info@codebug.lk</p>
                        </div>
                        <div className="flex flex-row mt-1 space-x-1 items-center">
                            <Image alt="arrow" src={Phone} height={20} />
                            <p className="text-[14px] text-gray-700">+94 75 790 2557</p>
                        </div>
                        </div>
                    </div>
                    <div className="flex    lg:flex-row md:flex-row flex-row  mx-8 md:w-fit w-[95vw]">
                        
                        <div className="flex flex-col   sm:mx-8 md:w-fit w-[100%] sm:w-[95vw]">
                            <div>
                                <p className="text-xl text-gray-600">Company</p>
                                <p className="cursor-pointer w-fit hover:text-gray-700">Home</p>
                                <p className="cursor-pointer w-fit hover:text-gray-700">About</p>
                                <p className="cursor-pointer w-fit hover:text-gray-700">Services</p>
                                <p className="cursor-pointer w-fit hover:text-gray-700">Portfolio</p>
                                <p className="cursor-pointer w-fit hover:text-gray-700">Resources</p>
                                <p className="cursor-pointer w-fit hover:text-gray-700">Careers</p>
                                <p className="cursor-pointer w-fit hover:text-gray-700">Contact</p>
                                
                                <p className="cursor-pointer w-fit hover:text-gray-700">Blogs</p>
                                <p className="cursor-pointer w-fit hover:text-gray-700">News</p>
                                <p className="cursor-pointer w-fit hover:text-gray-700">Login</p>
                                
                            </div>
                            
                        </div>
                        <div className="flex flex-col w-[100%] justify-center mx-8 ">
                            <div>
                            <p className="text-xl text-gray-600">Our Products</p>
                            <p className="cursor-pointer w-fit hover:text-gray-700">Project 01</p>
                            <p className="cursor-pointer w-fit hover:text-gray-700">Project 02</p>

                            <p className="text-xl text-gray-600 mt-6">Our Services</p>
                            <p className="cursor-pointer w-fit hover:text-gray-700 ">Artificial Intelligence</p>
                            <p className="cursor-pointer w-fit hover:text-gray-700">Web App Development</p>
                            <p className="cursor-pointer w-fit hover:text-gray-700">Mobile App Development</p>
                            <p className="cursor-pointer w-fit hover:text-gray-700">Custom </p>
                            <p className="cursor-pointer w-fit hover:text-gray-700">Cloud Solutions</p>
                            <p className="cursor-pointer w-fit hover:text-gray-700">UI/UX Design</p>
                            <p className="cursor-pointer w-fit hover:text-gray-700">Software Consultancy</p>
                            <p className="cursor-pointer w-fit hover:text-gray-700">Blockchain</p>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col justify-center mx-5">
                        <div className="bg-gray-300 py-5 px-5 rounded-[5px] w-[400px]">
                            <p className="mb-1.5 text-[15px]">Subscribe to Our Newsletter</p>
                            <div className="relative ">
                                <input className="outline-none bg-white ring-1 ring-black rounded-[6px] pl-3 pr-[110px] py-2 w-full " placeholder="Enter your email  address"/>
                                <div className="absolute top-1 right-[4px] hover:bg-[#D98032] ring-1 ring-black rounded-[5px] w-fit px-3 py-[4px] cursor-pointer bg-[#F1A230]  text-black">
                                    <p className="text-[15px]">Subscribe</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <p className="text-[16px] text-gray-800 mb-[3px]">Follow us</p>
                            <div className="flex flex-row space-x-2">
                                <Image alt="arrow" className="cursor-pointer" src={Instagram} height={35} />
                                <Image alt="arrow" className="cursor-pointer" src={LinkedIn} height={35}/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Half page */}
                <div className="hidden py-8 md:flex lg:flex sm:flex xl:hidden flex-col justify-center items-center">
                    <div className="flex md:flex-row flex-col justify-center items-center   ">
                        <div className="flex flex-col justify-center items-center md:w-[300px] w-[100vw] text-[13px] ">
                            <div>
                                <Image alt="arrow" src={Logo} height={60}/>
                                <p className="leading-[18px] mt-3 mb-2 md:w-[300px] sm:w-[600px] w-[90vw]">Codebug is a dynamic and innovative software development company specializing in delivering high-quality, scalable, and user-centric digital 
                                    solutions. Established to bridge the gap between cutting-edge technology and business needs, Codebug serves as a trusted partner 
                                    for businesses of all sizes, from startups to enterprises.
                                </p>
                                <div className="flex flex-row space-x-1  items-center">
                                    <Image alt="arrow" src={Mail} height={21} width={21} />
                                    <p className="text-[15px] text-gray-700">info@codebug.lk</p>
                                </div>
                                <div className="flex flex-row mt-1 space-x-1 items-center">
                                    <Image alt="arrow" src={Phone} height={20} />
                                    <p className="text-[14px] text-gray-700">+94 75 790 2557</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex my-[20px] flex-col my-3 space-x-7 md:space-x-4 justify-center px-8 md:w-[450px] w-[100vw] ">
                            <div className="bg-gray-300 py-5 px-5 rounded-[5px] w-[65%] md:w-[500px]">
                                <p className="mb-1.5 text-[15px]">Subscribe to Our Newsletter</p>
                                <div className="relative ">
                                    <input className="outline-none bg-white ring-1 ring-black rounded-[6px] pl-3 pr-[110px] py-2 w-full " placeholder="Enter your email  address"/>
                                    <div className="absolute top-[5px] right-[4px] hover:bg-yellow-500 ring-1 ring-black rounded-[5px] w-fit px-3 py-[4px] cursor-pointer bg-yellow-400  text-black">
                                        <p className="text-[15px]">Subscribe</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 w-[35%]">
                                <p className="text-[16px] text-gray-800 mb-[3px]">Follow us</p>
                                <div className="flex flex-row space-x-2">
                                    <Image alt="arrow" className="cursor-pointer" src={Instagram} height={35} />
                                    <Image alt="arrow" className="cursor-pointer" src={LinkedIn} height={35}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex  lg:flex-row md:flex-row flex-row   mx-8 md:w-fit w-[95vw]">
                        
                        <div className="flex flex-col  mx-8 md:w-fit w-[50%]">
                            <div>
                            <p className="text-xl text-gray-600">Company</p>
                            <p className="cursor-pointer w-fit hover:text-gray-700">About</p>
                            <p className="cursor-pointer w-fit hover:text-gray-700">Portfolio</p>
                            <p className="cursor-pointer w-fit hover:text-gray-700">Testimonials</p>
                            <p className="cursor-pointer w-fit hover:text-gray-700">Contact</p>
                            <p className="cursor-pointer w-fit hover:text-gray-700">Coming soon</p>
                            <p className="cursor-pointer w-fit hover:text-gray-700">Careers</p>
                            <p className="cursor-pointer w-fit hover:text-gray-700">Blogs</p>
                            <p className="cursor-pointer w-fit hover:text-gray-700">FAQ</p>
                            </div>
                            
                        </div>
                        <div className="flex flex-col justify-center mx-8 w-[50%] ">
                            <div>
                            <p className="text-xl text-gray-600">Our Products</p>
                            <p className="cursor-pointer w-fit hover:text-gray-700">Project 01</p>
                            <p className="cursor-pointer w-fit hover:text-gray-700">Project 02</p>

                            <p className="text-xl text-gray-600 mt-6">Our Services</p>
                            <p className="cursor-pointer w-fit hover:text-gray-700 ">Artificial Intelligence</p>
                            <p className="cursor-pointer w-fit hover:text-gray-700">Web Applications</p>
                            <p className="cursor-pointer w-fit hover:text-gray-700">Mobile Applications</p>
                            <p className="cursor-pointer w-fit hover:text-gray-700">Cloud Solutions</p>
                            <p className="cursor-pointer w-fit hover:text-gray-700">UI/UX Design</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex flex-row justify-center items-center">
                    <div className="h-[0.7px] bg-red-500 w-[93vw]">

                    </div>
                </div>
                <div className="flex flex-row text-[12px] mt-[2px] justify-center space-x-5">
                    <p onClick={handlePrivacyClick} className="cursor-pointer"> Privacy Policy</p>
                    <p onClick={handleTermsClick} className="cursor-pointer">Terms and Conditions</p>
                </div>
                <div className="flex flex-row justify-center pb-2 items-center space-x-2 ">
                    <Image alt="arrow" src={Logo} height={20} />
                    <p className="text-[13px]">&copy; 2025 Codebug. All Rights Reserved.</p>
                </div>
                
            </footer>
            
        </div>
    )
}

export default Footer