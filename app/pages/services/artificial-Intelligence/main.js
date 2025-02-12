

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
                            <p className=' text-[40px] mt-[10px] sm:text-[48px] text-[#41CAD9]' >Artificial Intelligence</p>
                        </div>
                        <p className=' text-[20px] leading-[25px]  sm:leading-[36px] lg:leading-[50px] sm:text-[35px]'>Unlock the Power of AI for Your Business</p>
                    </div>
                    <p className=' w-[70vw] 2xl:w-[1400px] mb-5 max-w-[1000px] text-center text-[18px] text-[#F1A230] w-full'>Stay ahead with cutting-edge Artificial Intelligence solutions. From machine learning to intelligent automation, we help businesses leverage AI to optimize operations, enhance customer experiences, and drive innovation.</p>
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
                        <p className='text-[50px] mb-5 text-[#F1A230]'>Our AI Services</p>
                        <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 mx-3  gap-5'>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] leading-[23px] text-gray-800 mb-1'>AI-Powered Chatbots & Virtual Assistants</p>
                                <p className='text-[13px]'>Enhance customer engagement with AI-driven chatbots and virtual assistants. Our intelligent bots provide real-time support, automate customer service, and improve response times, reducing the need for human intervention while maintaining a seamless user experience.</p>
                            </div>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] text-gray-800 leading-[23px] mb-1'>Machine Learning Solutions</p>
                                <p className='text-[13px]'>We build and deploy Machine Learning (ML) models that help businesses analyze vast amounts of data, predict trends, and automate complex decision-making processes. Our ML solutions are customized to meet industry-specific needs, from fraud detection to predictive analytics.</p>
                            </div>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] text-gray-800 leading-[23px] mb-1'>Natural Language Processing(NLP)</p>
                                <p className='text-[13px]'>Our NLP solutions enable computers to understand, interpret, and generate human language. Whether it’s text analytics, sentiment analysis, or voice recognition, we develop AI-powered applications that enhance communication and automate workflows.</p>
                            </div>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] text-gray-800 leading-[23px] mb-1'>Computer Vision Applications</p>
                                <p className='text-[13px]'>Harness the power of Computer Vision to analyze images and videos, automate quality control, and enable facial and object recognition. We develop AI-driven solutions for sectors like healthcare, security, and retail, ensuring precision and efficiency.</p>
                            </div>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] text-gray-800 leading-[23px] mb-1'>AI Driven Data Analytics</p>
                                <p className='text-[13px]'>We integrate AI with big data analytics to extract meaningful insights from structured and unstructured data. Our AI-driven analytics help businesses make data-backed decisions, optimize performance, and gain a competitive edge.</p>
                            </div>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] text-gray-800 leading-[23px] mb-1'>Predictive Analytics & Recommendation Engines</p>
                                <p className='text-[13px]'> Personalize user experiences with AI-powered recommendation systems. Our predictive analytics solutions help businesses forecast market trends, customer preferences, and business performance, ensuring better strategic planning.</p>
                            </div>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] text-gray-800 leading-[23px] mb-1'>AI for Automation & Process Optimization</p>
                                <p className='text-[13px]'>Automate repetitive and labor-intensive tasks using AI-driven Robotic Process Automation (RPA). Our AI solutions streamline operations, reduce costs, and improve efficiency in industries like finance, logistics, and manufacturing.</p>
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
                            <p>How can AI benefit my business?</p>
                            <div className='cursor-pointer ' onClick={handlefaq1}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq1 ? 'flex' : 'hidden'} bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>AI helps businesses automate tasks, analyze large amounts of data, enhance customer experiences, and improve decision-making. Whether through chatbots, predictive analytics, or intelligent automation, AI can optimize operations and drive growth.</p>
                        </div>
                    </div>
                    
                    <div>
                        <div onClick={handlefaq2} className='flex cursor-pointer ring-[1px] ring-black rounded-[10px] flex-row justify-between px-[20px] py-[10px]  bg-white text-red-800'>
                            <p>How long does it take to implement an AI solution?</p>
                            <div className='cursor-pointer ' onClick={handlefaq2}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq2 ? 'flex' : 'hidden'} bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>The timeline depends on the complexity of the project. A simple AI chatbot can be deployed in a few weeks, while custom machine learning models or automation solutions may take a few months.</p>
                        </div>
                    </div>

                    <div>
                    <div onClick={handlefaq3} className='flex cursor-pointer ring-[1px] ring-black rounded-[10px] flex-row justify-between px-[20px] py-[10px]  bg-white text-red-800'>
                            <p>What industries can use AI?</p>
                            <div className='cursor-pointer ' onClick={handlefaq3}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq3 ? 'flex' : 'hidden'} flex-col space-y-2 bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>AI is transforming various industries, including:</p>
                            <div>
                                <p>E-commerce - Personalized recommendations, chatbots, and inventory management</p>
                                <p>Healthcare - AI-powered diagnostics, medical imaging, and patient monitoring</p>
                                <p>Finance - Fraud detection, risk assessment, and algorithmic trading</p>
                                <p>Retail - Demand forecasting, customer analytics, and automated checkout</p>
                                <p>Manufacturing - Quality control, predictive mainenance, and process automation</p>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div onClick={handlefaq4} className='flex cursor-pointer ring-[1px] ring-black rounded-[10px] flex-row justify-between px-[20px] py-[10px] bg-white text-red-800'>
                            <p>Do I need a lot of data to use AI?</p>
                            <div className='cursor-pointer ' onClick={handlefaq4}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq4 ? 'flex' : 'hidden'} bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>Not always. While AI models perform better with more data, we can leverage pre-trained models, synthetic data generation, and transfer learning to build solutions even with limited data.</p>
                        </div>
                    </div>
                    <div>
                    <div onClick={handlefaq5} className='flex cursor-pointer ring-[1px] ring-black rounded-[10px] flex-row justify-between px-[20px] py-[10px]  bg-white text-red-800'>
                            <p>Will AI replace human jobs?</p>
                            <div className='cursor-pointer ' onClick={handlefaq5}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq5 ? 'flex' : 'hidden'} bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>AI is designed to assist, not replace, human workers. It automates repetitive tasks, allowing employees to focus on strategic and creative work. Business use AI to enhance productivity, not eliminate jobs.</p>
                        </div>
                    </div>
                    <div>
                    <div onClick={handlefaq6} className='flex cursor-pointer ring-[1px] ring-black rounded-[10px] flex-row justify-between px-[20px] py-[10px]  bg-white text-red-800'>
                            <p>How do I get started with AI for my business?</p>
                            <div className='cursor-pointer ' onClick={handlefaq6}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq6 ? 'flex' : 'hidden'} rounded-b-[10px] bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>Simply contact us for a free consultation. Our AI experts will analyze your needs and suggest the best AI solutions tailored to your business goals.</p>
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
                        <p className='text-[28px] leading-[35px] sm:text-[35px]'>Transform Your Business with AI</p>
                        <p className='md:w-[80%] mt-5'>At Codebug, we believe AI is the future of technology. Whether you're looking to enhance customer interactions, automate processes, or gain data-driven insights, our AI solutions will help you stay ahead in the competitive digital landscape.</p>
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