
import React from 'react';
import Logo from '../images/icon2.png'
import Image from 'next/image';

const Loading = () => {
  return (
    <div className="flex items-center w-screen text-white justify-center h-screen">
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        <Image src={Logo} height={30}/>
      </div>
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loading;
