
'use client';
import React from "react"
import Image from "next/image"
import Arrow from "../images/rightArrow2.png"
import { Link } from "react-scroll"
import ScrollReveal from "scrollreveal"
import { useEffect } from "react"

const ChooseUs = ({handleTalkClick}) => {

    useEffect(() => {
        ScrollReveal().reveal(".reveal8", {
          origin: "bottom", // Animation starts from the bottom
          distance: "50px", // Distance to move before appearing
          duration: 1000, // Animation duration in milliseconds
          delay: 200, // Delay before animation starts
          reset: false, // Runs only once
          easing: "ease-in-out",
        });
    }, []);

    useEffect(() => {
        ScrollReveal().reveal(".reveal9", {
          origin: "bottom", // Animation starts from the bottom
          distance: "50px", // Distance to move before appearing
          duration: 1000, // Animation duration in milliseconds
          delay: 400, // Delay before animation starts
          reset: false, // Runs only once
          easing: "ease-in-out",
        });
    }, []);

    useEffect(() => {
        ScrollReveal().reveal(".reveal10", {
          origin: "bottom", // Animation starts from the bottom
          distance: "50px", // Distance to move before appearing
          duration: 1000, // Animation duration in milliseconds
          delay: 600, // Delay before animation starts
          reset: false, // Runs only once
          easing: "ease-in-out",
        });
    }, []);

    

      useEffect(() => {
        ScrollReveal().reveal(".reveal12", {
          origin: "bottom", // Animation starts from the bottom
          distance: "50px", // Distance to move before appearing
          duration: 1000, // Animation duration in milliseconds
          delay: 1000, // Delay before animation starts
          reset: false, // Runs only once
          easing: "ease-in-out",
        });
    }, []);

    useEffect(() => {
        ScrollReveal().reveal(".reveal13", {
          origin: "bottom", // Animation starts from the bottom
          distance: "50px", // Distance to move before appearing
          duration: 1000, // Animation duration in milliseconds
          delay: 1200, // Delay before animation starts
          reset: false, // Runs only once
          easing: "ease-in-out",
        });
    }, []);

    useEffect(() => {
        ScrollReveal().reveal(".reveal14", {
          origin: "bottom", // Animation starts from the bottom
          distance: "50px", // Distance to move before appearing
          duration: 1000, // Animation duration in milliseconds
          delay: 1400, // Delay before animation starts
          reset: false, // Runs only once
          easing: "ease-in-out",
        });
    }, []);

    useEffect(() => {
        ScrollReveal().reveal(".reveal15", {
          origin: "bottom", // Animation starts from the bottom
          distance: "50px", // Distance to move before appearing
          duration: 1000, // Animation duration in milliseconds
          delay: 1600, // Delay before animation starts
          reset: false, // Runs only once
          easing: "ease-in-out",
        });
    }, []);

    useEffect(() => {
        ScrollReveal().reveal(".reveal16", {
          origin: "bottom", // Animation starts from the bottom
          distance: "50px", // Distance to move before appearing
          duration: 1000, // Animation duration in milliseconds
          delay: 1800, // Delay before animation starts
          reset: false, // Runs only once
          easing: "ease-in-out",
        });
    }, []);

    useEffect(() => {
        ScrollReveal().reveal(".reveal17", {
          origin: "bottom", // Animation starts from the bottom
          distance: "50px", // Distance to move before appearing
          duration: 1000, // Animation duration in milliseconds
          delay: 2000, // Delay before animation starts
          reset: false, // Runs only once
          easing: "ease-in-out",
        });
    }, []);

    useEffect(() => {
        ScrollReveal().reveal(".reveal11", {
          origin: "left", // Animation starts from the bottom
          distance: "50px", // Distance to move before appearing
          duration: 1000, // Animation duration in milliseconds
          delay: 2200, // Delay before animation starts
          reset: false, // Runs only once
          easing: "ease-in-out",
        });
      }, []);


      


    return(
        <div className='min-h-[120vh] w-[100vw]  text-white  flex justify-center items-start z-[10]'>
            <div className='py-[50px] py-[0px] rounded-b-[30px] border-r-[2.5px] border-l-[2.5px] border-b-[2.5px] border-gray-400 w-[90vw] sm:h-[100%] md:h-[100%] lg:h-[115vh] bg-black flex md:flex-col sm:flex-col lg:flex-row flex-col items-center justify-center'>
                <div className="lg:w-[44%] sm:mt-[30px] mt-[30px] md:w-[100%] lg:w-[100%] px-[80px] ">
                    <p className="reveal8 text-2xl text-[#F1A230]">Why Codebug</p>
                    <p className="reveal9 text-[40px] leading-[40px] sm:text-5xl  w-[300px]">The Codebug Advantage</p>
                    <p className="reveal10 text-sm text-gray-300 mt-3">At CodeBug, we combine innovation, precision, and expertise to deliver software solutions that exceed expectations. Our team is dedicated to crafting scalable, reliable, and user-friendly applications tailored to your needs. Partner with us to experience unparalleled quality, seamless collaboration, and a commitment to driving your success.</p>
                   
                    
                    <Link onClick={handleTalkClick} to="contact" offset={0} smooth={true} duration={500} className="hidden lg:flex mt-[20px] reveal11 bg-[#D98032] flex flex-row items-center justify-center ring-[#BF532C] ring-1 text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                        <p className="text-[16px]">
                            Book a Free Consultation
                        </p>
                        <Image src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                    </Link> 
                </div>
                <div className="lg:w-[55%] md:w-[80%] sm:my-2 my-2 sm:w-[85%] h-[100%] flex sm:flex-row flex-col md:flex-row items-center justify-center">
                    <div className="h-[65%] w-[100%] flex flex-col items-center justify-end space-y-7">
                        <div className="reveal12 w-[80%]">
                            <p className="text-2xl text-red-500">Innovation</p>
                            <p className="text-sm text-gray-300">We stay ahead by using the latest technology to create unique solutions</p>
                        </div>
                        <div className="reveal13 w-[80%]">
                            <p className="text-2xl text-red-500">Proven Expertise</p>
                            <p className="text-sm text-gray-300">Our experienced team brings years of knowledge to every project</p>
                        </div>
                        <div className="reveal14 w-[80%]">
                            <p className="text-2xl text-red-500">Reliablility</p>
                            <p className="text-sm text-gray-300">You can count on us to deliver high-quality solutions on time, every time.</p>
                        </div>
                    </div>
                    <div className="h-[65%] w-[100%] flex flex-col items-center justify-start space-y-7">
                        <div className="reveal15 w-[80%]">
                            <p className="text-2xl text-red-500">Security</p>
                            <p className="text-sm text-gray-300">We prioritize data protection and ensure your software is secure</p>
                        </div>
                        <div className="reveal16 w-[80%]">
                            <p className="text-2xl text-red-500">Agile Workflow</p>
                            <p className="text-sm text-gray-300">We adapt quickly to changes and deliver fast, flexible solutions.</p>
                        </div>
                        <div className="reveal17 w-[80%]">
                            <p className="text-2xl text-red-500">Support</p>
                            <p className="text-sm text-gray-300">We offer continuous to ensure your success, long after the project is complete</p>
                        </div>
                    </div>
                    
                </div>
                <Link onClick={handleTalkClick} to="contact" offset={0} smooth={true} duration={500} className="mt-[20px] reveal11 mb-[30px] lg:hidden bg-[#D98032] flex flex-row items-center justify-center ring-[#BF532C] ring-1 text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                        <p className="text-[16px]">
                            Book a Free Consultation
                        </p>
                        <Image src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                    </Link> 

                
                
            </div>
            
        </div>
    )
}

export default ChooseUs