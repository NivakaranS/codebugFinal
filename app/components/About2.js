import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Codebug from '../images/codebugNew4.png';
import ScrollReveal from 'scrollreveal';
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });

  const [_, forceUpdate] = useState(0); // This forces the component to re-render when called
  const mutableSource = useRef({
    counter1: 0,
    counter2: 0
  });

  // Counter for Section 1
  useEffect(() => {
    if (typeof window !== 'undefined' && inView1) {
      let counter = 0;
      const interval = setInterval(() => {
        counter++;
        mutableSource.current.counter1 = counter;
        forceUpdate((prev) => prev + 1); // Forces re-render
        if (counter >= 5) clearInterval(interval);
      }, 500);

      return () => clearInterval(interval);
    }
  }, [inView1]);

  // Counter for Section 2
  useEffect(() => {
    if (inView2) {
      let counter = 0;
      const interval = setInterval(() => {
        counter++;
        mutableSource.current.counter2 = counter;
        forceUpdate((prev) => prev + 1); // Forces re-render
        if (counter >= 5) clearInterval(interval);
      }, 500);

      return () => clearInterval(interval);
    }
  }, [inView2]);

  useEffect(() => {
    ScrollReveal().reveal(".reveal20", {
      origin: "right",
      distance: "50px",
      duration: 1000,
      delay: 400,
      reset: false,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".reveal21", {
      origin: "right",
      distance: "50px",
      duration: 1000,
      delay: 600,
      reset: false,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".reveal22", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 200,
      reset: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className='min-h-[115vh]  w-[100vw] text-white flex justify-center items-end'>
      <div className="rounded-t-[15px]  sm:rounded-t-[30px] mt-[45px] lg:mt-[0px] ring-2 ring-gray-400 max-w-[1400px] w-[90vw] min-h-[100vh] bg-[#000]  flex items-center justify-center">
        <div className='grid grid-cols-1 pt-[5px] sm:pt-[30px] md:pt-[5px] lg:grid-cols-4 xl:pt-[50px] pb-[40px] min-h-[100vh] gap-4 w-[100%]  sm:w-[90%] text-[#F1A230] text-[19px] px-4 md:px-12 text-center'>
          <div className="bg-[url('/aboutbackground3.png')] bg-cover rounded-[20px] w-full h-full">
          </div>
          <div className='hidden lg:grid grid-rows-6 gap-4 rounded-[20px] w-full h-full'>
            <div className="bg-[url('/aboutbackground4.png')] bg-center bg-cover rounded-[20px] w-full h-[200px] lg:h-full row-span-4">
            </div>
            <div ref={ref1} className='hidden ring-[1.5px] ring-white lg:flex items-center justify-center bg-[#39B5C8] rounded-[20px] row-span-2'>
              <div className='flex flex-col leading-[45px] 2xl:leading-[58px] mt-4 items-center justify-center text-gray-800 h-full'>
                <p className='text-[90px] 2xl:text-[110px] '>{mutableSource.current.counter1}+</p>
                <p className='mt-1 text-[20px] 2xl:text-[24px]  '>Projects completed</p>
              </div>
            </div>
          </div>
          <div className=" text-white flex md:ring-1 ring-gray-300  rounded-[10px] sm:rounded-[20px] text-[15px] px-5  w-[100%] sm:w-full h-full col-span-1 md:col-span-2 flex flex-col items-center justify-center">
            <div>
              <p className=" text-2xl  text-[#F1A230]">About Codebug</p>
              <p className=" text-[40px] leading-[40px] sm:text-5xl  w-[300px]">The Codebug </p>
              
            </div>
           
            <p className=' mt-4 text-[18px] lg:w-[90%] text-gray-300 sm:text-[17px] '>
              Codebug is a dynamic software development company dedicated to creating tailored software solutions that align with
              your business goals. With a team of experienced developers, creative innovators, and tech enthusiasts, we leverage the latest tools, technologies and frameworks to deliver
              solutions that make a real impact.
            </p>
            <p className=' mt-2 mb-6 text-[18px] lg:w-[90%] text-gray-300 sm:text-[17px]'>
              Our vision is to create the best innovative products in the world and make
              cutting-edge technology accessible to everyone. We strive to empower businesses with the latest
              technology, enabling them to streamline operations, boost productivity, and achieve their full potential.
            </p>
          </div>
          <div ref={ref2} className='flex lg:hidden justify-center space-x-[40px] md:space-x-[0px]   items-center py-4 mb-[20px] md:bg-[#39B5C8] rounded-[20px] row-span-2'>
            <div className='flex flex-col leading-[50px] md:leading-[45px] mt-4 text-red-500 md:text-gray-800 items-center justify-center h-full'>
              <p className='text-[100px] md:text-[80px]'>{mutableSource.current.counter2}+</p>
              <p className='mt-1'>Projects completed</p>
            </div>
            <div className='flex flex-col leading-[50px] md:leading-[45px] mt-4 text-red-500 md:text-gray-800 items-center justify-center h-full'>
              <p className='text-[100px] md:text-[80px]'>2+</p>
              <p className='mt-1'>Years experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
