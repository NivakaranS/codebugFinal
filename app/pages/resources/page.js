'use client';
import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Falcon from '../../components/falcon';
import { useState } from 'react';
import { useRouter } from "next/navigation";
import ContactForm from '../../components/contactForm';
import { Element } from "react-scroll";
import MainPage from './main';


const Resources = () => {
    const [navigationClick, setNavigationClick] = useState('Resources');
    const [contactClick, setContactClick] = useState(false);
    
    const router = useRouter();
    
    const onNavigationClick = () => {
        //router.push('/')
            
    }
        
    
    const onContactClick = () => {
        setContactClick(!contactClick);
    }

    const handleTalkClick = () => {
        setContactClick(true)
      }

    

      const handleBlog1Click = () => {
        router.push('/pages/blogs/blog1')
        
    }


      
      const handleBlog2Click = () => {
        router.push('/pages/blogs/blog2')
        
      }
      
      
      const handleBlog3Click = () => {
        router.push('./pages/blogs/blog3')
        
      }
      
      const handleBlog4Click = () => {
        router.push('./pages/blogs/blog4')
        
      }
      
      const handleBlogClick = () => {
        router.push('/pages/blogs')
        
      }
      
      const handleNewsClick = () => {
        router.push('/pages/news/news1')
        
      }

    return(
        <div className="overflow-x-hidden bg-[url('background5.png')] sm:bg-[url('background8.png')] bg-cover bg-left">
            <Navigation  handleTalkClick={handleTalkClick} navigationClick={navigationClick} onNavigationClick={onNavigationClick} />
        
            <MainPage handleNewsClick={handleNewsClick} handleBlogClick={handleBlogClick} handleBlog1Click={handleBlog1Click} handleBlog2Click={handleBlog2Click} handleBlog3Click={handleBlog3Click} handleBlog4Click={handleBlog4Click}/>
          
            <Element name="contact">
                <ContactForm onContactClick={onContactClick} contactClick={contactClick}/>
            </Element>
            <Footer />
        </div>
    )
}

export default Resources