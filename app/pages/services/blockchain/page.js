'use client';
import React from 'react';

import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

import { Element } from "react-scroll";
import MainPage from './main';
import dynamic from 'next/dynamic';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';

const Loading = () => {dynamic(() => import("../../../components/Loading"), { ssr: false })}
const Falcon = () => {dynamic(() => import("../../../components/falcon"), { ssr: false })}


const ContactForm = () => {dynamic(() => import("../../../components/contactForm"), { ssr: false })}

const mutableSource = {
  data: true, // Initial loading state is true
  listeners: new Set(),
  
  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback); // Cleanup on unsubscribe
  },

  setData(newData) {
    this.data = newData;
    this.listeners.forEach(callback => callback()); // Notify listeners on data change
  },

  getData() {
    return this.data;
  }
};

const Resources = () => {
    const [navigationClick, setNavigationClick] = useState('Services');
    const [contactClick, setContactClick] = useState(false);

    const getSnapshot = () => mutableSource.getData();
      const subscribe = (callback) => mutableSource.subscribe(callback);
      const [isLoading, setIsLoading] = useState(getSnapshot);
    
      useEffect(() => {
        // Simulate a delay for loading state
        const timer = setTimeout(() => {
          mutableSource.setData(false); // Set loading to false after 1 second

        }, 3000);
    
        const unsubscribe = subscribe(() => setIsLoading(getSnapshot()));
        return () => {
          clearTimeout(timer);
          unsubscribe();
        };
      }, []);


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
      isLoading ? (
        <Loading />
      ) : (
        <div className="overflow-x-hidden bg-[url('background8.png')] bg-cover bg-left">
            <Navigation handlePortfolioClick={handlePortfolioClick} handleTalkClick={handleTalkClick} handleResourceClick={handleResourceClick} handleCareerClick={handleCareerClick} setContactClick={setContactClick} navigationClick={navigationClick} onNavigationClick={onNavigationClick} />
        
            <MainPage handleTalkClick={handleTalkClick} handleBlogClick={handleBlogClick} handleBlog1Click={handleBlog1Click} handleBlog2Click={handleBlog2Click} handleBlog3Click={handleBlog3Click} handleBlog4Click={handleBlog4Click}/>
            <Falcon/>
            <Element name="contact">
                <ContactForm onContactClick={onContactClick} contactClick={contactClick}/>
            </Element>
            <Footer />
        </div>
      )
    )
}

export default Resources