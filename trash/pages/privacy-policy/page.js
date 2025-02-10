'use client';
import React from 'react';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import Falcon from '../Falcon/page';
import { useState } from 'react';
import { useRouter } from "next/router";
import ContactForm from '../Components/contactForm';
import { Element } from "react-scroll";
import MainPage from './main';

const Resources = () => {
    const [navigationClick, setNavigationClick] = useState('');
    const [contactClick, setContactClick] = useState(false);
    const router = useRouter();
    
    const onNavigationClick = () => {
        router.push('/')
            
    }
        
    
    const onContactClick = () => {
        setContactClick(!contactClick);
    }

    const handleTalkClick = () => {
        setContactClick(true)
      }

    

    const handleCareerClick = () => {
        router.push('./careers')
        
    }
    
    const handleResourceClick = () => {
        router.push('./resources')
        
    }

    const handlePortfolioClick = () => {
        router.push('./portfolio')

      }
    

      const handleBlog1Click = () => {
        router.push('./resources/blogs/blog1')
        
    }


      
      const handleBlog2Click = () => {
        router.push('./resources/blogs/blog2')
        
      }
      
      
      const handleBlog3Click = () => {
        router.push('./resources/blogs/blog3')
        
      }
      
      const handleBlog4Click = () => {
        router.push('./resources/blogs/blog4')
        
      }
      
      const handleBlogClick = () => {
        router.push('./resources/blogs')
        
      }

    return(
        <div className="overflow-x-hidden bg-[url('background8.png')] bg-cover bg-left">
            <Navigation handlePortfolioClick={handlePortfolioClick} handleTalkClick={handleTalkClick} handleResourceClick={handleResourceClick} handleCareerClick={handleCareerClick} setContactClick={setContactClick} navigationClick={navigationClick} onNavigationClick={onNavigationClick} />
        
            <MainPage handleBlogClick={handleBlogClick} handleBlog1Click={handleBlog1Click} handleBlog2Click={handleBlog2Click} handleBlog3Click={handleBlog3Click} handleBlog4Click={handleBlog4Click}/>
          
            <Element name="contact">
                <ContactForm onContactClick={onContactClick} contactClick={contactClick}/>
            </Element>
            <Footer />
        </div>
    )
}

export default Resources