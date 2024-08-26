import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import {CharacterCard} from "../component/CharacterCard.js";
import '../../styles/starWar.css';

export const Home = () => {
  const { store } = useContext(Context);

  return (
    <>
      <h1 className="text-center mt-2 text-white">Characters</h1>
      <div className=" d-flex justify-content-center text-center mt-5 ">
        <div className="container d-flex overflow-auto ">
          {store.characters.map((character) => (
            <CharacterCard
              key={character.uid}
              img={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
              name={character.name}
              gender={character.gender}
              age={character.birth_year}
              type={"people"}
              uid={character.uid}
            />
          ))}
        </div>
      </div>
    </>
  );
};