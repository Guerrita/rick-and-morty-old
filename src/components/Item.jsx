import React from "react";
import "@styles/Item.css";

const Item = ({ character }) => {
  {
    console.log(character);
  }
  return (
    <article className="character--card">
      <figure className="character--image">
        <img src={character.image} alt={character.name} />
      </figure>
      <div className="character--information">
        <p className="character--name">{character.name}</p>
        <p className={`character--status ${character.status==='Alive' && 'character--status-alive'} ${character.status=='Dead' && 'character--status-dead'} ${character.status=='unknown' && 'character--status-unknown'}`}>
          {character.status}
        </p>
        <div class="line"></div>
        <div className="character-detail--information">
          <p className="character--gender">{character.species} {character.gender}</p>
          <p className="character--location">{character.location.name}</p>
          <img />
        </div>
      </div>
    </article>
  );
};

export default Item;
