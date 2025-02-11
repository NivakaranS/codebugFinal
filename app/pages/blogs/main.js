

import Image from 'next/image'
import Coffeeday from '../../images/coffeeday3.png'

import Coffee from '../../images/coffeeday.png'
import React from 'react'
import Quantum from '../../images/quantum.jpg'
import AI from '../../images/aii.jpg'
import Arrow from '../../images/rightArrow2.png'
import Cloud from '../../images/cloud.jpg'
import Security from '../../images/security.jpg'

import dynamic from 'next/dynamic'

const Blogs = dynamic(() => import("../../components/Blogs-new"), { ssr: false });

const MainPage = ({handleBlog1Click, handleBlog2Click, handleBlog3Click, handleBlog4Click, handleBlogClick}) => {


    return (
        <div className='flex flex-col items-center justify-center w-screen py-[25px]'>
            <div className=" shadow-lg bg-[url('/blogsback2.png')] bg-cover bg-center h-[40vh] overflow-hidden flex justify-end rounded-[10px]  py-[20px] ring-1 ring-black  flex flex-col max-w-[1400px] w-[85vw] mb-7 leading-[43px] ">
                
                <div className='px-[20px] leading-[50px]'>

                </div>
                
            </div>
            <p className='max-w-[80vw] w-full mb-4'>Welcome to the Codebug blog! Here, we share the latest trends, best practices, and insights from the world of software development. Whether you're a seasoned developer or just starting your tech journey, our articles cover a wide range of topics including cutting-edge technologies, coding tips, cloud solutions, security practices, and industry updates. Stay informed with expert opinions, tutorials, and case studies that can help you enhance your skills, grow your business, and stay ahead in an ever-evolving digital world. Explore our blog and discover how innovation meets expertise at Codebug.</p>
            
                          
                        
                            <Blogs/>
                            
            
           
        </div>
    )
}

export default MainPage