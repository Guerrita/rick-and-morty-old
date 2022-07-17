import React from "react";
import "@styles/ItemList.css";
import Item from "@components/Item";
import useGetItems from "../Hooks/useGetItem";

const ItemList = ({ API }) => {
  const allItems = useGetItems(API);
  const { results } = allItems;
  return (
    <section className="main-container">
      <div className="ProductList">
        {results?.map(character => (
          <Item character = {character} key= {character.id}/>
        ))}
      </div>
    </section>
  );
};

export default ItemList;