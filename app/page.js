
'use client'
import Image from "next/image";
import Navigation from "./components/Navigation";

import React, {useEffect, useState} from "react";
import Hero from './components/Hero';
import Footer from "./components/Footer";
import About from "./components/About2";
import Services from "./components/Services";
import ChooseUs from "./components/ChooseUs";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs";
import { Element } from "react-scroll";
import Contact from "./components/Contact";
import ContactForm from "./components/contactForm";


const Home = () => {
  const [navigationClick, setNavigationClick] = useState('Home');
  const [contactClick, setContactClick] = useState(false);

 

  //const router = useRouter();

  const onNavigationClick = (e) => {
    setNavigationClick(e.target.innerText);
    
  }

  const handlePrivacyClick = () => {
    //router.push('./privacy')
  }

  const onContactClick = () => {
      setContactClick(!contactClick);
  }

  const handleCareerClick = () => {
    //router.push('./careers')
    
  }

  const handlePortfolioClick = () => {
    //router.push('./portfolio')
    
  }

const handleTalkClick = () => {
  setContactClick(true)
}

const handleResourceClick = () => {
    //router.push('./resources')
    
}

const handleBlog1Click = () => {
  //router.push('./resources/blogs/blog1')
  
}

const handleBlog2Click = () => {
  //router.push('./resources/blogs/blog2')
  
}


const handleBlog3Click = () => {
  //router.push('./resources/blogs/blog3')
  
}


const handleBlog4Click = () => {
  //router.push('./resources/blogs/blog4')
  
}



const handleBlogClick = () => {
  //router.push('./resources/blogs')
  
}
  return (
    <div className="overflow-x-hidden bg-black ">
      
      <Navigation handlePortfolioClick={handlePortfolioClick} handleTalkClick={handleTalkClick} handleCareerClick={handleCareerClick} handleResourceClick={handleResourceClick} setContactClick={setContactClick} navigationClick={navigationClick} onNavigationClick={onNavigationClick} />
      <Element name="home">
        <Hero/>
      </Element>
      <div className="bg-[url('background5.png')] bg-cover w-[100vw] flex items-center flex-col justify-center">
        <Element name="about">
          <About/>
        </Element>
        <Element name="services">
          <Services/>
        </Element>
        <ChooseUs/>
        <Element name="portfolio">
          <Portfolio/>
        </Element>
        <Testimonials/>
        <Blogs handleBlogClick={handleBlogClick} handleBlog4Click={handleBlog4Click} handleBlog3Click={handleBlog3Click} handleBlog2Click={handleBlog2Click} handleBlog1Click={handleBlog1Click}/>
        <Element name="contact">
          <ContactForm  onContactClick={onContactClick} contactClick={contactClick}/>
        </Element>
      </div>
      <Footer/>

    </div>

  );
}

export default Home;

      
    
    
      
       
