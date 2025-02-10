'use client'
import React, { useState } from 'react'

import Image from 'next/image'
import Codebug from '../images/codebugNew4.png'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'
import { useInView } from "react-intersection-observer";



const About = () => {
    const { ref:ref1, inView:inView1 } = useInView({ triggerOnce: true });
const [number1, setNumber] = useState(0);

const { ref:ref2, inView:inView2} = useInView({triggerOnce: true});
const [number2, setNumber2] = useState(0);

useEffect(() => {
    if (typeof window !== 'undefined' && inView1) {
      let counter = 0;
      const interval = setInterval(() => {
        counter++;
        setNumber(counter);
        if (counter >= 5) clearInterval(interval);
      }, 500);
  
      return () => clearInterval(interval);
    }
  }, [inView1]);
  
      useEffect(()=> {
          if (inView2) {
          let counter = 0
          const interval = setInterval(() => {
              counter++
              setNumber2(counter)
              if (counter >= 5) clearInterval(interval)
          }, 500)
  
          return () => clearInterval(interval)
      }
      }, [inView2]);


    useEffect(() => {
        ScrollReveal().reveal(".reveal20", {
          origin: "right", // Animation starts from the bottom
          distance: "50px", // Distance to move before appearing
          duration: 1000, // Animation duration in milliseconds
          delay: 400, // Delay before animation starts
          reset: false, // Runs only once
          easing: "ease-in-out",
        });
    }, []);

    useEffect(() => {
        ScrollReveal().reveal(".reveal21", {
          origin: "right", // Animation starts from the bottom
          distance: "50px", // Distance to move before appearing
          duration: 1000, // Animation duration in milliseconds
          delay: 600, // Delay before animation starts
          reset: false, // Runs only once
          easing: "ease-in-out",
        });
    }, []);

    useEffect(() => {
        ScrollReveal().reveal(".reveal22", {
          origin: "bottom", // Animation starts from the bottom
          distance: "50px", // Distance to move before appearing
          duration: 1000, // Animation duration in milliseconds
          delay: 200, // Delay before animation starts
          reset: false, // Runs only once
          easing: "ease-in-out",
        });
    }, []);




    return(
        <div className='min-h-[115vh] w-[100vw] text-white  flex justify-center items-end'>
            <div className="rounded-t-[15px] sm:rounded-t-[30px]  mt-[45px] lg:mt-[0px]  ring-2 ring-gray-400 w-[90vw] min-h-[100vh] bg-[url('/aboutbackground15.png')] bg-cover bg-white  flex items-center justify-center">
                <div className='grid grid-cols-1 pt-[5px] sm:pt-[30px] md:pt-[5px] lg:grid-cols-4 min-h-[86vh] gap-4 w-[100%] sm:w-[90%] text-[#F1A230] text-[19px] px-4 md:px-12 text-center'>
                    <div className="bg-[url('/aboutbackground3.png')] bg-cover rounded-[20px] w-full h-full">
                       
                    </div>
                    <div className='hidden lg:grid grid-rows-6 gap-4  rounded-[20px] w-full h-full'>
                        <div className="bg-[url('/aboutbackground4.png')] bg-center bg-cover rounded-[20px] w-full h-[200px] lg:h-full row-span-4">
                            
                        </div>
                        <div ref={ref1} className='hidden ring-[1.5px] ring-white lg:flex items-center justify-center bg-[#39B5C8]   rounded-[20px] row-span-2'>
                            <div className=' flex flex-col  leading-[45px] mt-4 items-center justify-center text-gray-800 h-full'>
                                <p className=' text-[90px]'>{number1}+</p>
                                <p className='mt-1 text-[20px]'>Projects completed</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[url('/aboutbackground11.png')] text-white bg-[#373435] bg-cover ring-1 ring-gray-300 rounded-[10px] sm:rounded-[20px] text-[15px] px-5 w-[100%] sm:w-full h-full col-span-1 md:col-span-2 flex flex-col items-center py-8">
                        <Image alt='codebug' className='reveal22' src={Codebug} height={130} />
                        <p className=' reveal20 mt-4 text-[18px]'>
                            Codebug is a dynamic software development company dedicated to creating tailored software solutions that align with 
                            your business goals. With a team of experienced developers, creative innovators, and tech enthusiasts, we leverage the latest tools, technologies and frameworks to deliver 
                            solutions that make a real impact.
                        </p>
                        <p className='reveal21 mt-4 text-[18px]'> 
                            Our vision is to create the best innovative products in the world and make 
                            cutting-edge technology accessible to everyone. We strive to empower businesses with the latest
                            technology, enabling them to streamline operations, boost productivity, and achieve their full potential.
                        </p>
                    </div>
                    <div ref={ref2} className='flex lg:hidden justify-center items-center py-4 mb-[20px] bg-[#39B5C8]    rounded-[20px] row-span-2'>
                            <div className=' flex flex-col  leading-[45px] mt-4 text-gray-800 items-center justify-center h-full'>
                                <p className='text-[80px]'>{number2}+</p>
                                <p className='mt-1'>Projects completed</p>
                            </div>
                        </div>
                </div>
            </div>

            
        </div>
    )
}

export default About