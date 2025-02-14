'use client'
import React from 'react';
import Image from 'next/image';
import Logo from '../images/codebugfinal7.png'

import Menu from '../images/menu.png'
import { useState } from 'react';
import Logo2 from '../images/codebugNew.png'
import {Link} from 'react-scroll'
import {useRouter} from 'next/navigation'
import Button1 from './Button1';
import { usePathname } from 'next/navigation';

const Navigation = ({handleTalkClick = null, setContactClick=null, onNavigationClick=null, navigationClick=null}) => {
    const [onMenuClick, setOneMenuClick] = useState(false)
    const router = useRouter();

    const pathname = usePathname();

    //Function to handle navigation
    const handleNavigate = () => {
        router.push('/pages/login')
    }

    const handleResourceClick = () => {
        router.push('/pages/resources')
    }
    const handlePortfolioClick = (e) => {
        router.push('/pages/portfolio')

    }

    const handleCareerClick = () => {
        router.push('/pages/careers')
    }

    const handleHomeClick = (e) => {
        router.push('/')
        onNavigationClick(e)
        
        
    }

    

    const onMenuClickHandler = () => {
        setOneMenuClick(!onMenuClick)
    }


    const onNavigationItemClick = (e) => {
        
        if(pathname != '/') {
            handleHomeClick()
        }
        
        setOneMenuClick(false)
        onNavigationClick(e)
        
    }

    const onOverlayClick = () => {
        setOneMenuClick(false)
    }

    const handleTalkClick2 = () => {
        handleTalkClick()
        setOneMenuClick(false)
    }

    
    return(
        <div className=' flex  justify-center items-center w-[100vw] h-16 z-50 text-black relative  '>
            <nav className=' fixed ring-1 ring-black lg:flex hidden flex-row justify-between shadow-lg rounded-[10px] mt-5 bg-white items-center md:w-[95vw] h-[68px] p-5 max-w-[1200px]'>
                <a href="https://www.codebug.lk"><Image alt="arrow" className='cursor-pointer' src={Logo} height={43}/></a>
                <ul className='flex flex-row text-[18px] space-x-7 '>
                    
                    <Link to="home" offset={-70} smooth={true} duration={500} onClick={handleHomeClick} className={`${navigationClick=='Home'? 'text-[#BF532C]': 'text-black'} hover:text-[#D98032] cursor-pointer`}>Home</Link>
                    <Link to="about" offset={58} smooth={true} duration={500} onClick={handleHomeClick} className={`${navigationClick=='About'? 'text-[#BF532C]': 'text-black'} hover:text-[#D98032] cursor-pointer`}>About</Link>
                    <Link to="services" smooth={true} duration={500} onClick={handleHomeClick} className={`${navigationClick=='Services'? 'text-[#BF532C]': 'text-black'} hover:text-[#D98032] cursor-pointer`}>Services</Link>
                    <li onClick={handlePortfolioClick} className={`${navigationClick=='Portfolio'? 'text-[#BF532C]': 'text-black'} hover:text-[#D98032] cursor-pointer`}>Portfolio</li>
                    <li onClick={handleResourceClick}  className={`${navigationClick=='Resources'? 'text-[#BF532C]': 'text-black'} hover:text-[#D98032] cursor-pointer`}>Resources</li>
                    <li onClick={handleCareerClick}  className={`${navigationClick=='Careers'? 'text-[#BF532C]': 'text-black'} hover:text-[#D98032] cursor-pointer`}>Careers</li>
                </ul>
                <div className='flex flex-row space-x-3 text-[15px]'>
                    <Link onClick={handleTalkClick}  to="contact" offset={0} smooth={true} duration={500}  className='flex shadow-[0_0px_2px_rgba(0,0,0,0.9)] cursor-pointer justify-center text-black text-[16px] items-center bg-[#39B5C8] hover:bg-[#41CAD9]  ring-blue-800 rounded-[5px]  px-4'>
                        <p>Let&apos;s talk</p>
                    </Link>
                    

                    <Button1 ButtonName='Login' ButtonFunction={handleNavigate}/>
                </div>
            </nav>
            <nav className='fixed ring-1 ring-black hidden lg:hidden md:flex sm:flex flex-row justify-between rounded-[10px] mt-5 bg-white items-center  sm:w-[90vw] h-[10vh] p-5'>
                <a href="https://www.codebug.lk"><Image alt="arrow" src={Logo} className='cursor-pointer h-[40px] w-[auto]'/></a>
                <Image alt="arrow" onClick={onMenuClickHandler} src={Menu} className='h-[20px] w-[28px] invert brightness-100 cursor-pointer'/>
            </nav>
            <nav className='fixed ring-1 ring-black sm:hidden flex flex-row justify-between rounded-[10px] mt-3 bg-white items-center  w-[95vw] h-[9vh] pl-3 pr-5'>
            <a href="https://www.codebug.lk"><Image alt="arrow" src={Logo} className='cursor-pointer h-[40px] w-[auto]'/></a>
                <Image alt="arrow" onClick={onMenuClickHandler} src={Menu} className='h-[20px] w-[28px] invert brightness-100 cursor-pointer'/>
            </nav>
            <div
                onClick={onOverlayClick}
                className={`${onMenuClick ? 'h-[100vh]' : 'h-[0vh]'} cursor-auto fixed w-[100vw] bg-overlayBlack top-0 right-0 z-40`}
                role="button"
                aria-expanded={onMenuClick}
                >
                <div
                    className={`${onMenuClick ? 'translate-x-0 z-50' : '-translate-x-[100vw]'} 
                    duration-500 bg-white w-[300px] h-[100vh] fixed top-0 left-0 ring-4 ring-gray-700`}
                >
                    <div className='flex w-[100%] py-4 justify-center items-center'>
                        <Image alt="arrow" src={Logo2} height={120} />
                    </div>
                    <div className='flex flex-col items-center justify-center  w-[100%]'>
                        <ul className='flex flex-col w-[100%] text-[17px]'>
                            <Link to="home" offset={-70} smooth={true} duration={500} onClick={onNavigationItemClick} className='py-3 px-4 ring-[0.5px] cursor-pointer hover:bg-gray-200 ring-gray-500'>
                                <p className='w-fit'>Home</p>
                            </Link>
                            <Link to="about" offset={-10} smooth={true} duration={500} onClick={onNavigationItemClick} className='py-3 px-4 border-t-[0.5px] border-gray-500 cursor-pointer hover:bg-gray-200 ring-gray-500'>
                                <p>About</p>
                            </Link>
                            <Link to="services" offset={0} smooth={true} duration={500} onClick={onNavigationItemClick} className='py-3 px-4 border-t-[0.5px] border-gray-500 cursor-pointer hover:bg-gray-200 ring-gray-500'>
                                <p>Services</p>
                            </Link>
                            <li onClick={handlePortfolioClick} className='py-3 px-4 border-t-[0.5px] border-gray-500 cursor-pointer hover:bg-gray-200 ring-gray-500'>
                                <p>Portfolio</p>
                            </li>
                            <li onClick={handleResourceClick} className='py-3 px-4 border-t-[0.5px] border-gray-500 cursor-pointer hover:bg-gray-200 ring-gray-500'>
                                <p>Resources</p>
                            </li>
                            <li onClick={handleCareerClick} className='py-3 px-4 border-b-[0.5px] border-t-[0.5px] border-gray-500 cursor-pointer hover:bg-gray-200 ring-gray-500'>
                                <p>Careers</p>
                            </li>

                        </ul>
                    </div>
                    <div className='flex flex-col space-y-2 items-center justify-center mt-5'>
                        
                        <Link to="contact" offset={0} smooth={true} duration={500} onClick={handleTalkClick2} className='flex shadow-[0_0px_2px_rgba(0,0,0,0.9)] bg-[#39B5C8] hover:bg-[#41CAD9]  ring-blue-800 w-fit  flex-row space-x-3 text-[16px] cursor-pointer  text-white ring-[0.5px] ring-black rounded-[5px] py-1 px-[50px]'>
                            <p>Let&apos;s talk</p>
                        </Link>
                        <Button1 ButtonFunction={handleNavigate}  />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navigation;