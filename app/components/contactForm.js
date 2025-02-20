import Contact from "./Contact"
import Image from 'next/image'
import Arrow from '../images/rightArrow2.png'
import { useEffect, useState } from "react"


const ContactForm = ({onContactClick = null, contactClick = null}) => {
    const [newMessageSubmit, setNewMessageSubmit] = useState(false);


    const handleMessageSubmit = () => {
        setNewMessageSubmit(true);
        onContactClick()
    }
    
    return(
        <div className="w-full flex flex-col items-center justify-center">
        {contactClick ? (
            <div className="h-fit bg-gray-300 flex items-center justify-center">
                <Contact handleMessageSubmit={handleMessageSubmit} />
            </div>
        ) : newMessageSubmit ? (
            <div className="flex flex-col py-4 justify-center w-[100vw] items-center min-h-[18vh] space-y-2 text-white bg-black">
                <p className="px-5 md:text-2xl text-xl text-center">
                    Thank you for the message, we'll get back to you soon
                </p>
                <div
                    onClick={onContactClick}
                    className="bg-[#D98032] flex flex-row items-center justify-center ring-[#BF532C] ring-1 text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1.5 cursor-pointer hover:bg-[#D98032] group"
                >
                    <p className="text-[17px]">Submit another Message</p>
                    <Image
                        alt="arrow"
                        src={Arrow}
                        height={25}
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
                    />
                </div>
            </div>
        ) : (
            <div className="flex flex-col py-4 justify-center w-[100vw] items-center min-h-[18vh] space-y-2 text-white bg-black">
                <p className="px-5 md:text-2xl text-xl text-center">
                    Let&apos;s talk about how to transform your business
                </p>
                <div
                    onClick={onContactClick}
                    className="bg-[#D98032] flex flex-row items-center justify-center ring-[#BF532C] ring-1 text-xl text-black rounded-[5px] px-5 2xl:py-2 ring-[#8C2020] py-1.5 cursor-pointer hover:bg-[#D98032] group"
                >
                    <p className="text-[17px]">Get in touch</p>
                    <Image
                        alt="arrow"
                        src={Arrow}
                        height={25}
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
                    />
                </div>
            </div>
        )}
    </div>
    
    )
}

export default ContactForm