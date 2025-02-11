

import Image from 'next/image'
import Coffeeday from '../../../images/coffeeday3.png'

import Coffee from '../../../images/coffeeday.png'
import React from 'react'
import Quantum from '../../../images/quantum.jpg'
import AI from '../../../images/aii.jpg'
import Arrow from '../../../images/rightArrow2.png'
import Cloud from '../../../images/cloud.jpg'
import Security from '../../../images/security.jpg'
import Logo from '../../../images/codebugNew4.png'

const MainPage = () => {
    return (
        <div className='flex flex-col items-center justify-center w-screen py-[25px]'>
            <div className="flex items-center justify-center ring-1 ring-white shadow-lg bg-black bg-cover bg-center  h-[40vh] overflow-hidden flex justify-end rounded-[10px]  py-[20px] ring-1 ring-black  flex flex-col w-full max-w-[85vw] mb-7 ">
                <div className="flex  text-white leading-[25px] sm:leading-[30px] md: lg:leading-[40px] flex-col items-center justify-center w-full h-full">
                    <div className='text-[#F1A230] text-[18px] sm:text-[20px]'>
                        <p>Services</p>
                    </div>
                    <p className=' text-[25px] sm:text-[35px] md:text-[30px] lg:text-[50px]'>Web Development</p>
                    <p className='sm:text-[15px] w-[80%] text-[14px] sm:w-[80%] mt-[8px]  md:w-[80%] lg:w-[100%] text-center leading-[20px] md:text-[17px] lg:text-[17px]'>We partner with businesses and organizations to elevate their services through the power of AI</p>
                </div>

                
                
            </div>
            <div className="w-full text-black max-w-[100vw] bg-[url('grid10.png')] bg-[#002A38] ring-[3px] ring-white bg-cover mb-[20px] pt-[70px] flex flex-row items-center justify-center min-h-[110vh]">
                <div className='w-[83%]  pt-[10px] pb-[40px] h-full flex flex-col  items-center justify-center'>
                    <div className='mb-[20px]'>
                        <p className='text-[27px] text-[#F1A230]'>Build Fast, Scalable & Secure Website</p>
                        <p className='text-[18px]  text-white'>At CodeBug, we specialize in crafting high-performance, secure, and visually stunning websites that help businesses thrive online. Whether you need a simple website, an interactive web application, or a full-scale e-commerce platform, our expert developers bring your vision to life using the latest web technologies.</p>
                    </div>
                    <p className='text-[50px] mb-1 text-[#F1A230]'>Our Web Development Services</p>
                    <div className='grid grid-cols-3 mx-3  gap-3'>
                        <div className='flex px-5 py-5 flex-col items-center bg-[#D98032] ring-[0.5px] ring-black rounded-[10px] justify-center'>
                            <p className='text-[19px] leading-[23px] text-white mb-1'>Custom Website Development</p>
                            <p className='text-[13px]'>We create tailor-made websites that align with your business goals, ensuring a unique and engaging user experience.</p>
                        </div>
                        <div className='flex px-5 py-5 flex-col items-center bg-[#D98032] ring-[0.5px] ring-black rounded-[10px] justify-center'>
                            <p className='text-[19px] text-white leading-[23px] mb-1'>E-Commerce Development</p>
                            <p className='text-[13px]'>Build a secure, high-converting online store wiht seamless payment integration, inventory management, and mobile-friendly design.</p>
                        </div>
                        <div className='flex px-5 py-5 flex-col items-center bg-[#D98032] ring-[0.5px] ring-black rounded-[10px] justify-center'>
                            <p className='text-[19px] text-white leading-[23px] mb-1'>Web Application Development</p>
                            <p className='text-[13px]'>Develop powerful, feature-rich web apps that enhance your business operations and customer experience.</p>
                        </div>
                        <div className='flex px-5 py-5 flex-col items-center bg-[#D98032] ring-[0.5px] ring-black rounded-[10px] justify-center'>
                            <p className='text-[19px] text-white leading-[23px] mb-1'>CMS Development</p>
                            <p className='text-[13px]'>Easily manage your website with a custom or platform-based Content Management System(CMS) like WordPress, Joomla, or Shopy.</p>
                        </div>
                        <div className='flex px-5 py-5 flex-col items-center bg-[#D98032] ring-[0.5px] ring-black rounded-[10px] justify-center'>
                            <p className='text-[19px] text-white leading-[23px] mb-1'>Website Maintenance & Optimization</p>
                            <p className='text-[13px]'>Keep your website secure, fast, and up-to-date with our ongoing support and performance optimization services</p>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            
            <div className="w-full max-w-[100vw] mt-[35px]  mb-[20px] pt-[40px] flex flex-row items-center justify-center  h-[90vh]">
                <div className='w-[85%] rounded-[15px] bg-white flex flex-row items-center justify-center text-black h-full'>
                    <div className='w-[50%] px-[40px]'>
                        <p className='text-[35px]'>Let's Build Something Amazing!</p>
                        <p>Whether your're a startup or an established business, Codebug is here to transform your web presence. Contact us today and let's create a website that stand out.</p>
                        <div  className=" bg-[#D98032] flex flex-row w-fit px-[20px] mt-[10px]  items-center justify-center ring-[#BF532C]  ring-1 text-xl text-black rounded-[5px]  2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group">
                            <p className="text-[15px] ">
                                Schedule a Consultation
                            </p>
                            <Image src={Arrow} height={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                        </div>
                    </div>
                    <div className=' w-[50%] h-[100%] flex px-[5px] py-[5px] flex-col items-center justify-center'>
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