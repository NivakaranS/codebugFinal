'use client'
import React, { useEffect, useRef, useState } from "react"
import ReactPlayer from "react-player"
import Image from "next/image"
import Arrow from '../images/rightArrow2.png'
import {Link} from 'react-scroll'
import ScrollReveal from "scrollreveal"

const Hero = ({onVideoLoad}) => {


    
    useEffect(() => {
      if (typeof window !== "undefined") {
        ScrollReveal().reveal(".reveal", {
          origin: "bottom", // Animation starts from the bottom
          distance: "50px", // Distance to move before appearing
          duration: 1000, // Animation duration in milliseconds
          delay: 200, // Delay before animation starts
          reset: false, // Runs only once
          easing: "ease-in-out",
        });
      }
      }, []);

      useEffect(() => {
        if (typeof window !== "undefined") {
        ScrollReveal().reveal(".reveal2", {
          
          
          origin: "bottom", // Animation starts from the bottom
          distance: "50px", // Distance to move before appearing
          duration: 1000, // Animation duration in milliseconds
          delay: 400, // Delay before animation starts
          reset: false, // Runs only once
          easing: "ease-in-out",
        });
      }
      }, []);

      useEffect(() => {
        if (typeof window !== "undefined") {
        ScrollReveal().reveal(".reveal3", {
          origin: "bottom", // Animation starts from the bottom
          distance: "50px", // Distance to move before appearing
          duration: 1000, // Animation duration in milliseconds
          delay: 600, // Delay before animation starts
          reset: false, // Runs only once
          easing: "ease-in-out",
        });
      }
      }, []);

      useEffect(() => {
        if (typeof window !== "undefined") {
        ScrollReveal().reveal(".reveal4", {
          origin: "left", // Animation starts from the bottom
          distance: "50px", // Distance to move before appearing
          duration: 1000, // Animation duration in milliseconds
          delay: 800, // Delay before animation starts
          reset: false, // Runs only once
          easing: "ease-in-out",
        });
      }
      }, []);

      useEffect(() => {
        if (typeof window !== "undefined") {
        ScrollReveal().reveal(".reveal5", {
          origin: "left", // Animation starts from the bottom
          distance: "50px", // Distance to move before appearing
          duration: 1000, // Animation duration in milliseconds
          delay: 800, // Delay before animation starts
          reset: false, // Runs only once
          easing: "ease-in-out",
        });
      }
      }, []);

    return(
        <div className="flex justify-center  items-center overflow-hidden w-[100vw] h-[92vh] bg-black">
            
            <div className="h-[90vh] max-w-[700px] w-[90vh] relative top-[5px]">
            <ReactPlayer
               
                onPlay={() => {
                  console.log("Video is playing")
                  onVideoLoad()
                }
                }
                url="/videos/ai-black-new.mp4" // Relative URL path to the public folder
                width="100%"  // Adjust width
                height="100%" // Adjust height
                loop={true}
                playing={true}
                muted={true}
                style={{scale: 2.0}}
            />
            </div>
            <div className="absolute 2xl:w-[800px]  lg:w-[55vw] md:w-[80vw] sm:w-[80vw] w-[85vw] top-[56%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <div className=" 2xl:leading-[58px] lg:leading-[53px] md:leading-[45px] sm:leading-[43px] leading-[35px]">
                    <p className=" text-[#41CAD9] 2xl:text-[60px] lg:text-[54px] md:text-[45px] sm:text-[40px] text-[33px] ">Welcome to Codebug!</p>
                    <p className=" 2xl:text-[40px] lg:text-[35px] md:text-[30px] sm:text-[30px] text-[21px]">Empowering Tomorrow with Innovation</p>
                </div>
                <p className=" 2xl:text-[26px] lg:text-[23px] md:text-[22px] sm:text-[20px] text-[18px] text-[#F1A230]">Building scalable, intelligent and transormative software solutions for a digital first world</p>
                <div className="flex flex-row justify-center space-x-5 mt-2">
                    <Link to="portfolio" offset={10} smooth={true} duration={500} className="  bg-white text-xl text-black ring-1 ring-black rounded-[5px] px-5 2xl:py-2  py-1.5 cursor-pointer hover:ring-white hover:bg-black hover:text-white">
                        <p className=" 2xl:text-[23px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[17px]">Explore</p>
                    </Link>
                    <Link to="about" offset={45} smooth={true} duration={500} className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#BF532C] ring-1 text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020]  py-1 sm:py-1.5 cursor-pointer hover:bg-[#D98032] group">
                    <p className="2xl:text-[23px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[17px]">
                        Get started
                      </p>
                      <Image alt="arrow" src={Arrow}  className="ml-2 h-[20px] sm:h-[25px] w-fit transition-transform duration-300 group-hover:translate-x-2"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero