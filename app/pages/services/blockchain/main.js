

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
import dynamic from 'next/dynamic'



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
                            <p className=' text-[40px] mt-[10px] sm:text-[48px] text-[#41CAD9]' >Blockchain Development</p>
                        </div>
                        <p className=' text-[20px] leading-[25px]  sm:leading-[36px] lg:leading-[50px] sm:text-[35px]'>Secure, Scalable & Smart Blockchain Solutions</p>
                    </div>
                    <p className=' w-[70vw] 2xl:w-[1400px] mb-5 max-w-[1000px] text-center text-[18px] text-[#F1A230] w-full'>Leverage the power of blockchain to enhance security, transparency, and efficiency in your business operations. From smart contracts and decentralized applications (DApps) to private blockchain networks, we build custom blockchain solutions tailored to your needs.</p>
                    <div className="flex flex-row justify-center space-x-5 mt-2">
                        <Link to="contact" offset={15} smooth={true} duration={500} onClick={handleTalkClick} className=" reveal4 bg-white text-xl text-black ring-1 ring-black rounded-[5px] px-5 2xl:py-2  py-1.5 cursor-pointer hover:ring-white hover:bg-black hover:text-white">
                            <p className=" 2xl:text-[23px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[17px]">Request a Demo</p>
                        </Link>
                        <Link to="aiservices" offset={-55} smooth={true} duration={500}  className="reveal4 bg-[#D98032] flex flex-row items-center justify-center ring-[#BF532C] ring-1 text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020]  py-1 sm:py-1.5 cursor-pointer hover:bg-[#D98032] group">
                            <p className="2xl:text-[23px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[17px]">
                                Explore Blockchain
                            </p>
                            <Image alt="arrow" src={Arrow}  className="ml-2 h-[20px] sm:h-[25px] w-fit transition-transform duration-300 group-hover:translate-x-2"/>
                        </Link>
                        </div>
                    </div>    
                </div>
                
            <Element name='aiservices'>
                <div className="w-full relative top-[-60px] text-black max-w-[100vw] bg-[url('grid10.png')] bg-[#002A38] ring-[3px] ring-white bg-cover mb-[20px] pt-[70px] flex flex-row items-center justify-center min-h-[110vh]">
                    <div className='w-[83%]  pt-[10px] pb-[40px] h-full flex flex-col  items-center justify-center'>
                        <p className='text-[50px] mb-5 text-[#F1A230]'>Our Blockchain Development Services</p>
                        <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 mx-3  gap-5'>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] leading-[23px] text-gray-800 mb-1'>Smart Contract Development</p>
                                <p className='text-[13px]'>Automate and secure transactions with self-executing smart contracts built on Ethereum, Binance Smart Chain, Solana, and other leading blockchain platforms. Our secure, reliable, and gas-optimized smart contracts ensure seamless execution of agreements.</p>
                            </div>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] text-gray-800 leading-[23px] mb-1'>Decentralized Applications(DApps)</p>
                                <p className='text-[13px]'>We design and develop powerful, user-friendly DApps that run on decentralized networks, ensuring high security, transparency, and reliability across various industries like finance, healthcare, and supply chain.</p>
                            </div>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] text-gray-800 leading-[23px] mb-1'>Private & Permissioned Blockchain Networks</p>
                                <p className='text-[13px]'>Need a secure and scalable private blockchain for internal operations? We build enterprise-grade blockchain networks that enable businesses to manage transactions privately while maintaining transparency and efficiency.</p>
                            </div>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] text-gray-800 leading-[23px] mb-1'>Crypto Wallet Development</p>
                                <p className='text-[13px]'>Enable secure storage, transfer, and management of cryptocurrencies with custom-built crypto wallets supporting multiple assets, advanced security features, and seamless integration with blockchain networks.</p>
                            </div>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] text-gray-800 leading-[23px] mb-1'>NFT Marketplace Development</p>
                                <p className='text-[13px]'>Tap into the NFT revolution with our custom NFT marketplace solutions. We build feature-rich, secure, and scalable NFT platforms that allow users to mint, buy, sell, and trade digital assets effortlessly.</p>
                            </div>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] text-gray-800 leading-[23px] mb-1'>DeFi (Decentralized Finance) Solutions</p>
                                <p className='text-[13px]'>Unlock financial freedom with DeFi applications like decentralized exchanges (DEXs), lending platforms, staking solutions, and liquidity pools that empower users to transact without intermediaries.</p>
                            </div>
                            <div className='flex px-5 py-5 flex-col items-center bg-white ring-[0.5px] ring-black rounded-[5px] justify-center'>
                                <p className='text-[19px] w-[100%] text-gray-800 leading-[23px] mb-1'>Blockchain Consulting & Strategy</p>
                                <p className='text-[13px]'>Not sure how blockchain fits into your business? Our expert blockchain consultants help you identify opportunities, assess feasibility, and create a strategic roadmap for blockchain adoption.</p>
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
                            <p>What industries can benefit from blockchain technology?</p>
                            <div className='cursor-pointer ' onClick={handlefaq1}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq1 ? 'flex' : 'hidden'} bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>Blockchain is transforming industries like finance, healthcare, supply chain, real estate, gaming, and more, providing security, transparency, and efficiency.</p>
                        </div>
                    </div>
                    
                    <div>
                        <div onClick={handlefaq2} className='flex cursor-pointer ring-[1px] ring-black rounded-[10px] flex-row justify-between px-[20px] py-[10px]  bg-white text-red-800'>
                            <p>What are the advantages of using blockchain for my business?</p>
                            <div className='cursor-pointer ' onClick={handlefaq2}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq2 ? 'flex' : 'hidden'} bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>Blockchain offers decentralization, enhanced security, reduced costs, improved transparency, and automation through smart contracts.</p>
                        </div>
                    </div>

                    <div>
                    <div onClick={handlefaq3} className='flex cursor-pointer ring-[1px] ring-black rounded-[10px] flex-row justify-between px-[20px] py-[10px]  bg-white text-red-800'>
                            <p>Can you build a blockchain-based solution from scratch?</p>
                            <div className='cursor-pointer ' onClick={handlefaq3}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq3 ? 'flex' : 'hidden'} flex-col space-y-2 bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>Yes! We develop custom blockchain solutions tailored to your business model, security requirements, and scalability needs.</p>
                            
                        </div>
                    </div>
                    <div>
                    <div onClick={handlefaq4} className='flex cursor-pointer ring-[1px] ring-black rounded-[10px] flex-row justify-between px-[20px] py-[10px] bg-white text-red-800'>
                            <p>What blockchain platforms do you work with?</p>
                            <div className='cursor-pointer ' onClick={handlefaq4}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq4 ? 'flex' : 'hidden'} bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>We develop solutions on Ethereum, Binance Smart Chain (BSC), Solana, Polygon, Hyperledger, and more, depending on your project’s needs.</p>
                        </div>
                    </div>
                    <div>
                    <div onClick={handlefaq5} className='flex cursor-pointer ring-[1px] ring-black rounded-[10px] flex-row justify-between px-[20px] py-[10px]  bg-white text-red-800'>
                            <p>What is the cost of blockchain development?</p>
                            <div className='cursor-pointer ' onClick={handlefaq5}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq5 ? 'flex' : 'hidden'} bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>The cost varies based on complexity, platform selection, and feature requirements. We provide custom pricing based on your project scope.</p>
                        </div>
                    </div>
                    <div>
                    <div onClick={handlefaq6} className='flex cursor-pointer ring-[1px] ring-black rounded-[10px] flex-row justify-between px-[20px] py-[10px]  bg-white text-red-800'>
                            <p>How secure are your blockchain solutions?</p>
                            <div className='cursor-pointer ' onClick={handlefaq6}>
                                <p></p>
                            </div>
                        </div>
                        <div className={`${faq6 ? 'flex' : 'hidden'} rounded-b-[10px] bg-gray-400 mx-[10px] px-[50px] py-[10px] text-black`}>
                            <p>Security is our top priority. We implement multi-layer security measures, audits, and best practices to protect your blockchain application from vulnerabilities.</p>
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
                    <div className='w-[100%]  min-h-[50vh] flex flex-col items-center justify-center
                     pt-[10px] pb-[20px] sm:w-[80%] md:w-[50%] px-[40px]'>
                        <p className='text-[28px] leading-[35px] sm:text-[35px]'>Let's Discuss Your Blockchain Project Today!</p>
                        <p className='md:w-[80%] mt-5'>Blockchain is the future of secure, decentralized solutions. Whether you need a smart contract, DApp, crypto wallet, or DeFi solution, our expert team is ready to bring your vision to life.</p>
                        <p className='md:w-[80%] mt-5'>Get Started with Blockchain Development Today!</p>
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