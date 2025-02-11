

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
                <div className="flex  text-white leading-[40px] flex-col items-center justify-center w-full h-full">
                    <div className='text-[#F1A230] text-[20px]'>
                        <p>Services</p>
                    </div>
                    <p className='text-[50px]'>Artificial Intelligence</p>
                    <p className='text-[17px]'>We partner with businesses and organizations to elevate their services through the power of AI</p>
                </div>

                
                
            </div>
            <div className="w-full text-black max-w-[100vw] bg-[url('grid10.png')] bg-[#002A38] ring-[3px] ring-white bg-cover mb-[20px] pt-[70px] flex flex-row items-center justify-center h-[110vh]">
                <div className='w-[83%]  pt-[10px] pb-[40px] h-full flex flex-col  items-center justify-center'>
                    <p className='text-[50px] mb-1 text-[#F1A230]'>Our AI Services</p>
                    <div className='grid grid-cols-4 mx-3  gap-3'>
                        <div className='flex px-5 py-5 flex-col items-center bg-[#D98032] ring-[0.5px] ring-black rounded-[10px] justify-center'>
                            <p className='text-[19px] leading-[23px] text-white mb-1'>AI-Powered Chatbots & Virtual Assistants</p>
                            <p className='text-[13px]'>Enhance customer engagement with AI-driven chatbots and virtual assistants. Our intelligent bots provide real-time support, automate customer service, and improve response times, reducing the need for human intervention while maintaining a seamless user experience.</p>
                        </div>
                        <div className='flex px-5 py-5 flex-col items-center bg-[#D98032] ring-[0.5px] ring-black rounded-[10px] justify-center'>
                            <p className='text-[19px] text-white leading-[23px] mb-1'>Machine Learning Solutions</p>
                            <p className='text-[13px]'>We build and deploy Machine Learning (ML) models that help businesses analyze vast amounts of data, predict trends, and automate complex decision-making processes. Our ML solutions are customized to meet industry-specific needs, from fraud detection to predictive analytics.</p>
                        </div>
                        <div className='flex px-5 py-5 flex-col items-center bg-[#D98032] ring-[0.5px] ring-black rounded-[10px] justify-center'>
                            <p className='text-[19px] text-white leading-[23px] mb-1'>Natural Language Processing(NLP)</p>
                            <p className='text-[13px]'>Our NLP solutions enable computers to understand, interpret, and generate human language. Whether it’s text analytics, sentiment analysis, or voice recognition, we develop AI-powered applications that enhance communication and automate workflows.</p>
                        </div>
                        <div className='flex px-5 py-5 flex-col items-center bg-[#D98032] ring-[0.5px] ring-black rounded-[10px] justify-center'>
                            <p className='text-[19px] text-white leading-[23px] mb-1'>Computer Vision Applications</p>
                            <p className='text-[13px]'>Harness the power of Computer Vision to analyze images and videos, automate quality control, and enable facial and object recognition. We develop AI-driven solutions for sectors like healthcare, security, and retail, ensuring precision and efficiency.</p>
                        </div>
                        <div className='flex px-5 py-5 flex-col items-center bg-[#D98032] ring-[0.5px] ring-black rounded-[10px] justify-center'>
                            <p className='text-[19px] text-white leading-[23px] mb-1'>AI Driven Data Analytics</p>
                            <p className='text-[13px]'>We integrate AI with big data analytics to extract meaningful insights from structured and unstructured data. Our AI-driven analytics help businesses make data-backed decisions, optimize performance, and gain a competitive edge.</p>
                        </div>
                        <div className='flex px-5 py-5 flex-col items-center bg-[#D98032] ring-[0.5px] ring-black rounded-[10px] justify-center'>
                            <p className='text-[19px] text-white leading-[23px] mb-1'>Predictive Analytics & Recommendation Engines</p>
                            <p className='text-[13px]'> Personalize user experiences with AI-powered recommendation systems. Our predictive analytics solutions help businesses forecast market trends, customer preferences, and business performance, ensuring better strategic planning.</p>
                        </div>
                        <div className='flex px-5 py-5 flex-col items-center bg-[#D98032] ring-[0.5px] ring-black rounded-[10px] justify-center'>
                            <p className='text-[19px] text-white leading-[23px] mb-1'>AI for Automation & Process Optimization</p>
                            <p className='text-[13px]'>Automate repetitive and labor-intensive tasks using AI-driven Robotic Process Automation (RPA). Our AI solutions streamline operations, reduce costs, and improve efficiency in industries like finance, logistics, and manufacturing.</p>
                        </div>
                    </div>
                </div>
                
            </div>
            
            <div className="w-full max-w-[100vw] mt-[35px]  mb-[20px] pt-[40px] flex flex-row items-center justify-center  h-[90vh]">
                <div className='w-[85%] rounded-[15px] bg-white flex flex-row items-center justify-center text-black h-full'>
                    <div className='w-[50%] px-[40px]'>
                        <p className='text-[35px]'>Transform Your Business with AI</p>
                        <p>At Codebug, we believe AI is the future of technology. Whether you're looking to enhance customer interactions, automate processes, or gain data-driven insights, our AI solutions will help you stay ahead in the competitive digital landscape.</p>
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