import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [countdown, setCountdown] = useState(120);

  useEffect(() => {
    const timer = setInterval(() => {
     if(countdown){
      setCountdown(countdown => countdown - 1);
     }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>{Math.floor(countdown / 60)}:{countdown % 60 < 10 ? '0' : ''}{countdown % 60}</p>
    </div>
  );
}

export default CountdownTimer;
