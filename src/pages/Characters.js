import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Spinner } from "../components/Spinner";
import Cards from "../components/Card";

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
    <div>
    {data.characters.results.map((character) => {
      return (
        <Cards
            maxW='xl'
            borderRadius='md' 
            src={character.image}
            name={character.name}
        />
      );
    })}
  </div>
  )
  
}
