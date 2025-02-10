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

const Careers = () => {
    const [navigationClick, setNavigationClick] = useState('Careers');
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
    

    return(
        <div className="overflow-x-hidden bg-[url('background6.png')] bg-cover bg-left">
            <Navigation handlePortfolioClick={handlePortfolioClick} handleTalkClick={handleTalkClick} handleResourceClick={handleResourceClick} handleCareerClick={handleCareerClick} setContactClick={setContactClick} navigationClick={navigationClick} onNavigationClick={onNavigationClick} />
        
            <MainPage/>
            <Falcon/>
            <Element name="contact">
                <ContactForm onContactClick={onContactClick} contactClick={contactClick}/>
            </Element>
            <Footer />
        </div>
    )
}

export default Careers