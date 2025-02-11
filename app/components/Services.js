import React, { useState, useRef, useEffect } from "react";

import { Link } from 'react-scroll';

import Image from "next/image";

import Arrow from '../images/rightArrow2.png'
import ScrollReveal from "scrollreveal";

const Services = ({handleTalkClick=null}) => {
  const [service, setService] = useState("Artificial Intelligence");
  //const outerContainerRef = useRef(null);
  //const [isInnerScrollActive, setInnerScrollActive] = useState(true);

  // const handleActivateInnerScroll = () => {
  //   setInnerScrollActive(true);
  //   document.body.style.overflow = "hidden"; // Prevent main page scrolling
  // };

  // const handleDeactivateInnerScroll = () => {
  //   setInnerScrollActive(false);
  //   document.body.style.overflow = ""; // Re-enable main page scrolling
  // };
  
  const divRef = useRef(null);


  const onServiceClick = (e) => {
    setService(e.target.innerText);
  };



  const handleScroll = () => {
    if (divRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = divRef.current;
      if (scrollTop + clientHeight >= scrollHeight) {
        console.log("Reached the bottom!");
      }
    }
  };
  
  useEffect(() => {
    ScrollReveal().reveal(".reveal5", {
      origin: "bottom", // Animation starts from the bottom
      distance: "50px", // Distance to move before appearing
      duration: 1000, // Animation duration in milliseconds
      delay: 200, // Delay before animation starts
      reset: false, // Runs only once
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".reveal7", {
      origin: "bottom", // Animation starts from the bottom
      distance: "50px", // Distance to move before appearing
      duration: 1000, // Animation duration in milliseconds
      delay: 400, // Delay before animation starts
      reset: false, // Runs only once
      easing: "ease-in-out",
    });
  }, []);


  

    

   
  
  return (
    <div
    
      className="py-8 w-[100vw] bg-[url('grid10.png')] bg-cover relative z-[20] h-[130vh] bg-[#002A38] ring-2 ring-white text-white flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="w-[90vw] max-w-[1400px] flex flex-col items-center">
        <div className="mb-9 w-[100%] leading-[20px]">
          <p className="reveal5 text-white text-[34px] sm:text-[50px] leading-[40px] sm:leading-[55px] md:w-[100%]  lg:w-[50%]">
            Explore Our Services That Drives Innovation
          </p>
          <p className="reveal7 text-[17px] sm:text-[24px] text-[#F1A230] mt-1">
            Leveraging our expertise to provide impactful solutions that elevate
            your business
          </p>
        </div>
        <div className="flex ring-2 ring-[#D98032] rounded-[10px] mx-7 mt-9 flex-row  justify-between items-center mt-[5px]  ">
          <div className="  flex border-r-[1px] border-gray-800 flex-col bg-gray-300 text-black lg:rounded-l-[10px] lg:rounded-r-[0px] rounded-[10px]  max-h-[520px] h-[75vh]  w-[100%] lg:w-[40%]">
              
              <div onClick={onServiceClick} className={`${
                  service === "Artificial Intelligence" ? "text-red-800 border-r-[0px] rounded-r-[10px] lg:rounded-r-[0px] bg-white border" : "text-black transform hover:translate-y-[-10px] transition-all duration-150 cursor-pointer hover:bg-gray-200 hover:text-black"
                }  border-gray-800 flex flex-row justify-between items-center sm:w-[100%] lg:w-[100%] px-8 h-[100%] rounded-[10px]`}
              >
                <p className="text-[17px]">Artificial Intelligence</p>
              </div>
              
              <div onClick={onServiceClick} className={`${
                  service === "Web App Development" ? "text-red-800 border-r-[0px] rounded-r-[10px] lg:rounded-r-[0px] bg-white border" : "text-black transform hover:translate-y-[-10px] transition-all duration-150 cursor-pointer hover:bg-gray-200 hover:text-black"
                }  border-gray-800 flex flex-row justify-between items-center sm:w-[100%] lg:w-[100%] px-8 h-[100%] rounded-[10px]`}
              >
                <p className="text-[17px]">Web App Development</p>
              </div>
              <div onClick={onServiceClick} className={`${
                  service === "Mobile App Development" ? "text-red-800 border-r-[0px] rounded-r-[10px] lg:rounded-r-[0px] bg-white border" : "text-black transform hover:translate-y-[-10px] transition-all duration-150 cursor-pointer hover:bg-gray-200 hover:text-black"
                }  border-gray-800 flex flex-row justify-between items-center sm:w-[100%] lg:w-[100%] px-8 h-[100%] rounded-[10px]`}
              >
                <p className="text-[17px]">Mobile App Development</p>
              </div>
              
              <div onClick={onServiceClick} className={`${
                  service === "Custom Software Development" ? "text-red-800 border-r-[0px] rounded-r-[10px] lg:rounded-r-[0px] bg-white border" : "text-black transform hover:translate-y-[-10px] transition-all duration-150 cursor-pointer hover:bg-gray-200 hover:text-black"
                }  border-gray-800 flex flex-row justify-between items-center sm:w-[100%] lg:w-[100%] px-8 h-[100%] rounded-[10px]`}
              >
                <p className="text-[17px]">Custom Software Development</p>
              </div>
              
              <div onClick={onServiceClick} className={`${
                  service === "Cloud Solutions" ? "text-red-800 border-r-[0px] rounded-r-[10px] lg:rounded-r-[0px] bg-white border" : "text-black transform hover:translate-y-[-10px] transition-all duration-150 cursor-pointer hover:bg-gray-200 hover:text-black"
                }  border-gray-800 flex flex-row justify-between items-center sm:w-[100%] lg:w-[100%] px-8 h-[100%] rounded-[10px]`}
              >
                <p className="text-[17px]">Cloud Solutions</p>
              </div>
              <div onClick={onServiceClick} className={`${
                  service === "UI/UX Design" ? "text-red-800 border-r-[0px] rounded-r-[10px] lg:rounded-r-[0px] bg-white border" : "text-black transform hover:translate-y-[-10px] transition-all duration-150 cursor-pointer hover:bg-gray-200 hover:text-black"
                }  border-gray-800 flex flex-row justify-between items-center sm:w-[100%] lg:w-[100%] px-8 h-[100%] rounded-[10px]`}
              >
              
                <p className="text-[17px]">UI/UX Design</p>
              </div>
              
              <div onClick={onServiceClick} className={`${
                  service === "Software Support & Maintenance" ? "text-red-800 border-r-[0px] rounded-r-[10px] lg:rounded-r-[0px] bg-white border" : "text-black transform hover:translate-y-[-10px] transition-all duration-150 cursor-pointer hover:bg-gray-200 hover:text-black"
                }  border-gray-800 flex flex-row justify-between items-center sm:w-[100%] lg:w-[100%] px-8 h-[100%] rounded-[10px]`}
              >
                <p className="text-[17px]">Software Support & Maintenance</p>
              </div>
              
              <div onClick={onServiceClick} className={`${
                  service === "Software Consultancy" ? "text-red-800 border-r-[0px] rounded-r-[10px] lg:rounded-r-[0px] bg-white border" : "text-black transform hover:translate-y-[-10px] transition-all duration-150 cursor-pointer hover:bg-gray-200 hover:text-black"
                }  border-gray-800 flex flex-row justify-between items-center sm:w-[100%] lg:w-[100%] px-8 h-[100%] rounded-[10px]`}
              >
              
                <p className="text-[17px]">Software Consultancy</p>
              </div>
              <div onClick={onServiceClick} className={`${
                  service === "Blockchain" ? "text-red-800 border-r-[0px] rounded-r-[10px] lg:rounded-r-[0px] bg-white border" : "text-black transform hover:translate-y-[-10px] transition-all duration-150 cursor-pointer hover:bg-gray-200 hover:text-black"
                }  border-gray-800 flex flex-row justify-between items-center sm:w-[100%] lg:w-[100%] px-8 h-[100%] rounded-[10px]`}
              >
                <p className="text-[17px]">Blockchain</p>
              </div>
           
          </div>
          
           
          <div
            ref={divRef}
            onAbort={handleScroll}
            className="lg:w-[60%] md:hidden sm:hidden hidden lg:flex flex-col border-r-[1px] border-t-[1px] border-b-[1px] border-gray-800 max-h-[520px] h-[75vh] bg-white rounded-r-[10px]"
          >
              <div className={`${service == 'Artificial Intelligence' ? 'flex' : 'hidden'}  bg-[url('/aibackground11.png')] bg-cover flex-row text-black items-center rounded-r-[9px] justify-center h-[100%]`}>  
                <div className="w-[100%] h-[100%] flex flex-col ">
                  
                 
                  
                </div>
                <div className="w-[100%] h-[100%] flex flex-col">
                  <div className="h-[100%]">

                  </div>
                  <div className="h-[400%] pl-[50px] pr-4  py-4">
                    <div className="bg-[#D1D1D1] w-[100%] px-4 h-[80%] rounded ring-1 ring-gray-800  opacity-90 flex flex-col items-center justify-center">
                      <p  className="text-[13px]  text-sans leading-4 ">Transform your business with cutting-edge AI 
                        solutions. From machine learning and natural 
                        language processing to computer vision and 
                        intelligent automation, we deliver tailored
                        innovations to optimize processes, enhance
                        decision-making, and drive growth across 
                        industries. Let us help you unlock the full
                        potential of AI.
                      </p>
                    </div>
                  </div>
                  <div className="h-[90%] ">

                  </div>
    
                  <div className="h-[120%] mx-[38px]">
                    <Link onClick={handleTalkClick} to="contact" offset={0} smooth={true} duration={500} className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                                            <p className="text-[16px]">
                                                Schedule a Free Consultation
                                            </p>
                        <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                    </Link> 
                  </div>
                </div>  
              </div>

              <div className={`${service == 'Web App Development' ? 'flex' : 'hidden'}  bg-[url('/webbackground9.png')] bg-cover flex-row text-black items-center rounded-r-[9px] justify-center h-[100%]`}>  
                <div className="w-[100%] h-[100%] flex flex-col ">
                  
                 
                  
                </div>
                <div className="w-[100%] h-[100%] flex flex-col">
                  <div className="h-[100%]">

                  </div>
                  <div className="h-[400%] pl-[50px] pr-4  py-4">
                    <div className="bg-[#D1D1D1] w-[100%] px-4 h-[80%] opacity-90 rounded ring-1 ring-gray-800 flex flex-col items-center justify-center">
                      <p  className="text-[13px] text-sans leading-4 ">At CodeBug, we specialize in creating robust and scalable web applications tailored to your business needs. Our team of experts uses the latest technologies to build intuitive, responsive, and secure web apps that deliver seamless user experiences across all devices. Whether you need an e-commerce platform, a custom solution, or an enterprise-grade application, CodeBug is here to bring your ideas to life with cutting-edge web development solutions.
                      </p>
                    </div>
                  </div>
                  <div className="h-[90%] ">

                  </div>
    
                  <div className="h-[120%] mx-[38px]">
                  <Link onClick={handleTalkClick} to="contact" offset={0} smooth={true} duration={500} className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                                            <p className="text-[16px]">
                                                Schedule a Free Consultation
                                            </p>
                        <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                    </Link> 
                  </div>
                </div>  
              </div>
              <div className={`${service == 'Mobile App Development' ? 'flex' : 'hidden'}  bg-[url('/mobilebackground7.png')] bg-cover flex-row text-black items-center rounded-r-[9px] justify-center h-[100%]`}>  
                <div className="w-[100%] h-[100%] flex flex-col ">
                  
                 
                  
                </div>
                <div className="w-[100%] h-[100%] flex flex-col">
                  <div className="h-[100%]">

                  </div>
                  <div className="h-[400%] pl-[50px] pr-4  py-4">
                    <div className="bg-[#D1D1D1] w-[100%] px-4 h-[80%] rounded ring-1 opacity-90 ring-gray-800 flex flex-col items-center justify-center">
                      <p  className="text-[13px] text-sans leading-4 ">CodeBug specializes in creating high-performance mobile apps for iOS and Android. Our team builds custom, user-friendly applications that deliver seamless, engaging experiences. Whether you need a native app or a cross-platform solution, we ensure your app is scalable, secure, and optimized to meet your business goals. Let CodeBug turn your app idea into reality with innovative and reliable mobile solutions.
                      </p>
                    </div>
                  </div>
                  <div className="h-[90%] ">

                  </div>
    
                  <div className="h-[120%] mx-[38px]">
                  <Link onClick={handleTalkClick} to="contact" offset={0} smooth={true} duration={500} className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                                            <p className="text-[16px]">
                                                Schedule a Free Consultation
                                            </p>
                        <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                    </Link> 
                  </div>
                </div>  
              </div>
              <div className={`${service == 'Custom Software Development' ? 'flex' : 'hidden'}  bg-[url('/customSoftwarebackground6.png')] bg-cover flex-row text-black items-center rounded-r-[9px] justify-center h-[100%]`}>  
                <div className="w-[100%] h-[100%] flex flex-col ">
                  
                 
                  
                </div>
                <div className="w-[100%] h-[100%] flex flex-col">
                  <div className="h-[100%]">

                  </div>
                  <div className="h-[400%] pl-[50px] pr-4  py-4">
                    <div className="bg-[#D1D1D1] w-[100%] px-4 opacity-90 h-[80%] rounded ring-1 ring-gray-800 flex flex-col items-center justify-center">
                      <p  className="text-[13px] text-sans leading-4 ">CodeBug offers tailored software solutions designed to meet your specific business needs. Our team creates high-quality, scalable, and efficient software, from custom CRMs to specialized applications, using the latest technologies. We focus on flexibility, security, and innovation to ensure your software evolves with your business and drives success. Let CodeBug build a solution that works for you.
                      </p>
                    </div>
                  </div>
                  <div className="h-[90%] ">

                  </div>
    
                  <div className="h-[120%] mx-[38px]">
                  <Link onClick={handleTalkClick} to="contact" offset={0} smooth={true} duration={500} className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                                            <p className="text-[16px]">
                                                Schedule a Free Consultation
                                            </p>
                        <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                    </Link> 
                  </div>
                </div>  
              </div>
              <div className={`${service == 'Cloud Solutions' ? 'flex' : 'hidden'}  bg-[url('/cloudbackground6.png')] bg-cover flex-row text-black items-center rounded-r-[9px] justify-center h-[100%]`}>  
                <div className="w-[100%] h-[100%] flex flex-col ">
                  
                 
                  
                </div>
                <div className="w-[100%] h-[100%] flex flex-col">
                  <div className="h-[100%]">

                  </div>
                  <div className="h-[400%] pl-[50px] pr-4  py-4">
                    <div className="bg-[#D1D1D1] w-[100%] px-4 h-[80%] opacity-90 rounded ring-1 ring-gray-800 flex flex-col items-center justify-center">
                      <p  className="text-[13px] text-sans leading-4 ">CodeBug offers scalable and secure cloud solutions to optimize your business performance. From cloud migration to infrastructure management, we create tailored cloud architectures that enhance efficiency, reduce costs, and ensure seamless integration. Let us help your business grow with reliable, flexible cloud solutions.
                      </p>
                    </div>
                  </div>
                  <div className="h-[90%] ">

                  </div>
    
                  <div className="h-[120%] mx-[38px]">
                  <Link onClick={handleTalkClick} to="contact" offset={0} smooth={true} duration={500} className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                                            <p className="text-[16px]">
                                                Schedule a Free Consultation
                                            </p>
                        <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                    </Link> 
                  </div>
                </div>  
              </div>
              <div className={`${service == 'UI/UX Design' ? 'flex' : 'hidden'}  bg-[url('/uiuxbackground7.png')] bg-cover flex-row text-black items-center rounded-r-[9px] justify-center h-[100%]`}>  
                <div className="w-[100%] h-[100%] flex flex-col ">
                  
                 
                  
                </div>
                <div className="w-[100%] h-[100%] flex flex-col">
                  <div className="h-[100%]">

                  </div>
                  <div className="h-[400%] pl-[50px] pr-4  py-4">
                    <div className="bg-[#D1D1D1] w-[100%] px-4 h-[80%] opacity-90 rounded ring-1 ring-gray-800 flex flex-col items-center justify-center">
                      <p  className="text-[13px] text-sans leading-4 ">At CodeBug, we create visually stunning and user-friendly designs that elevate the user experience. Our team focuses on crafting intuitive interfaces and seamless interactions to ensure your users enjoy every step of their journey. By combining creativity with functionality, we deliver designs that not only look great but also drive engagement and satisfaction. Let CodeBug enhance your digital products with exceptional UI/UX design tailored to your audience&apos;s needs.
                      </p>
                    </div>
                  </div>
                  <div className="h-[90%] ">

                  </div>
    
                  <div className="h-[120%] mx-[38px]">
                  <Link onClick={handleTalkClick} to="contact" offset={0} smooth={true} duration={500} className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                                            <p className="text-[16px]">
                                                Schedule a Free Consultation
                                            </p>
                        <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                    </Link> 
                  </div>
                </div>  
              </div>
              <div className={`${service == 'Software Support & Maintenance' ? 'flex' : 'hidden'}  bg-[url('/softwareSupportBackground8.png')] bg-cover flex-row text-black items-center rounded-r-[9px] justify-center h-[100%]`}>  
                <div className="w-[100%] h-[100%] flex flex-col ">
                  
                 
                  
                </div>
                <div className="w-[100%] h-[100%] flex flex-col">
                  <div className="h-[100%]">

                  </div>
                  <div className="h-[400%] pl-[50px] pr-4  py-4">
                    <div className="bg-[#D1D1D1] w-[100%] px-4 h-[80%] opacity-90 rounded ring-1 ring-gray-800 flex flex-col items-center justify-center">
                      <p  className="text-[13px] text-sans leading-4 ">CodeBug provides reliable software support and maintenance to keep your systems running smoothly. From timely updates and bug fixes to performance optimization, we ensure your software remains secure, efficient, and up-to-date. Let us handle the maintenance while you focus on growing your business.
                      </p>
                    </div>
                  </div>
                  <div className="h-[90%] ">

                  </div>
    
                  <div className="h-[120%] mx-[38px]">
                  <Link onClick={handleTalkClick} to="contact" offset={0} smooth={true} duration={500} className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                                            <p className="text-[16px]">
                                                Schedule a Free Consultation
                                            </p>
                        <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                    </Link> 
                  </div>
                </div>  
              </div>
              <div className={`${service == 'Software Consultancy' ? 'flex' : 'hidden'}  bg-[url('/softwareConsultancyBackground6.png')] bg-cover flex-row text-black items-center rounded-r-[9px] justify-center h-[100%]`}>  
                <div className="w-[100%] h-[100%] flex flex-col ">
                  
                 
                  
                </div>
                <div className="w-[100%] h-[100%] flex flex-col">
                  <div className="h-[100%]">

                  </div>
                  <div className="h-[400%] pl-[50px] pr-4  py-4">
                    <div className="bg-[#D1D1D1] w-[100%] px-4 h-[80%] opacity-90 rounded ring-1 ring-gray-800 flex flex-col items-center justify-center">
                      <p  className="text-[13px] text-sans leading-4 ">CodeBug provides expert software consultancy to help you optimize your digital strategy. We offer insights on software selection, architecture design, and process improvement, ensuring solutions that align with your business goals for long-term success. Let us guide you through the complexities of software development.
                      </p>
                    </div>
                  </div>
                  <div className="h-[90%] ">

                  </div>
    
                  <div className="h-[120%] mx-[38px]">
                  <Link onClick={handleTalkClick} to="contact" offset={0} smooth={true} duration={500} className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                                            <p className="text-[16px]">
                                                Schedule a Free Consultation
                                            </p>
                        <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                    </Link> 
                  </div>
                </div>  
              </div>
              <div className={`${service == 'Blockchain' ? 'flex' : 'hidden'}  bg-[url('/blockchainbackground10.png')] bg-cover flex-row text-black items-center rounded-r-[9px] justify-center h-[100%]`}>  
                <div className="w-[100%] h-[100%] flex flex-col ">
                  
                 
                  
                </div>
                <div className="w-[100%] h-[100%] flex flex-col">
                  <div className="h-[100%]">

                  </div>
                  <div className="h-[400%] pl-[50px] pr-4  py-4">
                    <div className="bg-[#D1D1D1] w-[100%] px-4 h-[80%] opacity-90 rounded ring-1 ring-gray-800 flex flex-col items-center justify-center">
                      <p  className="text-[13px] text-sans leading-4 ">CodeBug provides custom blockchain solutions to enhance security, transparency, and efficiency for your business. From decentralized applications to secure transactions, our team helps you harness the power of blockchain technology to drive innovation and growth. Let CodeBug guide you into the future with cutting-edge blockchain solutions.
                      </p>
                    </div>
                  </div>
                  <div className="h-[90%] ">

                  </div>
    
                  <div className="h-[120%] mx-[38px]">
                  <Link onClick={handleTalkClick} to="contact" offset={0} smooth={true} duration={500} className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                                            <p className="text-[16px]">
                                                Schedule a Free Consultation
                                            </p>
                        <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                    </Link> 
                  </div>
                </div>  
              </div>
            
          </div>
  
        </div>
      </div>
    </div>
  );
};

export default Services;
