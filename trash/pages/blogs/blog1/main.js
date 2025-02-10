

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
                <Image src={Quantum} alt="Quantum" className=" h-[200%] w-[100%]" />
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
                        
                            <p className='text-[35px] leading-[43px] '>The Future of Software Development: Trends to Watch in 2025</p>
                            <p className='text-[13px]'>By Nivakaran Shanmugabavan</p>
                    </div>
                    <div className='lg:w-[50%] md:w-[90%] rounded-[10px] px-[40px] py-[20px] text-black  h-[100%] bg-orange-200 flex flex-col space-y-1 mb-4 '>
                        <p className='text-red-800 text-[20px]   '>What we are going to cover:</p>
            
                            <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>1. AI-Driven Development</p>
                        
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>2. Low-Code and No-Code Development</p>
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>3. Quantum Computing Advancements</p>
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>4. Edge Computing and Decentralized Applications</p>
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>5. Cybersecurity and Secure Coding Practices</p>
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>6. Sustainable Software Engineering</p>
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>7. Extended Reality (XR) Applications</p>
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>8. API-First Development and Microservices</p>
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>9. 5G-Powered Applications</p>
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>10. Ethical AI and Responsible Development</p>
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>11. Conclustion</p>
                    </div>
                    <div className='flex lg:w-[50%] w-[80%] md:w-[75%] flex-col  space-y-4'>
                        <p>As we step into 2025, the world of software development is evolving faster than ever. Emerging technologies, evolving business needs, and changing user expectations are shaping the future of software development. Here are some key trends to watch in 2025:</p>
                        <div>
                            <p className='font-bold text-[18px]'>1. AI-Driven Development</p>
                            <p>Artificial Intelligence (AI) and Machine Learning (ML) are revolutionizing software development. AI-powered tools assist in code generation, bug detection, and software testing, reducing human effort and enhancing productivity. AI-driven low-code and no-code platforms are making software development more accessible, enabling businesses to build applications faster.</p>
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>2. Low-Code and No-Code Development</p>
                            <p>With the rise of low-code and no-code platforms, software development is no longer limited to programmers. These platforms enable business users to create applications through intuitive visual interfaces, reducing dependency on traditional coding. This trend is accelerating digital transformation and innovation across industries.</p>
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>3. Quantum Computing Advancements</p>
                            <p>Quantum computing is on the rise, offering unprecedented computational power. In 2025, developers may begin exploring quantum algorithms for solving complex problems in cryptography, AI, and optimization. While still in its early stages, quantum computing will play a crucial role in the future of software development.</p>
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>4. Edge Computing and Decentralized Applications</p>
                            <p>With the increasing demand for real-time data processing, edge computing is becoming mainstream. Instead of relying solely on centralized cloud servers, developers are leveraging edge devices to process data closer to the source. This trend is especially important for IoT applications, autonomous vehicles, and smart cities.</p>
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>5. Cybersecurity and Secure Coding Practices</p>
                            <p>As cyber threats become more sophisticated, software security is a top priority. In 2025, secure coding practices, AI-powered threat detection, and DevSecOps (integrating security into DevOps) will become standard in software development. Developers will need to focus on building robust applications that can withstand cyberattacks.</p>
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>6. Sustainable Software Engineering</p>
                            <p>Sustainability is becoming a key concern in software development. Developers are optimizing code for energy efficiency, reducing resource consumption, and adopting green computing practices. Sustainable software engineering aims to minimize the environmental impact of software applications.</p>

                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>7. Extended Reality (XR) Applications</p>
                            <p>Extended Reality (XR), including Augmented Reality (AR) and Virtual Reality (VR), is gaining momentum. In 2025, more industries will leverage XR for immersive experiences, from training simulations to virtual collaboration. The rise of the metaverse and spatial computing will further drive demand for XR applications.</p>
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>8. API-First Development and Microservices</p>
                            <p>API-first development is becoming the norm, enabling seamless integration between applications and services. Microservices architecture allows developers to build scalable and modular applications, improving agility and performance. Companies are focusing on API security and governance to enhance interoperability.</p>
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>9. 5G-Powered Applications</p>
                            <p>With the expansion of 5G networks, software developers are creating high-speed, low-latency applications. 5G technology is unlocking new possibilities for real-time streaming, connected devices, and interactive experiences. In 2025, expect to see more applications leveraging 5G for enhanced performance.</p>
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>10. Ethical AI and Responsible Development</p>
                            <p>As AI-driven applications become widespread, ethical considerations in software development are gaining importance. Developers must ensure fairness, transparency, and accountability in AI systems. Regulatory frameworks and AI ethics guidelines will shape the way software is built and deployed.</p>
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <p className='font-bold text-[18px]'>Conclusion</p>
                            <p>The future of software development in 2025 is filled with innovation and transformation. Developers need to stay ahead of these trends to build cutting-edge applications that meet the demands of the digital era. By embracing AI, quantum computing, edge computing, and sustainable practices, the software industry is set to reach new heights.</p>
                            <p>Are you ready for the future of software development? Stay updated, adapt to change, and keep learning to stay ahead in this dynamic field.</p>
                        </div>
                    </div>
                </div>
                
            </div>
           
           <div className='relative top-[-5px] mt-[10px]  mb-[10px] '>
                <p className=' text-[40px]'>You might also like</p>
                <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 w-[60vw] sm:w-[85vw] mt-9 mb-4">
                                    
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