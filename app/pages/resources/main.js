

import Image from 'next/image'
import Coffeeday from '../../images/coffeeday3.png'

import Coffee from '../../images/coffeeday.png'
import React from 'react'
import Quantum from '../../images/quantum.jpg'
import AI from '../../images/aii.jpg'
import Arrow from '../../images/rightArrow2.png'
import Cloud from '../../images/cloud.jpg'
import Security from '../../images/security.jpg'
import Logo from '../../images/codebugNew4.png'
import Calender from '../../images/calender.png'

const MainPage = ({handleBlog1Click, handleNewsClick, handleBlog2Click, handleBlog3Click, handleBlog4Click, handleBlogClick}) => {
    return (
        <div className='flex flex-col items-center justify-center w-screen py-[25px]'>
            <div className=" shadow-lg bg-[url('/resourcesback2.png')] bg-cover bg-center  h-[40vh] overflow-hidden flex justify-end rounded-[10px]  py-[20px] ring-1 ring-black  flex flex-col w-full max-w-[85vw] mb-7 leading-[43px] ">
                
                <div className='px-[20px] leading-[50px]'>
 
                </div>
                
            </div>
            <p className='max-w-[80vw] text-gray-100 w-full mb-4'>Stay updated with the latest in technology, software development, and industry trends. Explore our blogs for expert insights, tutorials, and best practices, and check out our news section for company updates and tech innovations. Keep learning with Codebug!</p>
            <div className="w-[85vw] ">
                            <div className='flex flex-row items-center justify-between'>
                                                <div>
                                                    
                                                    <p className="reveal41 text-6xl">Blogs</p>
                                                </div>
                            
                                                
                                                <div onClick={handleBlogClick} className="hidden sm:flex reveal4 bg-[#D98032] flex flex-row items-center justify-center ring-[#BF532C] ring-1 text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1.5 cursor-pointer hover:bg-[#D98032] group">
                                                    <p className="text-[17px]">
                                                        View All Blogs
                                                    </p>
                                                    <Image src={Arrow} height={25} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                                                </div>
                                            </div>
                            <div>
                                
                            </div>
                            <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-[100%] mt-9 mb-4">
                                                <div className="reveal42 px-3 text-black w-full bg-gray-100 rounded-[6px] ring-2 ring-white leading-[17px] max-h-[60vh] w-full max-w-[285px] flex flex-col items-center justify-center">
                                                    <div className="flex flex-row items-center justify-center bg-red-500 rounded-[8px] overflow-hidden h-[350px] w-[109.5%]">
                                                        <Image src={Quantum} alt="Quantum" className=" h-[100%] w-[100%]" />
                                                    </div>
                                                    <div className="flex flex-col  py-3 w-[100%] h-[80%]">
                                                        <div className="text-[11px] ring-[1px] ring-blue-800 w-fit text-blue-900 bg-blue-200 px-2 py-[1.5px] mb-1.5 rounded-[3px]">
                                                            <p>Software Engineering</p>
                                                        </div>
                                                        <p className="text-[16px] leading-[18px] text-gray-900">The Future of Software Development: Trends to Watch in 2025</p>
                                                        <p className="text-[11px] leading-[13px] text-gray-600 mt-1">Discover the key trends like AI, low-code, Web3 and more shaping software development in 2025. Stay 
                                                            ahead with insights into the industry&apos;s future.
                                                        </p>
                                                        
                                                        <div onClick={handleBlog1Click} className="mt-2 bg-[#F1A230] flex flex-row items-center justify-center ring-[#BF532C] ring-[0.5px] text-xl text-black rounded-[5px] px-4 2xl:py-2 ring-[#8C2020] py-[3px] cursor-pointer  group  ">
                                                            <p className="text-sm">Read Article</p>
                                                            <Image alt="arrow" src={Arrow} height={15}  className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="reveal43 px-3 text-black w-full bg-gray-100 rounded-[6px] ring-2 ring-white leading-[17px] max-h-[60vh] w-full max-w-[285px] flex flex-col items-center justify-center">
                                                    <div className="flex flex-row items-center justify-center bg-red-500 rounded-[8px] overflow-hidden h-[350px] w-[109.5%]">
                                                        <Image src={AI} alt="Quantum" className=" h-[100%] w-[100%]" />
                                                    </div>
                                                    <div className="flex flex-col  py-3 w-[100%] h-[80%]">
                                                        <div className="flex flex-row space-x-2">
                                                            <div className="text-[11px] ring-[1px] ring-blue-800 w-fit text-blue-900 bg-blue-200 px-2 py-[1.5px] mb-1.5 rounded-[3px]">
                                                                <p>Software Engineering</p>
                                                            </div>
                                                            <div className="text-[11px] ring-[1px] ring-orange-800 w-fit text-orange-900 bg-orange-200 px-2 py-[1.5px] mb-1.5 rounded-[3px]">
                                                                <p>Artificial Intelligence</p>
                                                            </div>
                                                        </div>
                                                        <p className="text-[16px] leading-[18px] text-gray-900">The Role of Artificial Intelligence in Software Development</p>
                                                        <p className="text-[11px] leading-[13px] text-gray-600 mt-1">
                                                            AI-driven development, low-code platforms, blockchain, and quantum computing are reshaping software. As businesses staying ahead of these trends is crucial for innovation and growth. 
                                                        </p>
                                                        <div onClick={handleBlog2Click} className="mt-2 bg-[#F1A230] flex flex-row items-center justify-center ring-[#BF532C] ring-[0.5px] text-xl text-black rounded-[5px] px-4 2xl:py-2 ring-[#8C2020] py-[3px] cursor-pointer  group  ">
                                                            <p className="text-sm">Read Article</p>
                                                            <Image alt="arrow" src={Arrow} height={15}  className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="reveal44 px-3 text-black w-full bg-gray-100 rounded-[6px] ring-2 ring-white leading-[17px] max-h-[60vh] w-full max-w-[285px] flex flex-col items-center justify-center">
                                                    <div className="flex flex-row items-center justify-center  rounded-[8px] overflow-hidden h-[350px] w-[109.5%]">
                                                        <Image  src={Cloud} alt="Cloud" className=" h-[100%] w-[100%]" />
                                                    </div>
                                                    <div className="flex flex-col  py-3 w-[100%] h-[80%]">
                                                        <div className="text-[11px] ring-[1px] ring-green-800 w-fit text-green-900 bg-green-200 px-2 py-[1.5px] mb-1.5 rounded-[3px]">
                                                            <p>Cloud Computing</p>
                                                        </div>
                                                        <p className="text-[16px] leading-[18px] text-gray-900">How Cloud Computing is Shaping the Future of Software</p>
                                                        <p className="text-[11px] leading-[13px] text-gray-600 mt-1">
                                                            Cloud computing is transforming software with scalability, flexibility, and AI integration. From serverless computing to hybrid solutions, it’s driving innovation and efficiency.
                                                        </p>
                                                        <div onClick={handleBlog3Click} className="mt-2 bg-[#F1A230] flex flex-row items-center justify-center ring-[#BF532C] ring-[0.5px] text-xl text-black rounded-[5px] px-4 2xl:py-2 ring-[#8C2020] py-[3px] cursor-pointer  group  ">
                                                            <p className="text-sm">Read Article</p>
                                                            <Image alt="arrow" src={Arrow} height={15}  className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="reveal45 px-3 text-black w-full bg-gray-100 rounded-[6px] ring-2 ring-white leading-[17px] max-h-[60vh] w-full max-w-[285px] flex flex-col items-center justify-center">
                                                    <div className="flex flex-row items-center justify-center bg-red-500 rounded-[8px] overflow-hidden h-[350px] w-[109.5%]">
                                                        <Image src={Security} alt="Security" className=" h-[100%] w-[100%]" />
                                                    </div>
                                                    <div className="flex flex-col  py-3 w-[100%] h-[80%]">
                                                        <div className="text-[11px] ring-[1px] ring-blue-800 w-fit text-blue-900 bg-blue-200 px-2 py-[1.5px] mb-1.5 rounded-[3px]">
                                                            <p>Software Engineering</p>
                                                        </div>
                                                        <p className="text-[16px] leading-[18px] text-gray-900">Why Security Should Be a Top Priority in Software Development</p>
                                                        <p className="text-[11px] leading-[13px] text-gray-600 mt-1">
                                                        Security is essential to protect data, prevent breaches, and build trust. Prioritizing secure coding and encryption from the start ensures a safe and reliable product. 
                                                        </p>
                                                        <div onClick={handleBlog4Click} className="mt-2 bg-[#F1A230] flex flex-row items-center justify-center ring-[#BF532C] ring-[0.5px] text-xl text-black rounded-[5px] px-4 2xl:py-2 ring-[#8C2020] py-[3px] cursor-pointer  group  ">
                                                            <p className="text-sm">Read Article</p>
                                                            <Image  alt="arrow" src={Arrow} height={15}  className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                            
                        </div>
                        <div onClick={handleBlogClick} className=" sm:hidden mt-[20px] reveal4 bg-[#D98032] flex flex-row items-center justify-center ring-[#BF532C] ring-1 text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1.5 cursor-pointer hover:bg-[#D98032] group">
                                                    <p className="text-[17px]">
                                                        View All Blogs
                                                    </p>
                                                    <Image src={Arrow} height={25} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                                                </div>
            <div className="w-[85vw] mb-[50px] mt-[100px]">
                            <div className='flex flex-row items-center justify-between'>
                                                <div>
                                                    
                                                    <p className="reveal41 text-5xl sm:text-6xl">News & Updates</p>
                                                </div>
                            
                                                
                                                
                                            </div>
                            
                            <div className="grid place-items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-7 w-[85vw] mt-9 mb-4">
                                <div className='flex  text-black flex-col sm:flex-row items-center px-[0.3%] justify-center  rounded-[6px] ring-white leading-[17px] h-[100%] sm:h-[60vh] w-[100%] max-w-[580px]'>
                                    <div className="flex sm:hidden ring-[0.5px] ring-white shadow-lg w-[100%] bg-[url('/techbackground.png')] bg-cover flex items-center px-5 justify-center h-[96%] ring-black z-[0] rounded-t-[10px]">
                                        <Image src={Logo} alt="Logo" className=" py-[20px] w-[50%]" />
                                    </div>
                                    <div className='shadow-lg w-[100%] sm:w-[60%] p-[25px] bg-white ring-1 z-[1] ring-black rounded-b-[10px] sm:rounded-[10px]  h-[100%]'>
                                        <div className='flex mb-[2px] flex-row items-center space-x-1'>
                                            <Image src={Calender} alt="Calender" className=" w-[17px]" />
                                            <p className='text-[14px] text-[#902121]'>February 09, 2025</p>
                                        </div>
                                        <p className='text-[25px] leading-[30px]'>Codebug Launched: Revolutionizing Software Development</p>
                                        <p className='text-[13px] text-gray-600 mt-3'>We are thrilled to announce the official launch of Codebug! Our company is committed to providing cutting-edge software development solutions that cater to the needs of businesses across industries. With a focus on innovation, quality, and customer satisfaction, Codebug offers bespoke solutions ranging from web development to cloud computing, and everything in between.
                                        Stay tuned for exciting updates as we continue to grow and serve our clients with exceptional products and services.</p>
                                        <div className='mt-1'>
                                            <p onClick={handleNewsClick} className=' hover:underline text-[15px] text-[#135674] mr-2 cursor-pointer text-right'>Read more</p>
                                        </div>
                                    </div>
                                    <div className="hidden sm:flex ring-[0.5px] ring-white shadow-lg w-[40%] h-[100%] bg-[url('/techbackground.png')] bg-cover flex items-center px-5 justify-center h-[96%] ring-black z-[0] rounded-r-[10px]">
                                        <Image src={Logo} alt="Logo" className=" w-[100%]" />
                                    </div>
                                </div>  
                                
                            </div>

                            
                        </div>
        </div>
    )
}

export default MainPage