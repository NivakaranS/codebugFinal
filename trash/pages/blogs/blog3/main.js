

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
                <Image src={Cloud} alt="Quantum" className=" h-[200%] w-[100%]" />
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
                        
                            <p className='text-[35px] leading-[43px] '>How Cloud Computing is Shaping the Future of Software</p>
                            <p className='text-[13px]'>By Nivakaran Shanmugabavan</p>
                    </div>
                    <div className='lg:w-[50%] md:w-[90%] rounded-[10px] px-[40px] py-[20px] text-black  h-[100%] bg-orange-200 flex flex-col space-y-1 mb-4 '>
                        <p className='text-red-800 text-[20px]   '>What we are going to cover:</p>
            
                            <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>1. scalability and Flexibility </p>
                        
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>2. Cost Efficiency</p>
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>3. Enhanced Collaboration and Productivity</p>
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>4. Security and Disaster Recovery</p>
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>5. Serverless Computing</p>
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>6. Microservices Architecture</p>
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>7. Integration of AI and Machine Learning</p>
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>8. Future Trends in Cloud Computing</p>
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>9. Conclusion</p>
 
                    </div>
                    <div className='flex lg:w-[50%] w-[80%] md:w-[75%] flex-col  space-y-4'>
                        <p>Cloud computing is not just a trend; it has become a cornerstone of modern software development. By providing scalable infrastructure, reducing costs, and enabling flexibility, cloud computing has reshaped how software is built, deployed, and maintained. In this blog, we will explore the significant ways in which cloud computing is shaping the future of software.</p>
                        <div>
                            <p className='font-bold text-[18px]'>1. Scalability and Flexibility</p>
                            <p>One of the most powerful advantages of cloud computing is scalability. Traditional software infrastructure often required businesses to predict their resource needs in advance, leading to either excess capacity or performance issues during peak demand. With cloud computing, resources can scale automatically to meet changing demands. This means businesses only pay for what they use and can ensure that their applications remain responsive, even during traffic surges.</p>
                            <p>For instance, Amazon Web Services (AWS) offers services like auto-scaling, where the cloud environment automatically adjusts to accommodate increased user activity. This flexibility is critical for businesses that experience seasonal spikes, such as e-commerce stores during holiday seasons.</p>
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>2. Cost Efficiency</p>
                            <p>Cloud computing drastically reduces the cost of software development. Traditionally, businesses needed to invest heavily in on-premise servers and infrastructure, often resulting in high capital expenditures. With the cloud, companies adopt a pay-as-you-go model, allowing them to only pay for the resources they consume. This can significantly reduce upfront costs and make cutting-edge infrastructure more accessible to smaller businesses or startups.</p>
                            <p>Instead of purchasing and maintaining servers, businesses can leverage cloud services like storage, computing power, and databases on demand. This makes software development more affordable, as companies no longer need to bear the cost of hardware upgrades or complex IT maintenance.</p>
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>3. Enhanced Collaboration and Productivity</p>
                            <p>Cloud computing has revolutionized how development teams collaborate. Developers, designers, and project managers can access the same files, tools, and environments in real time, regardless of their physical location. Cloud-based tools such as GitHub, GitLab, and Bitbucket allow for seamless version control, code sharing, and project management.</p>
                            <p>Additionally, cloud-based Integrated Development Environments (IDEs) like AWS Cloud9 or Microsoft Visual Studio Codespaces enable developers to write, test, and debug code directly in the cloud. This fosters greater collaboration across geographically dispersed teams and enhances productivity by providing access to development environments from any device</p>
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>4. Security and Disaster Recovery</p>
                            <p>Security remains a top concern for software development, and cloud computing helps address these concerns with robust built-in security measures. Leading cloud providers implement advanced security protocols such as data encryption, firewalls, identity management, and access controls to safeguard sensitive information.</p>
                            <p>Furthermore, cloud computing simplifies disaster recovery. Traditional systems often faced issues related to data loss in case of hardware failures or cyberattacks. Cloud services, on the other hand, offer automated backups and multi-region redundancy, ensuring that data is securely stored and recoverable. This means businesses can quickly restore their operations in the event of a disaster, reducing downtime and financial loss.</p>
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>5. Serverless Computing</p>
                            <p>Serverless computing, a growing trend enabled by cloud platforms, allows developers to build and run applications without having to manage the underlying infrastructure. Services like AWS Lambda, Google Cloud Functions, and Azure Functions allow developers to execute code in response to events (like HTTP requests or file uploads) without provisioning or managing servers.</p>
                            <p>This approach significantly reduces overhead, as developers can focus on writing code rather than managing servers. Serverless computing offers better scalability, faster time to market, and lower costs, as businesses only pay for the execution time of their functions.</p>
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>6. Microservices Architecture</p>
                            <p>Cloud computing has also paved the way for the adoption of microservices architecture, which breaks down complex software applications into smaller, independent services that can be developed, deployed, and scaled independently.</p>
                            <p>Using technologies like Docker and Kubernetes, cloud platforms enable developers to create and deploy microservices that work together seamlessly. This approach offers several benefits, including greater flexibility, improved scalability, and easier maintenance. It also allows businesses to roll out updates or new features without disrupting the entire application.</p>

                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>7. Integration of AI and Machine Learning</p>
                            <p>Cloud computing has made it easier for businesses to integrate Artificial Intelligence (AI) and Machine Learning (ML) into their software applications. Cloud providers offer AI-as-a-Service and ML-as-a-Service that enable businesses to access powerful machine learning tools and pre-trained models without investing in specialized hardware or expertise.</p>
                            <p>For example, platforms like Google Cloud AI, AWS SageMaker, and Microsoft Azure AI provide tools for data analysis, predictive modeling, and automation. These services allow developers to incorporate features like natural language processing (NLP), image recognition, and predictive analytics into their applications, making them more intelligent and user-friendly.</p>
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>8. Future Trends in Cloud Computing</p>
                            <p>The cloud computing landscape is continuously evolving. New advancements like edge computing — which brings computation closer to the data source — are expected to have a significant impact on real-time data processing and low-latency applications.</p>
                            <p>Hybrid cloud solutions, combining private and public cloud models, are gaining popularity as businesses seek to balance security with scalability. Additionally, cloud-native technologies, which are designed to fully leverage cloud environments, will continue to drive the development of more efficient, scalable, and reliable applications.</p>
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>Conclusion</p>
                            <p>Cloud computing is no longer just a buzzword; it’s fundamentally reshaping the way software is developed and deployed. From scalability and cost-efficiency to enhanced collaboration and security, cloud computing is enabling businesses to innovate faster and more efficiently. As the technology continues to evolve, we can expect even more advancements that will help businesses stay competitive in an increasingly digital world.</p>
                            <p>At Codebug, we help businesses leverage the power of cloud computing to build scalable, secure, and high-performance software. Reach out to us today to explore how cloud computing can transform your software development process!</p>
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