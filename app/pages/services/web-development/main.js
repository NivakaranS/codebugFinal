

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
                            <p className=' text-[40px] mt-[10px] sm:text-[48px] text-[#41CAD9]' >Web Development</p>
                        </div>
                        <p className=' text-[20px] leading-[25px]  sm:leading-[36px] lg:leading-[50px] mt-[10px] sm:text-[35px]'>Building Scalable High-Performance Websites</p>
                    </div>
                    <p className=' w-[70vw] 2xl:w-[1400px] mb-5 max-w-[1000px] text-center text-[18px] mt-[10px] text-[#F1A230] w-full'>In today's digital world, your website is your business's first impression. At Codebug, we create modern, scalable, and high-performance websites tailored to your needs. From sleek business websites to complex web applications, we deliver secure, fast and user-friendly solutions that drive growth.</p>
                    <div className="flex flex-row justify-center space-x-5 mt-2">
                        <Link to="contact" offset={15} smooth={true} duration={500} onClick={handleTalkClick} className=" reveal4 bg-white text-xl text-black ring-1 ring-black rounded-[5px] px-5 2xl:py-2  py-1.5 cursor-pointer hover:ring-white hover:bg-black hover:text-white">
                            <p className=" 2xl:text-[23px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[17px]">Request a Demo</p>
                        </Link>
                        <Link to="aiservices" offset={-55} smooth={true} duration={500}  className="reveal4 bg-[#D98032] flex flex-row items-center justify-center ring-[#BF532C] ring-1 text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020]  py-1 sm:py-1.5 cursor-pointer hover:bg-[#D98032] group">
                            <p className="2xl:text-[23px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[17px]">
                                Explore Web Solutions
                            </p>
                            <Image alt="arrow" src={Arrow}  className="ml-2 h-[20px] sm:h-[25px] w-fit transition-transform duration-300 group-hover:translate-x-2"/>
                        </Link>
                        </div>
                    </div>    
                </div>
                
            <Element name='aiservices'>
                <div className="w-full relative top-[-60px] text-black max-w-[100vw] bg-[url('grid10.png')] bg-[#002A38] ring-[3px] ring-white bg-cover mb-[20px] pt-[70px] flex flex-row items-center justify-center min-h-[110vh]">
                    <div className='w-[83%]  pt-[10px] pb-[40px] h-full flex flex-col  items-center justify-center'>
                        <p className='text-[50px] mb-5 text-[#F1A230]'>Our Web Services</p>
                        <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 mx-3  gap-5'>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] leading-[23px] text-gray-800 mb-1'>Custom Website Development</p>
                                <p className='text-[13px]'>We specialize in creating fully customized websites that are responsive, SEO-optimized, and built for performance. Whether you need a sleek portfolio or a complex busines site, we design with user experience and fast loading times in minde, ensuring your websites is both beautiful and functional across all devices.</p>
                            </div>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] text-gray-800 leading-[23px] mb-1'>E-commerce Development</p>
                                <p className='text-[13px]'>Our e-commerce solutions offer powerful online stores designed to boost sales and streamline your operations. We integrate secure payment gateways, provide easy product management, and ensure a seamless shopping experience. From product listings to order fulfillmen, we create a complete solution for your online business.</p>
                            </div>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] text-gray-800 leading-[23px] mb-1'>Web Application Development</p>
                                <p className='text-[13px]'>We develop custom web applications that are scalable, secure, and highly interactive. From progressive web apps to complex SaaS platforms, we focus on creating intuitive, fast and reliable applications that meet your unique business needs while ensuring top-tier security and performance.</p>
                            </div>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] text-gray-800 leading-[23px] mb-1'>CMS Development</p>
                                <p className='text-[13px]'>Our custom Content Management Systems(CMS) provide easy-to-use interface that let you manage your website's content effortlessly. We work with popular platforms like WordPress, Joomla, and Drupal or create bespoke CMS solutions tailored to your specific requirements, allowing for seamless updates and content control.</p>
                            </div>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] text-gray-800 leading-[23px] mb-1'>Enterprise Web Solutions</p>
                                <p className='text-[13px]'>We create secure, scalable, and efficient enterprise solutions to streamline internal processes. From employee portals to complex dashboards, our enterprise web solutions help automate workflows, integrate third-party systems, and enhance communication, ensuring your business runs smoothly and efficiently.</p>
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
                            <p>What is the difference between a custom website and a template-based website?</p>
                            <div className='cursor-pointer ' onClick={handlefaq1}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq1 ? 'flex' : 'hidden'} bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>A custom website is built from scratch to meet your specific needs and branding, ensuring a unique and tailoredd user experience. A template0based website uses pre-made designs, which are often quicker and less expensive but may lack the personalization and scalability of a custom-built site.</p>
                        </div>
                    </div>
                    
                    <div>
                        <div onClick={handlefaq2} className='flex cursor-pointer ring-[1px] ring-black rounded-[10px] flex-row justify-between px-[20px] py-[10px]  bg-white text-red-800'>
                            <p>How long does it take to build a website?</p>
                            <div className='cursor-pointer ' onClick={handlefaq2}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq2 ? 'flex' : 'hidden'} bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>The timeline for building a website depends on the complexity of the project. A simple website might take 4-6 weeks, while more complex sites like e-commerce platforms or web applications could take several months. We'll provide a timeline based on your specific requirements after our initial consultation.</p>
                        </div>
                    </div>

                    <div>
                    <div onClick={handlefaq3} className='flex cursor-pointer ring-[1px] ring-black rounded-[10px] flex-row justify-between px-[20px] py-[10px]  bg-white text-red-800'>
                            <p>Will my website be mobile-friendly?</p>
                            <div className='cursor-pointer ' onClick={handlefaq3}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq3 ? 'flex' : 'hidden'} flex-col space-y-2 bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>Absolutely! All of our websites are built with mobile-first approach, ensuring that they are responsive and look great on any device from smartphones to desktops</p>
                            
                        </div>
                    </div>
                    <div>
                    <div onClick={handlefaq4} className='flex cursor-pointer ring-[1px] ring-black rounded-[10px] flex-row justify-between px-[20px] py-[10px] bg-white text-red-800'>
                            <p>Do you offer onging website maintenance?</p>
                            <div className='cursor-pointer ' onClick={handlefaq4}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq4 ? 'flex' : 'hidden'} bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>Yes! After your website is live, we offere onging maintenance and support services, including updates, securing monitoring, and performance optimization to ensure your site continues to run smoothly.</p>
                        </div>
                    </div>
                    <div>
                    <div onClick={handlefaq5} className='flex cursor-pointer ring-[1px] ring-black rounded-[10px] flex-row justify-between px-[20px] py-[10px]  bg-white text-red-800'>
                            <p>How much does it cost to build a website?</p>
                            <div className='cursor-pointer ' onClick={handlefaq5}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq5 ? 'flex' : 'hidden'} bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>The cost of bulding a website varies depending on the complexity of the project nad the features you need. We offere flexible pricing to fit your budget, whether you're looking for a simple informational site or a robust e-commerce platform. Contact us for a free consultation and customized quote based on your needs.</p>
                        </div>
                    </div>
                    <div>
                    <div onClick={handlefaq6} className='flex cursor-pointer ring-[1px] ring-black rounded-[10px] flex-row justify-between px-[20px] py-[10px]  bg-white text-red-800'>
                            <p>Will my website be secure?</p>
                            <div className='cursor-pointer ' onClick={handlefaq6}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq6 ? 'flex' : 'hidden'} rounded-b-[10px] bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>We prioritize security in all of our web development projects. We implement best practices like SSL encryption, secure payment gateways, and regular security updates to protect your website and its users from potential threats.</p>
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
                        <p className='text-[28px] leading-[35px] sm:text-[35px]'>Let's Build Your Website</p>
                        <p className='md:w-[80%] mt-5'>Are you ready to take your online presence to the next level? Whether you're starting from scratch or looking to enhance your current website, we're here to help you build a site that aligns with your business goals and engages your audience.</p>
                        <p className='mt-3'>Our team is committed to delivering a website that not only looks great but also performs at its best. We'll make sure your site is fast, secure, and optimized to help you attract more visitors, drive conversations, and achieve your business goals.</p>
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