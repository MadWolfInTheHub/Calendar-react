import React, { useEffect } from 'react';
import { time } from './time';

const Clock = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      time();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className='clock'></div>
  );
};

export default Clock;
