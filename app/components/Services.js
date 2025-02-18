import React, { useState, useRef, useEffect } from "react";

import { Link } from 'react-scroll';

import Image from "next/image";

import Arrow from '../images/rightArrow2.png'
import ScrollReveal from "scrollreveal";
import { useRouter } from "next/navigation";

const Services = ({handleTalkClick=null}) => {
  const [service, setService] = useState("Artificial Intelligence");

  const router = useRouter();
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


  const handleAIServiceClick = () => {
    router.push('/pages/services/artificial-Intelligence')
  }
  

  const handleWebDevelopmentServiceClick = () => {
    router.push('/pages/services/web-development')
  }

  const handleMobileDevelopmentServiceClick = () => {
    router.push('/pages/services/mobile-app-development')
  }

  const handleCustomSoftwareServiceClick = () => {
    router.push('/pages/services/custom-software-development')
  }

  const handleCloudSolutionsServiceClick = () => {
    router.push('/pages/services/cloud-solutions')
  }

  const handleUIUXServiceClick = () => {
    router.push('/pages/services/ui-ux-design')
  }

  const handleSoftwareSupportServiceClick = () => {
    router.push('/pages/services/software-support')
  }

  const handleSoftwareConsultancyServiceClick = () => {
    router.push('/pages/services/software-consultancy')
  }

  const handleBlockchainServiceClick = () => {
    router.push('/pages/services/blockchain')
  }


    

   
  
  return (
    <div
    
      className="py-7 sm:py-2 w-[100vw] bg-[url('grid10.png')] bg-cover relative z-[20] min-h-[109vh] bg-[#002A38] ring-2 ring-white text-white flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="w-[85vw] mt-[50px] sm:mt-[50px] max-w-[1400px] flex flex-col items-center">
        <div className=" w-[100%] leading-[10px]">
          <p className=" text-center text-white text-[34px] sm:text-[45px] leading-[40px] sm:leading-[45px] md:w-[100%] ">
            Explore Our Services That Drives Innovation
          </p>
          <p className=" text-center text-[17px] sm:text-[22px] leading-[30px] text-[#F1A230] mt-1">
            Leveraging our expertise to provide impactful solutions that elevate
            your business
          </p>
        </div>
        <div className="flex text-black md:hidden text-[14px] flex-col min-h-[80vh] rounded-[10px] bg-white mt-[25px] flex-col  justify-center items-center  w-[100%] ">
          <div className="w-full grid grid-flow-row-dense grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-2 p-2">
            {[
              "Artificial Intelligence",
              "Web App Development",
              "Mobile App Development",
              "Custom Software Development",
              "Cloud Solutions",
              "UI/UX Design",
              "Software Support & Maintenance",
              "Software Consultancy",
              "Blockchain",
            ].map((item, index) => (
              <div
                onClick={onServiceClick}
                key={index}
                className="bg-blue-300 cursor-pointer text-black px-4 py-2 rounded-lg flex items-center justify-center shadow-md hover:scale-105 transition-transform"
              >
                <p className="text-center">{item}</p>
              </div>
            ))}
          </div>



            <div>
            <div className={`${service=="Artificial Intelligence" ? 'flex flex-col py-[20px]   ' : 'hidden'} `} >
              <p className="text-[32px] leading-[35px] mx-[10px]">Artificial Intelligence</p>
              <p className="text-[14px] mt-[10px] leading-[18px] mx-[10px] w-[95%]">Transform you business with cutting-edge AI solutions. From machine learning and natural language processing to computer vision and intelligent automation,
                we deliver tailored innovations to optimize processes, enhance decision-making, and drive growth across industries. Let us help you unlock the full potential 
                of AI.
              </p>
              <p className="mt-[10px] mx-[10px] text-[20px]">Our Solutions</p>
              <div className="flex items-center justify-center w-[35%]">
                <div className="grid text-[14px] w-[80%] grid-flow-col grid-rows-3 grid-cols-[100%_100%_100%]  gap-2 mt-[5px]">
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>AI Powered <br/>Chatbots</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Machine Learning <br/>Solutions</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Natural Language Processing(NLP)</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>AI Driven Data <br/> Analytics</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Predictive Analytics & Recommendation Engines</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>AI for Automation & Process Optimization</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded ">
                      <p>Computer Vision <br/> Applications</p>
                    </div>
                </div>
              </div>
              <div className="w-[100%] flex items-center justify-end mt-[20px]">
                <div onClick={handleAIServiceClick} className=" bg-[#D98032] mr-[15px] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                    <p className="text-[16px]">
                      Explore Artificial Intelligence
                    </p>
                  <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                </div>
              </div>
            </div>

            <div className={`${service == "Web App Development" ? "flex flex-col py-[20px]" : "hidden"}`} >
              <p className="text-[32px] leading-[35px] mx-[10px]">Web App Development</p>
              <p className="text-[14px] mt-[10px] leading-[18px] mx-[10px] w-[95%]">At CodeBug, we specialize in creating robust and scalable web applications 
                tailored to your business needs. Our team of experts uses the latest technologies to build intuitive, 
                responsive, and secure web apps that deliver seamless user experiences across all devices. Whether you need an e-commerce platform, a custom solution, or an enterprise-grade application, CodeBug is here to bring your ideas to life with cutting-edge web development solutions.
              </p>
              <p className="mt-[10px] mx-[10px] text-[20px]">Our Solutions</p>
              <div className="flex items-center justify-center w-[35%]">
                <div className="grid text-[14px] w-[80%] grid-flow-col grid-rows-2 grid-cols-[100%_100%_100%]  gap-2 mt-[10px]">
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Custom Website <br/>Development</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>E-commerce <br/>Development</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Web Application Development</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Content Management System Development</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Enterprise Web Solutions</p>
                    </div>
                    
                </div>
              </div>
              <div className="w-[100%] flex items-center justify-end mt-[40px]">
                <div onClick={handleWebDevelopmentServiceClick} className=" bg-[#D98032] mr-[15px] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                    <p className="text-[16px]">
                      Explore Web App Development
                    </p>
                  <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                </div>
              </div>
            </div>

            <div className={`${service == "Mobile App Development" ? "flex flex-col py-[20px]" : "hidden"}`} >
              <p className="text-[32px] leading-[35px] mx-[10px]">Mobile App Development</p>
              <p className="text-[14px] mt-[10px] leading-[18px] mx-[10px] w-[95%]">CodeBug specializes in creating high-performance mobile apps for 
                iOS and Android. Our team builds custom, user-friendly applications that deliver seamless, engaging experiences. Whether you need a native app 
                or a cross-platform solution, we ensure your app is scalable, secure, and optimized to meet your business goals. Let CodeBug turn your app idea into reality with innovative and reliable mobile solutions.
              </p>
              <p className="mt-[10px] mx-[10px] text-[20px]">Our Solutions</p>
              <div className="flex items-center justify-center w-[35%]">
                <div className="grid text-[14px] w-[80%] grid-flow-col grid-rows-3 grid-cols-[100%_100%_100%]  gap-2 mt-[5px]">
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Custom Mobile App Development</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>iOS & Android App Development</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Cross-Platform App Development</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Computer Vision Applications</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>UI/UX Design & Prototyping</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>E-commerce & Business Apps</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>App Maintenance & Support</p>
                    </div>
                    
                    
                    
                </div>
              </div>
              <div className="w-[100%] flex items-center justify-end mt-[10px]">
                <div onClick={handleMobileDevelopmentServiceClick} className=" bg-[#D98032] mr-[15px] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                    <p className="text-[16px]">
                      Explore Mobile App Development
                    </p>
                  <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                </div>
              </div>
            </div>

            <div className={`${service == "Custom Software Development" ? "flex flex-col py-[20px]" : "hidden"}`} >
              <p className="text-[32px] leading-[35px] mx-[10px]">Custom Software Development</p>
              <p className="text-[14px] mt-[10px] leading-[18px] mx-[10px] w-[95%]">CodeBug offers tailored software solutions designed 
                to meet your specific business needs. Our team creates high-quality, scalable, and efficient software, from custom CRMs to specialized 
                applications, using the latest technologies. We focus on flexibility, security, and innovation to ensure your software evolves with your business and drives success. Let CodeBug build a solution 
                that works for you.
              </p>
              <p className="mt-[10px] mx-[10px] text-[20px]">Our Solutions</p>
              <div className="flex items-center justify-center w-[35%]">
                <div className="grid text-[14px] w-[80%] grid-flow-col grid-rows-2 grid-cols-[100%_100%_100%]  gap-2 mt-[10px]">
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Enterprise Software Development</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Business Process Automation</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>CRM & ERP <br/> Solutions</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Cloud-Based Software</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Software Integration & API Development</p>
                    </div>
                    
                </div>
              </div>
              <div className="w-[100%] flex items-center justify-end mt-[40px]">
                <div onClick={handleCustomSoftwareServiceClick} className=" bg-[#D98032] mr-[15px] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                    <p className="text-[16px]">
                      Explore Custom Software Development
                    </p>
                  <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                </div>
              </div>
            </div>

            <div className={`${service == "Cloud Solutions" ? "flex flex-col py-[20px]" : "hidden"}`} >
              <p className="text-[32px] leading-[35px] mx-[10px]">Cloud Solutions</p>
              <p className="text-[14px] mt-[10px] leading-[18px] mx-[10px] w-[95%]">CodeBug offers scalable and secure cloud solutions 
                to optimize your business performance. From cloud migration to infrastructure management, we create tailored cloud architectures that enhance efficiency, 
                reduce costs, and ensure seamless integration. Let us help your business grow with reliable, flexible cloud solutions.
              </p>
              <p className="mt-[10px] mx-[10px] text-[20px]">Our Solutions</p>
              <div className="flex items-center justify-center w-[35%]">
                <div className="grid text-[14px] w-[80%] grid-flow-col grid-rows-2 grid-cols-[100%_100%_100%]  gap-2 mt-[10px]">
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Cloud Migration & Strategy</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Cloud Application Development</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Cloud Security & Compliance</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>DevOps & Cloud Automation</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Multi-Cloud & Hybrid Cloud Solutions</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Cloud Storage & Backup Solutions</p>
                    </div>
                    
                </div>
              </div>
              <div className="w-[100%] flex items-center justify-end mt-[40px]">
                <div onClick={handleCloudSolutionsServiceClick} className=" bg-[#D98032] mr-[15px] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                    <p className="text-[16px]">
                      Explore Cloud Solutions
                    </p>
                  <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                </div>
              </div>
            </div>

            <div className={`${service == "UI/UX Design" ? "flex flex-col py-[20px]" : "hidden"}`} >
              <p className="text-[32px] leading-[35px] mx-[10px]">UI/UX Design</p>
              <p className="text-[14px] mt-[10px] leading-[18px] mx-[10px] w-[95%]">At CodeBug, we create visually stunning and user-friendly designs that elevate the user experience. Our team focuses on crafting intuitive interfaces and seamless interactions to ensure your users enjoy every step of their journey. By combining creativity with functionality, we deliver designs that not only look great but also drive engagement and satisfaction. Let CodeBug enhance your digital products with exceptional UI/UX design tailored to your audience&apos;s needs.
              </p>
              <p className="mt-[10px] mx-[10px] text-[20px]">Our Solutions</p>
              <div className="flex items-center justify-center w-[35%]">
                <div className="grid text-[14px] w-[80%] grid-flow-col grid-rows-2 grid-cols-[100%_100%_100%]  gap-2 mt-[10px]">
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>User Research & Wireframing</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>UI Design & Visual Aesthetics</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>UX Design & Prototyping</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Interaction Design & Micro-Animations</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Design System & Brand Identity</p>
                    </div>
                    
                </div>
              </div>
              <div className="w-[100%] flex items-center justify-end mt-[40px]">
                <div onClick={handleUIUXServiceClick} className=" bg-[#D98032] mr-[15px] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                    <p className="text-[16px]">
                      Explore UI/UX Design
                    </p>
                  <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                </div>
              </div>
            </div>

            <div className={`${service == "Software Support & Maintenance" ? "flex flex-col py-[20px]" : "hidden"}`} >
              <p className="text-[32px] leading-[35px] mx-[10px]">Software Support & Maintenance</p>
              <p className="text-[14px] mt-[10px] leading-[18px] mx-[10px] w-[95%]">
                CodeBug provides reliable software support and maintenance to keep your systems running smoothly. From timely 
                updates and bug fixes to performance optimization, we ensure your software remains secure, efficient, and up-to-date. 
                Let us handle the maintenance while you focus on growing your business.
              </p>
              <p className="mt-[10px] mx-[10px] text-[20px]">Our Solutions</p>
              <div className="flex items-center justify-center w-[35%]">
                <div className="grid text-[14px] w-[80%] grid-flow-col grid-rows-2 grid-cols-[100%_100%_100%]  gap-2 mt-[10px]">
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Bug Fixes & Issue Resolution</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Performance <br/> Optimization</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Security Updates & Compliance</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Feature Enhancements & Updates</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Version Upgrades & Compatibility Maintenance</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Proactive Monitoring & 24/7 Support</p>
                    </div>
                    
                </div>
              </div>
              <div className="w-[100%] flex items-center justify-end mt-[40px]">
                <div onClick={handleSoftwareSupportServiceClick} className=" bg-[#D98032] mr-[15px] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                    <p className="text-[16px]">
                      Explore Software Support
                    </p>
                  <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                </div>
              </div>
            </div>

            <div className={`${service == "Software Consultancy" ? "flex flex-col py-[20px]" : "hidden"}`} >
              <p className="text-[32px] leading-[35px] mx-[10px]">Software Consultancy</p>
              <p className="text-[14px] mt-[10px] leading-[18px] mx-[10px] w-[95%]">CodeBug provides expert software consultancy to help you 
                optimize your digital strategy. We offer insights on software selection, architecture design, and process improvement, 
                ensuring solutions that align with your business goals for long-term success. Let us guide you through the complexities of software 
                development.
              </p>
              <p className="mt-[10px] mx-[10px] text-[20px]">Our Solutions</p>
              <div className="flex items-center justify-center w-[35%]">
                <div className="grid text-[14px] w-[80%] grid-flow-col grid-rows-3 grid-cols-[100%_100%_100%]  gap-2 mt-[10px]">
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Techology Strategy & Planning</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Digital Transformation Consulting</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Custom Software Roadmap & Planning</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Software Architecture & System Design</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Process Optimization & Automation</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Risk Assessment & Compliance Consulting</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>IT Infrastructure & Cloud Strategy</p>
                    </div>
                </div>
              </div>
              <div className="w-[100%] flex items-center justify-end mt-[10px]">
                <div onClick={handleSoftwareConsultancyServiceClick} className=" bg-[#D98032] mr-[15px] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                    <p className="text-[16px]">
                      Explore Sofware Consultancy
                    </p>
                  <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                </div>
              </div>
            </div>

            <div className={`${service == "Blockchain" ? "flex flex-col py-[20px]" : "hidden"}`} >
              <p className="text-[32px] leading-[35px] mx-[10px]">Blockchain Technology</p>
              <p className="text-[14px] mt-[10px] leading-[18px] mx-[10px] w-[95%]">CodeBug provides custom blockchain solutions to enhance security, transparency, 
                and efficiency for your business. From decentralized applications to secure transactions, our team helps you harness the 
                power of blockchain technology to drive innovation and growth. Let CodeBug guide you into the future with cutting-edge blockchain solutions.
              </p>
              <p className="mt-[10px] mx-[10px] text-[20px]">Our Solutions</p>
              <div className="flex items-center justify-center w-[35%]">
                <div className="grid text-[14px] w-[80%] grid-flow-col grid-rows-3 grid-cols-[100%_100%_100%]  gap-2 mt-[10px]">
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Smart Contract Development</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Decentralized Applicatins (DApps)</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Private & Permissioned Blockchain Networks</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Crypto Wallet Development</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>NFT Marketplace</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>DeFi (Decentralized Finance) Solutions</p>
                    </div>
                    <div className="bg-gray-300 py-[5px] px-[10px] rounded">
                      <p>Blockchain Consulting & Strategy</p>
                    </div>                    
                </div>
              </div>
              <div className="w-[100%] flex items-center justify-end mt-[10px]">
                <div onClick={handleBlockchainServiceClick} className=" bg-[#D98032] mr-[15px] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                    <p className="text-[16px]">
                      Explore Blockchain
                    </p>
                  <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                </div>
              </div>
            </div>



            </div>
        </div>
        <div className="hidden md:flex  min-h-[70vh] rounded-[10px] bg-white mt-[25px] flex-row  justify-center items-center  w-[85%] ">
          <div className="w-[40%] ring-1 ring-black relative rounded-[10px] py-[15px] bg-gray-200 top-[-15px] left-[-15px] h-[70vh] text-black flex flex-col">
            <div onClick={onServiceClick} className={`${service === "Artificial Intelligence" ? "bg-blue-300 rounded-[10px] w-[105%]" : "hover:bg-gray-200 hover:w-[100%]"} h-[100%] px-[20px]  cursor-pointer rounded-tl-[10px] flex items-center `}>
              <p>Artificial Intelligence</p>
            </div>
            <div onClick={onServiceClick} className={`${service === "Web App Development" ? "bg-blue-300 w-[105%] rounded-[10px]" : "hover:bg-gray-200 hover:w-[100%]"} h-[100%] px-[20px]    cursor-pointer flex items-center`}>
              <p>Web App Development</p>
            </div>
            <div onClick={onServiceClick} className={`${service === "Mobile App Development" ? "bg-blue-300 rounded-[10px] w-[105%]" : "hover:bg-gray-200 hover:w-[100%]"} h-[100%] px-[20px]  cursor-pointer flex items-center`}>
              <p>Mobile App Development</p>
            </div>
            <div onClick={onServiceClick} className={`${service === "Custom Software Development" ? "bg-blue-300 rounded-[10px] w-[105%]" : "hover:bg-gray-200 hover:w-[100%]"} h-[100%] px-[20px]  cursor-pointer flex items-center`}>
              <p>Custom Software Development</p>
            </div>
            <div onClick={onServiceClick} className={`${service === "Cloud Solutions" ? "bg-blue-300 w-[105%] rounded-[10px]" : "hover:bg-gray-200 hover:w-[100%]"} h-[100%] px-[20px] cursor-pointer flex items-center`}>
              <p>Cloud Solutions</p>
            </div>
            <div onClick={onServiceClick} className={`${service === "UI/UX Design" ? "bg-blue-300 rounded-[10px] w-[105%]" : "hover:bg-gray-200 hover:w-[100%]"} h-[100%] px-[20px]  cursor-pointer flex items-center`}>
              <p>UI/UX Design</p>
            </div>
            <div onClick={onServiceClick} className={`${service === "Software Support & Maintenance" ? "bg-blue-300 rounded-[10px] w-[105%]" : "hover:bg-gray-200 hover:w-[100%]"} h-[100%] px-[20px] cursor-pointer flex items-center`}>
              <p>Software Support & Maintenance</p>
            </div>
            <div onClick={onServiceClick} className={`${service === "Software Consultancy" ? "bg-blue-300 w-[105%] rounded-[10px]" : "hover:bg-gray-200 hover:w-[100%]"} h-[100%] px-[20px] cursor-pointer flex items-center`}>
              <p>Software Consultancy</p>
            </div>
            <div onClick={onServiceClick} className={`${service === "Blockchain" ? " bg-blue-300 w-[105%] rounded-[10px]" : "hover:bg-gray-200 hover:w-[100%]"} h-[100%] px-[20px]  cursor-pointer rounded-bl-[10px] flex items-center`}>
              <p>Blockchain</p>
            </div>
          </div>
          <div className="w-[100%] px-[20px] py-[20px] text-black h-[100%]">
            <div className={`${service=="Artificial Intelligence" ? 'flex flex-col' : 'hidden'} `} >
              <p className="text-[32px]">Artificial Intelligence</p>
              <p className="text-[16px] leading-[20px]">Transform you business with cutting-edge AI solutions. From machine learning and natural language processing to computer vision and intelligent automation,
                we deliver tailored innovations to optimize processes, enhance decision-making, and drive growth across industries. Let us help you unlock the full potential 
                of AI.
              </p>
              <p className="mt-[10px] text-[18px]">Our Solutions</p>
              <div className="flex items-center justify-center w-[35%]">
                <div className="grid text-[14px] w-[80%] grid-flow-col grid-rows-3 grid-cols-[100%_100%_100%]  gap-2 mt-[10px]">
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>AI Powered <br/>Chatbots</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Machine Learning <br/>Solutions</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Natural Language Processing(NLP)</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>AI Driven Data <br/> Analytics</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Predictive Analytics & Recommendation Engines</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>AI for Automation & Process Optimization</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded ">
                      <p>Computer Vision <br/> Applications</p>
                    </div>
                </div>
              </div>
              <div className="w-[100%] flex items-center justify-end mt-[20px]">
                <div onClick={handleAIServiceClick} className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                    <p className="text-[16px]">
                      Explore Artificial Intelligence
                    </p>
                  <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                </div>
              </div>
            </div>

            <div className={`${service == "Web App Development" ? "flex flex-col" : "hidden"}`} >
              <p className="text-[32px]">Web App Development</p>
              <p className="text-[16px] leading-[20px]">At CodeBug, we specialize in creating robust and scalable web applications 
                tailored to your business needs. Our team of experts uses the latest technologies to build intuitive, 
                responsive, and secure web apps that deliver seamless user experiences across all devices. Whether you need an e-commerce platform, a custom solution, or an enterprise-grade application, CodeBug is here to bring your ideas to life with cutting-edge web development solutions.
              </p>
              <p className="mt-[10px] text-[18px]">Our Solutions</p>
              <div className="flex items-center justify-center w-[35%]">
                <div className="grid text-[14px] w-[80%] grid-flow-col grid-rows-2 grid-cols-[100%_100%_100%]  gap-2 mt-[10px]">
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Custom Website <br/>Development</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>E-commerce <br/>Development</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Web Application Development</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Content Management System Development</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Enterprise Web Solutions</p>
                    </div>
                    
                </div>
              </div>
              <div className="w-[100%] flex items-center justify-end mt-[40px]">
                <div onClick={handleWebDevelopmentServiceClick} className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                    <p className="text-[16px]">
                      Explore Web App Development
                    </p>
                  <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                </div>
              </div>
            </div>

            <div className={`${service == "Mobile App Development" ? "flex flex-col" : "hidden"}`} >
              <p className="text-[32px]">Mobile App Development</p>
              <p className="text-[16px] leading-[20px]">CodeBug specializes in creating high-performance mobile apps for 
                iOS and Android. Our team builds custom, user-friendly applications that deliver seamless, engaging experiences. Whether you need a native app 
                or a cross-platform solution, we ensure your app is scalable, secure, and optimized to meet your business goals. Let CodeBug turn your app idea into reality with innovative and reliable mobile solutions.
              </p>
              <p className="mt-[5px] text-[18px]">Our Solutions</p>
              <div className="flex items-center justify-center w-[35%]">
                <div className="grid text-[14px] w-[80%] grid-flow-col grid-rows-3 grid-cols-[100%_100%_100%]  gap-2 mt-[5px]">
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Custom Mobile App Development</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>iOS & Android App Development</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Cross-Platform App Development</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Computer Vision Applications</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>UI/UX Design & Prototyping</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>E-commerce & Business Apps</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>App Maintenance & Support</p>
                    </div>
                    
                    
                    
                </div>
              </div>
              <div className="w-[100%] flex items-center justify-end mt-[10px]">
                <div onClick={handleMobileDevelopmentServiceClick} className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                    <p className="text-[16px]">
                      Explore Mobile App Development
                    </p>
                  <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                </div>
              </div>
            </div>

            <div className={`${service == "Custom Software Development" ? "flex flex-col" : "hidden"}`} >
              <p className="text-[32px]">Custom Software Development</p>
              <p className="text-[16px] leading-[20px]">CodeBug offers tailored software solutions designed 
                to meet your specific business needs. Our team creates high-quality, scalable, and efficient software, from custom CRMs to specialized 
                applications, using the latest technologies. We focus on flexibility, security, and innovation to ensure your software evolves with your business and drives success. Let CodeBug build a solution 
                that works for you.
              </p>
              <p className="mt-[10px] text-[18px]">Our Solutions</p>
              <div className="flex items-center justify-center w-[35%]">
                <div className="grid text-[14px] w-[80%] grid-flow-col grid-rows-2 grid-cols-[100%_100%_100%]  gap-2 mt-[10px]">
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Enterprise Software Development</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Business Process Automation</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>CRM & ERP <br/> Solutions</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Cloud-Based Software</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Software Integration & API Development</p>
                    </div>
                    
                </div>
              </div>
              <div className="w-[100%] flex items-center justify-end mt-[40px]">
                <div onClick={handleCustomSoftwareServiceClick} className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                    <p className="text-[16px]">
                      Explore Custom Software Development
                    </p>
                  <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                </div>
              </div>
            </div>

            <div className={`${service == "Cloud Solutions" ? "flex flex-col" : "hidden"}`} >
              <p className="text-[32px]">Cloud Solutions</p>
              <p className="text-[16px] leading-[20px]">CodeBug offers scalable and secure cloud solutions 
                to optimize your business performance. From cloud migration to infrastructure management, we create tailored cloud architectures that enhance efficiency, 
                reduce costs, and ensure seamless integration. Let us help your business grow with reliable, flexible cloud solutions.
              </p>
              <p className="mt-[10px] text-[18px]">Our Solutions</p>
              <div className="flex items-center justify-center w-[35%]">
                <div className="grid text-[14px] w-[80%] grid-flow-col grid-rows-2 grid-cols-[100%_100%_100%]  gap-2 mt-[10px]">
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Cloud Migration & Strategy</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Cloud Application Development</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Cloud Security & Compliance</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>DevOps & Cloud Automation</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Multi-Cloud & Hybrid Cloud Solutions</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Cloud Storage & Backup Solutions</p>
                    </div>
                    
                </div>
              </div>
              <div className="w-[100%] flex items-center justify-end mt-[40px]">
                <div onClick={handleCloudSolutionsServiceClick} className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                    <p className="text-[16px]">
                      Explore Cloud Solutions
                    </p>
                  <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                </div>
              </div>
            </div>

            <div className={`${service == "UI/UX Design" ? "flex flex-col" : "hidden"}`} >
              <p className="text-[32px]">UI/UX Design</p>
              <p className="text-[16px] leading-[20px]">At CodeBug, we create visually stunning and user-friendly designs that elevate the user experience. Our team focuses on crafting intuitive interfaces and seamless interactions to ensure your users enjoy every step of their journey. By combining creativity with functionality, we deliver designs that not only look great but also drive engagement and satisfaction. Let CodeBug enhance your digital products with exceptional UI/UX design tailored to your audience&apos;s needs.
              </p>
              <p className="mt-[10px] text-[18px]">Our Solutions</p>
              <div className="flex items-center justify-center w-[35%]">
                <div className="grid text-[14px] w-[80%] grid-flow-col grid-rows-2 grid-cols-[100%_100%_100%]  gap-2 mt-[10px]">
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>User Research & Wireframing</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>UI Design & Visual Aesthetics</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>UX Design & Prototyping</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Interaction Design & Micro-Animations</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Design System & Brand Identity</p>
                    </div>
                    
                </div>
              </div>
              <div className="w-[100%] flex items-center justify-end mt-[40px]">
                <div onClick={handleUIUXServiceClick} className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                    <p className="text-[16px]">
                      Explore UI/UX Design
                    </p>
                  <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                </div>
              </div>
            </div>

            <div className={`${service == "Software Support & Maintenance" ? "flex flex-col" : "hidden"}`} >
              <p className="text-[32px]">Software Support & Maintenance</p>
              <p className="text-[16px] leading-[20px]">
                CodeBug provides reliable software support and maintenance to keep your systems running smoothly. From timely 
                updates and bug fixes to performance optimization, we ensure your software remains secure, efficient, and up-to-date. 
                Let us handle the maintenance while you focus on growing your business.
              </p>
              <p className="mt-[10px] text-[18px]">Our Solutions</p>
              <div className="flex items-center justify-center w-[35%]">
                <div className="grid text-[14px] w-[80%] grid-flow-col grid-rows-2 grid-cols-[100%_100%_100%]  gap-2 mt-[10px]">
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Bug Fixes & Issue Resolution</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Performance <br/> Optimization</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Security Updates & Compliance</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Feature Enhancements & Updates</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Version Upgrades & Compatibility Maintenance</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Proactive Monitoring & 24/7 Support</p>
                    </div>
                    
                </div>
              </div>
              <div className="w-[100%] flex items-center justify-end mt-[40px]">
                <div onClick={handleSoftwareSupportServiceClick} className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                    <p className="text-[16px]">
                      Explore Software Support
                    </p>
                  <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                </div>
              </div>
            </div>

            <div className={`${service == "Software Consultancy" ? "flex flex-col" : "hidden"}`} >
              <p className="text-[32px]">Software Consultancy</p>
              <p className="text-[16px] leading-[20px]">CodeBug provides expert software consultancy to help you 
                optimize your digital strategy. We offer insights on software selection, architecture design, and process improvement, 
                ensuring solutions that align with your business goals for long-term success. Let us guide you through the complexities of software 
                development.
              </p>
              <p className="mt-[10px] text-[18px]">Our Solutions</p>
              <div className="flex items-center justify-center w-[35%]">
                <div className="grid text-[14px] w-[80%] grid-flow-col grid-rows-3 grid-cols-[100%_100%_100%]  gap-2 mt-[10px]">
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Techology Strategy & Planning</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Digital Transformation Consulting</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Custom Software Roadmap & Planning</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Software Architecture & System Design</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Process Optimization & Automation</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Risk Assessment & Compliance Consulting</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>IT Infrastructure & Cloud Strategy</p>
                    </div>
                </div>
              </div>
              <div className="w-[100%] flex items-center justify-end mt-[10px]">
                <div onClick={handleSoftwareConsultancyServiceClick} className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                    <p className="text-[16px]">
                      Explore Sofware Consultancy
                    </p>
                  <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                </div>
              </div>
            </div>

            <div className={`${service == "Blockchain" ? "flex flex-col" : "hidden"}`} >
              <p className="text-[32px]">Blockchain Technology</p>
              <p className="text-[16px] leading-[20px]">CodeBug provides custom blockchain solutions to enhance security, transparency, 
                and efficiency for your business. From decentralized applications to secure transactions, our team helps you harness the 
                power of blockchain technology to drive innovation and growth. Let CodeBug guide you into the future with cutting-edge blockchain solutions.
              </p>
              <p className="mt-[10px] text-[18px]">Our Solutions</p>
              <div className="flex items-center justify-center w-[35%]">
                <div className="grid text-[14px] w-[80%] grid-flow-col grid-rows-3 grid-cols-[100%_100%_100%]  gap-2 mt-[10px]">
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Smart Contract Development</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Decentralized Applicatins(DApps)</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Private & Permissioned Blockchain Networks</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Crypto Wallet Development</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>NFT Marketplace</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>DeFi(Decentralized Finance) Solutions</p>
                    </div>
                    <div className="bg-blue-300 py-[5px] px-[10px] rounded">
                      <p>Blockchain Consulting & Strategy</p>
                    </div>                    
                </div>
              </div>
              <div className="w-[100%] flex items-center justify-end mt-[10px]">
                <div onClick={handleBlockchainServiceClick} className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                    <p className="text-[16px]">
                      Explore Blockchain
                    </p>
                  <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* <div className="flex ring-2 ring-[#D98032]  rounded-[10px] mx-7 mt-4 flex-row  justify-between items-center  w-[100%] ">
          <div className="  flex border-r-[1px] border-gray-800 flex-col bg-gray-300 text-black lg:rounded-l-[10px] lg:rounded-r-[0px] rounded-[10px]  max-h-[520px] h-[70vh]  w-[100%] lg:w-[40%]">
              
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
            className="lg:w-[60%] md:hidden sm:hidden hidden lg:flex flex-col border-r-[1px] border-t-[1px] border-b-[1px] border-gray-800 max-h-[520px] h-[70vh] bg-white rounded-r-[10px]"
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
                    <div onClick={handleAIServiceClick} className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                                            <p className="text-[16px]">
                                                Explore Artificial Intelligence
                                            </p>
                        <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                    </div> 
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
                  <div onClick={handleWebDevelopmentServiceClick}  className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                          <p className="text-[16px]">
                            Explore Web Development
                          </p>
                        <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                    </div> 
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
                  <div onClick={handleMobileDevelopmentServiceClick} className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                                            <p className="text-[16px]">
                                                Explore Mobile Development
                                            </p>
                        <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                    </div> 
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
                  <div onClick={handleCustomSoftwareServiceClick}  className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                                            <p className="text-[16px]">
                                                Explore Custom Software Development
                                            </p>
                        <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                    </div> 
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
                  <div onClick={handleCloudSolutionsServiceClick}  className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                                            <p className="text-[16px]">
                                                Explore Cloud Solutions
                                            </p>
                        <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                    </div> 
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
                  <div onClick={handleUIUXServiceClick}  className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                                            <p className="text-[16px]">
                                                Explore UI/UX Design
                                            </p>
                        <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                    </div> 
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
                  <div onClick={handleSoftwareSupportServiceClick} className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                                            <p className="text-[16px]">
                                                Explore Software Support & Maintenance
                                            </p>
                        <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                    </div> 
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
                  <div onClick={handleSoftwareConsultancyServiceClick}  className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                                            <p className="text-[16px]">
                                                Explore Software Consultancy
                                            </p>
                        <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                    </div> 
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
                  <div onClick={handleBlockchainServiceClick} className=" bg-[#D98032] flex flex-row items-center justify-center ring-[#000] ring-[0.5px] text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1 cursor-pointer hover:bg-[#D98032] group w-fit ">
                                            <p className="text-[16px]">
                                                Explore Blockchain
                                            </p>
                        <Image alt="arrow" src={Arrow} height={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
                    </div> 
                  </div>
                </div>  
              </div>
            
          </div>
  
        </div> */}
      </div>
    </div>
  );
};

export default Services;
