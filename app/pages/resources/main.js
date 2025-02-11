

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

import dynamic from 'next/dynamic'
const Blogs = dynamic(() => import("../../components/Blogs"), { ssr: false });

const MainPage = ({handleBlog1Click, handleNewsClick, handleBlog2Click, handleBlog3Click, handleBlog4Click, handleBlogClick}) => {
    return (
        <div className='flex flex-col items-center justify-center w-screen py-[25px]'>
            <div className=" shadow-lg bg-[url('/resourcesback2.png')] bg-cover bg-center  h-[40vh] overflow-hidden flex justify-end rounded-[10px]  py-[20px] ring-1 ring-black  flex flex-col w-full max-w-[85vw] mb-7 leading-[43px] ">
                
                <div className='px-[20px] leading-[50px]'>
 
                </div>
                
            </div>
            <p className='max-w-[80vw] text-gray-100 w-full mb-4'>Stay updated with the latest in technology, software development, and industry trends. Explore our blogs for expert insights, tutorials, and best practices, and check out our news section for company updates and tech innovations. Keep learning with Codebug!</p>
            
                                                                            
                                                                        
                            
                        
            <Blogs/>       
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