import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export default function Search() {
  const [name, setName] = useState("");

  const [getlocations, { loading, error, data }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getlocations()}>Search</button>
      {error && <div>Something went wrong</div>}
      {loading && <div>Loading...</div>}
      {data && (
        <ul>
          {data.characters.results.map((character) => {
            return <li key={character.id}>{character.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
