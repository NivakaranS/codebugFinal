

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
                            <p className=' text-[40px] mt-[10px] sm:text-[48px] text-[#41CAD9]' >Software Consultancy</p>
                        </div>
                        <p className=' text-[20px] leading-[25px]  sm:leading-[36px] lg:leading-[50px] sm:text-[35px]'>Empower Your Business with Expert Software Consultancy</p>
                    </div>
                    <p className=' w-[70vw] 2xl:w-[1400px] mb-5 max-w-[1000px] text-center text-[18px] text-[#F1A230] w-full'>Make informed technology decisions with our expert software consultancy services. We help you strategize, develop, and optimize software solutions that align with your business goals. Whether you need technology selection, digital transformation, or custom software roadmaps, we provide tailored guidance and innovative strategies for success.</p>
                    <div className="flex flex-row justify-center space-x-5 mt-2">
                        <Link to="contact" offset={15} smooth={true} duration={500} onClick={handleTalkClick} className=" reveal4 bg-white text-xl text-black ring-1 ring-black rounded-[5px] px-5 2xl:py-2  py-1.5 cursor-pointer hover:ring-white hover:bg-black hover:text-white">
                            <p className=" 2xl:text-[23px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[17px]">Request a Demo</p>
                        </Link>
                        <Link to="aiservices" offset={-55} smooth={true} duration={500}  className="reveal4 bg-[#D98032] flex flex-row items-center justify-center ring-[#BF532C] ring-1 text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020]  py-1 sm:py-1.5 cursor-pointer hover:bg-[#D98032] group">
                            <p className="2xl:text-[23px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[17px]">
                                Explore Software Consultancy
                            </p>
                            <Image alt="arrow" src={Arrow}  className="ml-2 h-[20px] sm:h-[25px] w-fit transition-transform duration-300 group-hover:translate-x-2"/>
                        </Link>
                        </div>
                    </div>    
                </div>
                
            <Element name='aiservices'>
                <div className="w-full relative top-[-60px] text-black max-w-[100vw] bg-[url('grid10.png')] bg-[#002A38] ring-[3px] ring-white bg-cover mb-[20px] pt-[70px] flex flex-row items-center justify-center min-h-[110vh]">
                    <div className='w-[83%]  pt-[10px] pb-[40px] h-full flex flex-col  items-center justify-center'>
                        <p className='text-[50px] mb-5 text-[#F1A230]'>Our Software Consultancy Services</p>
                        <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 mx-3  gap-5'>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] leading-[23px] text-gray-800 mb-1'>Technology Strategy & Planning</p>
                                <p className='text-[13px]'>Choosing the right technology stack is critical for business success. We assess your business goals, industry trends, and technical requirements to recommend the best frameworks, tools, and architectures for your software projects.</p>
                            </div>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] text-gray-800 leading-[23px] mb-1'>Digital Transformation Consulting</p>
                                <p className='text-[13px]'>Stay ahead of the competition by embracing digital transformation. We help businesses leverage AI, cloud computing, automation, and modern software solutions to enhance efficiency and scalability.</p>
                            </div>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] text-gray-800 leading-[23px] mb-1'>Custom Software Roadmap & Planning</p>
                                <p className='text-[13px]'>Not sure where to start with your software project? We create detailed roadmaps, outlining project scope, milestones, and development phases to ensure a smooth and efficient execution.</p>
                            </div>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] text-gray-800 leading-[23px] mb-1'>Software Architecture & System Design</p>
                                <p className='text-[13px]'>A strong foundation is key to a scalable system. We design robust, scalable, and high-performance architectures, ensuring your software can handle future growth and technological advancements.</p>
                            </div>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] text-gray-800 leading-[23px] mb-1'>Process Optimization & Automation</p>
                                <p className='text-[13px]'>Enhance productivity with streamlined processes. We analyze your existing workflows and identify areas where automation, AI, or process improvements can increase efficiency and reduce costs.</p>
                            </div>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] text-gray-800 leading-[23px] mb-1'>Risk Assessment & Compliance Consulting</p>
                                <p className='text-[13px]'>We identify potential technical, security, and compliance risks in your software projects. Our team ensures regulatory compliance, data protection, and risk mitigation strategies to safeguard your business.</p>
                            </div>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] text-gray-800 leading-[23px] mb-1'>IT Infrastructure & Cloud Strategy</p>
                                <p className='text-[13px]'>Looking to migrate to the cloud or optimize your IT infrastructure? We provide cloud consulting, infrastructure assessment, and deployment strategies to ensure cost-effective and high-performance cloud solutions.</p>
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
                            <p>What does a software consultant do?</p>
                            <div className='cursor-pointer ' onClick={handlefaq1}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq1 ? 'flex' : 'hidden'} bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>A software consultant analyzes business requirements, recommends the best technology solutions, and helps plan, optimize, and execute software projects to maximize efficiency and ROI.</p>
                        </div>
                    </div>
                    
                    <div>
                        <div onClick={handlefaq2} className='flex cursor-pointer ring-[1px] ring-black rounded-[10px] flex-row justify-between px-[20px] py-[10px]  bg-white text-red-800'>
                            <p>How can software consultancy benefit my business?</p>
                            <div className='cursor-pointer ' onClick={handlefaq2}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq2 ? 'flex' : 'hidden'} bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>We provide expert guidance to help you avoid costly mistakes, choose the right technology stack, improve software performance, and ensure scalability and security.</p>
                        </div>
                    </div>

                    <div>
                    <div onClick={handlefaq3} className='flex cursor-pointer ring-[1px] ring-black rounded-[10px] flex-row justify-between px-[20px] py-[10px]  bg-white text-red-800'>
                            <p>Do you offer consultancy for startups?</p>
                            <div className='cursor-pointer ' onClick={handlefaq3}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq3 ? 'flex' : 'hidden'} flex-col space-y-2 bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>Yes! We help startups validate ideas, select the right technologies, create MVPs, and build scalable software strategies tailored for growth.</p>
                           
                        </div>
                    </div>
                    <div>
                    <div onClick={handlefaq4} className='flex cursor-pointer ring-[1px] ring-black rounded-[10px] flex-row justify-between px-[20px] py-[10px] bg-white text-red-800'>
                            <p>How do you ensure the right technology choices for our project?</p>
                            <div className='cursor-pointer ' onClick={handlefaq4}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq4 ? 'flex' : 'hidden'} bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>We conduct a detailed analysis of your business needs, industry trends, budget, and long-term goals, then recommend the best tools, frameworks, and architectures for your success.</p>
                        </div>
                    </div>
                    <div>
                    <div onClick={handlefaq5} className='flex cursor-pointer ring-[1px] ring-black rounded-[10px] flex-row justify-between px-[20px] py-[10px]  bg-white text-red-800'>
                            <p>Can you help with software modernization or migration?</p>
                            <div className='cursor-pointer ' onClick={handlefaq5}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq5 ? 'flex' : 'hidden'} bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>Absolutely! We assist in upgrading legacy systems, migrating to modern platforms, and optimizing existing applications for improved performance and scalability.</p>
                        </div>
                    </div>
                    <div>
                    <div onClick={handlefaq6} className='flex cursor-pointer ring-[1px] ring-black rounded-[10px] flex-row justify-between px-[20px] py-[10px]  bg-white text-red-800'>
                            <p>Do you provide ongoing support after consultancy?</p>
                            <div className='cursor-pointer ' onClick={handlefaq6}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq6 ? 'flex' : 'hidden'} rounded-b-[10px] bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>Yes, we offer post-consultancy support, technical advisory services, and long-term collaboration to help you execute your software strategy successfully.</p>
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
                    <div className='w-[100%]  h-[50vh] flex flex-col items-center justify-center
                     pt-[10px] pb-[20px] sm:w-[80%] md:w-[50%] px-[40px]'>
                        <p className='text-[28px] leading-[35px] sm:text-[35px]'>Let's Discuss Your Project Today!</p>
                        <p className='md:w-[80%] mt-5'>Make smart technology decisions with expert guidance. Our software consultancy services help businesses innovate, optimize, and scale efficiently. Whether you’re launching a new project, upgrading existing systems, or seeking strategic advice, we’re here to help.</p>
                        <p className='md:w-[80%] mt-5'>Get Tailored Software Consultancy Today!</p>
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