'use client';
import React from 'react';



import { useState } from 'react';
import { useRouter } from "next/navigation";

import { Element } from "react-scroll";
import MainPage from './main';
import dynamic from 'next/dynamic';

const Navigation = dynamic(() => import("../../components/Navigation"), { ssr: false });
const Footer = dynamic(() => import("../../components/Footer"), { ssr: false });
const Falcon = dynamic(() => import("../../components/falcon"), { ssr: false });
const ContactForm = dynamic(() => import("../../components/contactForm"), { ssr: false });

const BlogsMainPage = () => {
    const [navigationClick, setNavigationClick] = useState('Resources');
    const [contactClick, setContactClick] = useState(false);
    const router = useRouter();
    
        
    
    const onContactClick = () => {
        setContactClick(!contactClick);
    }

   

    

  

    
      const handleBlog1Click = () => {
        router.push('/pages/blogs/blog1')
        
    }


      
      const handleBlog2Click = () => {
        router.push('/pages/blogs/blog2')
        
      }
      
      
      const handleBlog3Click = () => {
        router.push('/pages/blogs/blog3')
        
      }
      
      const handleBlog4Click = () => {
        router.push('/pages/blogs/blog4')
        
      }
      
      const handleBlogClick = () => {
        router.push('/pages/blogs')
        
      }

    return(
        <div className="overflow-x-hidden bg-[url('background8.png')] bg-cover bg-left">
            <Navigation  setContactClick={setContactClick} navigationClick={navigationClick}  />
        
            <MainPage handleBlogClick={handleBlogClick} handleBlog1Click={handleBlog1Click} handleBlog2Click={handleBlog2Click} handleBlog3Click={handleBlog3Click} handleBlog4Click={handleBlog4Click}/>
            <Falcon/>
            <Element name="contact">
                <ContactForm onContactClick={onContactClick} contactClick={contactClick}/>
            </Element>
            <Footer />
        </div>
    )
}

export default BlogsMainPage