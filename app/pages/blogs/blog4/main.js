

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
                <Image src={Security} alt="Quantum" className=" h-[200%] w-[100%]" />
            </div>
            <div className='relative top-[-100px] flex max-w-[1400px] w-[90vw] h-[100%] flex-row justify-center'>
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
                        
                            <p className='text-[35px] leading-[43px] '>Why Security Should Be a Top Priority in Software Development</p>
                            <p className='text-[13px]'>By Nivakaran Shanmugabavan</p>
                    </div>
                    <div className='lg:w-[50%] md:w-[90%] rounded-[10px] px-[40px] py-[20px] text-black  h-[100%] bg-orange-200 flex flex-col space-y-1 mb-4 '>
                        <p className='text-red-800 text-[20px]   '>What we are going to cover:</p>
            
                            <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>1. Protecting Sensitive Data</p>
                        
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>2. Preventing Financial Loss</p>
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>3. Building Customer Trust</p>
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>4. Complying with Legal and Regulatory Requirements</p>
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>5. Preventing Cyberattacks and Exploits</p>
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>6. Long-Term Sustainability and Growth</p>
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>7. Shifting Left: Incorporating Security Early</p>
                        <p className='text-[15px] px-[20px] rounded py-[5px] hover:bg-white cursor-pointer'>8. Conclusion</p>

                    </div>
                    <div className='flex lg:w-[50%] w-[80%] md:w-[75%] flex-col  space-y-4'>
                        <p>In today’s digital age, cybersecurity threats are becoming more sophisticated and prevalent, making it crucial for businesses to prioritize security in their software development lifecycle. Cyberattacks such as data breaches, ransomware, and other forms of malicious activity can have devastating effects on an organization’s reputation, customer trust, and bottom line. In this blog, we’ll explore why security should be a top priority in software development and how developers can integrate security measures into every phase of the development process.</p>
                        <div>
                            <p className='font-bold text-[18px]'>1. Protecting Sensitive Data</p>
                            <p>With the increasing amount of personal and financial data being handled by applications, protecting sensitive information is of utmost importance. Cybercriminals target vulnerabilities in software systems to steal data, often with malicious intent. Without proper security measures, applications are at risk of exposing valuable customer data, including usernames, passwords, financial details, and personal identifiers. This could result in significant legal and financial consequences, including fines, lawsuits, and the loss of customer trust.</p>
                            <p>Security measures like data encryption, secure authentication, and data masking should be implemented throughout the development process to safeguard sensitive data.</p>
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>2. Preventing Financial Loss</p>
                            <p>Data breaches and security incidents can be costly, both directly and indirectly. Beyond the immediate financial cost of addressing the breach, there are additional expenses related to customer notifications, legal fees, and regulatory fines. Furthermore, businesses may face reputational damage that could result in customer churn and reduced sales.</p>
                            <p>Prioritizing security during the software development process helps to avoid these potential losses by ensuring that security vulnerabilities are addressed proactively rather than reactively. Investing in security upfront is far less costly than dealing with the aftermath of a breach.</p>
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>3. Building Customer Trust</p>
                            <p>In the age of data breaches and cyberattacks, consumers are more aware of the risks to their personal information. They expect businesses to take their data security seriously and implement robust measures to protect it. If a company suffers a security breach, customer trust is quickly eroded, and it can take years to rebuild that trust, if at all.</p>
                            <p>By implementing strong security protocols and following best practices in software development, businesses show their customers that they prioritize their safety and privacy. This builds customer loyalty and improves the company’s reputation as a trustworthy and reliable provider.</p>
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>4. Complying with Legal and Regulatory Requirements</p>
                            <p>In many industries, there are strict regulations and laws in place to ensure that companies protect customer data and handle it responsibly. For example, General Data Protection Regulation (GDPR) in Europe, Health Insurance Portability and Accountability Act (HIPAA) for healthcare in the United States, and the Payment Card Industry Data Security Standard (PCI DSS) for payment processing all set clear guidelines for data security.</p>
                            <p>Failure to comply with these regulations can result in hefty fines, legal action, and a loss of credibility in the marketplace. Building security into the software development process ensures compliance with these laws, reducing the risk of legal repercussions.</p>

                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>5. Preventing Cyberattacks and Exploits</p>
                            <p>Cyberattacks are increasingly targeting software vulnerabilities, with attackers exploiting weaknesses in applications to gain unauthorized access, disrupt services, or steal data. The earlier security is integrated into the development lifecycle, the less likely it is that attackers will find exploitable vulnerabilities.</p>
                            <p>Adopting a secure coding approach and conducting regular penetration testing and security audits can help identify and mitigate vulnerabilities before they become an easy target for cybercriminals. It’s crucial to incorporate security practices such as input validation, output encoding, and regular patching into the development process to reduce the risk of exploitation.</p>
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>6. Long-Term Sustainability and Growth</p>
                            <p>Security is not just a one-time concern; it’s an ongoing process that evolves with changing technologies and threats. Software systems require regular updates, patches, and improvements to address emerging security risks. By embedding security in the software development lifecycle, businesses can ensure their applications remain secure and compliant over time.</p>
                            <p>Additionally, as businesses scale, their security needs will grow, requiring a flexible and adaptive security strategy. Building a strong security foundation during the development phase sets the stage for sustainable growth and protects the company as it expands.</p>

                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>7. Shifting Left: Incorporating Security Early</p>
                            <p>The traditional approach to security often involved testing for vulnerabilities after development was complete, but this reactive method is no longer sufficient in today’s fast-paced development environment. The shift-left approach emphasizes integrating security from the very beginning of the software development lifecycle. This includes threat modeling, secure design, and code reviews during the planning and development phases.</p>
                            <p>By incorporating security early, teams can identify potential risks before they become problems and avoid costly rework later in the process. The earlier security is integrated into development, the more cost-effective and efficient it becomes.</p>
                        </div>
                        <div>
                            <p className='font-bold text-[18px]'>Conclusion</p>
                            <p>Security is no longer optional in software development – it’s a critical requirement. With the increasing number of cyberattacks, regulatory demands, and growing customer expectations, software developers must prioritize security at every stage of the development lifecycle. By implementing best practices such as secure coding, data encryption, regular testing, and adopting a shift-left approach, businesses can protect sensitive data, build customer trust, and ensure long-term success.</p>
                            <p>At Codebug, we recognize the importance of security in software development and follow industry-leading practices to ensure that the applications we create are robust, secure, and compliant. Contact us today to learn how we can help you integrate security into your software development process and safeguard your business from evolving cyber threats.</p>
                        </div>
                        
                    </div>
                </div>
                
            </div>
           
           <div className='relative top-[-5px] mt-[10px]  mb-[10px] '>
                <p className=' text-[40px]'>You might also like</p>
                <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xl:w-[1250px]  w-[100%] mt-9 mb-4">
                                                                <div className="reveal42 px-3 text-black w-full bg-gray-100 rounded-[6px] ring-2 ring-white leading-[17px]  sm:h-full h-[380px] max-h-[390px] w-full max-w-[285px] flex flex-col items-center justify-center">
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
                                                                <div className="reveal43 px-3 text-black w-full bg-gray-100 rounded-[6px] ring-2 ring-white leading-[17px]  sm:h-full  h-[380px] max-h-[390px] w-full max-w-[285px] flex flex-col items-center justify-center">
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
                                                                <div className="reveal44 px-3 text-black w-full bg-gray-100 rounded-[6px] ring-2 ring-white leading-[17px]  sm:h-full  h-[380px] max-h-[390px] w-full max-w-[285px] flex flex-col items-center justify-center">
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
                                                                
                                                                
                                                            </div>
           </div>
        </div>
    )
}

export default MainPage