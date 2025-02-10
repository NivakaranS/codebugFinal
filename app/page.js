
'use client'
import Navigation from "./components/Navigation";

import React, {useState, useEffect} from "react";
  
import Footer from "./components/Footer";


import { Element } from "react-scroll";
import dynamic from "next/dynamic";
import ContactForm from "./components/contactForm";

const Loading = dynamic(() => import("./components/Loading"), {
  ssr: false
})

const Portfolio = dynamic(() => import("./components/Portfolio"), {
  ssr: false
})

const Falcon = dynamic(() =>  import("./components/Falcon/page.js"), {
  ssr: false
} ) 

const Hero = dynamic(() => import('./components/Hero'), {
  ssr: false
})

const About = dynamic(() => import("./components/About2"), {
  ssr: false
} )

const ChooseUs = dynamic(() => import("./components/ChooseUs"), {
  ssr: false
})

const Services = dynamic(() => import("./components/Services"), {
  ssr: false
})

const Testimonials = dynamic(() => import("./components/Testimonials"), {
  ssr: false
})

const Blogs = dynamic(() => import("./components/Blogs"), {
  ssr: false
})

const Home = () => {
  const [navigationClick, setNavigationClick] = useState('Home');
  const [contactClick, setContactClick] = useState(false);
  const [isLoading, setIsLoading] = useState(true);



  //const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Example: Access localStorage
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    }
  }, []);

  const onNavigationClick = (e) => {
    setNavigationClick(e.target.innerText);
    
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
    isLoading ? (
      <Loading/>
    ): (
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
        <Falcon/>
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
    )
  )
}

export default Home;

      
    
    
      
       
