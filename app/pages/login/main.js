

import Image from 'next/image'
import Coffeeday from '../../images/coffeeday3.png'

import Coffee from '../../images/coffeeday.png'
import React from 'react'
import Quantum from '../../images/quantum.jpg'
import AI from '../../images/aii.jpg'
import Arrow from '../../images/rightArrow2.png'
import Cloud from '../../images/cloud.jpg'
import Security from '../../images/security.jpg'
import Codebug from '../../images/codebugNew.png'




const MainPage = ({handleBlogClick}) => {
    return (
        <div className='flex flex-col items-center justify-center w-screen pt-[25px] pb-[50px]'>
            <div className='bg-gray-200 text-black max-w-[1400px] h-[82vh] my-[8px] overflow-hidden flex  rounded-[10px] ring-1 ring-black  flex flex-col md:flex-row w-[84vw]  '>
                <div className='w-[100%] flex items-center justify-center'>
                    <Image src={Codebug} className=' 2xl:h-[200px] h-[160px] py-[20px]  sm:h-[180px] w-fit' />
                </div>
                <div className='w-[100%] h-[100%] flex  bg-white flex pt-[50px] md:pt-[0px] flex-col items-center py-[20px] md:justify-center'>
                    <p className='text-[30px]'>Welcome back:)</p>
                    <div className='flex flex-col space-y-[3px] mt-[10px]'>
                        <p>Username</p>
                        <input className='ring-1 px-3 py-1.5 text-black ring-gray-500 rounded font w-[280px]'/>
                    </div>
                    <div className='flex flex-col space-y-[3px] mt-[10px]'>
                        <p>Password</p>
                        <input className='ring-1 px-3 py-1.5 text-black ring-gray-500 rounded font w-[280px]'/>
                    </div>
                    
                    <div onClick={handleBlogClick} className="mt-[15px] bg-[#D98032] flex flex-row items-center justify-center ring-[#BF532C] ring-1 text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 w-[280px] cursor-pointer hover:bg-[#D98032] group">
                                                                        <p className="text-[16px]">
                                                                            Login
                                                                        </p>
                                                                        
                                                                    </div>
                    <p className='text-[12px] leading-[14px] w-[285px] text-center mt-1'>By logging in, you agree to our <span className='cursor-pointer hover:underline'>Terms and Conditions</span> and <span className='cursor-pointer hover:underline'>Privacy Policy.</span></p>
                </div>
            </div>
            
          
        </div>
    )
}

export default MainPage