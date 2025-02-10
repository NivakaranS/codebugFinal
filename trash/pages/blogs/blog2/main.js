

import Image from 'next/image'
import Coffeeday from '../../../images/coffeeday3.png'

import Coffee from '../../../images/coffeeday.png'
import React from 'react'
import ReactPlayer from 'react-player'

import Quantum from '../../../images/quantum.jpg'
import AI from '../../../images/aii.jpg'
import Arrow from '../../../images/rightArrow2.png'
import Cloud from '../../../images/cloud.jpg'
import Security from '../../../images/security.jpg'
import Link from 'next/navigation'
import Time from '../../../images/time.png'
import Calender from '../../../images/calender.png'


const MainPage = ({handleBlog1Click, handleBlog2Click, handleBlog3Click, handleBlog4Click}) => {
    return (
        <div className='flex flex-col items-center justify-center w-screen py-[25px]'>
            <div className='relative top-[-100px] h-[60vh] w-screen bg-gray-300 overflow-hidden'>
                <Image src={AI} alt="Quantum" className=" h-[200%] w-[100%]" />
            </div>
            <div className='relative top-[-100px] flex w-[90vw] h-[100%] flex-row justify-center'>
                <div className='w-[100%] rounded-b-[30px] pt-[30px] pb-[50px]  text-black bg-white flex items-center justify-center flex-col'>
                    <div className=' leading-[35px] w-[80%] lg:w-[50%] mb-[10px]'>
                        <div className='flex flex-row text-[13px] space-x-4 '>
                            <div className='flex flex-row items-center space-x-2'>
                                <Image src={Calender} height={16} />
                                <p className='text-[15px]'>February 02, 2024</p>
                            </div>
                            <div className='flex flex-row items-center space-x-2'>
                                <Image src={Time} height={16} />
                                <p className='text-[15px]'>5 min read</p>
                            </div>
                        </div>
                        
                            <p className='text-[35px] leading-[43px] '>The Role of Artificial Intelligence in Software Development</p>
                            <p className='text-[13px]'>By Nivakaran Shanmugabavan</p>
                    </div>
                    <div className='lg:w-[50%] md:w-[90%] rounded-[10px] px-[40px] py-[20px] text-black  h-[100%] bg-orange-200 flex flex-col space-y-1 mb-4 '>
                        <p className='text-red-800 text-[20px]   '>What we are going to cover:</p>
            
                            <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>1. AI-Powered Code Generation</p>
                        
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>2. Automated Testing & Debugging</p>
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>3. Smart Code Reviews & Optimization</p>
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>4. Predictive Analytics for Project Management</p>
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>5. AI in DevOps & Continuous Integration</p>
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>6. Natural Language Processing(NLP) in Software Development</p>
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>7. The Future of AI in Software Development</p>

                    </div>
                    <div className='flex lg:w-[50%] w-[80%] md:w-[75%] flex-col  space-y-4'>
                        <p>Artificial Intelligence (AI) is transforming the landscape of software development, making it more efficient, intelligent, and accessible. From automating repetitive tasks to improving code quality, AI is not only changing how developers work but also redefining the software development lifecycle.</p>
                        
                        <p>With the growing adoption of AI-powered tools, companies can accelerate software delivery, minimize errors, and enhance user experience. In this article, we will explore how AI is revolutionizing software development and what the future holds for AI-driven development.</p>
                        <div>
                            <p className='font-bold text-[18px]'>1. AI-Powered Code Geneation</p>
                            <p>AI-driven tools like GitHub Copilot and OpenAI Codex help developers write code faster by suggesting functions, generating snippets, and even completing entire blocks of code. These AI assistants reduce development time and improve code quality by minimizing errors.</p>
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>2. Automated Testing & Debugging</p>
                            <p>Manual testing can be time-consuming, but AI-based testing tools like Testim and Applitools automate the process. AI can identify patterns in code, predict potential bugs, and offer real-time debugging assistance, ensuring higher software reliability.</p>
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>3. Smart Code Reviews & Optimization</p>
                            <p>AI can analyze codebases and suggest improvements for performance, security, and maintainability. Tools powered by AI help detect vulnerabilities, optimize algorithms, and even refactor code to improve efficiency.</p>
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>4. Predictive Analytics for Project Management</p>
                            <p>AI assists in project management by predicting delivery timelines, identifying risks, and optimizing resource allocation. AI-driven analytics tools can analyze past projects to provide insights into potential challenges and suggest solutions.</p>
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>5. AI in DevOps & Continuous Integration</p>
                            <p>AI enhances DevOps workflows by automating deployment, monitoring system performance, and predicting failures before they occur. AI-powered monitoring tools help developers maintain system health, ensuring smooth operations with minimal downtime.</p>
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>6. Natural Language Processing (NLP) in Software Development</p>
                            <p>With advancements in NLP, AI can transform written descriptions into functional code. This makes software development more accessible to non-programmers, allowing for greater collaboration between developers and business teams.</p>

                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>The Future of AI in Software Development</p>
                            <p>AI is not here to replace developers but to enhance their productivity and creativity. As AI continues to evolve, it will play a crucial role in shaping how software is designed, tested, and deployed. Companies that embrace AI-driven development will gain a competitive edge in delivering high-quality software faster and more efficiently.</p>
                            <p>Are you ready to integrate AI into your development workflow? At Codebug, we harness the power of AI to build innovative and intelligent software solutions. Contact us today to explore how AI can transform your software projects!</p>
                        </div>
                        
                    </div>
                </div>
                
            </div>
           
           <div className='relative top-[-5px] mt-[10px]  mb-[10px] '>
                <p className=' text-[40px]'>You might also like</p>
                <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 w-[60vw] sm:w-[85vw] mt-9 mb-4">
                                    <div className="reveal42 px-3 text-black w-full bg-gray-100 rounded-[6px] ring-2 ring-white leading-[17px] h-[60vh] w-[285px] flex flex-col items-center justify-center">
                                        <div className="flex flex-row items-center justify-center rounded-[8px] overflow-hidden h-[350px] w-[109.5%]">
                                            <Image src={Quantum} alt="Quantum" className=" h-[100%] w-[100%]" />
                                        </div>
                                        <div className="flex flex-col  py-3 w-[100%] h-[80%]">
                                            <div className="text-[11px] ring-[1px] ring-blue-800 w-fit text-blue-900 bg-blue-200 px-2 py-[1.5px] mb-1.5 rounded-[3px]">
                                                <p>Software Engineering</p>
                                            </div>
                                            <p className="text-[16px] leading-[18px] text-gray-900">The Future of Software Development: Trends to Watch in 2025</p>
                                            <p className="text-[11px] leading-[13px] text-gray-600 mt-1">Discover the key trends like AI, low-code, Web3 and more shaping software development in 2025. Stay 
                                                ahead with insights into the industry's future.
                                            </p>
                                            
                                            <div onClick={handleBlog1Click} className="mt-2 bg-[#F1A230] flex flex-row items-center justify-center ring-[#BF532C] ring-[0.5px] text-xl text-black rounded-[5px] px-4 2xl:py-2 ring-[#8C2020] py-[3px] cursor-pointer  group  ">
                                                <p className="text-sm">Read Article</p>
                                                <Image src={Arrow} height={15}  className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="reveal44 px-3 text-black w-full bg-gray-100 rounded-[6px] ring-2 ring-white leading-[17px] h-[60vh] w-[285px] flex flex-col items-center justify-center">
                                        <div className="flex flex-row items-center justify-center  rounded-[8px] overflow-hidden h-[350px] w-[109.5%]">
                                            <Image src={Cloud} alt="Cloud" className=" h-[100%] w-[100%]" />
                                        </div>
                                        <div className="flex flex-col  py-3 w-[100%] h-[80%]">
                                            <div className="text-[11px] ring-[1px] ring-green-800 w-fit text-green-900 bg-green-200 px-2 py-[1.5px] mb-1.5 rounded-[3px]">
                                                <p>Cloud Computing</p>
                                            </div>
                                            <p className="text-[16px] leading-[18px] text-gray-900">How Cloud Computing is Shaping the Future of Software</p>
                                            <p className="text-[11px] leading-[13px] text-gray-600 mt-1">
                                                Cloud computing is transforming software with scalability, flexibility, and AI integration. From serverless computing to hybrid solutions, it’s driving innovation and efficiency.
                                            </p>
                                            <div onClick={handleBlog3Click} className="mt-2 bg-[#F1A230] flex flex-row items-center justify-center ring-[#BF532C] ring-[0.5px] text-xl text-black rounded-[5px] px-4 2xl:py-2 ring-[#8C2020] py-[3px] cursor-pointer  group  ">
                                                <p className="text-sm">Read Article</p>
                                                <Image src={Arrow} height={15}  className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reveal45 px-3 text-black w-full bg-gray-100 rounded-[6px] ring-2 ring-white leading-[17px] h-[60vh] w-[285px] flex flex-col items-center justify-center">
                                        <div className="flex flex-row items-center justify-center bg-red-500 rounded-[8px] overflow-hidden h-[350px] w-[109.5%]">
                                            <Image src={Security} alt="Security" className=" h-[100%] w-[100%]" />
                                        </div>
                                        <div className="flex flex-col  py-3 w-[100%] h-[80%]">
                                            <div className="text-[11px] ring-[1px] ring-blue-800 w-fit text-blue-900 bg-blue-200 px-2 py-[1.5px] mb-1.5 rounded-[3px]">
                                                <p>Software Engineering</p>
                                            </div>
                                            <p className="text-[16px] leading-[18px] text-gray-900">Why Security Should Be a Top Priority in Software Development</p>
                                            <p className="text-[11px] leading-[13px] text-gray-600 mt-1">
                                            Security is essential to protect data, prevent breaches, and build trust. Prioritizing secure coding and encryption from the start ensures a safe and reliable product. 
                                            </p>
                                            <div onClick={handleBlog4Click} className="mt-2 bg-[#F1A230] flex flex-row items-center justify-center ring-[#BF532C] ring-[0.5px] text-xl text-black rounded-[5px] px-4 2xl:py-2 ring-[#8C2020] py-[3px] cursor-pointer  group  ">
                                                <p className="text-sm">Read Article</p>
                                                <Image src={Arrow} height={15}  className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
           </div>
        </div>
    )
}

export default MainPage