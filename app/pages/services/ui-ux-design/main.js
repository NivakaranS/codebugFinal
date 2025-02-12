

import Image from 'next/image'
import Coffeeday from '../../../images/coffeeday3.png'

import Coffee from '../../../images/coffeeday.png'
import React, { useState } from 'react'
import Quantum from '../../../images/quantum.jpg'
import AI from '../../../images/aii.jpg'
import Arrow from '../../../images/rightArrow2.png'
import Cloud from '../../../images/cloud.jpg'
import Security from '../../../images/security.jpg'
import Logo from '../../../images/codebugNew4.png'
import {Link, Element} from 'react-scroll'
import Services from '../../../images/services.png';

const MainPage = ({handleTalkClick}) => {
    const [faq1, setfaq1] = useState(false);
    const [faq2, setfaq2] = useState(false);
    const [faq3, setfaq3] = useState(false);
    const [faq4, setfaq4] = useState(false);
    const [faq5, setfaq5] = useState(false);
    const [faq6, setfaq6] = useState(false);

    const handlefaq1 = () => {
        setfaq1(!faq1)
    }
    
    const handlefaq2 = () => {
        setfaq2(!faq2)
    }

    const handlefaq3 = () => {
        setfaq3(!faq3)
    }

    const handlefaq4 = () => {
        setfaq4(!faq4)
    }

    const handlefaq5 = () => {
        setfaq5(!faq5)
    }

    const handlefaq6 = () => {
        setfaq6(!faq6)
    }


    return (
        <div className='flex flex-col items-center justify-center w-screen pb-[25px]'>
            <div className="  bg-[url('/techbackground.png')] bg-cover bg-center flex items-center justify-center relative top-[-64px] h-[100vh] w-[100vw] ">
                <div className='px-[20px] flex flex-col items-center mt-[50px] max-w-[1400px] w-full h-[100%] max-w-[1400px] justify-center'>
                    <div className=' leading-[50px] text-center 2xl:leading-[40px]'>
                        <div className='leading-[45px] flex flex-col items-center'>
                            <Image src={Services} alt="AI" height={30} />
                            <p className=' text-[40px] mt-[10px] sm:text-[48px] text-[#41CAD9]' >UI/UX Design</p>
                        </div>
                        <p className=' text-[20px] leading-[25px]  sm:leading-[36px] lg:leading-[50px] sm:text-[35px]'>Crafting Engaging & Intuitive Digital Experiences</p>
                    </div>
                    <p className=' w-[70vw] 2xl:w-[1400px] mb-5 max-w-[1000px] text-center text-[18px] text-[#F1A230] w-full'>We design beautiful, user-friendly interfaces that enhance engagement, improve usability, and create lasting impressions. From wireframing and prototyping to full-scale UI/UX design, we ensure your digital products are aesthetically appealing, highly functional, and user-centric.</p>
                    <div className="flex flex-row justify-center space-x-5 mt-2">
                        <Link to="contact" offset={15} smooth={true} duration={500} onClick={handleTalkClick} className=" reveal4 bg-white text-xl text-black ring-1 ring-black rounded-[5px] px-5 2xl:py-2  py-1.5 cursor-pointer hover:ring-white hover:bg-black hover:text-white">
                            <p className=" 2xl:text-[23px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[17px]">Request a Demo</p>
                        </Link>
                        <Link to="aiservices" offset={-55} smooth={true} duration={500}  className="reveal4 bg-[#D98032] flex flex-row items-center justify-center ring-[#BF532C] ring-1 text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020]  py-1 sm:py-1.5 cursor-pointer hover:bg-[#D98032] group">
                            <p className="2xl:text-[23px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[17px]">
                                Explore AI Solutions
                            </p>
                            <Image alt="arrow" src={Arrow}  className="ml-2 h-[20px] sm:h-[25px] w-fit transition-transform duration-300 group-hover:translate-x-2"/>
                        </Link>
                        </div>
                    </div>    
                </div>
                
            <Element name='aiservices'>
                <div className="w-full relative top-[-60px] text-black max-w-[100vw] bg-[url('grid10.png')] bg-[#002A38] ring-[3px] ring-white bg-cover mb-[20px] pt-[70px] flex flex-row items-center justify-center min-h-[110vh]">
                    <div className='w-[83%]  pt-[10px] pb-[40px] h-full flex flex-col  items-center justify-center'>
                        <p className='text-[50px] mb-5 text-[#F1A230]'>Our UI/UX Design Services</p>
                        <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 mx-3  gap-5'>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] leading-[23px] text-gray-800 mb-1'>User Research & Wireframing</p>
                                <p className='text-[13px]'>Great design starts with understanding users. We conduct in-depth user research, analyze behavior patterns, and create wireframes that ensure an intuitive, goal-driven experience. By mapping out user journeys, we build designs that enhance usability and engagement.</p>
                            </div>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] text-gray-800 leading-[23px] mb-1'>UI Design & Visual Aesthetics</p>
                                <p className='text-[13px]'>We craft stunning, modern interfaces that blend aesthetics with functionality. Our designs focus on consistency, accessibility, and visual storytelling to create digital products that attract users and enhance brand identity.</p>
                            </div>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] text-gray-800 leading-[23px] mb-1'>UX Design & Prototyping</p>
                                <p className='text-[13px]'>User experience (UX) is at the heart of everything we create. Through interactive prototyping, usability testing, and feedback-driven iterations, we refine designs to ensure seamless navigation, smooth interactions, and optimal user satisfaction.</p>
                            </div>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] text-gray-800 leading-[23px] mb-1'>Interaction Design & Micro-Animations</p>
                                <p className='text-[13px]'>We bring interfaces to life with fluid animations, engaging transitions, and interactive elements. Our designs enhance user engagement by ensuring smooth, intuitive interactions that feel natural and responsive.</p>
                            </div>
                           
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] text-gray-800 leading-[23px] mb-1'>Design System & Brand Identity</p>
                                <p className='text-[13px]'>We create comprehensive design systems that maintain visual consistency across all platforms. From typography and color schemes to UI components and brand guidelines, we ensure your digital presence remains cohesive, scalable, and recognizable.</p>
                            </div>
      
                        </div>
                    </div>
                    
                </div>
            </Element>

            <div className='w-[100vw] flex flex-col items-center justify-center'>
                <div className='w-[85vw]  max-w-[1400px]'>
                <p className='text-[40px]'>FAQs(Frequently Asked Questions)</p>
                <div className=' rounded-[10px] mt-[20px] flex flex-col '> 
                    <div>
                        <div onClick={handlefaq1} className='flex cursor-pointer ring-[1px] ring-black flex-row justify-between px-[20px] py-[10px] rounded-[10px] bg-white text-red-800'>
                            <p>Why is UI/UX design important for my business?</p>
                            <div className='cursor-pointer ' onClick={handlefaq1}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq1 ? 'flex' : 'hidden'} bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>Good UI/UX design improves user engagement, reduces bounce rates, increases conversions, and enhances customer satisfaction. A well-designed interface ensures a seamless and enjoyable user experience, making your product more successful.</p>
                        </div>
                    </div>
                    
                    <div>
                        <div onClick={handlefaq2} className='flex cursor-pointer ring-[1px] ring-black rounded-[10px] flex-row justify-between px-[20px] py-[10px]  bg-white text-red-800'>
                            <p>How do you approach UI/UX design?</p>
                            <div className='cursor-pointer ' onClick={handlefaq2}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq2 ? 'flex' : 'hidden'} bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>We follow a research-driven, user-first approach that includes user analysis, wireframing, prototyping, design iterations, and testing to create designs that are both visually appealing and functionally efficient.</p>
                        </div>
                    </div>

                    <div>
                    <div onClick={handlefaq3} className='flex cursor-pointer ring-[1px] ring-black rounded-[10px] flex-row justify-between px-[20px] py-[10px]  bg-white text-red-800'>
                            <p>What tools do you use for UI/UX design?</p>
                            <div className='cursor-pointer ' onClick={handlefaq3}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq3 ? 'flex' : 'hidden'} flex-col space-y-2 bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>We use industry-leading tools like Figma, Adobe XD, Sketch, InVision, and Zeplin to design and prototype user experiences.</p>
                            
                        </div>
                    </div>
                    <div>
                    <div onClick={handlefaq4} className='flex cursor-pointer ring-[1px] ring-black rounded-[10px] flex-row justify-between px-[20px] py-[10px] bg-white text-red-800'>
                            <p>Do you design for both web and mobile application?</p>
                            <div className='cursor-pointer ' onClick={handlefaq4}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq4 ? 'flex' : 'hidden'} bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>Yes! We specialize in creating responsive, adaptive designs that work seamlessly across web, mobile, tablets, and other digital platforms.</p>
                        </div>
                    </div>
                    <div>
                    <div onClick={handlefaq5} className='flex cursor-pointer ring-[1px] ring-black rounded-[10px] flex-row justify-between px-[20px] py-[10px]  bg-white text-red-800'>
                            <p>How log does a UI/UX design project take?</p>
                            <div className='cursor-pointer ' onClick={handlefaq5}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq5 ? 'flex' : 'hidden'} bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>The timeline varies based on project complexity, but a standard UI/UX design project takes 2-6 weeks, depending on requirements, research, and iterations.</p>
                        </div>
                    </div>
                    <div>
                    <div onClick={handlefaq6} className='flex cursor-pointer ring-[1px] ring-black rounded-[10px] flex-row justify-between px-[20px] py-[10px]  bg-white text-red-800'>
                            <p>Can you redesign an existing app or website?</p>
                            <div className='cursor-pointer ' onClick={handlefaq6}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq6 ? 'flex' : 'hidden'} rounded-b-[10px] bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>Absolutely! We can analyze, optimize, and modernize your current design to improve usability, engagement, and visual appeal while keeping the brand identity intact.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
            <div className="w-full max-w-[100vw] mt-[35px]  mb-[20px] pt-[40px] flex flex-row items-center justify-center  min-h-[90vh]">
                <div className='w-[85%] rounded-[15px] bg-white flex flex-col md:flex-row items-center justify-center text-black h-[100%]'>
                    <div className='flex md:hidden w-[100%] lg:w-[50%] h-[100%] flex px-[5px] py-[5px] flex-col items-center justify-center'>
                        <div className="w-[100%] h-[100%] py-[30px]  bg-[url('/techbackground.png')] bg-cover  ring-[0.5px] ring-black rounded-[10px] flex flex-col items-center justify-center">
                            <Image src={Logo} alt="AI" height={200} />
                        </div>
                        
                    </div>
                    <div className='w-[100%]  min-h-[50vh] flex flex-col items-center justify-center
                     pt-[10px] pb-[20px] sm:w-[80%] md:w-[50%] px-[40px]'>
                        <p className='text-[28px] leading-[35px] sm:text-[35px]'>Let's Discuss Your Design Project Today!</p>
                        <p className='md:w-[80%] mt-5'>A great design is more than just visuals—it’s about creating a seamless, engaging, and intuitive experience that users love. Whether you’re building a new product or redesigning an existing one, our UI/UX experts are here to turn your vision into reality.</p>
                        <p className='md:w-[80%] mt-5'>Let's create something amazing together!</p>
                        <Link to='contact' duration={500} offset={0} smooth={true} onClick={handleTalkClick} className=" bg-[#D98032] flex flex-row w-fit px-[20px] mt-[10px]  items-center justify-center ring-[#BF532C]  ring-1 text-xl text-black rounded-[5px]  2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group">
                            <p className="text-[15px] ">
                                Schedule a Consultation
                            </p>
                            <Image src={Arrow} height={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                        </Link>
                    </div>
                    <div className='hidden md:flex w-[50%] h-[90vh]  px-[5px] py-[5px] flex-col items-center justify-center'>
                        <div className="w-[100%] h-[100%]   bg-[url('/techbackground.png')] bg-cover  ring-[0.5px] ring-black rounded-[10px] flex flex-col items-center justify-center">
                            <Image src={Logo} alt="AI" height={200} />
                        </div>
                        
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default MainPage