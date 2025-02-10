
'use client';
import React from 'react';
import Image from 'next/image';
import Coffeeday from '../images/coffeeday3.png'
import Arrow from '../images/rightArrow2.png'
import Coffee from '../images/coffeeday.png'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react';

const Portfolio = ({handlePortfolioClick=null}) => {

    useEffect(() => {
        ScrollReveal().reveal(".reveal20", {
          origin: "bottom", // Animation starts from the bottom
          distance: "50px", // Distance to move before appearing
          duration: 1000, // Animation duration in milliseconds
          delay: 200, // Delay before animation starts
          reset: false, // Runs only once
          easing: "ease-in-out",
        });
      }, []);

      useEffect(() => {
        ScrollReveal().reveal(".reveal21", {
          origin: "bottom", // Animation starts from the bottom
          distance: "50px", // Distance to move before appearing
          duration: 1000, // Animation duration in milliseconds
          delay: 400, // Delay before animation starts
          reset: false, // Runs only once
          easing: "ease-in-out",
        });
      }, []);

      useEffect(() => {
        ScrollReveal().reveal(".reveal30", {
          origin: "left", // Animation starts from the bottom
          distance: "50px", // Distance to move before appearing
          duration: 1000, // Animation duration in milliseconds
          delay: 600, // Delay before animation starts
          reset: false, // Runs only once
          easing: "ease-in-out",
        });
      }, []);

      useEffect(() => {
        ScrollReveal().reveal(".reveal31", {
          origin: "left", // Animation starts from the bottom
          distance: "50px", // Distance to move before appearing
          duration: 1000, // Animation duration in milliseconds
          delay: 800, // Delay before animation starts
          reset: false, // Runs only once
          easing: "ease-in-out",
        });
      }, []);

      useEffect(() => {
        ScrollReveal().reveal(".reveal32", {
          origin: "right", // Animation starts from the bottom
          distance: "50px", // Distance to move before appearing
          duration: 1000, // Animation duration in milliseconds
          delay: 1000, // Delay before animation starts
          reset: false, // Runs only once
          easing: "ease-in-out",
        });
      }, []);

    return(
        <div className='py-[30px] w-[100vw] min-h-[116vh] text-white flex flex-col items-center justify-center'>
            <div className="w-[85vw]">
                <div className='flex flex-row items-center justify-between'>
                    <div>
                        <p className="reveal20 text-[#F1A230] text-[20px] sm:text-[24px]">Discover our latest projects from</p>
                        <p className="reveal21 md:text-6xl text-5xl">Portfolio</p>
                    </div>

                    
                

                    <div onClick={handlePortfolioClick}  className="hidden sm:flex mt-[20px] reveal4 bg-[#D98032] flex flex-row items-center justify-center ring-[#BF532C] ring-1 text-xl text-black rounded-[5px] sm:px-5 2xl:py-2 ring-[#8C2020] py-1.5 cursor-pointer hover:bg-[#D98032] group w-fit ">
                        <p className="text-[15px]  sm:text-[17px]">
                            View All Projects
                        </p>
                        <Image alt="arrow" src={Arrow} height={25} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                    </div> 
                </div>

                <div className="grid grid-cols-1 mt-[25px] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-7 w-[85vw] ">
                    <div className="reveal31  text-black max-w-[570px] bg-gray-100  bg-cover bg-center rounded-[10px] ring-[1px] items-center ring-black shadow-lg sm:h-[66vh] flex flex-col py-[5.5px]">
                        <div className="group relative flex cursor-pointer  flex-row items-center justify-center bg-[#C6A961] hover:bg-[#B87333] h-[60%] sm:h-[75%] rounded-[6px] w-[98%]">
                            <Image src={Coffeeday} alt="Coffeeday" className=' h-[180px] py-[20px] sm:py-[0px] w-fit sm:h-[250px]  ' />
                            <p className='absolute text-[15px] leading-[22px] sm:text-[23px] w-[85%] py-2 leading-[31px] px-4 bottom-0 left-0 mb-4 border-r-[1.5px] border-b-[1.5px] border-t-[1.5px] text-white group-hover:bg-[#8C2020] rounded-r-[8px] transition-all duration-500 delay-0 opacity-0 group-hover:opacity-100'>
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
                
            </div>
            


        </div>
    )
}

export default Portfolio