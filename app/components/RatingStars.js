'use client';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const RatingStars = ({ }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <FaStar 
          key={index} 
          color={index < 5 ? '#FFD700' : 'gray'} 
          size={20}
          className='mr-[2px] mt-[8px]' 
        />
      ))}
    </div>
  );
};

export default RatingStars;