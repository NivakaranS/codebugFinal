'use client';
import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Falcon from '../../components/falcon';
import { useState } from 'react';
//import { useRouter } from "next/router";
import ContactForm from '../../components/contactForm';
import { Element } from "react-scroll";
import MainPage from './main';

const Login = () => {
    const [navigationClick, setNavigationClick] = useState('');
    const [contactClick, setContactClick] = useState(false);
    //const router = useRouter();
    
    const onNavigationClick = () => {
        //router.push('/')
            
    }
        
    
    const onContactClick = () => {
        setContactClick(!contactClick);
    }

    const handleTalkClick = () => {
        setContactClick(true)
      }

    

    const handleCareerClick = () => {
        //router.push('./careers')
        
    }
    
    const handleResourceClick = () => {
        //router.push('./resources')
        
    }

    const handlePortfolioClick = () => {
        //router.push('./portfolio')

      }
    

    return(
        <div className="overflow-x-hidden bg-[url('background8.png')] bg-cover bg-left">
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

export default Login