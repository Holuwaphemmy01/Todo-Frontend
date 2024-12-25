import React, { useState, useEffect } from 'react';

const CurrentTime = ({ onUpdate }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString();
      setTime(formattedTime);
      if (onUpdate) onUpdate(formattedTime); 
    };

    const intervalId = setInterval(updateTime, 1000);
    updateTime(); 
    return () => clearInterval(intervalId); 
  }, [onUpdate]);

  return <>{time}</>; 
};

export default CurrentTime;
