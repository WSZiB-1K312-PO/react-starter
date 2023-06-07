import React, {useEffect, useState} from 'react';

function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function Randomizer() {
  let [random, setRandom] = useState(randomNumber(10, 20));

  useEffect(() => {
    const title = document.title;

    let seconds = 0;

    document.title = `You are here for ${seconds}s`;
    let interval = setInterval(() => {
      ++seconds;
      document.title = `You are here for ${seconds}s`;
    }, 1000);

    return () => {
      clearInterval(interval);
      document.title = title;
    }
  })

  return <div>
    <p>{random}</p>
    <button onClick={() => setRandom(randomNumber(10, 20))}>Random!</button>
  </div>;
}