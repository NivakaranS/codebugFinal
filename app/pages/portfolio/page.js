'use client';
import React from 'react';



import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import Loading from '../../components/Loading';
import { Element } from "react-scroll";
import MainPage from './main';

import dynamic from 'next/dynamic';

const Navigation = dynamic(() => import("../../components/Navigation"), { ssr: false });
const Footer = dynamic(() => import("../../components/Footer"), { ssr: false });
const ContactForm = dynamic(() => import("../../components/contactForm"), { ssr: false });
const Falcon = dynamic(() => import("../../components/falcon"), { ssr: false });

const Portfolio = () => {
    const [navigationClick, setNavigationClick] = useState('Portfolio');
    const [contactClick, setContactClick] = useState(false);
    const router = useRouter();

    const [otherComponentsLoaded, setOtherComponentsLoaded] = useState(false);
        const [allComponentsLoaded, setAllComponentsLoaded] = useState(false);
    
        // Simulate loading other components
        useEffect(() => {
            setTimeout(() => {
                console.log("Other components loaded!");
                setOtherComponentsLoaded(true);
            }, 2000);
        }, []);
    
        // Track when all components are loaded
        useEffect(() => {
            if (otherComponentsLoaded) {
                setAllComponentsLoaded(true);
            }
        }, [otherComponentsLoaded]);
        
    
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
        router.push('/pages/blogs/blog3')
        
      }
      
      const handleBlog4Click = () => {
        router.push('/pages/blogs/blog4')
        
      }
      
      const handleBlogClick = () => {
        router.push('/pages/blogs')
        
      }
    

    return(
      <div>
            {!allComponentsLoaded && 
            <div className='overflow-hidden'>
              <Loading />
            </div>
            }
        <div className="overflow-x-hidden bg-[url('background5.png')] sm:bg-[url('background8.png')] bg-cover bg-left">
            <Navigation handleTalkClick={handleTalkClick} setContactClick={setContactClick} navigationClick={navigationClick} />
        
            <MainPage handleTalkClick={handleTalkClick} handleBlogClick={handleBlogClick} handleBlog1Click={handleBlog1Click} handleBlog2Click={handleBlog2Click} handleBlog3Click={handleBlog3Click} handleBlog4Click={handleBlog4Click}/>
            <Falcon />
            <Element name="contact">
                <ContactForm onContactClick={onContactClick} contactClick={contactClick}/>
            </Element>
            <Footer />
        </div>
        </div>
    )
}

export default Portfolio;