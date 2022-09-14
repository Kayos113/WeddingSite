import React, {useState, useEffect} from "react";

function Countdown() {

  const weddingDate = +new Date("September 16, 2023 05:00:00");

  const calculateTimeLeft = () => {
    let difference = weddingDate - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect( () => {
    const timer = setTimeout( () => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="countdown">
      <div className="clock-card">
        <h6>{timeLeft.days>=10?timeLeft.days:"0"+timeLeft.days} days</h6>
        <h6>{timeLeft.hours>=10?timeLeft.hours:"0"+timeLeft.hours} hours</h6>
        <h6>{timeLeft.minutes>=10?timeLeft.minutes:"0"+timeLeft.minutes} minutes</h6>
      </div>
    </div>
  )
}

export default Countdown;
