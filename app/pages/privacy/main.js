

import Image from 'next/image'
import Coffeeday from '../../images/coffeeday3.png'

import Coffee from '../../images/coffeeday.png'
import React from 'react'
import Quantum from '../../images/quantum.jpg'
import AI from '../../images/aii.jpg'
import Arrow from '../../images/rightArrow2.png'
import Cloud from '../../images/cloud.jpg'
import Security from '../../images/security.jpg'


const MainPage = () => {
    return (
        <div className='flex flex-col items-center justify-center w-screen py-[25px]'>
            <div className=" shadow-lg bg-[url('/privacyback3.png')] bg-cover bg-center  h-[40vh] overflow-hidden flex justify-end rounded-[10px]  py-[20px] ring-1 ring-black  flex flex-col w-full max-w-[85vw] mb-7 leading-[43px] ">
                
                <div className='px-[20px] leading-[50px]'>
 
                </div>
                
            </div>
            <div className=' bg-white rounded-[20px] py-[50px] px-[35px] text-black max-w-[85vw] w-full flex flex-col  space-y-[10px]'>
                <div>
                    
                    <p>Effective Date: 02/09/2025</p>
                    <p>Last Updated: 02/07/2025</p>
                </div>
                <div className='flex flex-col space-y-2'>
                    <p>At Codebug, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, share, and safeguard your data when you visit our website or use our services.</p>
                    <p>By accessing or using our website, you agree to the terms outlined in this Privacy Policy. If you do not agree with these terms, please do not use our services.</p>
                </div>
                <p className='text-[20px]'>1. Information We Collect</p>
                <div className='flex pl-7 flex-col space-y-1'>
                    <p>We collect various types of information to provide and improve our services</p>
                    <div className='flex flex-col space-y-1'>
                        <p>1.1 Personal Information</p>
                        <p>Personal information is data that identifies you as an individual. We collect this information when you:</p>
                        <div>
                        <p>• Fill out forms on our website(contact forms)</p>
                        <p>• Subscribe to our newsletters or marketing communications.</p>
                        <p>• Request quotes or inquire about our services.</p>
                        <p>• Provide feedback or participate in surveys.</p>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <p>1.2 Non-Personal Information</p>
                        
                        <p>Non-personal information does not directly identify you but helps us analyze website traffic and improve user experience. This includes:</p>
                        <div>
                        <p>• Device information: Browser type, operating system, screen resolution, etc.</p>
                        <p>• Usage Data: Pages visited, time spent on pages, referral sources, and click activity.</p>
                        <p>• Cookies & Tracking Technologies: See Section 4 for details.</p>
                        </div>
                    </div>

                </div>
                <p className='text-[20px]'>2. How We Use Your Information</p>
                <div className='flex pl-7 flex-col space-y-1'>
                    
                    <p>We use collected data for the following purposes:</p>
                    <div >
                        <p>2.1 Service Improvement</p>
                        <p>• Enhance website functionality and user experience.</p>
                        <p>• Analyze trends to improve services and content.</p>
                        
                    </div>
                    <div>
                        <p>2.2 Communication</p>
                        <p>• Respond to inquiries, requests, and feedback.</p>
                        <p>• Send newsletters, updates and promotional content(only with user consent).</p>
                        <p>• Notify users of policy changes or services updates.</p>
                    </div>
                    <div>
                        <p>2.3 Security & Comliance</p>
                        <p>• Protect against fraud, unauthorized access, and security threats.</p>
                        <p>• Comply with legal obligations and regulatory requirements.</p>
                    </div>

                </div>
                <p className='text-[20px]'>3. How We Share Your Information</p>
                <div className='flex pl-7 flex-col space-y-1'>
                    
                    <p>We do not sell, rent, or trade personal information. However, we may share it with trusted third parties in the following cases:</p>
                    <div className='flex flex-col space-y-1'>
                        <p>3.1 Service Providers</p>
                        <p>We work with third-party vendors to help operate our website and services. These may include:</p>
                        <div>
                        <p>• Hosting providers.</p>
                        <p>• Email marketing services.</p>
                        <p>• Analytics tools(e.g., Google Analytics).</p>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <p>3.2 Legal Compliance</p>
                        
                        <p>We may disclose personal information if required by law or in response to legal processes, such as:</p>
                        <div>
                        <p>• Court orders, subpoenas, or regulatory requests.</p>
                        <p>• Preventing fraud, cyber threats, or security risks.</p>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <p>3.3 Business Transfers</p>
                        <p>If we undergo a business merger, acquisition, or asset sale, your data may be transferred as part of that transaction.</p>
                    </div>
                </div>
                <p className='text-[20px]'>4. Cookies & Tracking Technologies</p>
                <div className='flex pl-7 flex-col space-y-1'>
                    
                    <p>Our website uses cookies and similar tracking technologies to enhance user experience and analyze website traffic.</p>
                    <div>
                        <p>4.1 Types of Cookies We Use</p>
                        <p>• Essential cookies: Required for core website functions (e.g., security, login sessions).</p>
                        <p>• Performance Cookies: Collect anonymous usage data to improve website performance.</p>
                        <p>• Functional Cookies: Store user preferences and settings.(e.g., language settings)</p>
                        <p>• Marketing Cookies: Track user activity for advertising and personalized content.</p>
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <p>4.2 Managing Cookies</p>
                        <p>Users can modify cookie settings through browser preferences. However, disabling cookies may affect website functionality.</p>
                        <div>
                        <p>• Disable Cookies in browser settings</p>
                        <p>• Use "Do Not Track" features (if supported by the browser).</p>
                        </div>
                    </div>
                </div>
                <p className='text-[20px]'>5. Data Security & Retention</p>
                <div className='flex pl-7 flex-col space-y-1'>
                    
                    <p>We take industry-standard security measures to protect user data:</p>
                    <div>
                    <p>• Encryption: Secure data transmission using SSL/TLS encryption.</p>
                    <p>• Access Controls: Limited access to authorized personnel only.</p>
                    <p>• Regular Audits: Routine security checks to prevent vulnerabilities</p>
                    </div>
                    <div >
                        <p>5.1 Data Retention</p>
                        <p>We retain user data only as long as necessary for service delivery and legal compliance. After this period, data is securely deleted.</p>
                    </div>
                </div>
                <p className='text-[20px]'>6. User Rights & Choices</p>
                <div className='flex pl-7 flex-col space-y-1'>
                    
                    <p>Users have the following rights regarding their personal information:</p>
                    <div>
                        <p>6.1 Access Their Data:</p>
                        <p>Request a copy of personal information we hold.</p>
                    </div>
                    <div>
                        <p>6.2 Correct Inaccuracies:</p>
                        <p>Update or modify their details.</p>
                    </div>
                    <div>
                        <p>6.3 Delete Data:</p>
                        <p>Request data deletion(subject to legal obligations).</p>
                    </div>
                    <div>
                        <p>6.4 Opt Out of Marketing:</p>
                        <p>Unsubscribe from marketing newsletters at any time.</p>
                    </div>
                    <p>To exercise these rights, contact us at info@codebug.lk</p>
                </div>
                <p className='text-[20px]'>7. Third-Party Links & External Services</p>
                <div className='flex pl-7 flex-col space-y-1'>
                    
                    <p>Our website may contain links to third-party websites, applications, or services. We are not responsible for their privacy practices and recommend reviewing their policies before engaging with them.</p>
                </div>
                <p className='text-[20px]'>8. Policy Updates & Changes</p>
                <div className='flex pl-7 flex-col space-y-1'>
                    
                    <p>We may update this Privacy Policy periodically to reflect changes in data practices or legal requirements. Changes will be posted on this page, and significant updates will be communicated via email or website notifications.</p>
                    <p>Last updated: 02/07/2025</p>
                </div>
                <p className='text-[20px]'>9. Contact Us</p>
                <div className='flex pl-7 flex-col space-y-1'>
                    
                    <p>For privacy-related inquiries, please contact us:</p>
                    <div>
                    <p>Email: info@codebug.lk</p>
                    <p>Website: www.codebug.lk</p>
                    </div>
                </div>                        
            </div>
        </div>
    )
}

export default MainPage