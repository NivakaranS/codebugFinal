

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
import Logo from '../../../images/codebugNew4.png'

const MainPage = ({handleBlog1Click, handleBlog2Click, handleBlog3Click, handleBlog4Click}) => {
    return (
        <div className='flex flex-col items-center justify-center w-screen py-[25px]'>
            <div className="relative top-[-100px] h-[60vh] bg-[url('/techbackground.png')] bg-cover bg-center  w-screen flex items-center justify-center py-[80px] bg-gray-300 overflow-hidden">
                <Image src={Logo} alt="Quantum" className=" h-[100%] mt-[80px] w-fit" />
            </div>
            <div className='relative top-[-100px] flex w-[90vw] h-[100%] flex-row justify-center'>
                <div className='w-[100%] rounded-b-[30px] pt-[30px] pb-[50px]  text-black bg-white flex items-center justify-center flex-col'>
                    <div className=' leading-[35px] w-[80%] lg:w-[50%] mb-[10px]'>
                        <div className='flex flex-row text-[13px] space-x-4 '>
                            <div className='flex flex-row items-center space-x-2'>
                                <Image src={Calender} height={16} />
                                <p className='text-[15px]'>February 09, 2024</p>
                            </div>
                            
                        </div>
                        
                            <p className='text-[35px] leading-[43px] '>Codebug Officially Launched: Innovating Software Development</p>
                            
                    </div>
                    
                    <div className='flex lg:w-[50%] w-[80%] md:w-[75%] flex-col  space-y-4'>
                        <p>We are thrilled to announce the official launch of Codebug, a software development company dedicated to delivering cutting-edge solutions, robust software products, and expert consulting services to businesses and individuals worldwide.</p>
                        <p>Codebug is built with the mission to simplify software development, provide high-quality digital solutions, and help businesses scale efficiently. With a strong focus on innovation and excellence, we specialize in custom software development, enterprise solutions, and technology consulting to meet the unique needs of our clients.</p>
                        
                        <div>
                            <p className='font-bold text-[18px]'>Custom Software Development</p>
                            <p>Tailored software solutions designed to meet specific business requirements.</p>
                            
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>Enterprise Solutions</p>
                            <p>Scalable and secure applications to streamline business operations.</p>
                            
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>Technology Consultation</p>
                            <p>Expert guidance to help businesses implement and optimize tech solutions.</p>
                            <p>By implementing strong security protocols and following best practices in software development, businesses show their customers that they prioritize their safety and privacy. This builds customer loyalty and improves the company’s reputation as a trustworthy and reliable provider.</p>
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>Product Development</p>
                            <p>End-to-end software product development from ideation to deployment.</p>
                            
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>Support & Maintenance</p>
                            <p>Continuous support and updates to ensure seamless performance.</p>
                            
                        </div>
                        <p>With Codebug, businesses can harness the power of technology to drive growth and efficiency. Whether you need a custom-built software solution or expert advice on digital transformation, Codebug is here to assist you.</p>
                    <p>Partner with us today and take your business to the next level!</p>
                    <p>Visit Codebug at www.codebug.lk</p>
                        
                        
                    </div>
                    
                </div>
                
            </div>
           
           <div className='relative top-[-5px] mt-[10px]  mb-[10px] '>
                <p className=' text-[40px]'>You might also like</p>
                <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xl:w-[1250px]  w-[100%] mt-9 mb-4">
                                    <div className="reveal42 px-3 text-black w-full bg-gray-100 rounded-[6px] ring-2 ring-white leading-[17px] h-[400px] sm:h-full max-h-[450px] w-full max-w-[285px] flex flex-col items-center justify-center">
                                        <div className="flex flex-row items-center justify-center bg-red-500 rounded-[8px] overflow-hidden h-[350px] w-[109.5%]">
                                            <Image src={Quantum} alt="Quantum" className=" h-[100%] w-[100%]" />
                                        </div>
                                        <div className="flex flex-col  py-3 w-[100%] h-[80%]">
                                            <div className="text-[11px] ring-[1px] ring-blue-800 w-fit text-blue-900 bg-blue-200 px-2 py-[1.5px] mb-1.5 rounded-[3px]">
                                                <p>Software Engineering</p>
                                            </div>
                                            <p className="text-[16px] leading-[18px] text-gray-900">The Future of Software Development: Trends to Watch in 2025</p>
                                            <p className="text-[11px] leading-[13px] text-gray-600 mt-1">Discover the key trends like AI, low-code, Web3 and more shaping software development in 2025. Stay 
                                                ahead with insights into the industry&apos;s future.
                                            </p>
                                            
                                            <div onClick={handleBlog1Click} className="mt-2 bg-[#F1A230] flex flex-row items-center justify-center ring-[#BF532C] ring-[0.5px] text-xl text-black rounded-[5px] px-4 2xl:py-2 ring-[#8C2020] py-[3px] cursor-pointer  group  ">
                                                <p className="text-sm">Read Article</p>
                                                <Image alt="arrow" src={Arrow} height={15}  className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reveal43 px-3 text-black w-full bg-gray-100 rounded-[6px] ring-2 ring-white leading-[17px] h-[400px] sm:h-full  max-h-[450px] w-full max-w-[285px] flex flex-col items-center justify-center">
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
                                                <Image alt="arrow" src={Arrow} height={15}  className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reveal44 px-3 text-black w-full bg-gray-100 rounded-[6px] ring-2 ring-white leading-[17px] h-[400px] sm:h-full  max-h-[450px] w-full max-w-[285px] flex flex-col items-center justify-center">
                                        <div className="flex flex-row items-center justify-center  rounded-[8px] overflow-hidden h-[350px] w-[109.5%]">
                                            <Image  src={Cloud} alt="Cloud" className=" h-[100%] w-[100%]" />
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
                                                <Image alt="arrow" src={Arrow} height={15}  className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reveal45 px-3 text-black w-full bg-gray-100 rounded-[6px] ring-2 ring-white leading-[17px] h-[400px] sm:h-full  max-h-[450px] w-full max-w-[285px] flex flex-col items-center justify-center">
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
                                                <Image  alt="arrow" src={Arrow} height={15}  className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
           </div>
        </div>
    )
}

export default MainPage