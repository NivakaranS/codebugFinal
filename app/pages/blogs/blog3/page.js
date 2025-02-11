'use client';
import React from 'react';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import Falcon from '../../../components/falcon';
import { useState } from 'react';
import { useRouter } from "next/navigation";
import ContactForm from '../../../components/contactForm';
import { Element } from "react-scroll";
import MainPage from './main';

const Blog1 = () => {
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
        <div className="overflow-x-hidden bg-[url('background5.png')] bg-cover">
            <Navigation navigationClick={navigationClick} />
        
            <MainPage handleBlogClick={handleBlogClick} handleBlog1Click={handleBlog1Click} handleBlog2Click={handleBlog2Click} handleBlog3Click={handleBlog3Click} handleBlog4Click={handleBlog4Click} />
            <Falcon/>
            <Element name="contact">
                <ContactForm  onContactClick={onContactClick} contactClick={contactClick}/>
            </Element>
            <Footer />
        </div>
    )
}

export default Blog1;