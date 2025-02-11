

import Image from 'next/image'
import Coffeeday from '../../images/coffeeday3.png'
import Arrow from '../../images/rightArrow.png'
import Coffee from '../../images/jobvacancy.png'
import React from 'react'
import Tech from '../../images/techy.png'
import Codebug from '../../images/codebugNew2.png'

const MainPage = () => {
    return (
        <div className='flex flex-col items-center justify-center w-screen py-[50px]'>
            <div className='leading-[45px] space-y-4 mx-[40px] sm:mx-[40px]  md:mx-[0px] flex flex-col items-center'>
                <p className='text-[40px] leading-[45px] sm:text-[50px] md:text-[60px]'>Evolve into a CoDebuger</p>
                <p className=' text-[18px] leading-[23px] sm:text-[23px]  text-yellow-500'>Join our mission to revolutionize the world and create a better place to live</p>
            </div>
            <div className='w-screen my-5 ring-[1.5px] ring-white bg-black py-[20px] flex flex-col items-center justify-center'>
                <div className='grid max-w-[1400px] grid-cols-1 place-items-center md:grid-cols-2 h-[60vh] gap-5 w-[80%]'>
                    <div>
                        <Image src={Codebug} alt="Codebug" className=' h-[150px] lg:h-[190px] w-fit' />

                    </div>
                    <div>
                        <p className='md:w-[100%] lg:w-[80%]'>
                            At CodeBug, we believe in the power of innovation, collaboration, and pushing the boundaries
                            of technology. As a forward-thinking software development company, we're always on the lookout for
                            passionate individuals who are ready to make an impact in the tech world.
                        </p>
                    </div>
                </div>
                
                <div className='flex flex-col max-w-[1400px]  lg:flex-row justify-center min-h-[90vh] py-[20px] items-center mt-5 w-[80%]'>
                    <div className='leading-[35px] mb-[20px] lg:mb-[0px]  w-[80%] flex flex-col lg:items-start items-center justify-center '>
                        <Image className='lg:ml-[40px]' src={Tech} height={280} />
                        <div>
                            <p className='mt-2 text-yellow-400  text-[20px]'>Why CodeBug?</p>
                            <div className='leading-[25px]'>
                                
                                <p className='text-[40px] w-[250px] leading-[38px]'>The CoDebug Vision</p>
                                <p>- Unlock Your Potential</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row min-h-[80vh]'>
                    <div className='flex flex-col md:justify-end  min-h-[80vh]'>
                        <div className='mt-3 w-[80%]'>
                            <p className='text-[19px] text-red-400'>Innovative Culture</p>
                            <p className='text-[13px]'>We foster an environment where creativity meets technology, encouraging fresh ideas and solutions to drive the future of software development.</p>
                        </div>
                        <div className='mt-3 w-[80%]'>
                            <p className='text-[19px] text-red-400'>Collaborative Environment</p>
                            <p className='text-[13px]'>Work in a dynamic, team-oriented atmosphere where every member contributes to shared goals, building strong relationships and creating exceptional products</p>
                        </div>
                        <div className='mt-3 w-[80%]'>
                            <p className='text-[19px] text-red-400'>Growth Opportunities</p>
                            <p className='text-[13px]'>At CoDebug, we prioritize your professional growth, providing with the tools, resources, and opportunities to excel and advance in your career.</p>
                        </div>
                    </div>
                    <div className='flex flex-col  md:justify-start min-h-[80vh] h-[100%]'>
                        <div className='mt-3 w-[80%]'>
                            <p className='text-[19px] text-red-400'>Work-Life Balance</p>
                            <p className='text-[13px]'>Enjoy a flexible work environment that supports your personal well-being, ensuring that you can thrive both in and outside of the workplace.</p>
                        </div>
                        <div className='mt-3 w-[80%]'>
                            <p className='text-[19px] text-red-400'>Exciting Opportunities</p>
                            <p className='text-[13px]'>Engage in challenging and rewarding projects that will help you stay on the cutting edge of technology and develop skills that will shape your future.</p>
                        </div>
                        <div className='mt-3 w-[80%]'>
                            <p className='text-[19px] text-red-400'>Passionate Community</p>
                            <p className='text-[13px]'>Join a team of individuals who share a passion for technology, innovation and creating solutions that matter.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center min-h-[95vh] py-[20px] items-center mt-5 max-w-[1400px] w-[80%]'> 
                    <p className='text-[50px] text-yellow-500'>What We Value</p>
                    <Image className='ml-[0px] mt-[20px]' src={Tech} height={280} />
                    <div className='flex lg:flex-row flex-col l mt-6 justify-between w-[90%]'>
                        <div className='w-[100%]'>
                            <p className='text-[19px] text-red-400'>Passion for Technology</p>
                            <p className='text-[13px] w-[90%]'>We're looking for people who are truly passionate about coding 
                                and the endless possibilities of techology.
                            </p>
                        </div>
                        <div className='w-[100%]'>
                            <p className='text-[19px] text-red-400'>Creativity and Innovation</p>
                            <p className='text-[13px] w-[90%]'>Bring your unique ideas and creative problem-solving skills to 
                                the table. We encourage thinking outside the box!
                            </p>
                        </div>
                        <div className='w-[100%]'>
                            <p className='text-[19px] text-red-400'>Teamwork</p>
                            <p className='text-[13px] w-[90%]'>We believe in the power of collaboration. At CoDebug, we value diversity and the 
                                strength that comes from working together to solve complex challenges.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col mt-[90px] w-full max-w-[80%] mb-7 leading-[35px] sm:leading-[38px] '>
                <p className=' text-[20px] sm:text-[23px] text-yellow-600'>Discover the open postions from</p>
                <p className=' text-[40px] sm:text-[45px]'>Available positions</p>
            </div>
            <div className='flex flex-col space-y-8 sm:flex-row items-center justify-center w-[85%]'>
                <div className='w-[100%] sm:h-[60vh] flex items-center justify-center'>
                    <Image src={Coffee} alt="Coffeeday" height={250} />
                </div>
                <div className='w-[100%] sm:h-[60vh] flex flex-col space-y-5 items-center justify-center'>
                    <p>Interested in joining CoDebug? Send your resume and portfolio(if applicable) to 
                        info@codebug.lk. Be sure to include a brief letter that highlights why you'd be 
                        a great fit for our team.
                    </p>
                    <p>
                        We look forward to hearing from you and exploring the possibilities of working 
                        together to innovate, create, and code a better future.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MainPage