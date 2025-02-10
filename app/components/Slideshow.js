import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable'; // Import Draggable plugin
import GreenTech from '../images/greentech3.png'
import Image from 'next/image'
import Fintech from '../images/fintechpartners3.png'
import Retail from '../images/retailworld.jpeg'
import Healthcare from '../images/healthcareinnovation2.png'
import Global from '../images/globalsolutions3.png'
import Tech from '../images/techinnovators2.png'
import Profile1 from '../images/profile1.png'
import Profile2 from '../images/profile2.png'
import Profile3 from '../images/profile3.png'
import Profile4 from '../images/profile4.png'
import Profile5 from '../images/profile5.png'
import Profile6 from '../images/profile6.png'


// Register Draggable plugin
gsap.registerPlugin(Draggable);

export default function Slideshow() {

  useEffect(() => {
    const container = document.querySelector('.cards-container');
    const cards = document.querySelectorAll('.card');
    
    const numCards = cards.length;
    const cardWidth = cards[0].offsetWidth; // Get the width of each card
    const containerWidth = cardWidth * numCards + 10 * (numCards - 1); // Total width with margins
    
    container.style.width = `${containerWidth}px`; // Set the width of the container

    // GSAP timeline to animate the sliding of all cards together
    const tl = gsap.timeline({
      repeat: -1, // Infinite loop
      repeatDelay: 3, // Delay between repeats
      onRepeat: () => {
        // Move the first card to the end after each complete loop
        const firstCard = container.querySelector('.card:first-child');
        container.appendChild(firstCard); // Move the first card to the end
        gsap.set(container, { x: 0 }); // Reset x position after loop
      },
    });

    // Select the second card using nth-child selector
    const secondCard = container.querySelector('.card:nth-child(2)'); // Select the second card
    
    // Slide all cards one at a time and scale the second card
    tl.to(container, {
      x: `-${cardWidth }`, // Move left by the width of one card
      duration: 1, // Time for one card to slide
      ease: 'none', // No easing for smooth movement
    })
    
    // Add Draggable functionality
    const draggable = Draggable.create(container, {
      type: "x", // Horizontal dragging
      edgeResistance: 0.5, // Resistance at the edges to prevent overscroll
      bounds: { minX: -containerWidth + window.innerWidth, maxX: 0 }, // Set bounds to prevent dragging too far
      inertia: true, // Allow inertia (smooth deceleration)
      onDrag: () => {
        gsap.set(container, { x: container.x }); // Update container's position on drag
        tl.pause(); // Pause GSAP timeline while dragging
      },
      onRelease: () => {
        // Resume the GSAP animation after dragging ends
        tl.resume();
        gsap.to(container, { x: container.x, duration: 0.5 }); // Ensure smooth snapping back after release
      },
    });

    return () => {
      tl.kill(); // Cleanup on component unmount
      draggable[0].kill(); // Cleanup Draggable instance
    };
  }, []);
  
  const cardsNew = [
    { id: 1, name: 'Card 1', profile: Profile1, image: GreenTech, rating: 4, company: 'Tech Innovators Inc.', description: 'The team at Codebug transformed our digital presence and helped streamline our operations with a custom software solution. Their attention to detail and customer-first approach made the entire development process seamless. We could not be happier with the results!', author: 'Sarah Blake', post: 'CEO, Tech Innovators Inc.' },
    { id: 2, name: 'Card 2', profile: Profile2, image: Global , rating: 5, company: 'Global Solutions Ltd.', description: 'Working with Codebug was an absolute pleasure. They understood our vision and translated it into a cutting-edge app that increased our engagement and customer satisfaction. We saw a 25% increase in productivity within the first three months of using the software.', author: 'James Roberts', post: 'Product Manager' },
    { id: 3, name: 'Card 3', profile: Profile3, image: Retail, rating: 4, company: 'Retail World', description: 'From initial consultation to the final product, Codebug delivered beyond our expectations. They provided not only a reliable software solution but also excellent customer support throughout the process. The custom CRM they built has saved us time and resources, making our sales team more efficient than ever!', author: 'Linda Miller', post: 'Head of Operations' },
    { id: 4, name: 'Card 4', profile: Profile4, image: GreenTech, rating: 5, company: 'GreenTech Solutions', description: 'The team at Codebug truely went above and beyond. They worked closely with us to develop a sustainable software solution tailored to our needs. Their technical expertise and innovative approach made them a valuable partner. Our new software has significantly improved our project management capabilities.', author: 'Carlos Ruiz', post: 'Cheif Technology Officer' },
    { id: 5, name: 'Card 5', profile: Profile5, image: Healthcare,  rating: 4, company: 'HealthCare Innovations', description: "What impressed us the most is the team's ability to listen and understand our complex requirements. The software they built for us helped streamline our internal processes, reducing manual errors and increasing our operational efficiency by 40%. Highly recommended!", author: 'Dr. Timothy Tidwell', post: 'Medical Director' },
    { id: 6, name: 'Card 6', profile: Profile6, image: Fintech, rating: 5, company: 'FinTech Partners', description: 'We approached Codebug with a complex challenge: creating a secure, scalable, and user-friendly platform for our financial services. Not only did they exceed our expectations in terms of functionality and security, but their ability to deliver the project on schedule was impressive. Their team is highly skilled, professional, and a joy to work with.', author: 'Michael Johnson', post: 'Chief Technology Officer' },
  ];

  return (
    <div
      style={{
        marginTop: '35px',
        overflow: 'hidden', // Hide overflowing cards
        width: '85.5vw', // Take full viewport width
        height: '300px', // Adjust height as per card's height
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        color: 'black'
      }}
    >
      <div
        className="cards-container"
        style={{
          height: '100%', // Full height for the container
          display: 'flex',
          flexDirection: 'row', // Horizontal alignment
          padding: '10px 0', // Space between cards

          
          borderRadius: '5px',
          
        }}
      >
        {/* Cards */}
        {cardsNew.map((value) => (
          <div
            
            key={value.id}
            className="card bg-white w-[390px]"
            style={{
              marginRight: '10px', // Space between cards
               // Full viewport width for each card
              height: '100%', // Full height for each card

              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '10px 0',
              borderRadius: '8px',
              boxShadow: '0px 10px 50px 5px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              border: '1.3px solid black',
              transition: 'transform 0.5s',
              

            }}
          >
            <div className='flex flex-col   text-left px-[20px]'>
              <div className='flex flex-row mt-2 items-center '>
                <Image src={value.image} height={50} />
                <p className='ml-2 text-[20px]'>{value.company}</p>
                
              </div>  
              <div className='flex flex-row items-center space-x-2'>

                
              </div>
              <p className='mt-3 text-[12px]'>{value.description}</p>
              <div className=' mt-[10px] flex flex-row space-x-2 items-center '>
                <Image src={value.profile} height={50}  />
                <div className='flex flex-col leading-4'>
                  <p className='text-left text-[15px]'>{value.author}</p>
                  <p className='text-left text-[11px] text-gray-800'>{value.post}</p>
                  <p className='text-left text-[11px] text-gray-700'>{value.company}</p>
                </div>
              </div>
            </div>
            
            
          </div>
        ))}
      </div>
    </div>
  );
}
