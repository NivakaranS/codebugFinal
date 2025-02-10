

import Image from 'next/image'

import React from 'react'

import Coffeeday from '../../images/coffeeday3.png'

import Coffee from '../../images/coffeeday.png'

import Quantum from '../../images/quantum.jpg'
import AI from '../../images/aii.jpg'
import Arrow from '../../images/rightArrow2.png'
import Cloud from '../../images/cloud.jpg'
import Security from '../../images/security.jpg'
import Logo from '../../images/codebugNew4.png'
import Calender from '../../images/calender.png'

const MainPage = ({handleBlog1Click, handleBlogClick, handleBlog2Click, handleBlog3Click, handleBlog4Click}) => {
    return (
        <div className='flex flex-col items-center justify-center w-screen py-[25px]'>
            
            <div className=" shadow-lg bg-[url('/portfolioback4.png')] bg-cover bg-center h-[40vh] overflow-hidden flex justify-end rounded-[10px]  py-[20px] ring-1 ring-black  flex flex-col w-full max-w-[85vw] mb-7 leading-[43px] ">
                
                <div className='px-[20px] leading-[50px]'>
                    
                </div>
                
            </div>
            <p className='max-w-[80vw] mb-5 w-full'>At Codebug, we craft innovative software solutions tailored to your needs. From scalable web applications and dynamic mobile apps to AI-driven systems and enterprise solutions, our portfolio showcases cutting-edge projects that drive success. Explore our work and see how we bring ideas to life with code!</p>
            <div className='grid grid-cols-1 place-items-center md:grid-cols-2 gap-5 w-[85%]'>
                
                
                <div className="reveal31  text-black max-w-[570px] bg-gray-100  bg-cover bg-center rounded-[10px] ring-[1px] items-center ring-black shadow-lg sm:h-[66vh] flex flex-col py-[5.5px]">
                                        <div className="group relative flex cursor-pointer  flex-row items-center justify-center bg-[#C6A961] hover:bg-[#B87333] h-[60%] sm:h-[75%] rounded-[6px] w-[98%]">
                                            <Image src={Coffeeday} alt="Coffeeday" className=' h-[180px] py-[20px] sm:py-[0px] w-fit sm:h-[250px]  ' />
                                            <p className='absolute text-[15px] leading-[22px] sm:text-[23px] w-[85%] py-2 leading-[31px] px-4 bottom-0 left-0 mb-4 border-r-[1.5px] border-b-[1.5px] border-t-[1.5px] text-white group-hover:bg-[#8C2020] rounded-r-[8px] transition-all duration-500 delay-0 opacity-0 group-hover:opacity-100'>
                                                Transforming the Coffee Shop Experience with Innovative Technology Solutions
                                            </p>
                                        </div>
                                        <div className='w-[98%] mt-2'>
                                            <div className='flex flex-row items-center space-x-2 w-[100%] sm:w-[80%] px-2'>
                                                <div className='bg-blue-400   px-3 ring-[0.5px] ring-[#052D42] py-0.5 rounded-[5px] text-[#052D42] text-[13px]'>
                                                    <p>E-commerce</p>
                                                </div>
                                                <div className='bg-blue-400   px-3 ring-[0.5px] ring-[#052D42] py-0.5 rounded-[5px] text-[#052D42] text-[13px]'>
                                                    <p>Hospitality</p>
                                                </div>
                                                <div className='bg-blue-400   px-3 ring-[0.5px] ring-[#052D42] py-0.5 rounded-[5px] text-[#052D42] text-[13px]'>
                                                    <p>Artificial Intelligence</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row items-center justify-between pl-2 w-[98%]'>
                                                <div className='flex  flex-row items-center justify-center w-[70%]'>
                                                    <Image src={Coffee} alt="Coffee" className='hidden sm:flex' height={80} />
                                                    <p className="text-[10.5px] text-gray-800 mt-[5px] leading-[15px] ">Crafted a seamless digital ecosystem for coffee shops—mobile ordering, smart POS, and inventory management. Streamlines operations, elevates experiences, and fuels growth through tech-driven café culture.</p>
                                                </div>
                                                
                
                                                <div  className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#BF532C] ring-1 text-xl text-black rounded-[5px] px-4 2xl:py-2 ring-[#8C2020] py-[3px] cursor-pointer hover:bg-[#D98032] group w-fit ">
                                                    <p className="text-[14px] hidden sm:flex leading-[16px]">Check it out</p>
                                                    <p className="text-[14px] flex sm:hidden leading-[16px]">View </p>
                                                    <Image src={Arrow} height={20}  className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                                                </div>
                                            </div>
                                        </div>
                                         
                                    </div>
                
                
            </div>

            <div className='mt-5'>
                <p>We have just started our journey, Stay tuned for more:)</p>
            </div>

            <div className='w-[90vw] min-h-[90vh] flex flex-col mt-[50px] items-center justify-center my-[20px]'>
                <div className='flex flex-row w-[95%] flex items-center  '>
                    <p className='text-[40px] leading-[44px] sm:text-[40px]  w-full'>You Might Also Like Our Latest Blogs</p>
                    <div onClick={handleBlogClick} className="hidden sm:flex bg-[#D98032] flex flex-row w-[210px] h-[40px] items-center justify-center ring-[#BF532C]  ring-1 text-xl text-black rounded-[5px]  2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group">
                                                                        <p className="text-[17px] ">
                                                                            View All Blogs
                                                                        </p>
                                                                        <Image src={Arrow} height={25} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                                                                    </div>
                </div>
                <div>
                    
                <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 w-[85vw] mt-9 mb-4">
                                    <div className="reveal42 px-3 text-black w-full bg-gray-100 rounded-[6px] ring-2 ring-white leading-[17px] h-[60vh] w-full max-w-[285px] flex flex-col items-center justify-center">
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
                                    <div className="reveal43 px-3 text-black w-full bg-gray-100 rounded-[6px] ring-2 ring-white leading-[17px] h-[60vh] w-full max-w-[285px] flex flex-col items-center justify-center">
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
                                    <div className="reveal44 px-3 text-black w-full bg-gray-100 rounded-[6px] ring-2 ring-white leading-[17px] h-[60vh] w-full max-w-[285px] flex flex-col items-center justify-center">
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
                                    <div className="reveal45 px-3 text-black w-full bg-gray-100 rounded-[6px] ring-2 ring-white leading-[17px] h-[60vh] w-full max-w-[285px] flex flex-col items-center justify-center">
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
        </div>
    )
}

export default MainPage