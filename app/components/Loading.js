
import React from 'react';
import Logo from '../images/codebugfinal8.png'
import Image from 'next/image';

const Loading = () => {
    const [dots, setDots] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
        setDots((prev) => (prev.length < 3 ? prev + "." : ""));
        }, 500);
        return () => clearInterval(interval);
    }, []);


  return (
    <div className="flex space-y-3 flex-col items-center w-screen text-white justify-center h-screen">
        <Image src={Logo} height={100}/>
        <p>Loading{dots}</p>
      
    </div>
  );
};

export default Loading;
