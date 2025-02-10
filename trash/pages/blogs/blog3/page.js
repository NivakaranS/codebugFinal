'use client';
import React from 'react';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import Falcon from '../../../Falcon/page';
import { useState } from 'react';
import { useRouter } from "next/router";
import ContactForm from '../../../components/contactForm';
import { Element } from "react-scroll";
import MainPage from './main';

const Blog1 = () => {
    const [navigationClick, setNavigationClick] = useState('Resources');
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
        router.push('../../careers')
        
    }
    
    const handleResourceClick = () => {
        router.push('../../resources')
        
    }

    const handlePortfolioClick = () => {
        router.push('../../portfolio')

      }
    
      const handleBlog1Click = () => {
        router.push('../blogs/blog1')
        
      }
      
      const handleBlog2Click = () => {
        router.push('../blogs/blog2')
        
      }
      
      
      const handleBlog3Click = () => {
        router.push('../blogs/blog3')
        
      }
      
      const handleBlog4Click = () => {
        router.push('../blogs/blog4')
        
      }
      
      const handleBlogClick = () => {
        router.push('../blogs')
        
      } 

      

    return(
        <div className="overflow-x-hidden bg-[url('background5.png')] bg-cover">
            <Navigation handlePortfolioClick={handlePortfolioClick} handleTalkClick={handleTalkClick} handleResourceClick={handleResourceClick} handleCareerClick={handleCareerClick} setContactClick={setContactClick} navigationClick={navigationClick} onNavigationClick={onNavigationClick} />
        
            <MainPage handleBlogClick={handleBlogClick} handleBlog1Click={handleBlog1Click} handleBlog2Click={handleBlog2Click} handleBlog3Click={handleBlog3Click} handleBlog4Click={handleBlog4Click} />
            <Falcon/>
            <Element name="contact">
                <ContactForm onContactClick={onContactClick} contactClick={contactClick}/>
            </Element>
            <Footer />
        </div>
    )
}

export default Blog1;