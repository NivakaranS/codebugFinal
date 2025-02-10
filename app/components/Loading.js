
import React from 'react';
import Logo from '../images/icon2.png'
import Image from 'next/image';

const Loading = () => {
  return (
    <div className="flex flex-col items-center w-screen text-white justify-center h-screen">
        <Image src={Logo} height={100}/>
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        
      </div>
      
    </div>
  );
};

export default Loading;
