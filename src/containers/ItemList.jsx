import React from "react";
import "@styles/ItemList.css";
import Character from "@components/Character";
import useGetItems from "../Hooks/useGetItem";


const ItemList = ({ API, reference }) => {
  const allItems = useGetItems(API);
  const { results } = allItems;
  console.log(results)
  return (
    <section className="main-container">
      <div className="ProductList">
        {reference === 'character' && results?.map(character => (
          ( <Character reference={reference} character = {character} key= {character.id}/>) 
        ))}
        {reference === 'location' && console.log(results)}
      </div>
    </section>
  );
};

export default ItemList;