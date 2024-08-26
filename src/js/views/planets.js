import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { PlanetCard } from "../component/PlanetCard.js";

import "../../styles/starWar.css";

export const Planets = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.loadData();
  }, []);

  return (
    <>
      <h1 className="text-center text-white mt-2">Planets</h1>
      <div className=" d-flex justify-content-center text-center mt-5 ">
        <div className="container d-flex overflow-auto ">
          {store.planets.map((planet) => (
            <PlanetCard
              key={planet.uid}
              img={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
              name={planet.name}
              terrain={planet.terrain}
              population={planet.population}
              type={"planets"}
              uid={planet.uid}
            />
          ))}
        </div>
      </div>
    </>
  );
};