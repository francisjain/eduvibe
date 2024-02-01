import React, { useState, useEffect } from 'react';

const Odometer = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let interval;
    if (value > displayValue) {
      interval = setInterval(() => {
        setDisplayValue(prevValue => Math.min(prevValue + 1, value));
      }, 5); 
    }

    return () => {
      clearInterval(interval);
    };
  }, [value, displayValue]);

  return <div>{displayValue}</div>;
};

export default Odometer;
