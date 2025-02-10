

import Image from 'next/image'
import Coffeeday from '../../images/coffeeday3.png'

import Coffee from '../../images/coffeeday.png'
import React from 'react'
import Quantum from '../../images/quantum.jpg'
import AI from '../../images/aii.jpg'
import Arrow from '../../images/rightArrow2.png'
import Cloud from '../../images/cloud.jpg'
import Security from '../../images/security.jpg'


const MainPage = ({handleBlog1Click, handleBlog2Click, handleBlog3Click, handleBlog4Click, handleBlogClick}) => {
    return (
        <div className='flex flex-col items-center justify-center w-screen py-[25px]'>
            <div className=" shadow-lg bg-[url('/blogsback2.png')] bg-cover bg-center h-[40vh] overflow-hidden flex justify-end rounded-[10px]  py-[20px] ring-1 ring-black  flex flex-col w-full max-w-[85vw] mb-7 leading-[43px] ">
                
                <div className='px-[20px] leading-[50px]'>

                </div>
                
            </div>
            <p className='max-w-[80vw] w-full mb-4'>Welcome to the Codebug blog! Here, we share the latest trends, best practices, and insights from the world of software development. Whether you're a seasoned developer or just starting your tech journey, our articles cover a wide range of topics including cutting-edge technologies, coding tips, cloud solutions, security practices, and industry updates. Stay informed with expert opinions, tutorials, and case studies that can help you enhance your skills, grow your business, and stay ahead in an ever-evolving digital world. Explore our blog and discover how innovation meets expertise at Codebug.</p>
            <div className="w-[85vw] my-[20px]">
                          
                            <div>
                                
                            </div>
                            <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 w-[85vw] mt-9 mb-4">
                                <div className="reveal42 px-3 text-black w-full bg-gray-100 rounded-[6px] ring-2 ring-white leading-[17px] h-[60vh] w-[285px] flex flex-col items-center justify-center">
                                    <div className="flex flex-row items-center justify-center bg-red-500 rounded-[8px] overflow-hidden h-[350px] w-[109.5%]">
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
                                <div className="reveal43 px-3 text-black w-full bg-gray-100 rounded-[6px] ring-2 ring-white leading-[17px] h-[60vh] w-[285px] flex flex-col items-center justify-center">
                                    <div className="flex flex-row items-center justify-center bg-red-500 rounded-[8px] overflow-hidden h-[350px] w-[109.5%]">
                                        <Image src={AI} alt="Quantum" className=" h-[100%] w-[100%]" />
                                    </div>
                                    <div className="flex flex-col  py-3 w-[100%] h-[80%]">
                                        <div className="flex flex-row space-x-2">
                                            <div className="text-[11px] ring-[1px] ring-blue-800 w-fit text-blue-900 bg-blue-200 px-2 py-[1.5px] mb-1.5 rounded-[3px]">
                                                <p>Software Engineering</p>
                                            </div>
                                            <div className="text-[11px] ring-[1px] ring-orange-800 w-fit text-orange-900 bg-orange-200 px-2 py-[1.5px] mb-1.5 rounded-[3px]">
                                                <p>Artificial Intelligence</p>
                                            </div>
                                        </div>
                                        <p className="text-[16px] leading-[18px] text-gray-900">The Role of Artificial Intelligence in Software Development</p>
                                        <p className="text-[11px] leading-[13px] text-gray-600 mt-1">
                                            AI-driven development, low-code platforms, blockchain, and quantum computing are reshaping software. As businesses staying ahead of these trends is crucial for innovation and growth. 
                                        </p>
                                        <div onClick={handleBlog2Click} className="mt-2 bg-[#F1A230] flex flex-row items-center justify-center ring-[#BF532C] ring-[0.5px] text-xl text-black rounded-[5px] px-4 2xl:py-2 ring-[#8C2020] py-[3px] cursor-pointer  group  ">
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