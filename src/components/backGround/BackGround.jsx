import React from 'react';
import { useEffect, useState } from "react";
import "./BackGround.css";

function BackGround() {
  const [stars, setStars] = useState([]);

  

  useEffect(() => {
    const starElements = [...Array(50)].map((_, index) => {
      const topOffset = Math.random() * 100 + 'vh';
      const leftOffset = Math.random() * 100 + 'vw';
      const fallDuration = Math.random() * 5 + 2 + 's'; // Random duration between 2s and 5s

      return (
        <div
          key={index}
          className="star"
          style={{
            '--star-top-offset': topOffset,
            '--star-left-offset': leftOffset,
            '--fall-duration': fallDuration,
          }}
        ></div>
      );
    });

    starElements.forEach((star, index) => {
      setTimeout(() => {
        setStars((prevStars) => [...prevStars, star]);
      }, index * 400); // Delay each star by 100ms
    });
  }, []);

  return <div className="shooting-stars">{stars}</div>;
}

export default BackGround;