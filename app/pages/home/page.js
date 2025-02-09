
'use client'
import Image from "next/image";
import Navigation from "../../components/Navigation";

import React, {useEffect, useState} from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import About from "../../components/About2";
import Services from "../../components/Services";
import Portfolio from "./components/Portfolio";
import Blogs from "../../components/Blogs";
//import Careers from "../../components/Careers"
import ChooseUs from "../../components/ChooseUs";
import Testimonials from "../../components/Testimonials";
import ContactForm from "../../components/contactForm";
import { Element } from "react-scroll";
import { useRouter } from "next/router";


export default function Home() {
  const [navigationClick, setNavigationClick] = useState('Home');
  const [contactClick, setContactClick] = useState(false);

 

  //const router = useRouter();

  const onNavigationClick = (e) => {
    //setNavigationClick(e.target.innerText);
    
  }

  const handlePrivacyClick = () => {
    //router.push('./privacy')
  }

  const onContactClick = () => {
      //setContactClick(!contactClick);
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
      <div className="bg-black h-[100vh] w-[100vw] flex items-center flex-col justify-center">
      <Navigation handlePortfolioClick={handlePortfolioClick} handleTalkClick={handleTalkClick} handleCareerClick={handleCareerClick} handleResourceClick={handleResourceClick} setContactClick={setContactClick} navigationClick={navigationClick} onNavigationClick={onNavigationClick} />
    
      <Footer/>
      </div>
    </div>

  );
}
