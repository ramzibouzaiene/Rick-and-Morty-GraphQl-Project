import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Spinner } from "../components/Spinner";
import Cards from "../components/Card";
import './CharacterList.css'

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export default function CharactersList() {
  const { error, data, loading } = useQuery(GET_CHARACTERS);

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

  return(
    <div className="CharacterList">
    {data.characters.results.map((character) => {
      return (
        <div>
            <img src={character.image} />
            <h2>{character.name}</h2> 
        </div>
      );
    })}
  </div>
  )
  
}
