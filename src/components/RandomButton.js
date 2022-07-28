import React from "react";
import { getRandomPlaneteer } from "../data/planeteers";

function RandomButton({update}) {
  async function handleClick () {
    const randomPlaneteer = getRandomPlaneteer();
    let continuing = true;

    fetch('http://localhost:8003/planeteers').then(req => req.json()).then(res => {
      if(res.find((planet) => {return planet.name === randomPlaneteer.name})){
        handleClick(); continuing = false
      }
    })
    if (continuing) {
      fetch('http://localhost:8003/planeteers', {
        method: "POST",
        headers: {
          "Content-type": "Application/json"
        },
        body: JSON.stringify(randomPlaneteer)
      }).then(update())
    }
    
  }

  return (
    <div className="centered">
      <button onClick={handleClick} id="random-planeteer">
        Click to Show a Random Planeteer
      </button>
    </div>
  );
}

export default RandomButton;
