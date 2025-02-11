

import Image from 'next/image'

import React from 'react'

import Coffeeday from '../../images/coffeeday3.png'

import Coffee from '../../images/coffeeday.png'

import Quantum from '../../images/quantum.jpg'
import AI from '../../images/aii.jpg'
import Arrow from '../../images/rightArrow2.png'
import Cloud from '../../images/cloud.jpg'
import Security from '../../images/security.jpg'
import Logo from '../../images/codebugNew4.png'
import Calender from '../../images/calender.png'
import dynamic from 'next/dynamic'

const Blogs = dynamic(() => import("../../components/Blogs"), { ssr: false });

const MainPage = () => {
    return (
        <div className='flex flex-col items-center justify-center w-screen py-[25px]'>
            
            <div className=" shadow-lg bg-[url('/portfolioback4.png')] bg-cover bg-center h-[40vh] overflow-hidden flex justify-end rounded-[10px]  py-[20px] ring-1 ring-black  flex flex-col w-full max-w-[85vw] mb-7 leading-[43px] ">
                
               
                
            </div>
            <p className='max-w-[80vw] mb-5 w-full'>At Codebug, we craft innovative software solutions tailored to your needs. From scalable web applications and dynamic mobile apps to AI-driven systems and enterprise solutions, our portfolio showcases cutting-edge projects that drive success. Explore our work and see how we bring ideas to life with code!</p>
            <div className='grid grid-cols-1 place-items-center md:grid-cols-2 gap-5 w-[85%]'>
                
                
                <div className="reveal31 xl:h-[450px] text-black max-w-[570px] bg-gray-100  bg-cover bg-center rounded-[10px] ring-[1px] items-center ring-black shadow-lg sm:h-[66vh] flex flex-col py-[4px] sm:py-[5.5px]">
                                        <div className="group relative flex cursor-pointer  flex-row items-center justify-center bg-[#C6A961] hover:bg-[#B87333] h-[100%] sm:h-[75%] rounded-[6px] w-[98%]">
                                            <Image src={Coffeeday} alt="Coffeeday" className=' h-[180px] py-[20px] sm:py-[0px] w-fit sm:h-[250px]  ' />
                                            <p className='absolute text-[15px] leading-[20px] sm:leading-[22px] sm:text-[23px] w-[85%] py-2  px-4 bottom-0 left-0 mb-4 border-r-[1.5px] border-b-[1.5px] border-t-[1.5px] text-white group-hover:bg-[#8C2020] rounded-r-[8px] transition-all duration-500 delay-0 opacity-0 group-hover:opacity-100'>
                                                Transforming the Coffee Shop Experience with Innovative Technology Solutions
                                            </p>
                                        </div>
                                        <div className='w-[98%] mt-2'>
                                            <div className='flex flex-row items-center space-x-2 w-[100%] sm:w-[80%] px-2'>
                                                <div className='bg-blue-400   px-3 ring-[0.5px] ring-[#052D42] py-0.5 rounded-[5px] text-[#052D42] text-[13px]'>
                                                    <p>E-commerce</p>
                                                </div>
                                                <div className='bg-blue-400   px-3 ring-[0.5px] ring-[#052D42] py-0.5 rounded-[5px] text-[#052D42] text-[13px]'>
                                                    <p>Hospitality</p>
                                                </div>
                                                <div className='bg-blue-400   px-3 ring-[0.5px] ring-[#052D42] py-0.5 rounded-[5px] text-[#052D42] text-[13px]'>
                                                    <p>Artificial Intelligence</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row items-center justify-between pl-2 w-[98%]'>
                                                <div className='flex  flex-row items-center justify-center w-[70%]'>
                                                    <Image src={Coffee} alt="Coffee" className='hidden sm:flex' height={80} />
                                                    <p className="text-[10.5px] text-gray-800 mt-[5px] leading-[15px] ">Crafted a seamless digital ecosystem for coffee shops—mobile ordering, smart POS, and inventory management. Streamlines operations, elevates experiences, and fuels growth through tech-driven café culture.</p>
                                                </div>
                                                
                
                                                <div  className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#BF532C] ring-1 text-xl text-black rounded-[5px] px-4 2xl:py-2 ring-[#8C2020] py-[3px] cursor-pointer hover:bg-[#D98032] group w-fit ">
                                                    <p className="text-[14px] hidden sm:flex leading-[16px]">Check it out</p>
                                                    <p className="text-[14px] flex sm:hidden leading-[16px]">View </p>
                                                    <Image alt="arrow" src={Arrow} height={20}  className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                                                </div>
                                            </div>
                                        </div>
                                         
                                    </div>
                
                
            </div>

            <div className='mt-5'>
                <p>We have just started our journey, Stay tuned for more:)</p>
            </div>

            
            <Blogs/>
                    
                
                
            
        </div>
    )
}

export default MainPage