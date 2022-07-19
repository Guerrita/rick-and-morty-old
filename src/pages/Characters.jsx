import React, {useState} from "react";
import ItemList from "@containers/ItemList";
import banner from "@assets/banner.png";
import useGetItems from "../Hooks/useGetItem";
import Character from "@components/Character";



const Characters = () => {
  const [page, setpage] = useState(1);
  const API = `https://rickandmortyapi.com/api/character/?page=${page}`;
  const allItems = useGetItems(API);
  const { results } = allItems;
  return (
    <section>
      <figure>
        <img src={banner} />
      </figure>
      <ItemList >
      {results?.map(character => (
          <Character character = {character} key= {character.id}/>
        ))}
      </ItemList>
    </section>
  );
};

export default Characters;
