import React from "react";
import ItemList from "@containers/ItemList";
import banner from "@assets/banner.png";

const API = "https://rickandmortyapi.com/api/character/";

const Characters = () => {
  return (
    <section>
      <figure>
        <img src={banner} />
      </figure>
      <ItemList API={API} reference={"character"} />
    </section>
  );
};

export default Characters;
