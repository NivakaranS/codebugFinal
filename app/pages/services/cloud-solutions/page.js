'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import Falcon from '../../../components/falcon';

import { useRouter } from "next/navigation";
import ContactForm from '../../../components/contactForm';
import { Element } from "react-scroll";
import MainPage from './main';
import Loading from '../../../components/Loading';

const Resources = () => {
    const [navigationClick, setNavigationClick] = useState('Services');
    const [contactClick, setContactClick] = useState(false);
    const router = useRouter();
    const [allComponentsLoaded, setAllComponentsLoaded] = useState(false);
        
        // Simulate loading other components
        useEffect(() => {
            setTimeout(() => {
                console.log("Other components loaded!");
                setAllComponentsLoaded(true);
              }, 2000);
        }, []);

    
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
        router.push('../careers')
        
    }
    
    const handleResourceClick = () => {
        router.push('../resources')
        
    }

    const handlePortfolioClick = () => {
        router.push('../portfolio')

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
      <div>
            {!allComponentsLoaded && 
            <div className='overflow-hidden'>
              <Loading />
            </div>
            }
        <div className={`${allComponentsLoaded ? '' : 'hidden'}  overflow-x-hidden bg-[url('background8.png')] bg-cover bg-left`}>
            <Navigation handlePortfolioClick={handlePortfolioClick} handleTalkClick={handleTalkClick} handleResourceClick={handleResourceClick} handleCareerClick={handleCareerClick} setContactClick={setContactClick} navigationClick={navigationClick} onNavigationClick={onNavigationClick} />
        
            <MainPage handleTalkClick={handleTalkClick} handleBlogClick={handleBlogClick} handleBlog1Click={handleBlog1Click} handleBlog2Click={handleBlog2Click} handleBlog3Click={handleBlog3Click} handleBlog4Click={handleBlog4Click}/>
            <Falcon/>
            <Element name="contact">
                <ContactForm onContactClick={onContactClick} contactClick={contactClick}/>
            </Element>
            <Footer />
        </div>
        </div>
    )
}

export default Resources