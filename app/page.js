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

// Define a mutable source for loading state
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

const Home = () => {
  const [navigationClick, setNavigationClick] = useState('Home');
  const [contactClick, setContactClick] = useState(false);
  const [firstTime, setFirstTime] = useState(true);

  // Use `useMutableSource` for loading state
  const getSnapshot = () => mutableSource.getData();
  const subscribe = (callback) => mutableSource.subscribe(callback);
  const [isLoading, setIsLoading] = useState(getSnapshot);

  useEffect(() => {
    // Simulate a delay for loading state
    const timer = setTimeout(() => {
      mutableSource.setData(false); // Set loading to false after 1 second
      setFirstTime(false);
    }, 3000);

    const unsubscribe = subscribe(() => setIsLoading(getSnapshot()));
    return () => {
      clearTimeout(timer);
      unsubscribe();
    };
  }, []);

  const router = useRouter();

  const handleComponentLoaded = () => {
    setComponentsLoaded(prev => prev + 1);
  };

  const onNavigationClick = (e) => {
    setNavigationClick(e.target.innerText);
  };

  const onContactClick = () => {
    setContactClick(!contactClick);
  };

  const handleCareerClick = () => {
    router.push('./pages/careers');
  };

  const handleHomeClick = () => {
    router.push('/');
  };

  const handlePortfolioClick = () => {
    router.push('./pages/portfolio');
  };

  const handleTalkClick = () => {
    setContactClick(true);
  };

  const handleResourceClick = () => {
    //router.push('./resources')
  };

  const handleBlog1Click = () => {
    router.push('/pages/blogs/blog1')
  };

  const handleBlog2Click = () => {
    router.push('/pages/blogs/blog2')
  };

  const handleBlog3Click = () => {
    router.push('/pages/blogs/blog3')
  };

  const handleBlog4Click = () => {
    router.push('/pages/blogs/blog4')
  };

  const handleBlogClick = () => {
    router.push('/pages/blogs')
  };

  return (
    isLoading && firstTime ? (
      <Loading />
    ) : (
      <div className="overflow-x-hidden bg-black">
        <Navigation handleHomeClick={handleHomeClick} handlePortfolioClick={handlePortfolioClick} handleTalkClick={handleTalkClick} handleCareerClick={handleCareerClick} handleResourceClick={handleResourceClick} setContactClick={setContactClick} navigationClick={navigationClick} onNavigationClick={onNavigationClick} />
        <Element name="home">
          <Hero />
        </Element>
        <Falcon />
        <div className="bg-[url('background5.png')] bg-cover w-[100vw] flex items-center flex-col justify-center">
          <Element name="about">
            <About />
          </Element>
          <Element name="services">
            <Services />
          </Element>
          
          <ChooseUs />
          <Element name="portfolio">
            <Portfolio />
          </Element>
          <Testimonials />
          <Blogs handleBlogClick={handleBlogClick} handleBlog4Click={handleBlog4Click} handleBlog3Click={handleBlog3Click} handleBlog2Click={handleBlog2Click} handleBlog1Click={handleBlog1Click} />
          <Element name="contact">
            <ContactForm onContactClick={onContactClick} contactClick={contactClick} />
          </Element>
        </div>
        <Footer />
      </div>
    )
  );
};

export default Home;
