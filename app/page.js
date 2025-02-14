'use client'

import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

// Dynamic imports for components
const Loading = dynamic(() => import("./components/Loading"), { ssr: false });
const Portfolio = dynamic(() => import("./components/Portfolio"), { ssr: false });
const Falcon = dynamic(() => import("./components/falcon.js"), { ssr: false });
const Navigation = dynamic(() => import("./components/Navigation"), { ssr: false });
const Footer = dynamic(() => import("./components/Footer"), { ssr: false });
const ContactForm = dynamic(() => import("./components/contactForm"), { ssr: false });
const Hero = dynamic(() => import('./components/Hero'), { ssr: false });
const About = dynamic(() => import("./components/About2"), { ssr: false });
const ChooseUs = dynamic(() => import("./components/ChooseUs"), { ssr: false });
const Services = dynamic(() => import("./components/Services"), { ssr: false });
const Testimonials = dynamic(() => import("./components/Testimonials"), { ssr: false });
const Blogs = dynamic(() => import("./components/Blogs"), { ssr: false });

const Home = () => {
  const [navigationClick, setNavigationClick] = useState('Home');
  const [contactClick, setContactClick] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [otherComponentsLoaded, setOtherComponentsLoaded] = useState(false);
  const [allComponentsLoaded, setAllComponentsLoaded] = useState(false);
  const router = useRouter();

  // Simulate loading other components
  useEffect(() => {
    setTimeout(() => {
      console.log("Other components loaded!");
      setOtherComponentsLoaded(true);
    }, 2000); 
  }, []);

  // Track when all components are loaded
  useEffect(() => {
    if (!isLoading && otherComponentsLoaded) {
      setAllComponentsLoaded(true);
    }
  }, [isLoading, otherComponentsLoaded]);

  const onNavigationClick = (e) => {
    setNavigationClick(e.target.innerText);
  };

  const onContactClick = () => {
    setContactClick(!contactClick);
  };

  return (
    <div >
      {!allComponentsLoaded && <Loading />} 

      <div className={`${allComponentsLoaded ? '' : 'hidden'} overflow-x-hidden z-[100] bg-black`}>
        <Navigation 
          handleHomeClick={() => router.push('/')}
          handlePortfolioClick={() => router.push('/portfolio')}
          handleTalkClick={() => setContactClick(true)}
          handleCareerClick={() => router.push('/careers')}
          setContactClick={setContactClick}
          navigationClick={navigationClick}
          onNavigationClick={onNavigationClick}
        />
        
        <Element name="home">
          <Hero onVideoLoad={() => setIsLoading(false)} />
        </Element>

        <Falcon />
        <div className={`${allComponentsLoaded ? "bg-[url('background5.png')]" : 'bg-black'}  bg-cover w-[100vw] flex items-center flex-col justify-center`}>
          <Element name="about"><About /></Element>
          <Element name="services"><Services /></Element>
          <ChooseUs handleTalkClick={() => setContactClick(true)} />
          <Element name="portfolio"><Portfolio /></Element>
          <Testimonials />
          <div className="min-h-[100vh] flex items-center justify-center">
            <Blogs handleBlogClick={() => router.push('/blogs')} />
          </div>
          <Element name="contact">
            <ContactForm onContactClick={onContactClick} contactClick={contactClick} />
          </Element>
        </div>
        <Footer onContactClick={onContactClick} />
      </div>
    </div>
  );
};

export default Home;
