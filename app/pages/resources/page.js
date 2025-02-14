'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { Element } from "react-scroll";
import MainPage from './main';
import Loading from '../../components/Loading';
import dynamic from 'next/dynamic';

// Dynamically imported components (Lazy loading)
const Navigation = dynamic(() => import("../../components/Navigation"), { ssr: false });
const Footer = dynamic(() => import("../../components/Footer"), { ssr: false });
const ContactForm = dynamic(() => import("../../components/contactForm"), { ssr: false });
const Falcon = dynamic(() => import("../../components/falcon"), { ssr: false });

const Resources = () => {
    const [navigationClick, setNavigationClick] = useState('Resources');
    const [contactClick, setContactClick] = useState(false);
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

    const router = useRouter();

    const onContactClick = () => {
        setContactClick(!contactClick);
    };

    const handleTalkClick = () => {
        setContactClick(true);
    };

    // Blog navigation handlers
    const handleBlog1Click = () => router.push('/pages/blogs/blog1');
    const handleBlog2Click = () => router.push('/pages/blogs/blog2');
    const handleBlog3Click = () => router.push('/pages/blogs/blog3');
    const handleBlog4Click = () => router.push('/pages/blogs/blog4');
    const handleBlogClick = () => router.push('/pages/blogs');
    const handleNewsClick = () => router.push('/pages/news/news1');

    return (
        <div>
            {!allComponentsLoaded && 
            <div className='overflow-hidden'>
              <Loading />
            </div>
            }
            <div className={`${allComponentsLoaded ? '' : 'hidden'} overflow-x-hidden bg-[url('background5.png')] sm:bg-[url('background8.png')] bg-cover bg-left`}>
                <Navigation handleTalkClick={handleTalkClick} navigationClick={navigationClick} />
                <MainPage
                    handleTalkClick={handleTalkClick}
                    handleNewsClick={handleNewsClick}
                    handleBlogClick={handleBlogClick}
                    handleBlog1Click={handleBlog1Click}
                    handleBlog2Click={handleBlog2Click}
                    handleBlog3Click={handleBlog3Click}
                    handleBlog4Click={handleBlog4Click}
                />
                <Falcon />
                <Element name="contact">
                    <ContactForm onContactClick={onContactClick} contactClick={contactClick} />
                </Element>
                <Footer />
            </div>
        </div>
    );
};

export default Resources;
