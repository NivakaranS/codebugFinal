
'use client';
import React from "react";
import Image from "next/image";
import Quote from '../images/quote.png'
import { useState, useEffect } from "react";

import ScrollReveal from "scrollreveal";

import Slideshow from "./Slideshow";

const Testimonials = () => {
    const [visibleCards, setVisibleCards] = useState([false, false, false]);

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
        setVisibleCards((prev) => {
            const newVisibleCards = [...prev];
            if (currentIndex < newVisibleCards.length) {
            newVisibleCards[currentIndex] = true;
            currentIndex++;
            }
            return newVisibleCards;
        });

        // Stop the interval when all cards are visible
        if (currentIndex >= visibleCards.length) {
            clearInterval(interval);
        }
        }, 500);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [visibleCards.length]);

    useEffect(() => {
        ScrollReveal().reveal(".reveal34", {
          origin: "left", // Animation starts from the bottom
          distance: "50px", // Distance to move before appearing
          duration: 1000, // Animation duration in milliseconds
          delay: 200, // Delay before animation starts
          reset: false, // Runs only once
          easing: "ease-in-out",
        });
      }, []);

      useEffect(() => {
        ScrollReveal().reveal(".reveal35", {
          origin: "bottom", // Animation starts from the bottom
          distance: "50px", // Distance to move before appearing
          duration: 1000, // Animation duration in milliseconds
          delay: 400, // Delay before animation starts
          reset: false, // Runs only once
          easing: "ease-in-out",
        });
      }, []);

    return(
        <div className="flex ring-[3px] ring-white flex-col items-center justify-center w-[100vw] h-[110vh]" style={{ background: 'radial-gradient(at bottom right, #41CAD9 , #0D3C63)' }}>
            <div className="flex flex-row w-[85vw] items-center">
                <Image alt="arrow" src={Quote} className=" h-[80px] sm:h-[90px] w-fit "  />
                <p className="reveal34 md:text-5xl text-3xl sm:text-4xl text-white ml-3 w-[400px]">Kind Words From Our Customers</p>
            </div>
            <div className="flex mt-2 flex-row w-[85vw] ">
                <p className="reveal35 w-[100%] md:w-[58%] text-[16px] sm:text-[18px] md:text-[20px] text-[#000]">Discover how our solutions have made a positive impact on our clients&apos; businesses. Hear directly from those who trust us to bring their visions to life.</p>
            </div>
            <Slideshow/>
            

            
        </div>

    )
}

export default Testimonials