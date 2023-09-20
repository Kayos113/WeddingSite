import React, {useState, useEffect} from "react";

function Countdown() {

  const weddingDate = +new Date("September 16, 2023 16:00:00");

  const calculateTimeLeft = () => {
    let difference = weddingDate - +new Date();
    console.log(difference);

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    else if (difference < 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)) * -1,
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24) * -1,
        minutes: Math.floor((difference / 1000 / 60) % 60) * -1,
        seconds: Math.floor((difference / 1000) % 60) * -1
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
        <h6>They have been married for</h6>
        <h6>{timeLeft.days>=10?timeLeft.days:timeLeft.days} days</h6>
        <h6>{timeLeft.hours>=10?timeLeft.hours:timeLeft.hours} hours</h6>
        <h6>{timeLeft.minutes>=10?timeLeft.minutes:timeLeft.minutes} minutes</h6>
      </div>
    </div>
  )
}

export default Countdown;
