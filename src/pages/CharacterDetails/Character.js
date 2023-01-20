import React from "react";
import { useParams } from "react-router";
import { useCharacter } from "../../hooks/useCharacter";
import "./Character.css";

export default function Character() {
  const { id } = useParams();

  const { data, loading, error } = useCharacter(id);

  if (error) return <div>Something went wrong</div>;

  if (loading) return <div>Loading..</div>;

  return (
    <div className="Character">
      <img src={data.character.image} alt="" width={750} height={750} />
      <h1>{data.character.name}</h1>
      <p>{data.character.gneder}</p>
      <div className="Character-episode">
        {data.character.episode.map((episode) => {
          return (
            <div key={episode.id}>
              {episode.name} - <b>{episode.episode}</b>
            </div>
          );
        })}
      </div>
    </div>
  );
}
