import React, { useState, useEffect } from "react";

function Timer() {
  const initialSeconds = parseInt(localStorage.getItem("remainingTime")) || 60;
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  useEffect(() => {
    localStorage.setItem("remainingTime", seconds.toString());
  }, [seconds]);

  return <p>Time remaining: {seconds} seconds</p>;
}

export default Timer;
