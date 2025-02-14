
'use client'
import Image from 'next/image'
import Coffeeday from '../../images/coffeeday3.png'

import Coffee from '../../images/coffeeday.png'
import React, {useState, useEffect} from 'react'
import Quantum from '../../images/quantum.jpg'
import AI from '../../images/aii.jpg'
import Arrow from '../../images/rightArrow2.png'
import Cloud from '../../images/cloud.jpg'
import Security from '../../images/security.jpg'
import Logo from '../../images/codebugNew4.png'
import Calender from '../../images/calender.png'
import {Link, Element} from 'react-scroll'
import Loading from '../../components/Loading'

import dynamic from 'next/dynamic'

const Blogs = dynamic(() => import("../../components/Blogs"), { ssr: false });

const MainPage = ({handleBlog1Click, handleTalkClick, handleNewsClick, handleBlog2Click, handleBlog3Click, handleBlog4Click, handleBlogClick}) => {

    
    return (
        <div>
            
        
        <div className='flex flex-col items-center justify-center w-screen pb-[25px]'>
            <div className="  bg-[url('/techbackground.png')] bg-cover bg-center flex items-center justify-center relative top-[-64px] h-[100vh] w-[100vw] ">
                <div className='px-[20px] flex flex-col items-center mt-[50px] max-w-[1400px] w-full h-[100%] max-w-[1400px] justify-center'>
                    <div className=' leading-[50px] text-center 2xl:'>
                        <p className=' text-[40px] sm:text-[48px] text-[#41CAD9]' >Resources & Insights</p>
                        <p className=' text-[20px] leading-[25px]  sm:leading-[36px] lg:leading-[50px] sm:text-[35px]'>Expert knowledge to keep you ahead</p>
                    </div>
                    <p className=' w-[70vw] 2xl:w-[1400px] mb-5 max-w-[1000px] text-center text-[18px] text-[#F1A230] w-full'>Stay updated with the latest in technology, software development, and industry trends. Explore expert articles and updates designed to help you innovate, grow, and stay competitive in a rapidly evolving digital world. </p>
                    <div className="flex flex-row justify-center space-x-5 mt-2">
                        <Link to="contact" offset={15} smooth={true} duration={500} onClick={handleTalkClick} className=" reveal4 bg-white text-xl text-black ring-1 ring-black rounded-[5px] px-5 2xl:py-2  py-1.5 cursor-pointer hover:ring-white hover:bg-black hover:text-white">
                            <p className=" 2xl:text-[23px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[17px]">Contact</p>
                        </Link>
                        <Link to="blogs" offset={-60} smooth={true} duration={500} className="reveal4 bg-[#D98032] flex flex-row items-center justify-center ring-[#BF532C] ring-1 text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020]  py-1 sm:py-1.5 cursor-pointer hover:bg-[#D98032] group">
                            <p className="2xl:text-[23px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[17px]">
                                Explore Blogs
                            </p>
                            <Image alt="arrow" src={Arrow}  className="ml-2 h-[20px] sm:h-[25px] w-fit transition-transform duration-300 group-hover:translate-x-2"/>
                        </Link>
                    </div>
                </div>
               
                
            </div>
            
            <Element name="blogs">
                <Blogs/>        
            </Element>
            <div className="w-[85vw] mb-[50px] mt-[100px]">
                            <div className='flex flex-row items-center justify-between'>
                                                <div>
                                                    
                                                    <p className=" text-5xl sm:text-6xl">News & Updates</p>
                                                </div>
                            
                                                
                                                
                                            </div>
                            
                            <div className="grid place-items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-7 w-[85vw] mt-9 mb-4">
                                <div className='flex  text-black flex-col sm:flex-row items-center px-[0.3%] justify-center  rounded-[6px] ring-white leading-[17px] h-[100%] 2xl:max-h-[380px] sm:h-[60vh] w-[100%] max-w-[580px]'>
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
        </div>
    )
}

export default MainPage