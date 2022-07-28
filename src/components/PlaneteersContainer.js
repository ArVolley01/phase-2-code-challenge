import React, { useEffect, useState } from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({filter}) {

  const [planets, setPlanets] = useState([])


  useEffect(() => {
    const getData = async () => {
      const req = await fetch('http://localhost:8003/planeteers')
      const res = await req.json();
      setPlanets(res);
    }
    getData();
  }, [])




  return (
    <ul className="cards">
      {planets.filter((planet) => { return planet.name.toLowerCase().includes(filter.toLowerCase()) || planet.bio.toLowerCase().includes(filter.toLowerCase()) }).map((planet) => {
        return (
          <Planeteer name={planet.name} from={planet.fromUsa} bday={planet.born} bio={planet.bio} quote={planet.quote} img={planet.pictureUrl} tweet={planet.twitter}/>
        )
      })}
    </ul>
  );
}

export default PlaneteersContainer;
