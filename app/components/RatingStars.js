'use client';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const RatingStars = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <FaStar 
          key={index} 
          color={index < rating ? '#FFD700' : 'gray'} 
          size={20}
          className='mr-[2px] mt-[8px]' 
        />
      ))}
    </div>
  );
};

export default RatingStars;