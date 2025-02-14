'use client';
import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Falcon from '../../components/falcon';
import { useState, useEffect } from 'react';
import Loading from '../../components/Loading';
//import { useRouter } from "next/router";
import ContactForm from '../../components/contactForm';
import { Element } from "react-scroll";
import MainPage from './main';

const Careers = () => {
    const [navigationClick, setNavigationClick] = useState('Careers');
    const [contactClick, setContactClick] = useState(false);
    //const router = useRouter();
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
        <div>
            {!allComponentsLoaded && 
            <div className='overflow-hidden'>
              <Loading />
            </div>
            }
        <div className={`${allComponentsLoaded ? '': 'hidden'} overflow-x-hidden bg-[url('background6.png')] bg-cover bg-left`}>
            <Navigation handlePortfolioClick={handlePortfolioClick} handleTalkClick={handleTalkClick} handleResourceClick={handleResourceClick} handleCareerClick={handleCareerClick} setContactClick={setContactClick} navigationClick={navigationClick} onNavigationClick={onNavigationClick} />
        
            <MainPage/>
            <Falcon/>
            <Element name="contact">
                <ContactForm onContactClick={onContactClick} contactClick={contactClick}/>
            </Element>
            <Footer />
        </div>
        </div>
    )
}

export default Careers