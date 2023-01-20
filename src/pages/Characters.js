import React from "react";
import { Spinner } from "../components/Spinner";
import { useCharacters } from "../hooks/useCharacters";
import "./CharacterList.css";

export default function CharactersList() {
  const [error, data, loading] = useCharacters();

  if (loading) {
    return (
      <Spinner
        color="blue"
        loading={true}
        style={{ display: "flex", alignItems: "center" }}
      />
    );
  }

  if (error) return <div style={{ color: "red" }}>SomeThing Wrong ...</div>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <div>
            <img src={character.image} alt="CharacterImg" />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
